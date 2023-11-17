import classNames from 'classnames/bind'

import style from './MenuProducts.module.scss'
import Product from '../../../components/Product'
import Pagination from '../../../components/Pagination'

const cx = classNames.bind(style)

function MenuProducts({listProducts}) {

    return (
        <div className={cx('wrapper')}>
            <div className={cx('select')}>
                <h3>Ưu tiên xem:</h3>
                <div className={cx('checkbox-select')}>
                    <input type={'checkbox'}/>
                    <span>Giá tăng dần</span>
                </div>
                <div className={cx('checkbox-select')}>
                    <input type={'checkbox'}/>
                    <span>Giá giảm dần</span>
                </div>
            </div>
            <div className={cx('inner')}>
                {listProducts.map((item,id) => {
                    return (
                        <div key={id} className={cx('item')}>
                            <Product name={item.name} price={item.price} imgs={item.img} />
                        </div>
                    )
                })}
                <Pagination lengthListProduct={parseInt(listProducts.length)} />
            </div>
        </div>
    )
}

export default MenuProducts