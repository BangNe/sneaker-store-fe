import classNames from 'classnames/bind'

import style from './Account.module.scss'
import Pagination from '../../components/Pagination'
import Button from '../../components/Button'
import Input from '../../components/Input'

const cx = classNames.bind(style)

function Account() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Tài khoản</h3>

            <div className={cx('button')}>
                <Button 
                    primary
                    medium
                >
                    Thêm
                </Button>
            </div>

            <div className={cx('board--title')}>
                <div className={cx('title--id')}>
                    <span>No</span>
                </div>
                <div className={cx('title--email')}>
                    <span>Email</span>
                </div>
                <div className={cx('title--name')}>
                    <span>User name</span>
                </div>
                <div className={cx('title--group')}>
                    <span>Group</span>
                </div>
                <div className={cx('title--actions')}>
                    <span>Actions</span>
                </div>
            </div>

            <div className={cx('board')}>
                <div className={cx('item')}>
                    <div className={cx('item--id')}>
                        <span>1</span>
                    </div>
                    <div className={cx('item--email')}>
                        <span>HoSibang@gmail.com</span>
                    </div>
                    <div className={cx('item--name')}>
                        <span>Hồ sĩ bang</span>
                    </div>
                    <div className={cx('item--group')}>
                        <span>Bang</span>
                    </div>
                    <div className={cx('item--actions')}>
                        <i className='bx bxs-pencil' ></i>
                        <i className='bx bxs-x-square' ></i>
                    </div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('item--id')}>
                        <span>1</span>
                    </div>
                    <div className={cx('item--email')}>
                        <span>HoSibang@gmail.com</span>
                    </div>
                    <div className={cx('item--name')}>
                        <span>Hồ sĩ bang</span>
                    </div>
                    <div className={cx('item--group')}>
                        <span>Bang</span>
                    </div>
                    <div className={cx('item--actions')}>
                        <i className='bx bxs-pencil' ></i>
                        <i className='bx bxs-x-square' ></i>
                    </div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('item--id')}>
                        <span>1</span>
                    </div>
                    <div className={cx('item--email')}>
                        <span>HoSibang@gmail.com</span>
                    </div>
                    <div className={cx('item--name')}>
                        <span>Hồ sĩ bang</span>
                    </div>
                    <div className={cx('item--group')}>
                        <span>Bang</span>
                    </div>
                    <div className={cx('item--actions')}>
                        <i className='bx bxs-pencil' ></i>
                        <i className='bx bxs-x-square' ></i>
                    </div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('item--id')}>
                        <span>1</span>
                    </div>
                    <div className={cx('item--email')}>
                        <span>HoSibang@gmail.com</span>
                    </div>
                    <div className={cx('item--name')}>
                        <span>Hồ sĩ bang</span>
                    </div>
                    <div className={cx('item--group')}>
                        <span>Bang</span>
                    </div>
                    <div className={cx('item--actions')}>
                        <i className='bx bxs-pencil' ></i>
                        <i className='bx bxs-x-square' ></i>
                    </div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('item--id')}>
                        <span>1</span>
                    </div>
                    <div className={cx('item--email')}>
                        <span>HoSibang@gmail.com</span>
                    </div>
                    <div className={cx('item--name')}>
                        <span>Hồ sĩ bang</span>
                    </div>
                    <div className={cx('item--group')}>
                        <span>Bang</span>
                    </div>
                    <div className={cx('item--actions')}>
                        <i className='bx bxs-pencil' ></i>
                        <i className='bx bxs-x-square' ></i>
                    </div>
                </div>
            </div>

            <Pagination lengthListProduct={24} />

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

export default Account