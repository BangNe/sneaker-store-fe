import classNames from 'classnames/bind'
import {Link} from 'react-router-dom'

import style from './Footer.module.scss'

const cx = classNames.bind(style)

function Footer() {
    return (
        <footer className={cx('wrapper')}>
            <div className={cx('above')}>
                <div className={cx('inner')}>
                    <div className={cx('item-above')}>
                        <div className={cx('img-above')}>
                            <img src='https://theme.hstatic.net/200000265619/1000946504/14/srv_1.png' alt='' />
                        </div>
                        <div className={cx('content-above')}>
                            <p>SHIP COD TOÀN QUỐC</p>
                            <span>Miễn phí vận chuyển toàn quốc cho đơn hàng từ 999.000 đ.</span>
                        </div>
                    </div>
                    <div className={cx('item-above')}>
                        <div className={cx('img-above')}>
                            <img src='https://theme.hstatic.net/200000265619/1000946504/14/srv_2.png' alt='' />
                        </div>
                        <div className={cx('content-above')}>
                            <p>CHẤT LƯỢNG TUYỆT ĐỐI 100%</p>
                            <span>Cam kết sản phẩm chính hãng đến từ Converse, Vans, Palladium và Supra.</span>
                        </div>
                    </div>
                    <div className={cx('item-above')}>
                        <div className={cx('img-above')}>
                            <img src='https://theme.hstatic.net/200000265619/1000946504/14/srv_3.png' alt='' />
                        </div>
                        <div className={cx('content-above')}>
                            <p>THANH TOÁN DỄ DÀNG</p>
                            <span>Phương thức thanh toán đa dạng và cực kì tiện lợi.</span>
                        </div>
                    </div>
                    <div className={cx('item-above')}>
                        <div className={cx('img-above')}>
                            <img src='https://theme.hstatic.net/200000265619/1000946504/14/srv_4.png' alt='' />
                        </div>
                        <div className={cx('content-above')}>
                            <p>TIẾT KIỆM THỜI GIAN</p>
                            <span>Mua sắm dễ hơn khi Online.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('below')}>
                <div className={cx('inner')}>
                    <div className={cx('item-below')}>
                        <h5>SNEAKER BUZZ</h5>
                        <p>
                            <i className='bx bx-navigation'></i>
                            <span>
                                Số 32, Đường số 6 nhà ở khu Z756, Phường 12, Quận 10, Thành phố Hồ Chí Minh
                            </span>
                        </p>
                        <p>
                            <i className='bx bxs-phone' ></i>
                            <span>
                                1900 1093
                            </span>
                        </p>
                        <p>
                            <i className='bx bxs-envelope'></i>
                            <span>
                                ecom@sneakerbuzz.vn
                            </span>
                        </p>
                        <p>
                            {`Công ty TNHH TM&DV Phú Vỹ. Giấy chứng nhận Đăng ký Kinh doanh số 0313679661 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 07/03/2016`}
                        </p>
                    </div>
                    <div className={cx('item-below')}>
                        <h5>DANH MỤC</h5>
                        <Link to='/'>HOME PAGE</Link>
                        <Link to='/'>BRAND</Link>
                        <Link to='/'>NEW ARRIVAL</Link>
                        <Link to='/'>IN STORE ONLY</Link>
                        <Link to='/'>SPECIAL PRICE</Link>
                        <Link to='/'>STORE LIST</Link>
                    </div>
                    <div className={cx('item-below')}>
                        <h5>CHÍNH SÁCH</h5>
                        <Link to='/'>{`Điều khoản & điều kiện`}</Link>
                        <Link to='/'>Chính sách bảo mật</Link>
                        <Link to='/'>Chính sách giao hàng</Link>
                        <Link to='/'>Chính sách bảo hành</Link>
                        <Link to='/'>Chính sách đổi trả</Link>
                        <Link to='/'>Phương thức thanh toán</Link>
                        <Link to='/'>Hướng dẫn đặt hàng</Link>
                        <Link to='/'>Câu hỏi thường gặp</Link>
                        <Link to='/'>Liên Hệ Hợp Tác</Link>
                    </div>
                    <div className={cx('item-below')}>
                        <h5>TIN TỨC</h5>
                        <Link to='/'>THỜI TRANG</Link>
                        <Link to='/'>KHUYẾN MÃI</Link>
                        <Link to='/'>LOOKBOOK</Link>
                    </div>
                </div>
                <div className={cx('certification')}>
                    <img src='https://theme.hstatic.net/200000265619/1000946504/14/thongbao.png' alt='' />
                </div>
                <p className={cx('license')}>© Bản quyền thuộc về <span>Sneaker Buzz</span> | <span>Powered by Haravan</span></p>
            </div>
        </footer>
    )
}

export default Footer