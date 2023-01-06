import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import config from '../../cofig'
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
            <div className={cx('right')}>asd</div>
            <Link className={cx('back')} to = {config.routes.home}>
                <i className='bx bxs-chevron-left'></i>
                <span>Quay về</span>
            </Link>
        </div>
    )
}

export default SignUp