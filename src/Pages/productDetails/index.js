import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


import cofig from '../../cofig'
import style from './productDetails.module.scss'
import Button from '../../components/Button'

const cx = classNames.bind(style)

const product = {
    "_id": "63b6e262e1af87bc42c34edb",
    "img": [
      "https://product.hstatic.net/200000265619/product/m3310c-1_5d285682075f4ca4960f58c44059a76f_medium.jpg",
      "https://product.hstatic.net/200000265619/product/m3310c-2_6d745e8762e5416eba192f21fe9b2171_medium.jpg",
      "https://product.hstatic.net/200000265619/product/m3310c-3_655d5d799e2041c68030b8093455a664_medium.jpg",
      "https://product.hstatic.net/200000265619/product/m3310c-4_5a815106aeb04dbb99c73582e5153c42_medium.jpg",
      "https://product.hstatic.net/200000265619/product/m3310v-0_32587e68d19d4d8aa10ce1d2e46b8163_medium.jpg"
    ],
    "name": "Giày Converse Chuck Taylor All Star Classic Hi Top",
    "price": 1550000,
    "info": {
      "sku": "M3310V",
      "gender": "unisex",
      "color": "Black",
      "warranty": "1 tháng",
      "accessory": "Vớ Tặng + Shopping Bag + HĐ Mua Hàng",
      "type": "Chuck Taylor All Star Classic "
    },
    "brand": "converse",
    "style": "clasic",
    "type": "giày",
    "season": "không",
    "size": [
      {
        "num": "35",
        "quantity": "4"
      },
      {
        "num": "36",
        "quantity": "5"
      }
    ]
  }

function ProductDetails() {
    const [idImgActive, setIdImgActive] = useState(0)

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
                        <img src={product.img[idImgActive]} alt=''/>
                        <div className={cx('product--img--zoom')} style = {{ backgroundImage: product.img[idImgActive] }}></div>
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
                                    return (
                                        <div 
                                            key={id}
                                            className = {cx('img-select')}
                                            onClick={() => setIdImgActive(id)}
                                        >
                                            <img src={item} alt=''/>
                                        </div>
                                    )
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
                                <h5>Kho: <span>còn hàng</span></h5>
                            </div>
                            <span className={cx('product--info--price')}>
                                {product.price.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                            </span>
                            <div className={cx('product--info--size')}>
                                <h5>Size:</h5>
                                {product.size.map((item , id ) => {
                                    return (
                                        <Button 
                                            key={id}
                                            white 
                                            small 
                                            autoMargin
                                        >
                                            {item.num}
                                        </Button>
                                    )
                                })}
                            </div>
                            <div className={cx('product--info--quantity')}>
                                <h5>Số lượng:</h5>
                                <div className={cx('product--info--quantity-input')}>
                                    <span><i className='bx bx-minus' ></i></span>
                                    <input type={'text'} value= {1} />
                                    <span><i className='bx bx-plus' ></i></span>
                                </div>
                            </div>
                            <Button other oversize >MUA NGAY</Button>
                        </div>
                    </div>
                    <div className={cx('product-table')}>
                        <table>
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
                        </table>
                    </div>
                </div>
                <div className={cx('description')}></div>
            </div>
        </div>
    )
}

export default ProductDetails