import classNames from 'classnames/bind'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'

import {signUpUser} from '../../store/slice/userSlice'
import {userSelector} from '../../store/selectors'
import config from '../../cofig'
import Button from '../../components/Button'
import Input from '../../components/Input'
import style from './SignUp.module.scss'

const cx = classNames.bind(style)

function SignUp() {
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
                default:
                    break
            }
        }
        
    },[result.mess])
   
    const dispatch = useDispatch()

    const [valueInputs,setValueInput] = useState({
        account : '',
        email : '',
        password : '',
        rePassword : '',
    })
    const [notificationEmail,setNotificationEmail] = useState('')
    const [notificationAccount,setNotificationAccount] = useState('')
    const [notificationPassword,setNotificationPassword] = useState('')
    const [notificationRePassword,setNotificationRePassword] = useState('')

    const handleSunit = () => {
        if(!valueInputs.email) {
            setNotificationEmail('* Email không được bỏ trống')
        }
        if(!valueInputs.account) {
            setNotificationAccount('* Tài khoản không được bỏ trống')
        }
        if(!valueInputs.password) {
            setNotificationPassword('* Mật khẩu không được bỏ trống')
        }

        if(!valueInputs.rePassword) {
            setNotificationRePassword('* Nhập lại mật khẩu không được bỏ trống')
        }

        if (!notificationEmail &&
            !notificationAccount &&
            !notificationPassword &&
            !notificationRePassword &&
            !!valueInputs.email&&
            !!valueInputs.account &&
            !!valueInputs.password
        ){
            const data = {
                email : valueInputs.email,
                account : valueInputs.account.toLowerCase(),
                password : valueInputs.password
            }
            
            dispatch(signUpUser(data))
            return
        }
    }

    const handleFocusOutEmail = (e) => {
        let emailValue = e.target.value
        if(!emailValue.match(/.+@.+\.[A-Za-z]+$/g)) {
            setNotificationEmail('* email không hợp lệ')
            return
        }
        setNotificationEmail('')
    }

    const handleEmail = (e) => {
        let emailValue = e.target.value
        if (!emailValue.match(/(\s)/g)) {
            setValueInput((valueInputs) => ({...valueInputs, email:emailValue}))
            setNotificationEmail('')
            return
        }
        setNotificationEmail('* email không được có khoảng trống')
    }

    const handleFocusOutAccount = (e) => {
        let emailValue = e.target.value
        if(emailValue.length <= 8) {
            setNotificationAccount('* tài khoản phải nhiều hơn 8 kí tự')
            return
        }
        setNotificationAccount('')
    }

    const handleAccount = (e) => {
        let accountValue = e.target.value
        if (!accountValue.match(/(\s)/g)) {
            setValueInput((valueInputs) => ({...valueInputs, account:accountValue}))
            setNotificationAccount('')
            return
        }
        setNotificationAccount('* tài khoản không được có khoảng trống')
    }

    const handleFocusOutPw = (e) => {
        let emailValue = e.target.value
        if(emailValue.length <= 8) {
            setNotificationPassword('* mật khẩu phải nhiều hơn 8 kí tự')
            return
        }
        setNotificationPassword('')
    }

    const handlePassword = (e) => {
        let passwordValue = e.target.value
        if (!passwordValue.match(/(\s)/g)) {
            setValueInput((valueInputs) => ({...valueInputs, password:passwordValue}))
            setNotificationPassword('')
            return
        }
        setNotificationPassword('* mật khẩu không được có khoảng trống')
    }

    const handleRePassword = (e) => {
        let rePasswordValue = e.target.value
        setValueInput((valueInputs) => ({...valueInputs, rePassword:rePasswordValue}))
        if (rePasswordValue === valueInputs.password) {
            setNotificationRePassword('')
            return
        }
        setNotificationRePassword('* mật khẩu không khớp')
    }

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
                        <Input 
                            name={'Email'}
                            notification = {notificationEmail}
                            value = {valueInputs.email}
                            onChange = {handleEmail}
                            onBlur = {handleFocusOutEmail}
                        />
                    </div>
                    <div className={cx('input')}>
                        <Input 
                            name={'Tài khoản'} 
                            notification = {notificationAccount}
                            type = {'text'}
                            value = {valueInputs.account}
                            onChange = {handleAccount}
                            onBlur = {handleFocusOutAccount}
                        />
                    </div>
                    <div className={cx('input')}>
                        <Input 
                            notification = {notificationPassword}
                            name={'Mật khẩu'} 
                            type = {'password'}
                            onChange = {handlePassword}
                            onBlur = {handleFocusOutPw}
                            value = {valueInputs.password}
                        />
                    </div>
                    <div className={cx('input')}>
                        <Input 
                            notification = {notificationRePassword}
                            name={'Nhập lại mật khẩu'} 
                            type = {'password'}
                            onChange = {handleRePassword}
                            value = {valueInputs.rePassword}
                        />
                    </div>
                    <div className={cx('input')}>
                        <Button primary oversize onClick={handleSunit}>Tạo tài khoản</Button>
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
            <Link ref={backHomeRef} className={cx('back')} to = {config.routes.home}>
                <i className='bx bxs-chevron-left'></i>
                <span>Quay về</span>
            </Link>
        </div>
    )
}

export default SignUp