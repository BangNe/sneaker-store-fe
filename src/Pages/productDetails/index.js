import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import {useSelector, useDispatch } from 'react-redux'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


import {productDetailSelector, nameProductDetailSelector} from '../../store/selectors'
import {getProductDetail} from '../../store/slice/productSlice'
import cofig from '../../cofig'
import style from './productDetails.module.scss'
import Button from '../../components/Button'

const cx = classNames.bind(style)

function ProductDetails() {

    const product = useSelector(productDetailSelector)
    const nameProduct = useSelector(nameProductDetailSelector)

    const dispatch = useDispatch()

    const [idImgActive, setIdImgActive] = useState(0)
    const [sizeActive, setSizeActive] = useState(0)
    const [canBuy, setCanBuy] = useState(true)
    const [quantityBuy, setQuantityBuy] = useState(1)
    
    const imgRef = useRef()
    const lensRef = useRef()
    const imgZoomRef = useRef()

    const handleImgZoom = (e) => {
        const cx = imgZoomRef.current.offsetWidth / lensRef.current.offsetWidth
        const cy = imgZoomRef.current.offsetHeight / lensRef.current.offsetHeight

        imgZoomRef.current.style.backgroundSize = (imgRef.current.width * cx) + "px " + (imgRef.current.height * cy) + "px"

        moveLens(e,cx,cy)
    }

    const moveLens = (e,cx,cy) => {
        const pos = getCursorPos(e)

        let x = pos.cxLens - (lensRef.current.offsetWidth/2)
        let y = pos.cyLens - (lensRef.current.offsetHeight/2)

        if(x< 0) {x=0}
        if(x > imgRef.current.width - lensRef.current.offsetWidth) {x = imgRef.current.width - lensRef.current.offsetWidth}
        if(y< 0) {y=0}
        if(y > imgRef.current.height - lensRef.current.offsetHeight) {y = imgRef.current.height - lensRef.current.offsetHeight}

        lensRef.current.style.left = x + 'px'
        lensRef.current.style.top = y + 'px'

        imgZoomRef.current.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px"
    }

    const getCursorPos = (e) => {
        const currentImg = imgRef.current.getBoundingClientRect()
        const cxLens = e.pageX - currentImg.left - window.pageXOffset
        const cyLens = e.pageY - currentImg.top - window.pageYOffset
        
        return{cxLens, cyLens}
    }

    const handleInputQtt = (e) => {
        const inputValue = e.target.value

        const regex = /^[1-9][0-9]*$/
        if (inputValue === '' || regex.test(inputValue)) {
            setQuantityBuy(inputValue)
            inputValue <= product.size[sizeActive].quantity ? setCanBuy(true):setCanBuy(false)
        }else{
            setQuantityBuy(1)
            inputValue <= product.size[sizeActive].quantity ? setCanBuy(true):setCanBuy(false)
        }
    }

    const handleIncreaseQtt = (e) => {
        setQuantityBuy(prev => +prev+1)
    }

    const handleReduceQtt = (e) => {
        if(quantityBuy > 1) {setQuantityBuy(prev => +prev-1)}
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data when the component mounts or when nameProduct changes
                await dispatch(getProductDetail(nameProduct));
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchData();
    }, [dispatch, nameProduct])

    useEffect(() => {
        quantityBuy <= product.size[sizeActive].quantity ? setCanBuy(true):setCanBuy(false)
    },[setCanBuy,quantityBuy,sizeActive])


    if (!product) {
        // Nếu product chưa được load, có thể hiển thị một trạng thái loading
        return <div>Loading...</div>;
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('map')}>
                <Link className={cx('map--link')} to = {cofig.routes.home}>Trang chủ</Link>
                <i className='bx bx-chevron-right'></i>
                <Link className={cx('map--link')} to = {cofig.routes.home}>VANS x ONE PIECE</Link>
                <i className='bx bx-chevron-right'></i>
                <span className={cx('map--current')}> Giày Vans Mn Skate Old Skool Vans X One Piece H2T</span>
            </div>
            <div className={cx('inner')}>
                <div className={cx('product')}>
                    <div className={cx('product--img')}>
                        <img 
                            ref={imgRef} 
                            src={product.img[idImgActive]} 
                            onMouseMove = {(e) => handleImgZoom(e)}
                            onTouchMove = {(e) => handleImgZoom(e)}
                            alt=''
                        />
                        <div 
                            ref={lensRef} 
                            className={cx('product--img--zoom--lens')}
                            onMouseMove = {(e) => handleImgZoom(e)}
                            onTouchMove = {(e) => handleImgZoom(e)}
                        ></div>
                        <div ref={imgZoomRef} className={cx('product--img--zoom')} style = {{ backgroundImage: `url(${product.img[idImgActive]})` }}></div>
                    </div>
                    <div className={cx('product--info')}>
                        <div className={cx('product--list--img')}>
 
                            <Slider
                                speed={500}
                                slidesToShow = {4}
                                slidesToScroll = {1}
                                arrows = {true}
                                infinite = {false}
                            >
                                {product.img.map((item, id) => {
                                    if(id !== idImgActive){
                                        return (
                                            <div 
                                                key={id}
                                                className = {cx('img-select')}
                                                onClick={() => setIdImgActive(id)}
                                            >
                                                <img src={item} alt=''/>
                                            </div>
                                        ) 
                                    }else {
                                        return (
                                            <div 
                                                key={id}
                                                className = {cx('img-select', 'active')}
                                                onClick={() => setIdImgActive(id)}
                                            >
                                                <img src={item} alt=''/>
                                            </div>
                                        ) 
                                    }
                                })}
                            </Slider>
                        </div>
                        <div className={cx('product-line')}>
                             <i className='bx bx-label'></i>
                             <div></div>
                        </div>
                        <div className= {cx('product--info--under')}>
                            <h3 className={cx('product--info--name')}>{product.name}</h3>
                            <div className= {cx('product--info--brand-quantity')}>
                                <h5>Thương hiệu: <span>{product.brand}</span></h5>
                                <div></div>
                                <h5>Kho: 
                                    <span>{canBuy? 'còn hàng' : 'không đủ hàng'}</span>
                                </h5>
                            </div>
                            <span className={cx('product--info--price')}>
                                {product.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                            </span>
                            <div className={cx('product--info--size')}>
                                <h5>Size:</h5>
                                {product.size.map((item , id ) => {
                                    if(id !== sizeActive) {
                                        return (
                                            <Button 
                                                key={id}
                                                white 
                                                small 
                                                autoMargin
                                                onClick={() => setSizeActive(id)}
                                            >
                                                {item.num}
                                            </Button>
                                        )
                                    }else {
                                        return (
                                            <Button 
                                                key={id}
                                                white 
                                                small 
                                                autoMargin
                                                active
                                                onClick={() => setSizeActive(id)}
                                            >
                                                {item.num}
                                            </Button>
                                        )
                                    }
                                })}
                            </div>
                            <div className={cx('product--info--quantity')}>
                                <h5>Số lượng:</h5>
                                <div className={cx('product--info--quantity-input')}>
                                    <span onClick={handleReduceQtt} ><i className='bx bx-minus' ></i></span>
                                    <input 
                                        type={'number'}  
                                        value = {quantityBuy}
                                        onChange = {(e)=> handleInputQtt(e)}
                                    />
                                    <span onClick={handleIncreaseQtt} ><i className='bx bx-plus' ></i></span>
                                </div>
                            </div>
                            <Button other oversize disabled={!canBuy}>{canBuy? 'MUA NGAY' : 'HẾT HÀNG'}</Button>
                        </div>
                    </div>
                    <div className={cx('product-table')}>
                        <table>
                            <tbody>
                                <tr>
                                    <td colSpan={2}>THÔNG TIN SẢN PHẨM</td>
                                </tr>
                                <tr>
                                    <td>SKU</td>
                                    <td>{product.info.sku}</td>
                                </tr>
                                <tr>
                                    <td>Dòng sản phẩm</td>
                                    <td>{product.info.type}</td>
                                </tr>
                                <tr>
                                    <td>Giới tính</td>
                                    <td>{product.info.gender}</td>
                                </tr>
                                <tr>
                                    <td>Màu sắc</td>
                                    <td>{product.info.color}</td>
                                </tr>
                                <tr>
                                    <td>Chế độ bảo hành</td>
                                    <td>{product.info.warranty}</td>
                                </tr>
                                <tr>
                                    <td>Phụ kiện kèm theo</td>
                                    <td>{product.info.accessory}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={cx('description')}></div>
            </div>
            <div className={cx('policy')}>
                <h4>QUY ĐỊNH ĐỔI TRẢ HÀNG TẠI SNEAKERBUZZ</h4>
                <p className={cx('policy--note')}>
                    <span>Lưu ý:</span> Trong thời gian diễn ra chương trình khuyến mãi, thời gian giao hàng có thể kéo dài hơn so với dự kiến. R 
                    ất mong Quý khách thông cảm cho sự bất tiện này.
                </p>
                <h5>Sản phẩm không áp dụng: </h5>
                <ul>
                    <li>Sản phẩm không được xác nhận mua từ Sneaker Buzz</li>
                    <li>Sản phẩm phụ trang, phụ kiện &#40;túi , ba lô , mắt kính, nón, vớ, dây đeo , móc khóa, ví , chăm sóc/vệ sinh giày…&#41;.</li>
                    <li>Sản phẩm đã được sử dụng hoặc dính bẩn.</li>
                    <li>Sản phẩm không còn bao bì nguyên nhãn thương hiệu,không có đầy đủ các sản phẩm đính kèm như: hóa đơn bán lẻ, quà tặng&#40;nếu có&#41;, shopping bag.</li>
                    <li>Sản phẩm gửi về bị hư hỏng, hư hộp.</li>
                    <li>Sản phẩm khuyến mãi, giảm giá, quà tặng khuyến mãi.</li>
                    <li>Các sản phẩm mua trực tiếp tại hệ thống cửa hàng của Sneaker Buzz.</li>
                </ul>
                <p className={cx('policy--note')}>
                    <span>Thời gian đổi trả hàng:</span> Trong thời gian diễn ra chương trình khuyến mãi, thời gian giao hàng có thể kéo dài hơn so với dự kiến. R 
                    ất mong Quý khách thông cảm cho sự bất tiện này.
                </p>
            </div>
        </div>
    )
}

export default ProductDetails