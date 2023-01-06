import classNames from 'classnames/bind'
import {NavLink,Link} from 'react-router-dom'
import Tippy from '@tippyjs/react/headless'
import { useEffect, useState } from 'react'

import style from './Sidebar.module.scss'
import Wrapper from '../../../components/Menu/Wrapper'
import config from '../../../cofig'
import * as brandSevices from '../../../services/brandSevices'

const cx = classNames.bind(style)

function Sidebar() {
    const [showMenuTypes,setShowMenuTypes]= useState(false)
    const [brandResult,setBrandResult]= useState([])

    useEffect(()=> {
        const fetchApi = async () => {
            const result = await brandSevices.getBrand()

            setBrandResult(result)
        }
        fetchApi()
    },[])

    const handleShowMenuTypes = () => {
        setShowMenuTypes(false)
    }

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
                                            {brandResult.map((brand,id)=> {
                                                const isStyle = brand.style.length > 0
                                                return (
                                                    <div key={id} className={cx('item-menu')}>
                                                        <Link className={cx('item-menu-link')} to={`/products/${encodeURIComponent(brand.name)}`}>
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
                                                                            to={`/products/${encodeURIComponent(itemChild)}`}
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