import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'

import style from './Search.module.scss'
import Wrapper from '../../../../components/Menu/Wrapper'
import Button from '../../../../components/Button'

const cx = classNames.bind(style)

function Search() {
    return (
        <div>
            <Tippy
                placement = {'bottom-start'}
                interactive = {true}
                visible = {true}
                render={attrs => (
                    <div className="box" tabIndex="-1" {...attrs}>
                       <div className={cx('menu-search')}>
                            <Wrapper>
                                <h3 className={cx('title-menu')}>SẢN PHẨM HÀNG ĐẦU</h3>
                                <div className={cx('list')}>
                                    <div className={cx('item')}>
                                        <div className={cx('item-img')}>
                                            <img src='https://contents.mediadecathlon.com/p207647/k$2586dfd49665dd378518222c7093088e/image.jpg?f=98x98' alt=' '/>
                                        </div>
                                        <div className={cx('item-info')}>
                                            <h4 className={cx('item-name')}>asdasdsadasdsadasdasdasdasasdasdsaasdsad</h4>
                                            <Button primary medium clipPathRight to = '/cart'>100.100</Button>
                                        </div>
                                    </div>
                                    <div className={cx('item')}>
                                        <div className={cx('item-img')}>
                                            <img src='https://contents.mediadecathlon.com/p207647/k$2586dfd49665dd378518222c7093088e/image.jpg?f=98x98' alt=' '/>
                                        </div>
                                        <div className={cx('item-info')}>
                                            <h4 className={cx('item-name')}>asdasdsadasdsadasdasdasdasasdasdsaasdsad</h4>
                                            <Button primary medium clipPathRight to = '/cart'>asd</Button>
                                        </div>
                                    </div>
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
                    <input className={cx('input')} placeholder='Tìm kiếm sản phẩm ...'/>
                    <div className={cx('load')} >
                        <i className='bx bx-loader-alt' ></i>
                    </div>
                    {/* <div className={cx('clear')} >
                        <i className='bx bxs-x-circle' ></i>
                    </div> */}
                </div>
            </Tippy>
        </div>
    )
}

export default Search