import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'

import {useDebounce} from '../../../../hooks'
import style from './Search.module.scss'
import Wrapper from '../../../../components/Menu/Wrapper'
import Button from '../../../../components/Button'
import * as productSevices from '../../../../services/productSevices'

const cx = classNames.bind(style)

function Search() {

    const [searchValue,setSearchValue] = useState('')
    const [searchResult,setSearchResult] = useState([])
    const [loading,setLoading] = useState(false)
    const [showResult,setShowResult] = useState(false)

    const inputRef = useRef()

    const valueDebounce = useDebounce(searchValue,800)

    useEffect(() => {
        if (!valueDebounce.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true)
            const result = await productSevices.searchProduct(valueDebounce)

            setSearchResult(result)
            setLoading(false)
        }
        fetchApi()
    },[valueDebounce])

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    }

    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }

    return (
        <div>
            <Tippy
                placement = {'bottom-start'}
                interactive = {true}
                visible = {searchResult.length > 0 && showResult}
                onClickOutside = {() => setShowResult(false)}
                render={attrs => (
                    <div className="box" tabIndex="-1" {...attrs}>
                       <div className={cx('menu-search')}>
                            <Wrapper>
                                <h3 className={cx('title-menu')}>SẢN PHẨM HÀNG ĐẦU</h3>
                                <div className={cx('list')}>
                                    {searchResult.map((item,id) => {
                                        return (
                                            <div key={id} className={cx('item')}>
                                                <div className={cx('item-img')}>
                                                    <img src={item.img[0]} alt=' '/>
                                                </div>
                                                <div className={cx('item-info')}>
                                                    <h4 className={cx('item-name')}>{item.name}</h4>
                                                    <Button primary medium clipPathRight to = '/cart'>
                                                        {item.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}
                                                    </Button>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className={cx('more')}>
                                    <span>Khám phá sản phẩm phù hợp </span>
                                    <i className='bx bx-right-arrow-alt' ></i>
                                </div>
                            </Wrapper>
                        </div>
                    </div>
                )}
            >
                <div className={cx('wrapper')}>
                    <div className={cx('search-button')}>
                        <i className='bx bx-search-alt-2'></i>
                    </div>
                    <input 
                        ref={inputRef}
                        className={cx('input')} 
                        placeholder='Tìm kiếm sản phẩm ...'
                        value={searchValue}
                        onChange = {handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {loading &&
                        <div className={cx('load')} >
                            <i className='bx bx-loader-alt' ></i>
                        </div>
                    }
                    {!!searchValue && !loading &&
                        <div 
                            className={cx('clear')} 
                            onClick = {handleClear}
                        >
                            <i className='bx bxs-x-circle' ></i>
                        </div>
                    }
                </div>
            </Tippy>
        </div>
    )
}

export default Search