import classNames from 'classnames/bind'
import {NavLink,Link, useNavigate} from 'react-router-dom'
import Tippy from '@tippyjs/react/headless'
import { useEffect, useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'

import { getRangePrice,getSize,getType,getMenuProduct, urlProduct } from '../../../store/slice/productSlice'
import {fetchBrand} from '../../../store/slice/brandSlice'
import {brandSelector} from '../../../store/selectors'
import style from './Sidebar.module.scss'
import Wrapper from '../../../components/Menu/Wrapper'
import config from '../../../cofig'

const cx = classNames.bind(style)

function Sidebar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [showMenuTypes,setShowMenuTypes]= useState(false)

    const handleShowMenuTypes = () => {
        setShowMenuTypes(false)
    }

    const handleSubmit = async (e, valueSearch, url) => {
        e.preventDefault()
        dispatch(urlProduct(url))
        await dispatch(getMenuProduct(valueSearch))
        await dispatch(getSize(valueSearch))
        await dispatch(getType(valueSearch))
        await dispatch(getRangePrice(valueSearch))
        navigate(`/products/${encodeURIComponent(url)}`)
    }

    useEffect(()=> {
        dispatch(fetchBrand())
    },[dispatch])

    const brandResult = useSelector(brandSelector)

    return ( 
        <aside className={cx('wrapper')}>
            <div className={cx('inner')}>
                <NavLink className={(nav) => cx('item', { active: nav.isActive })} to={config.routes.home}>
                    <span>HOME PAGE</span>
                </NavLink>
                <div className={cx('item')} 
                    onClick = {() =>setShowMenuTypes(prev => !prev)}
                >
                    <Tippy
                        placement = {'bottom-start'}
                        interactive = {true}
                        visible = {showMenuTypes}
                        onClickOutside = {handleShowMenuTypes}
                        render={attrs => (
                            <div className="box" tabIndex="-1" {...attrs}>
                            <div className={cx('wrapper-menu-types')}>
                                    <Wrapper>
                                        <div className={cx('menu-types')}>
                                            {brandResult.initState.map((brand,id)=> {
                                                const isStyle = brand.style.length > 0
                                                return (
                                                    <div key={id} className={cx('item-menu')}>
                                                        <Link 
                                                            className={cx('item-menu-link')} 
                                                            // to={`/products/${encodeURIComponent(brand.name)}`}
                                                            onClick={(e) => handleSubmit(e, {brand: brand.name},brand.name)}
                                                        >
                                                            <span>
                                                                {brand.name}
                                                            </span>
                                                            {isStyle&&<i className='bx bx-chevron-right bx-fade-right' ></i>}
                                                        </Link>
                                                        {isStyle&&<div className={cx('wrapper-menu-child')}>
                                                            <Wrapper >
                                                                {brand.style.map((itemChild,idChild) => {
                                                                    return(
                                                                        <Link 
                                                                            key={idChild} className={cx('item-menu-link')} 
                                                                            onClick={(e) => handleSubmit(e, {brand : brand.name, style : itemChild}, itemChild)}
                                                                        >
                                                                            <span>
                                                                                {itemChild}
                                                                            </span>
                                                                        </Link>
                                                                    )
                                                                })}
                                                            </Wrapper>
                                                        </div>}
                                                    </div>
                                                )
                                            })}
                                            
                                        </div>
                                    </Wrapper>
                                </div>
                            </div>
                        )}
                    >
                        <div className={cx('btn-types')}>
                            <span>BRAND</span>
                            <i  className='bx bxs-chevron-down bx-fade-down' ></i>
                        </div>
                    </Tippy>
                </div>
                
                <NavLink className={(nav) => cx('item', { active: nav.isActive })} to={`${config.routes.newArrival}`}>
                    <span>NEW ARRIVAL</span>
                </NavLink>
                <NavLink className={(nav) => cx('item', { active: nav.isActive })} to={config.routes.inStoreOnly}>
                    <span>IN STORE ONLY</span>
                </NavLink>
                <NavLink className={(nav) => cx('item', { active: nav.isActive })} to={config.routes.specialPrice}>
                    <span>SPECIAL PRICE</span>
                </NavLink>
                <NavLink className={(nav) => cx('item', { active: nav.isActive })} to={config.routes.storeList}>
                    <span>STORE LIST</span>
                </NavLink>
                
            </div>
        </aside>
    )
}

export default Sidebar