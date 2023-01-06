import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'

import LogoTypes from './LogoTypes'
import Banner from './Banner'
import style from './Home.module.scss'
import config from '../../cofig'
import ListProducts from './ListProducts'
import * as seasonSevices from '../../services/seasonSevices'
import * as productSevices from '../../services/productSevices'

const cx = classNames.bind(style)

function Home() {
    const [seasonResult,setSeasonResult] = useState([])
    const [fakeProducts,setFakeProducts] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const result = await seasonSevices.getSeason()

            setSeasonResult(result)
        }
        fetchApi()
    },[])

    useEffect(() => {
        const fetchApi = async () => {
            const result = await productSevices.getTest()

            setFakeProducts(result)
        }
        fetchApi()
    },[])


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
                <div className={cx('product-list')}>
                    <ListProducts data={fakeProducts}/>
                </div>
            </div>

            {seasonResult.map((item,id) => {
                return (
                    <div key={id} className={cx('product-season')}>
                        <div className={cx('product-season-info')}>
                            <div className={cx('product-season-img')}>
                                <img src={item.img} alt=''/>
                            </div>
                            <div className={cx('product-season-content')}>
                                <h5>{item.name}</h5>
                                <p>{item.content}</p>

                                <Link className={cx('product-season-link')} to={`/products/${encodeURIComponent(item.name)}`}>
                                    <span>XEM TẤT CẢ</span>
                                    <i className='bx bx-chevron-right bx-fade-right' ></i>
                                </Link>
                            </div>
                        </div>
                            
                        <div className={cx('product-list')}>
                            <ListProducts data={fakeProducts}/>
                        </div>
                    </div>
                )
            })}
            
        </div>
    )
}

export default Home