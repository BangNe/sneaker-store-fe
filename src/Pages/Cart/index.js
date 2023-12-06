import classNames from 'classnames/bind'

import style from './Cart.module.scss'
import Button from '../../components/Button'
import config from '../../cofig'

const cx = classNames.bind(style)

function Cart() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('title')}>
                    <div className={cx('title--checkbox')}>
                        <input
                            type='checkbox'
                        />
                    </div>
                    <div className={cx('title--name')}>
                        Sản phẩm
                    </div>
                    <div className={cx('title--price')}>
                        Đơn giá
                    </div>
                    <div className={cx('title--num')}>
                        Số lượng
                    </div>
                    <div className={cx('title--total')}>
                        Số tiền
                    </div>
                    <div className={cx('title--delete')}>
                       Thao tác
                    </div>
                </div>

                <div className={cx('list')}>
                    <div className={cx('item')}>
                        <div className={cx('item--checkbox')}>
                            <input
                                type='checkbox'
                            />
                        </div>
                        <div className={cx('item--name')}>
                            <div className={cx('product--img')}>
                                    <img src='https://product.hstatic.net/200000265619/product/1sbs062_web.jpg.png_4621f408aea04266a45e142fa9ee8ca6_small.jpg' alt=''/>                               
                            </div>
                            <div className={cx('product--info')}>
                                <h5>Dép Sneaker Buzz Y-Strap Haha á sd  s âsáđâssádááđá</h5>
                                <span>36.5 / Pattern/Green / PU</span>
                            </div>
                        </div>
                        <div className={cx('item--price')}>
                            100.000.000d
                        </div>
                        <div className={cx('item--num')}>
                            <span><i className='bx bx-minus' ></i></span>
                            <input 
                                type={'number'}  
                            />
                            <span><i className='bx bx-plus' ></i></span>
                        </div>
                        <div className={cx('item--total')}>
                            100.000.000d
                        </div>
                        <div className={cx('item--delete')}>
                            Xoá
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('item--checkbox')}>
                            <input
                                type='checkbox'
                            />
                        </div>
                        <div className={cx('item--name')}>
                            <div className={cx('product--img')}>
                                    <img src='https://product.hstatic.net/200000265619/product/1sbs062_web.jpg.png_4621f408aea04266a45e142fa9ee8ca6_small.jpg' alt=''/>                               
                            </div>
                            <div className={cx('product--info')}>
                                <h5>Dép Sneaker Buzz Y-Strap Haha á sd  s âsáđâssádááđá</h5>
                                <span>36.5 / Pattern/Green / PU</span>
                            </div>
                        </div>
                        <div className={cx('item--price')}>
                            100.000.000d
                        </div>
                        <div className={cx('item--num')}>
                            <span><i className='bx bx-minus' ></i></span>
                            <input 
                                type={'number'}  
                            />
                            <span><i className='bx bx-plus' ></i></span>
                        </div>
                        <div className={cx('item--total')}>
                            100.000.000d
                        </div>
                        <div className={cx('item--delete')}>
                            Xoá
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('item--checkbox')}>
                            <input
                                type='checkbox'
                            />
                        </div>
                        <div className={cx('item--name')}>
                            <div className={cx('product--img')}>
                                    <img src='https://product.hstatic.net/200000265619/product/1sbs062_web.jpg.png_4621f408aea04266a45e142fa9ee8ca6_small.jpg' alt=''/>                               
                            </div>
                            <div className={cx('product--info')}>
                                <h5>Dép Sneaker Buzz Y-Strap Haha á sd  s âsáđâssádááđá</h5>
                                <span>36.5 / Pattern/Green / PU</span>
                            </div>
                        </div>
                        <div className={cx('item--price')}>
                            100.000.000d
                        </div>
                        <div className={cx('item--num')}>
                            <span><i className='bx bx-minus' ></i></span>
                            <input 
                                type={'number'}  
                            />
                            <span><i className='bx bx-plus' ></i></span>
                        </div>
                        <div className={cx('item--total')}>
                            100.000.000d
                        </div>
                        <div className={cx('item--delete')}>
                            Xoá
                        </div>
                    </div>
                </div>

                <div className={cx('total')}>
                    <div className={cx('total--title')}>
                        Tổng thanh toán &#40;0 Sản phẩm&#41;: <span>100.000.000d</span>
                    </div>
                    <div className={cx('total--button')}>
                        <Button
                            primary
                            medium 
                            to={config.routes.pay}
                        >
                            Mua Hàng
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart