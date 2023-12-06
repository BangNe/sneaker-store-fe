import classNames from 'classnames/bind'

import style from './Admin.module.scss'
import {Link} from 'react-router-dom'
import config from '../../cofig'

const cx = classNames.bind(style)

function Admin({children}) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('left')}>
                    <h3 className={cx('left--title')}>Admin</h3>
                    <div className={cx('left--nav')}>
                        <div className={cx('left--info')}>
                            <div className={cx('item')}>
                                <div className={cx('item--title')}>
                                    <i className='bx bxs-objects-horizontal-right' ></i>
                                    <span>Quản lí sản phẩm</span>
                                </div>
                                <div className={cx('item--list')}>
                                    <Link className={cx('item--item')}>
                                        <i className='bx bxs-objects-vertical-center'></i>
                                        <span>Sản phẩm</span>
                                    </Link>
                                    <Link className={cx('item--item')}>
                                        <i className='bx bxs-objects-vertical-center'></i>
                                        <span>Nhãn hàng</span>
                                    </Link>
                                </div>

                            </div>
                            <div className={cx('item')}>
                                <div className={cx('item--title')}>
                                    <i className='bx bxs-objects-horizontal-right' ></i>
                                    <span>Quản lí tài khoản</span>
                                </div>
                                <div className={cx('item--list')}>
                                    <Link className={cx('item--item')}>
                                        <i className='bx bxs-objects-vertical-center'></i>
                                        <span>Tài khoản</span>
                                    </Link>
                                    <Link className={cx('item--item')}>
                                        <i className='bx bxs-objects-vertical-center'></i>
                                        <span>Roles</span>
                                    </Link>
                                    <Link className={cx('item--item')}>
                                        <i className='bx bxs-objects-vertical-center'></i>
                                        <span>Group Roles</span>
                                    </Link>
                                </div>

                            </div>
                            <div className={cx('item')}>
                                <div className={cx('item--title')}>
                                    <i className='bx bxs-objects-horizontal-right' ></i>
                                    <span>Quản lí hoá đơn</span>
                                </div>
                                <div className={cx('item--list')}>
                                    <Link className={cx('item--item')}>
                                        <i className='bx bxs-objects-vertical-center'></i>
                                        <span>Hoá đơn</span>
                                    </Link>
                                    <Link className={cx('item--item')}>
                                        <i className='bx bxs-objects-vertical-center'></i>
                                        <span>Thống kê</span>
                                    </Link>
                                </div>

                            </div>
                        </div>
                        <Link className={cx('left--logout')} to ={config.routes.home}>
                            <i class='bx bx-log-out' ></i>
                            <span>Đăng xuất</span>
                        </Link>
                    </div>
                </div>
                <div className={cx('right')}>
                    <div>{children}</div>
                </div>
            </div>
        </div>
    )
}

export default Admin