import classNames from 'classnames/bind'
import {Link} from 'react-router-dom'

import style from './Button.module.scss'

const cx = classNames.bind(style)

function Button({
    children,

    //type-tag
    to,
    onClick,
    href,

    //type
    primary,
    other,
    white,
    
    clipPathLeft,
    clipPathRight,

    //size
    medium,
    large,
    oversize,

    ...prop
}) {
    let Comp = 'button'

    let prps = {
        onClick,
        ...prop
    }

    if(to) {
        Comp = Link
        prps.to = to
    }else if(href) {
        Comp = 'a'
        prps.href = href
    }

    const clx = cx('button',{
        primary,
        other,
        white,
        clipPathLeft,
        clipPathRight,

        medium,
        large,
        oversize
    })

    return (
        <Comp className= {clx} {...prps}>
            {children}
        </Comp>
    )
}

export default Button