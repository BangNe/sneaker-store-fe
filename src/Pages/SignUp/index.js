import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import config from '../../cofig'
import Button from '../../components/Button'
import Input from '../../components/Input'
import style from './SignUp.module.scss'

const cx = classNames.bind(style)

function SignUp() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <img src='https://theme.hstatic.net/200000265619/1000946504/14/logo.png' alt=''/>
                <h3>Tạo tài khoản</h3>
                <p>Tạo tài khoản SneakerBuzz để đăng nhập vào tất cả trang web của SneakerBuzz và đối tác nhanh chóng!</p>
                <div className={cx('bgr')}></div>
            </div>
            <div className={cx('right')}>
                <div className={cx('wrapper-input')}>
                    <div className={cx('input')}>
                        <Input name={'Email'} type = {'email'}/>
                    </div>
                    <div className={cx('input')}>
                        <Input name={'Tài khoản'} type = {'text'}/>
                    </div>
                    <div className={cx('input')}>
                        <Input name={'Mật khẩu'} type = {'password'}/>
                    </div>
                    <div className={cx('input')}>
                        <Input name={'Nhập lại mật khẩu'} type = {'password'}/>
                    </div>
                    <div className={cx('input')}>
                        <Button primary oversize>Tạo tài khoản</Button>
                    </div>
                </div>
                <div className={cx('action')}>
                    <div className={cx('action-line')}>
                        <span></span>
                        <p>HOẶC</p>
                        <span></span>
                    </div>
                    <p className={cx('action-link')}>
                        <span>Bạn đã có tài khoản?</span>
                        <Link to={config.routes.login}>Đăng nhập</Link>
                    </p>
                    <div className={cx('action-info')}>
                        <span>Liên hệ đội ngũ chăm sóc khách hàng</span>
                        <span>Thứ 2 - Thứ 7: từ 9h đến 22h; Chủ Nhật: từ 10h đến 19h</span>
                        <span>18009044</span>
                    </div>
                </div>
            </div>
            <Link className={cx('back')} to = {config.routes.home}>
                <i className='bx bxs-chevron-left'></i>
                <span>Quay về</span>
            </Link>
        </div>
    )
}

export default SignUp