import { useEffect, memo } from 'react'
import {Link} from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {useDispatch, useSelector} from 'react-redux'

import {fetchBanner} from '../../../store/slice/bannerSlice'
import {bannerSelector} from '../../../store/selectors'
import '../custom.scss'

function Banner() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBanner())
    },[dispatch])

    const bannerResult = useSelector(bannerSelector)

    return (
        <Slider
                speed= {500}
                slidesToShow = {1}
                slidesToScroll = {1}
                autoplay = {true}
            >
                {bannerResult.initState.map((banner,id) => {
                    return (
                        <Link key={id} to = {`/products/${banner.brand}`}>
                            <img src={banner.img} alt=''/>
                        </Link>
                    )
                })}
        </Slider>
    )
}

export default memo(Banner)