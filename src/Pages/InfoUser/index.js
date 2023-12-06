import classNames from 'classnames/bind'

import style from './InfoUser.module.scss'
import Input from '../../components/Input'
import Button from '../../components/Button'

const cx = classNames.bind(style)

function InfoUser() {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Thông tin cá nhân</h3>
            <div className={cx('info')}>
                <div className={cx('info-input')}>
                    <div>
                        <Input
                            name={'Họ và tên'}
                            grey
                            readonly
                        />
                    </div>
                </div>
                <div className={cx('info-input')}>
                    <div>
                        <Input
                            name={'Email'}
                            grey
                        />
                    </div>
                    <span>
                        <i class='bx bxs-pencil' ></i>
                    </span>
                </div>
                <div className={cx('info-input')}>
                    <div>
                        <Input
                            name={'Mật khẩu'}
                            type={'password'}
                            grey
                        />
                    </div>
                    <span>
                        <i class='bx bxs-pencil' ></i>
                    </span>
                </div>
            </div>
            <div className={cx('button')}>
                <div>
                    <Button
                        primary
                        oversize
                    >
                        Lưu thông tin
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default InfoUser