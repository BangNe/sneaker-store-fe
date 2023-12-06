import classNames from 'classnames/bind'

import style from './AddressUser.module.scss'
import Input from '../../components/Input'
import Button from '../../components/Button'

const cx = classNames.bind(style)

function AddressUser() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Địa chỉ giao hàng</h3>
            <div className={cx('add')}>
                <i className='bx bxs-message-alt-add' ></i>
            </div>
            <div className={cx('list')}>
                <div className={cx('item', 'active')}>
                    <h3 className={cx('item--name')}>
                        Hồ Sĩ Bang  
                    </h3>
                    <h5 className={cx('item--num')}>
                        0123456789
                    </h5>
                    <span className={cx('item--address')}>
                        01 abc, áđâsđâsd, ád,ád,á ,đâsd,á, a,sđáasdasdsdas
                    </span>
                    <div className={cx('item--button')}>
                        <Button
                            other
                            medium
                        >
                            Mặc định
                        </Button>
                    </div>
                    <div className={cx('icon')}>
                        <i className='bx bxs-pencil' ></i>
                        <i className='bx bxs-message-square-x' ></i>
                    </div>
                </div>

                <div className={cx('item')}>
                    <h3 className={cx('item--name')}>
                        Hồ Sĩ Bang  
                    </h3>
                    <h5 className={cx('item--num')}>
                        0123456789
                    </h5>
                    <span className={cx('item--address')}>
                        01 abc, áđâsđâsd, ád,ád,á ,đâsd,á, a,sđáasdasdsdas
                    </span>
                    <div className={cx('item--button')}>
                        <Button
                            other
                            medium
                        >
                            Mặc định
                        </Button>
                    </div>
                    <div className={cx('icon')}>
                        <i className='bx bxs-pencil' ></i>
                        <i className='bx bxs-message-square-x' ></i>
                    </div>
                </div>

                <div className={cx('item')}>
                    <h3 className={cx('item--name')}>
                        Hồ Sĩ Bang  
                    </h3>
                    <h5 className={cx('item--num')}>
                        0123456789
                    </h5>
                    <span className={cx('item--address')}>
                        01 abc, áđâsđâsd, ád,ád,á ,đâsd,á, a,sđáasdasdsdas
                    </span>
                    <div className={cx('item--button')}>
                        <Button
                            other
                            medium
                        >
                            Mặc định
                        </Button>
                    </div>
                    <div className={cx('icon')}>
                        <i className='bx bxs-pencil' ></i>
                        <i className='bx bxs-message-square-x' ></i>
                    </div>
                </div>

                <div className={cx('item')}>
                    <h3 className={cx('item--name')}>
                        Hồ Sĩ Bang  
                    </h3>
                    <h5 className={cx('item--num')}>
                        0123456789
                    </h5>
                    <span className={cx('item--address')}>
                        01 abc, áđâsđâsd, ád,ád,á ,đâsd,á, a,sđáasdasdsdas
                    </span>
                    <div className={cx('item--button')}>
                        <Button
                            other
                            medium
                        >
                            Mặc định
                        </Button>
                    </div>
                    <div className={cx('icon')}>
                        <i className='bx bxs-pencil' ></i>
                        <i className='bx bxs-message-square-x' ></i>
                    </div>
                </div>
            </div>
            <div className={cx('form')}>
                <div className={cx('form--inner')}>
                    <div className={cx('form--input')}>
                        <Input
                            name={'Họ và tên'}
                        />
                    </div>
                    <div className={cx('form--input')}>
                        <Input
                            name={'Số điện thoại'}
                        />
                    </div>
                    <div className={cx('form--input')}>
                        <Input
                            name={'Địa chỉ'}
                        />
                    </div>

                    <div className={cx('form--button')}>
                        <Button
                            large
                            primary
                        >
                            Lưu
                        </Button>
                    </div>

                    <div className={cx('icon--close')}>
                        <i className='bx bxs-message-x'></i>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddressUser