import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import * as bannerSevices from '../../../services/bannerSevices'
import '../custom.scss'

function Banner() {
    const [bannerResult,setBannerResult] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const result = await bannerSevices.getBanner()
            setBannerResult(result)
        }
        fetchApi()
    },[])

    return (
        <Slider
                speed= {500}
                slidesToShow = {1}
                slidesToScroll = {1}
                autoplay = {true}
            >
                {bannerResult.map((banner,id) => {
                    return (
                        <Link key={id} to = {`/products/${banner.brand}`}>
                            <img src={banner.img} alt=''/>
                        </Link>
                    )
                })}
            </Slider>
    )
}

export default Banner