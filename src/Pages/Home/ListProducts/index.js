import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Product from '../../../components/Product'
import '../custom.scss'

// const products = [

// ]

function ListProducts({data}) {

    return (
        <Slider
                speed= {500}
                slidesToShow = {5}
                slidesToScroll = {1}
                autoplay = {true}
                autoplaySpeed ={2000}
                draggable= {false}
            >
                {data.map((item,id) => {
                    return <Product key={id} name={item.name} price={item.price} imgs = {item.img} />
                })}
        </Slider>
    )
}

export default ListProducts