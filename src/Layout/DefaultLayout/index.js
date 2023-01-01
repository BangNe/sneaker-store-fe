import classNames from 'classnames/bind'

import style from './DefaultLayout.module.scss'
import Header from './Header'
import Sidebar from './Sidebar'

const cx = classNames.bind(style)

function DefaultLayout({children}) {
    return (
        <div className={cx('wrapper')}>
            <Header/>
            <Sidebar/>
            <div>{children}</div>
        </div>
    )
}

export default DefaultLayout