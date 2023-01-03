import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Product from '../../../components/Product'
import '../custom.scss'

// const products = [

// ]

function ListProducts() {
    return (
        <Slider
                infinite={true}
                speed= {500}
                slidesToShow = {5}
                slidesToScroll = {1}
                autoplay = {true}
            >
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
        </Slider>
    )
}

export default ListProducts