import classNames from 'classnames/bind'

import style from './OrderUser.module.scss'

const cx = classNames.bind(style)

function OrderUser() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Đơn hàng</h3>
            <div className={cx('list')}>
                <div className={cx('item')}>
                    <div className={cx('item--info')}>
                        <div className={cx('item--info--name')}>
                            Hồ Sĩ Bang  Bang  Bangasdasd
                        </div>
                        <div className={cx('item--info--num')}>
                            0123456789
                        </div>
                        <div className={cx('item--info--address')}>
                            Hồ Sĩ Bang  Bang  Bangasdasd Hồ Sĩ Bang  Bang  Bangasdasd Hồ Sĩ Bang  Bang  Bangasdasd
                        </div>
                        <div className={cx('item--info--status')}>
                            đang giao
                        </div>
                        <div className={cx('item--info--price')}>
                            999.999.999d
                        </div>
                    </div>
                    <div className={cx('item--products', 'active')}>
                        <div className={cx('item--product')}>
                            <div className={cx('product--product--info')}>
                                <div className={cx('product--img')}>
                                    <img src='https://product.hstatic.net/200000265619/product/1sbs062_web.jpg.png_4621f408aea04266a45e142fa9ee8ca6_small.jpg' alt=''/>                               
                                    <span>1</span>
                                </div>
                                <div className={cx('product--info')}>
                                    <h5>Dép Sneaker Buzz Y-Strap Haha á sd  s âsáđâssádááđá</h5>
                                    <span>36.5 / Pattern/Green / PU</span>
                                </div>
                            </div>
                            <div className={cx('product--price')}>
                                <span>1.8000.880đ</span>
                            </div>
                        </div>
                        <div className={cx('item--product')}>
                            <div className={cx('product--product--info')}>
                                <div className={cx('product--img')}>
                                    <img src='https://product.hstatic.net/200000265619/product/1sbs062_web.jpg.png_4621f408aea04266a45e142fa9ee8ca6_small.jpg' alt=''/>                               
                                    <span>1</span>
                                </div>
                                <div className={cx('product--info')}>
                                    <h5>Dép Sneaker Buzz Y-Strap Haha á sd  s âsáđâssádááđá</h5>
                                    <span>36.5 / Pattern/Green / PU</span>
                                </div>
                            </div>
                            <div className={cx('product--price')}>
                                <span>1.8000.880đ</span>
                            </div>
                        </div>
                        <div className={cx('item--product')}>
                            <div className={cx('product--product--info')}>
                                <div className={cx('product--img')}>
                                    <img src='https://product.hstatic.net/200000265619/product/1sbs062_web.jpg.png_4621f408aea04266a45e142fa9ee8ca6_small.jpg' alt=''/>                               
                                    <span>1</span>
                                </div>
                                <div className={cx('product--info')}>
                                    <h5>Dép Sneaker Buzz Y-Strap Haha á sd  s âsáđâssádááđá</h5>
                                    <span>36.5 / Pattern/Green / PU</span>
                                </div>
                            </div>
                            <div className={cx('product--price')}>
                                <span>1.8000.880đ</span>
                            </div>
                        </div>
                        <div className={cx('item--product')}>
                            <div className={cx('product--product--info')}>
                                <div className={cx('product--img')}>
                                    <img src='https://product.hstatic.net/200000265619/product/1sbs062_web.jpg.png_4621f408aea04266a45e142fa9ee8ca6_small.jpg' alt=''/>                               
                                    <span>1</span>
                                </div>
                                <div className={cx('product--info')}>
                                    <h5>Dép Sneaker Buzz Y-Strap Haha á sd  s âsáđâssádááđá</h5>
                                    <span>36.5 / Pattern/Green / PU</span>
                                </div>
                            </div>
                            <div className={cx('product--price')}>
                                <span>1.8000.880đ</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item--button')}>
                        <span>Sản phẩm</span>
                    </div>
                </div>

                <div className={cx('item')}>
                    <div className={cx('item--info')}>
                        <div className={cx('item--info--name')}>
                            Hồ Sĩ Bang  Bang  Bangasdasd
                        </div>
                        <div className={cx('item--info--num')}>
                            0123456789
                        </div>
                        <div className={cx('item--info--address')}>
                            Hồ Sĩ Bang  Bang  Bangasdasd Hồ Sĩ Bang  Bang  Bangasdasd Hồ Sĩ Bang  Bang  Bangasdasd
                        </div>
                        <div className={cx('item--info--status')}>
                            đang giao
                        </div>
                        <div className={cx('item--info--price')}>
                            999.999.999d
                        </div>
                    </div>
                    <div className={cx('item--products')}>
                        <div className={cx('item--product')}>
                            <div className={cx('product--product--info')}>
                                <div className={cx('product--img')}>
                                    <img src='https://product.hstatic.net/200000265619/product/1sbs062_web.jpg.png_4621f408aea04266a45e142fa9ee8ca6_small.jpg' alt=''/>                               
                                    <span>1</span>
                                </div>
                                <div className={cx('product--info')}>
                                    <h5>Dép Sneaker Buzz Y-Strap Haha á sd  s âsáđâssádááđá</h5>
                                    <span>36.5 / Pattern/Green / PU</span>
                                </div>
                            </div>
                            <div className={cx('product--price')}>
                                <span>1.8000.880đ</span>
                            </div>
                        </div>
                        <div className={cx('item--product')}>
                            <div className={cx('product--product--info')}>
                                <div className={cx('product--img')}>
                                    <img src='https://product.hstatic.net/200000265619/product/1sbs062_web.jpg.png_4621f408aea04266a45e142fa9ee8ca6_small.jpg' alt=''/>                               
                                    <span>1</span>
                                </div>
                                <div className={cx('product--info')}>
                                    <h5>Dép Sneaker Buzz Y-Strap Haha á sd  s âsáđâssádááđá</h5>
                                    <span>36.5 / Pattern/Green / PU</span>
                                </div>
                            </div>
                            <div className={cx('product--price')}>
                                <span>1.8000.880đ</span>
                            </div>
                        </div>
                        <div className={cx('item--product')}>
                            <div className={cx('product--product--info')}>
                                <div className={cx('product--img')}>
                                    <img src='https://product.hstatic.net/200000265619/product/1sbs062_web.jpg.png_4621f408aea04266a45e142fa9ee8ca6_small.jpg' alt=''/>                               
                                    <span>1</span>
                                </div>
                                <div className={cx('product--info')}>
                                    <h5>Dép Sneaker Buzz Y-Strap Haha á sd  s âsáđâssádááđá</h5>
                                    <span>36.5 / Pattern/Green / PU</span>
                                </div>
                            </div>
                            <div className={cx('product--price')}>
                                <span>1.8000.880đ</span>
                            </div>
                        </div>
                        <div className={cx('item--product')}>
                            <div className={cx('product--product--info')}>
                                <div className={cx('product--img')}>
                                    <img src='https://product.hstatic.net/200000265619/product/1sbs062_web.jpg.png_4621f408aea04266a45e142fa9ee8ca6_small.jpg' alt=''/>                               
                                    <span>1</span>
                                </div>
                                <div className={cx('product--info')}>
                                    <h5>Dép Sneaker Buzz Y-Strap Haha á sd  s âsáđâssádááđá</h5>
                                    <span>36.5 / Pattern/Green / PU</span>
                                </div>
                            </div>
                            <div className={cx('product--price')}>
                                <span>1.8000.880đ</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item--button')}>
                        <span>Sản phẩm</span>
                    </div>
                </div>

                <div className={cx('item')}>
                    <div className={cx('item--info')}>
                        <div className={cx('item--info--name')}>
                            Hồ Sĩ Bang  Bang  Bangasdasd
                        </div>
                        <div className={cx('item--info--num')}>
                            0123456789
                        </div>
                        <div className={cx('item--info--address')}>
                            Hồ Sĩ Bang  Bang  Bangasdasd Hồ Sĩ Bang  Bang  Bangasdasd Hồ Sĩ Bang  Bang  Bangasdasd
                        </div>
                        <div className={cx('item--info--status')}>
                            đang giao
                        </div>
                        <div className={cx('item--info--price')}>
                            999.999.999d
                        </div>
                    </div>
                    <div className={cx('item--products')}>
                        <div className={cx('item--product')}>
                            <div className={cx('product--product--info')}>
                                <div className={cx('product--img')}>
                                    <img src='https://product.hstatic.net/200000265619/product/1sbs062_web.jpg.png_4621f408aea04266a45e142fa9ee8ca6_small.jpg' alt=''/>                               
                                    <span>1</span>
                                </div>
                                <div className={cx('product--info')}>
                                    <h5>Dép Sneaker Buzz Y-Strap Haha á sd  s âsáđâssádááđá</h5>
                                    <span>36.5 / Pattern/Green / PU</span>
                                </div>
                            </div>
                            <div className={cx('product--price')}>
                                <span>1.8000.880đ</span>
                            </div>
                        </div>
                        <div className={cx('item--product')}>
                            <div className={cx('product--product--info')}>
                                <div className={cx('product--img')}>
                                    <img src='https://product.hstatic.net/200000265619/product/1sbs062_web.jpg.png_4621f408aea04266a45e142fa9ee8ca6_small.jpg' alt=''/>                               
                                    <span>1</span>
                                </div>
                                <div className={cx('product--info')}>
                                    <h5>Dép Sneaker Buzz Y-Strap Haha á sd  s âsáđâssádááđá</h5>
                                    <span>36.5 / Pattern/Green / PU</span>
                                </div>
                            </div>
                            <div className={cx('product--price')}>
                                <span>1.8000.880đ</span>
                            </div>
                        </div>
                        <div className={cx('item--product')}>
                            <div className={cx('product--product--info')}>
                                <div className={cx('product--img')}>
                                    <img src='https://product.hstatic.net/200000265619/product/1sbs062_web.jpg.png_4621f408aea04266a45e142fa9ee8ca6_small.jpg' alt=''/>                               
                                    <span>1</span>
                                </div>
                                <div className={cx('product--info')}>
                                    <h5>Dép Sneaker Buzz Y-Strap Haha á sd  s âsáđâssádááđá</h5>
                                    <span>36.5 / Pattern/Green / PU</span>
                                </div>
                            </div>
                            <div className={cx('product--price')}>
                                <span>1.8000.880đ</span>
                            </div>
                        </div>
                        <div className={cx('item--product')}>
                            <div className={cx('product--product--info')}>
                                <div className={cx('product--img')}>
                                    <img src='https://product.hstatic.net/200000265619/product/1sbs062_web.jpg.png_4621f408aea04266a45e142fa9ee8ca6_small.jpg' alt=''/>                               
                                    <span>1</span>
                                </div>
                                <div className={cx('product--info')}>
                                    <h5>Dép Sneaker Buzz Y-Strap Haha á sd  s âsáđâssádááđá</h5>
                                    <span>36.5 / Pattern/Green / PU</span>
                                </div>
                            </div>
                            <div className={cx('product--price')}>
                                <span>1.8000.880đ</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item--button')}>
                        <span>Sản phẩm</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderUser