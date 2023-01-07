import classNames from 'classnames/bind'

import style from './Input.module.scss'

const cx = classNames.bind(style)

function Input({name , type = 'text', notification = "" , ...prop}) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('form')}>
                <input type={type} className={cx('input')} placeholder=' ' {...prop}/>
                <label className={cx('label')}>{name}</label>
            </div>
            <span>{notification}</span>
        </div>
    )
}

export default Input