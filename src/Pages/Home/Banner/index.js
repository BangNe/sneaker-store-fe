import { useEffect, memo } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


import { getRangePrice,getSize,getType,getMenuProduct, urlProduct } from '../../../store/slice/productSlice'
import {fetchBanner} from '../../../store/slice/bannerSlice'
import {bannerSelector} from '../../../store/selectors'
import '../custom.scss'

function Banner() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    useEffect(() => {
        dispatch(fetchBanner())
    },[dispatch])
    
    const bannerResult = useSelector(bannerSelector)

    const handleClick = async (e, valueSearch, url) => {
        e.preventDefault()
        dispatch(urlProduct(url))
        await dispatch(getMenuProduct(valueSearch))
        await dispatch(getSize(valueSearch))
        await dispatch(getType(valueSearch))
        await dispatch(getRangePrice(valueSearch))
        navigate(`/products/${encodeURIComponent(url)}`)
    }


    return (
        <Slider
                speed= {500}
                slidesToShow = {1}
                slidesToScroll = {1}
                autoplay = {true}
            >
                {bannerResult.initState.map((banner,id) => {
                    return (
                        <Link 
                            key={id} 
                            onClick={(e) => handleClick(e, {brand: banner.brand},banner.brand)}
                        >
                            <img src={banner.img} alt=''/>
                        </Link>
                    )
                })}
        </Slider>
    )
}

export default memo(Banner)