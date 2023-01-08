import {Link} from 'react-router-dom'
import classNames from 'classnames/bind'
import {useState,useRef,useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'

import {userSelector} from '../../store/selectors'
import {logInUser} from '../../store/slice/userSlice'
import config from '../../cofig'
import Input from '../../components/Input'
import Button from '../../components/Button'
import style from './LogIn.module.scss'

const cx = classNames.bind(style)

function LogIn() {
    let result = useSelector(userSelector)
    const backHomeRef = useRef()
    
    useEffect(() => {
        if(!!result.mess) {
            switch (result.mess.errCode) {
                case 0 :
                    backHomeRef.current.click()
                    break
                case 1 :
                    setNotificationAccount(`* ${result.mess.mess}`)
                    break
                case 2 :
                    setNotificationPassword(`* ${result.mess.mess}`)
                    break
                default:
                    break
                }
            }
                        
    },[result.mess])
                    
    const dispatch = useDispatch()
    const [accountValue,setAccountValue] = useState('')
    const [passwordValue,setPasswordValue] = useState('')
    const [notificationAccount,setNotificationAccount] = useState('')
    const [notificationPassword,setNotificationPassword] = useState('')

    const handleSunit = () => {
        if(!accountValue) {
            setNotificationAccount('* Tài khoản không được bỏ trống')
        }
        if(!passwordValue) {
            setNotificationPassword('* Mật khẩu không được bỏ trống')
        }

        if (!notificationAccount &&
            !notificationPassword &&
            !!accountValue &&
            !!accountValue
        ){
            const data = {
                account : accountValue,
                password : passwordValue
            }
            dispatch(logInUser(data))
            return
        }
    }

    const handleAccount = (e) => {
        let inputValue = e.target.value
        if (!inputValue.match(/(\s)/g)) {
            setAccountValue(inputValue)
            setNotificationAccount('')
            return
        }
        setNotificationAccount('* tài khoản không được có khoảng trống')
    }

    const handlePassword = (e) => {
        let inputValue = e.target.value
        if (!inputValue.match(/(\s)/g)) {
            setPasswordValue(inputValue)
            setNotificationPassword('')
            return
        }
        setNotificationPassword('* mật khẩu không được có khoảng trống')
    }

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Link className={cx('btn-back')} to = {config.routes.home} ref={backHomeRef}>
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
                            <Input 
                                name={'Tài khoản'} 
                                notification={notificationAccount}
                                value={accountValue}
                                onChange = {handleAccount}
                            />
                        </div>
                        <div className={cx('input')}>
                            <Input 
                                name={'Mật khẩu'} 
                                type='password'
                                notification={notificationPassword}
                                value={passwordValue}
                                onChange = {handlePassword}
                            />
                        </div>
                        <div className={cx('input')}>
                            <Button primary oversize onClick={handleSunit}>Đăng nhập</Button>
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