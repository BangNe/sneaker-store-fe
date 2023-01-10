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
    small,
    medium,
    large,
    oversize,

    hiden,
    autoMargin,
    active,
    disabled,

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

    if (disabled) {
        Object.keys(prps).forEach((key) => {
            if (key.startsWith('on') && typeof prps[key] === 'function') {
                delete prps[key];
            }
        });
    }

    const clx = cx('button',{
        primary,
        other,
        white,
        clipPathLeft,
        clipPathRight,

        small,
        medium,
        large,
        oversize,

        hiden,
        autoMargin,
        active,
        disabled,
    })

    return (
        <Comp className= {clx} {...prps}>
            {children}
        </Comp>
    )
}

export default Button