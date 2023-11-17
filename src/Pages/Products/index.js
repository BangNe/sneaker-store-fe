import classNames from 'classnames/bind'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useSelector, useDispatch } from 'react-redux'

import {getMenuProduct } from '../../store/slice/productSlice'
import {typeSelector,sizeSelector,rangePriceSelector,menuProductSelector, urlProductSelector } from '../../store/selectors'
import style from './Products.module.scss'
import config  from '../../cofig'
import MenuProducts from './MenuProducts'

const cx = classNames.bind(style)

function Products() {

    const dispatch = useDispatch()

    const sliderInput = useRef()
    const urlProduct = useSelector(urlProductSelector)
    const typeResult = useSelector(typeSelector)
    const sizeResult = useSelector(sizeSelector)
    const rangePriceResult = useSelector(rangePriceSelector)
    const menuProductResult = useSelector(menuProductSelector)

    const [minInputValue, setMinInputValue] = useState(rangePriceResult.minPrice)
    const [maxInputValue, setMaxInputValue] = useState(rangePriceResult.maxPrice)
    const [valueTypes, setvalueTypes] = useState([])
    const [valueTSizes, setvalueSizes] = useState([])

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
    
    const handleCheckSize = async(size) => {
        setvalueSizes(prev => {
            const isChecked = valueTSizes.includes(size)
            if(isChecked) {
                return valueTSizes.filter(item => item !== size )
            }else {
                return [...prev,size]
            }
        })
    }
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            await dispatch(getMenuProduct({
              brand: urlProduct,
              type: valueTypes,
              minPrice: minInputValue,
              maxPrice: maxInputValue,
            }));
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }

        fetchData()
    }, [urlProduct, valueTypes, minInputValue, maxInputValue])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('map')}>
                <Link to={config.routes.home}>HOME PAGE</Link>
                <i className='bx bxs-chevron-right' ></i>
                <Link>{urlProduct}</Link>
            </div>
            <div className={(cx('inner'))}>
                <div className={cx('sidebar')}>
                    <div className={cx('price-range', 'box')}>
                        <h3 className={cx('title')}>Mức giá</h3>
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
                        <h3 className={cx('title')}>LOẠI SẢN PHẨM</h3>
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
                        <h3 className={cx('title')}>THEO KÍCH CỠ</h3>
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
                <MenuProducts listProducts ={menuProductResult}/>
            </div>
        </div>
    )
}

export default Products