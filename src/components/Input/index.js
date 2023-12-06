import classNames from 'classnames/bind'

import style from './Input.module.scss'

const cx = classNames.bind(style)

function Input({name , type = 'text', notification = "",grey , ...prop}) {

    const clx = cx('label',{
        grey
    })

    const clxI= cx('input',{
        grey
    })

    return (
        <div className={cx('wrapper')}>
            <div className={cx('form')}>
                <input type={type} className={clxI} placeholder=' ' {...prop}/>
                <label className={clx}>{name}</label>
            </div>
            <span>{notification}</span>
        </div>
    )
}

export default Input