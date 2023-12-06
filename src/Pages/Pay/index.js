import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import config from '../../cofig'
import Button from '../../components/Button'
import Input from '../../components/Input'
import style from './Pay.module.scss'

const cx = classNames.bind(style)

function Pay() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <div className={cx('left--inner')}>
                    <Link className={cx('left--title')} to ={config.routes.home}>
                        Sneaker Buzz
                    </Link>
                    <h5>Thông tin giao hàng</h5>
                    <div className={cx('left-login')}>
                        Bạn đã có tài khoản? <Link  to={config.routes.login}>Đăng nhập</Link>
                    </div>
                    <div className={cx('left--info')}>
                        <div className={cx('left--name')}>
                            <Input
                                name={'Họ và tên'}
                                notification={''}
                            />
                        </div>
                        <div className={cx('left--email')}>
                            <Input
                                name={'email'}
                                notification={''}
                                type= {'email'}
                            />
                        </div>
                        <div className={cx('left--num')}>
                            <Input
                                name={'Số điện thoại'}
                                notification={''}
                                type= {'number'}
                            />
                        </div>
                        <div className={cx('left--address')}>
                            <Input
                                name={'Địa chỉ'}
                                notification={''}
                            />
                        </div>
                    </div>
                    <div className={cx('button')}>
                        <div className={cx('button--cart')}>
                            <Link to={config.routes.cart}>Giỏ hàng</Link>
                        </div>
                        <div className={cx('button--pay')}>
                            <Button
                                primary
                                oversize
                            >
                                Thanh toán
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('right')}>
                <div className={cx('right--inner')}>
                    <div className={cx('right--list-product')}>
                        <div className={cx('right--product')}>
                            <div className={cx('right--product--info')}>
                                <div className={cx('right--img')}>
                                    <img src='https://product.hstatic.net/200000265619/product/1sbs062_web.jpg.png_4621f408aea04266a45e142fa9ee8ca6_small.jpg' alt=''/>                               
                                    <span>1</span>
                                </div>
                                <div className={cx('right--info')}>
                                    <h5>Dép Sneaker Buzz Y-Strap Haha á sd  s âsáđâssádááđá</h5>
                                    <span>36.5 / Pattern/Green / PU</span>
                                </div>
                                </div>
                            <div className={cx('right--price')}>
                                <span>1.8000.880đ</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('right--discount')}>
                        <div className={cx('right--discount--input')}>
                            <Input
                                name={'Mã giảm giá'}
                                notification={""}
                                grey
                            />
                        </div>
                        <div className={cx('right--discount--button')}>
                            <Button
                                primary
                                oversize
                            >
                                Sử dụng
                            </Button>
                        </div>
                    </div>
                    <div className={cx('right--provisional')}>
                        <div>
                            <h5>Tạm tính : </h5>
                            <span>1.800.800.đ</span>
                        </div>
                        <div>
                            <h5>Mã giảm giá : </h5>
                            <span>1.800.800.đ</span>
                        </div>
                    </div>  
                    <div className={cx('right--total')}>
                        <h5>Tổng cộng : </h5>
                        <span>1.800.800đ</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pay