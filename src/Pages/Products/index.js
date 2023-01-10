import classNames from 'classnames/bind'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import style from './Products.module.scss'
import config  from '../../cofig'
import MenuProducts from './MenuProducts'

const cx = classNames.bind(style)

function Products() {
    const maxPriceValue = 4000000
    const [minInputValue, setMinInputValue] = useState(0)
    const [maxInputValue, setMaxInputValue] = useState(maxPriceValue)

    const sliderInput = useRef()

    const handleMinInput = (e) => {
        let minValue = e.target.value

        setMinInputValue(minValue)
        sliderInput.current.style.left = (minValue/maxPriceValue)* 100 + "%"
    }

    const handleMaxInput = (e) => {
        let maxValue = e.target.value

        setMaxInputValue(maxValue)
        sliderInput.current.style.right = 100-(maxValue/maxPriceValue)* 100 + "%"
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('map')}>
                <Link to={config.routes.home}>HOME PAGE</Link>
                <i className='bx bxs-chevron-right' ></i>
                <Link>CONVERSE</Link>
            </div>
            <div className={(cx('inner'))}>
                <div className={cx('sidebar')}>
                    <div className={cx('brand', 'box')}>
                        <h3 className={cx('title')}>Danh mục sản phẩm</h3>
                        <div className={cx('inner-box')}>
                            <Link className={cx('brand-name')}>PALLADIUM</Link>
                            <Link className={cx('brand-name')}>VANS</Link>
                            <Link className={cx('brand-name')}>PALLADIUM</Link>
                            <Link className={cx('brand-name')}>PALLADIUM</Link>
                            <Link className={cx('brand-name')}>PALLADIUM</Link>
                            <Link className={cx('brand-name')}>PALLADIUM</Link>
                            <Link className={cx('brand-name')}>PALLADIUM</Link>
                        </div>
                    </div>
                    <div className={cx('price-range', 'box')}>
                        <h3 className={cx('title')}>Mức giá</h3>
                        <div className={cx('inner-box')}>
                            <div className={cx('price-list')}>
                                <span>{minInputValue}</span>
                                <span>{maxInputValue}</span>
                            </div>
                            <div className={cx('slider-range')}>
                                <div className={cx('progress-range')} ref={sliderInput}></div>
                            </div> 
                            <div className={cx('input-range')}>
                                <input 
                                    className={cx('input-range-min')} 
                                    min='0' 
                                    max={maxPriceValue} 
                                    value={minInputValue} 
                                    type='range'
                                    onChange={handleMinInput}
                                />
                                <input 
                                    className={cx('input-range-max')} 
                                    min='0' 
                                    max={maxPriceValue} 
                                    value= {maxInputValue} 
                                    type='range'
                                    onChange={handleMaxInput}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx('type', 'box')}>
                        <h3 className={cx('title')}>LOẠI SẢN PHẨM</h3>
                        <div className={cx('inner-box')}>
                            <div className={cx('input-type')}>
                                <input type='checkbox'/>
                                <span>giày</span>
                            </div>
                            <div className={cx('input-type')}>
                                <input type='checkbox'/>
                                <span>giày</span>
                            </div>
                            <div className={cx('input-type')}>
                                <input type='checkbox'/>
                                <span>giày</span>
                            </div>
                            <div className={cx('input-type')}>
                                <input type='checkbox'/>
                                <span>giày</span>
                            </div>
                            <div className={cx('input-type')}>
                                <input type='checkbox'/>
                                <span>giày</span>
                            </div>
                            <div className={cx('input-type')}>
                                <input type='checkbox'/>
                                <span>giày</span>
                            </div>
                            <div className={cx('input-type')}>
                                <input type='checkbox'/>
                                <span>giày</span>
                            </div>
                            <div className={cx('input-type')}>
                                <input type='checkbox'/>
                                <span>giày</span>
                            </div>
                            <div className={cx('input-type')}>
                                <input type='checkbox'/>
                                <span>giày</span>
                            </div>
                            <div className={cx('input-type')}>
                                <input type='checkbox'/>
                                <span>giày</span>
                            </div>
                            <div className={cx('input-type')}>
                                <input type='checkbox'/>
                                <span>giày</span>
                            </div>
                            <div className={cx('input-type')}>
                                <input type='checkbox'/>
                                <span>giày</span>
                            </div>
                            <div className={cx('input-type')}>
                                <input type='checkbox'/>
                                <span>giày</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('size', 'box')}>
                        <h3 className={cx('title')}>THEO KÍCH CỠ</h3>
                        <div className={cx('inner-box')}>
                            <div className={cx('input-size')}>
                                <input type='checkbox'/>
                                <span>25</span>
                            </div>
                            <div className={cx('input-size')}>
                                <input type='checkbox'/>
                                <span>25</span>
                            </div>
                            <div className={cx('input-size')}>
                                <input type='checkbox'/>
                                <span>25</span>
                            </div>
                            <div className={cx('input-size')}>
                                <input type='checkbox'/>
                                <span>25</span>
                            </div>
                            <div className={cx('input-size')}>
                                <input type='checkbox'/>
                                <span>25</span>
                            </div>
                            <div className={cx('input-size')}>
                                <input type='checkbox'/>
                                <span>25</span>
                            </div>
                            <div className={cx('input-size')}>
                                <input type='checkbox'/>
                                <span>25</span>
                            </div>
                            <div className={cx('input-size')}>
                                <input type='checkbox'/>
                                <span>25</span>
                            </div>
                            <div className={cx('input-size')}>
                                <input type='checkbox'/>
                                <span>25</span>
                            </div>
                            <div className={cx('input-size')}>
                                <input type='checkbox'/>
                                <span>25</span>
                            </div>
                            <div className={cx('input-size')}>
                                <input type='checkbox'/>
                                <span>25</span>
                            </div>
                            <div className={cx('input-size')}>
                                <input type='checkbox'/>
                                <span>25</span>
                            </div>
                            <div className={cx('input-size')}>
                                <input type='checkbox'/>
                                <span>25</span>
                            </div>
                            <div className={cx('input-size')}>
                                <input type='checkbox'/>
                                <span>25</span>
                            </div>
                            <div className={cx('input-size')}>
                                <input type='checkbox'/>
                                <span>25</span>
                            </div>
                        </div>
                    </div>
                </div>
                <MenuProducts/>
            </div>
        </div>
    )
}

export default Products