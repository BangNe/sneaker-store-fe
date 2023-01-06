import { useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import style from './Product.module.scss'
import Button from '../Button'

const cx = classNames.bind(style)

function Product({name,price,imgs}) {
    const [idImgActive, setIdImgActive] = useState(0)

    return (
        <Link className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('img')}>
                    <img src={imgs[idImgActive]} alt=''/>
                    <div className={cx('wrapper-img-select')}>
                    <Slider
                        speed= {500}
                        slidesToShow = {5}
                        slidesToScroll = {1}
                        arrows = {false}
                        infinite = {false}
                    >
                        {imgs.map((item,id) => {
                            if(id !== idImgActive) {
                                return (
                                    <div 
                                        key={id}
                                        className = {cx('img-select')}
                                        onClick={() => setIdImgActive(id)}
                                    >
                                        <img src={item} alt=''/>
                                    </div>
                                )
                            }else {
                                return (
                                    <div 
                                        key={id}
                                        className = {cx('img-select','active')}
                                        onClick={() => setIdImgActive(id)}
                                    >
                                        <img src={item} alt=''/>
                                    </div>
                                )
                            }
                        })}
                    </Slider>
                    </div>
                </div>
                <h5>{name}</h5>
            </div>
            <div className={cx('price')}>
                <Button primary medium clipPathRight>{price}</Button>
            </div>
        </Link>
    )
}

export default Product