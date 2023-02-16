import classNames from 'classnames/bind'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { useDebounce } from '../../hooks'
import style from './Products.module.scss'
import config  from '../../cofig'
import MenuProducts from './MenuProducts'

const cx = classNames.bind(style)

const types = [
    'giày',
    'dép',
    'balo',
    'áo',
    'quan'
]

const sizes = [
    30,31,32,33,34,34.5,35,36,37,38,39,40,43
]

function Products() {
    const maxPriceValue = 4000000
    const [minInputValue, setMinInputValue] = useState(0)
    const [maxInputValue, setMaxInputValue] = useState(maxPriceValue)
    const [valueTypes, setvalueTypes] = useState([])
    const [valueTSizes, setvalueSizes] = useState([])

    const sliderInput = useRef()
    const valueMinDebounce = useDebounce(minInputValue,800)
    const valueMaxDebounce = useDebounce(maxInputValue,800)

    const handleMinInput = (e) => {
        let minValue = e.target.value

        setMinInputValue(minValue)
        sliderInput.current.style.left = (minValue/maxPriceValue)* 100 + "%"
    }

    console.log(valueMinDebounce)
    console.log(valueMaxDebounce)

    const handleMaxInput = (e) => {
        let maxValue = e.target.value
        setMaxInputValue(maxValue)
        sliderInput.current.style.right = 100-(maxValue/maxPriceValue)* 100 + "%"
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
                                <span>{minInputValue.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</span>
                                <span>{maxInputValue.toLocaleString('vi', {style : 'currency', currency : 'VND'})}</span>
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
                            {types.map((item,id) => {
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
                            {sizes.map((item,id) => {
                                return (
                                    <div key={id} className={cx('input-size')}>
                                        <input 
                                            type='checkbox'
                                            checked = {valueTSizes.includes(item)}
                                            onChange = {() => handleCheckSize(item)}
                                        />
                                        <span>{item}</span>
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