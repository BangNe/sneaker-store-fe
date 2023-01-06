import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


import * as brandSevices from '../../../services/brandSevices'
import '../custom.scss'
function LogoTypes() {

    const [brandResult,setBrandResult] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const result = await brandSevices.getBrand()
            setBrandResult(result)
        }
        fetchApi()
    },[])

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
            {brandResult.map((item,id) => {
                if(item.img) {
                    return (
                        <Link key={id} to = {`/products/${item.name}`}>
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