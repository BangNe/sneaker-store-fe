import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'

import style from './Product.module.scss'
import Button from '../Button'

const cx = classNames.bind(style)

function Product() {
    return (
        <Link className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('img')}>
                    <img src='https://product.hstatic.net/200000265619/product/vn0a7tnmkcz-web1_df5c279beae64f1888c3cc5a4aafb290_medium.jpg' alt=''/>
                </div>
                <h5>Áo Vans 2022 Pipe Masters Ss Teesadasadsadsađâsđâsđá</h5>
            </div>
            <div className={cx('price')}>
                <Button primary medium clipPathRight>3.300.000đ</Button>
            </div>
        </Link>
    )
}

export default Product