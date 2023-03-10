import classNames from 'classnames/bind'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch } from 'react-redux'

import {getType,getSize, getRangePrice} from '../../store/slice/productSlice'
import {brandSelector, typeSelector,sizeSelector,rangePriceSelector } from '../../store/selectors'
// import { useDebounce } from '../../hooks'
import style from './Products.module.scss'
import config  from '../../cofig'
import MenuProducts from './MenuProducts'

const cx = classNames.bind(style)

function Products() {
    const dispatch = useDispatch()
    const sliderInput = useRef()
    const brandResult = useSelector(brandSelector)
    const typeResult = useSelector(typeSelector)
    const sizeResult = useSelector(sizeSelector)
    const rangePriceResult = useSelector(rangePriceSelector)

    const [minInputValue, setMinInputValue] = useState(rangePriceResult.minPrice)
    const [maxInputValue, setMaxInputValue] = useState(rangePriceResult.maxPrice)
    const [valueTypes, setvalueTypes] = useState([])
    const [valueTSizes, setvalueSizes] = useState([])
    
    // const valueMinDebounce = useDebounce(minInputValue,800)
    // const valueMaxDebounce = useDebounce(maxInputValue,800)

    useEffect(() => {
        dispatch(getType())
    },[dispatch])

    useEffect(() => {
        dispatch(getSize())
    },[dispatch])

    useEffect(() => {
        dispatch(getRangePrice())
    },[dispatch])

    const handleMinInput = (e) => {
        let minValue = e.target.value

        setMinInputValue(minValue)
        sliderInput.current.style.left = (minValue/rangePriceResult.maxPrice)* 100 + "%"
    }

    const handleMaxInput = (e) => {
        let maxValue = e.target.value
        setMaxInputValue(maxValue)
        sliderInput.current.style.right = 100-(maxValue/rangePriceResult.maxPrice)* 100 + "%"
    }

    const handleCheckType = (type) => {
        setvalueTypes(prev => {
            const isChecked = valueTypes.includes(type)
            if(isChecked) {
                return valueTypes.filter(item => item !== type )
            }else {
                return [...prev,type]
            }
        })
    }

    const handleCheckSize = (size) => {
        setvalueSizes(prev => {
            const isChecked = valueTSizes.includes(size)
            if(isChecked) {
                return valueTSizes.filter(item => item !== size )
            }else {
                return [...prev,size]
            }
        })
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
                        <h3 className={cx('title')}>Danh m???c s???n ph???m</h3>
                        <div className={cx('inner-box')}>
                            {brandResult.initState && brandResult.initState.map((item,id) => {
                                return (
                                    <Link key={id} className={cx('brand-name')}>{item.name}</Link>
                                )
                            })}
                        </div>
                    </div>
                    <div className={cx('price-range', 'box')}>
                        <h3 className={cx('title')}>M???c gi??</h3>
                        <div className={cx('inner-box')}>
                            <div className={cx('price-list')}>
                                {<span>{minInputValue}</span>}
                                <span>{maxInputValue}</span>
                            </div>
                            <div className={cx('slider-range')}>
                                <div className={cx('progress-range')} ref={sliderInput}></div>
                            </div> 
                            <div className={cx('input-range')}>
                                <input 
                                    className={cx('input-range-min')} 
                                    min={rangePriceResult.minPrice } 
                                    max={rangePriceResult.maxPrice } 
                                    value={minInputValue} 
                                    type='range'
                                    onChange={handleMinInput}
                                />
                                <input 
                                    className={cx('input-range-max')} 
                                    min={rangePriceResult.minPrice } 
                                    max={rangePriceResult.maxPrice} 
                                    value= {maxInputValue} 
                                    type='range'
                                    onChange={handleMaxInput}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx('type', 'box')}>
                        <h3 className={cx('title')}>LO???I S???N PH???M</h3>
                        <div className={cx('inner-box')}>
                            {typeResult &&typeResult.map((item,id) => {
                                return (
                                    <div 
                                        key={id} 
                                        className={cx('input-type')}
                                    >
                                        <input
                                            type='checkbox'
                                            checked = {valueTypes.includes(item)}
                                            onChange = {() => handleCheckType(item)}
                                        />
                                        <span>{item}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={cx('size', 'box')}>
                        <h3 className={cx('title')}>THEO K??CH C???</h3>
                        <div className={cx('inner-box')}>
                            {sizeResult && sizeResult.map((item,id) => {
                                return (
                                    <div key={id} className={cx('input-size')}>
                                        <input 
                                            type='checkbox'
                                            checked = {valueTSizes.includes(item)}
                                            onChange = {() => handleCheckSize(item)}
                                        />
                                        <span>{item.num}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <MenuProducts/>
            </div>
        </div>
    )
}

export default Products