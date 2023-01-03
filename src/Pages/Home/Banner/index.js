import {Link} from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import '../custom.scss'

const itemBanner = [
    {img : 'https://theme.hstatic.net/200000265619/1000946504/14/slider_1.jpg'},
    {img : 'https://theme.hstatic.net/200000265619/1000946504/14/slider_2.jpg'},
    {img : 'https://theme.hstatic.net/200000265619/1000946504/14/slider_3.jpg'},
    {img : 'https://theme.hstatic.net/200000265619/1000946504/14/slider_4.jpg'},
    {img : 'https://theme.hstatic.net/200000265619/1000946504/14/slider_5.jpg'},
]

function Banner() {
    return (
        <Slider
                infinite={true}
                speed= {500}
                slidesToShow = {1}
                slidesToScroll = {1}
                autoplay = {true}
            >
                {itemBanner.map((item,id) => {
                    return (
                        <Link key={id}>
                            <img src={item.img} alt=''/>
                        </Link>
                    )
                })}
            </Slider>
    )
}

export default Banner