import { memo, useState } from 'react'
import classNames from 'classnames/bind'

import style from './Pagination.module.scss'
import Button from '../Button'

const cx = classNames.bind(style)

function Pagination({lenghtPage}) {

    let arrIdPage = []

    const [idCurentPage,setIdCurrentPage] = useState(1)

    for (let index = 1; index <= lenghtPage; index++) {
        arrIdPage.push(index)
    }

    return (
        <div className={cx('wrapper')}>
            <Button primary small clipPathRight hiden={idCurentPage=== 1}><i className='bx bxs-chevron-left'></i></Button>
            <div className={cx('pagination-btns')}>
                {arrIdPage.map(id => {
                    return(
                        <Button 
                            white 
                            small 
                            autoMargin 
                            onClick={() => {
                                setIdCurrentPage(id)
                                window.scrollTo(0, 0)
                            }} 
                            key={id}
                            active = {idCurentPage === id}
                        >
                            {id}
                        </Button>
                    )
                })}
            </div>
            <Button other small clipPathLeft hiden={idCurentPage=== lenghtPage}><i className='bx bxs-chevron-right'></i></Button>
        </div>
    )
}

export default memo(Pagination)