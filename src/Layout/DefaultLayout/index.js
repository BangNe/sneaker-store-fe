import classNames from 'classnames/bind'

import style from './DefaultLayout.module.scss'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

const cx = classNames.bind(style)

function DefaultLayout({children}) {
    return (
        <div className={cx('wrapper')}>
            <Header/>
            <Sidebar/>
            <div>{children}</div>
            <Footer/>
        </div>
    )
}

export default DefaultLayout