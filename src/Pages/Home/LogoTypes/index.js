import {Link} from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import '../custom.scss'

const itemLogo = [
    {img : 'https://theme.hstatic.net/200000265619/1000946504/14/img_bran_category1.png'},
    {img : 'https://theme.hstatic.net/200000265619/1000946504/14/img_bran_category2.png'},
    {img : 'https://theme.hstatic.net/200000265619/1000946504/14/img_bran_category3.png'},
    {img : 'https://theme.hstatic.net/200000265619/1000946504/14/img_bran_category4.png'},
    {img : 'https://theme.hstatic.net/200000265619/1000946504/14/img_bran_category5.png'},
    {img : 'https://theme.hstatic.net/200000265619/1000946504/14/img_bran_category6.png'},
    {img : 'https://theme.hstatic.net/200000265619/1000946504/14/img_bran_category7.png'},
    {img : 'https://theme.hstatic.net/200000265619/1000946504/14/img_bran_category8.png'},
    {img : 'https://theme.hstatic.net/200000265619/1000946504/14/img_bran_category9.png'},
]

function LogoTypes() {
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
            {itemLogo.map((item,id) => {
                return (
                    <Link key={id}>
                        <img src={item.img} alt=''/>
                    </Link>
                )
            })}
        </Slider>
    )
}

export default LogoTypes