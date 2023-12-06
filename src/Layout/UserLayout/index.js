import classNames from 'classnames/bind'

import style from './User.module.scss'
import {Link} from 'react-router-dom'
import config from '../../cofig'

const cx = classNames.bind(style)

function User({children}) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('left')}>
                    <Link className={cx('left--title')} to ={config.routes.home}>Sneaker Buzz</Link>
                    <div className={cx('left--nav')}>
                        <div className={cx('left--info')}>
                            <Link className={cx('item')} to={'/user/info'}>
                                <i className='bx bxs-user-circle' ></i>
                                <span>thông tin</span>
                            </Link>
                            <Link className={cx('item')} to={'/user/address'}>
                                <i className='bx bxs-planet' ></i>
                                <span>Địa chỉ</span>
                            </Link>
                            <Link className={cx('item')} to={'/user/order'}>
                                <i className='bx bxs-credit-card-front'></i>
                                <span>Đơn hàng</span>
                            </Link>
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

export default User