import {Link} from 'react-router-dom'
import classNames from 'classnames/bind'

import config from '../../cofig'
import Input from '../../components/Input'
import Button from '../../components/Button'
import style from './LogIn.module.scss'

const cx = classNames.bind(style)

function LogIn() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Link className={cx('btn-back')} to = {config.routes.home}>
                    <i className='bx bxs-chevron-left'></i>
                    <span>Quay về</span>
                </Link>
                <img src='https://theme.hstatic.net/200000265619/1000946504/14/logo.png' alt=''/>
            </header>
            <div className={cx('container')}>
                <div className={cx('inner')}>
                    <div className={cx('title')}>
                        <h3>Đăng nhập</h3>
                        <span>Một tài khoản cho tất cả trang Decathlon và đối tác!</span>
                    </div>
                    <div className={'form'}>
                        <div className={cx('input')}>
                            <Input name={'Tài khoản'} notification='* tài khoản không tồn tại' />
                        </div>
                        <div className={cx('input')}>
                            <Input name={'Mật khẩu'} type='password'/>
                        </div>
                        <div className={cx('input')}>
                            <Button primary oversize>Đăng nhập</Button>
                        </div>
                    </div>
                    <div className={cx('action')}>
                        <div className={cx('action-line')}>
                            <span></span>
                            <p>HOẶC</p>
                            <span></span>
                        </div>
                        <h6>Bạn chưa có tài khoản? Đăng ký ngay!</h6>
                        <Button white oversize to = {config.routes.signup}>Tạo tài khoản</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn