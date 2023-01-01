import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'

import style from './Header.module.scss'
import Search from './Search'

const cx = classNames.bind(style)

function Header() {
    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link>
                        <img src='https://theme.hstatic.net/200000265619/1000946504/14/logo.png' alt='logo' />
                    </Link>
                </div>

                <Search/>
                <div className={cx('action')}>
                    <Button primary large clipPathRight to ='/cart'>
                        <i className='bx bx-cart-alt bx-tada' ></i>
                    </Button>
                    {/* <Button other large clipPathLeft to ='/cart'>
                        <span className={cx('btn-login')}>Login</span>
                    </Button> */}
                    <Button other large clipPathLeft to ='/cart'>
                        <i className='bx bx-user' ></i>
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header