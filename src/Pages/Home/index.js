import classNames from 'classnames/bind'
import Banner from './Banner'
import LogoTypes from './LogoTypes'
import { Link } from 'react-router-dom'

import style from './Home.module.scss'
import config from '../../cofig'
import ListProducts from './ListProducts'

const cx = classNames.bind(style)

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner')}>
                <Banner/>
            </div>
            <div className={cx('logoTypes')}>
                <LogoTypes/>
            </div>
            <div className={cx('thumbnail')}>
                <Link className={cx('thumbnail-item')}>
                    <img src='https://theme.hstatic.net/200000265619/1000946504/14/banner_project_1.jpg' alt='' />
                    <h4>CONVERSE</h4>
                    <span>206 Sản phẩm</span>
                </Link>
                <Link className={cx('thumbnail-item')}>
                    <img src='https://theme.hstatic.net/200000265619/1000946504/14/banner_project_2.jpg' alt='' />
                    <h4>VANS</h4>
                    <span>206 Sản phẩm</span>
                </Link>
                <Link className={cx('thumbnail-item')}>
                    <img src='https://theme.hstatic.net/200000265619/1000946504/14/banner_project_3.jpg' alt='' />
                    <h4>PALLADIUM</h4>
                    <span>206 Sản phẩm</span>
                </Link>
                <Link className={cx('thumbnail-item')}>
                    <img src='https://theme.hstatic.net/200000265619/1000946504/14/banner_project_4.jpg' alt=''/>
                    <h4>ART TOYS</h4>
                    <span>206 Sản phẩm</span>
                </Link>
                <Link className={cx('thumbnail-item')}>
                    <img src='https://theme.hstatic.net/200000265619/1000946504/14/banner_project_5.jpg' alt=''/>
                    <h4>PHỤ KIỆN</h4>
                    <span>206 Sản phẩm</span>
                </Link>
            </div>

            <div className={cx('new-arrival')}>
                <Link className={cx('new-arrival-title')} to={config.routes.newArrival}>SẢN PHẨM MỚI</Link>
                <div className={cx('new-arrival-list')}>
                    <ListProducts/>
                </div>
            </div>
        </div>
    )
}

export default Home