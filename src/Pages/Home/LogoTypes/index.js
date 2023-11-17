import { useEffect } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {fetchBrand} from '../../../store/slice/brandSlice'
import {brandSelector} from '../../../store/selectors'
import { getRangePrice,getSize,getType,getMenuProduct, urlProduct } from '../../../store/slice/productSlice'
import '../custom.scss'
function LogoTypes() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            try {
              await dispatch(fetchBrand())
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          }
  
          fetchData()
    },[dispatch])

    const brandResult = useSelector(brandSelector)

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
            infinite={true}
            speed= {500}
            slidesToShow = {6}
            slidesToScroll = {1}
            autoplay = {true}
            autoplaySpeed ={1500}
            arrows = {false}
        >
            {brandResult.initState.map((item,id) => {
                if(item.img) {
                    return (
                        <Link 
                            key={id}
                            onClick={(e) => handleClick(e, {brand: item.name},item.name)}    
                        >
                            {<img src={item.img} alt=''/>}
                        </Link>
                    )
                }
                return false
            })}
        </Slider>
    )
}

export default LogoTypes