import classNames from 'classnames/bind'

import style from './MenuProducts.module.scss'
import Product from '../../../components/Product'
import Pagination from '../../../components/Pagination'

const cx = classNames.bind(style)

const data = [
    {
      "_id": "63b6e262e1af87bc42c34edb",
      "img": [
        "https://product.hstatic.net/200000265619/product/m3310c-1_5d285682075f4ca4960f58c44059a76f_medium.jpg",
        "https://product.hstatic.net/200000265619/product/m3310c-2_6d745e8762e5416eba192f21fe9b2171_medium.jpg",
        "https://product.hstatic.net/200000265619/product/m3310c-3_655d5d799e2041c68030b8093455a664_medium.jpg",
        "https://product.hstatic.net/200000265619/product/m3310c-4_5a815106aeb04dbb99c73582e5153c42_medium.jpg",
        "https://product.hstatic.net/200000265619/product/m3310v-0_32587e68d19d4d8aa10ce1d2e46b8163_medium.jpg"
      ],
      "name": "Giày Converse Chuck Taylor All Star Classic Hi Top",
      "price": 1550000,
      "info": {
        "sku": "M3310V",
        "gender": "unisex",
        "color": "Black",
        "warranty": "1 tháng",
        "accessory": "Vớ Tặng + Shopping Bag + HĐ Mua Hàng",
        "type": "Chuck Taylor All Star Classic "
      },
      "brand": "converse",
      "style": "clasic",
      "type": "giày",
      "season": "không",
      "size": [
        {
          "num": "35",
          "quantity": "4"
        },
        {
          "num": "36",
          "quantity": "5"
        }
      ]
    },
    {
      "_id": "63b84ef48d9b1ada2e6f44c1",
      "img": [
        "https://product.hstatic.net/200000265619/product/77351-116-m-thumb-web_8749b09f6ceb4403b7fd93d7938cd14e_medium.jpg",
        "https://product.hstatic.net/200000265619/product/77351-116-m-03_db9f2ae4df00459a9e97b67f90862a1b_medium.jpg"
      ],
      "name": "Giày Palladium Pallashock Mid Tte",
      "price": 2525000,
      "info": {
        "sku": "77354-116-M",
        "gender": "UNISEX",
        "color": "STAR WHITE",
        "warranty": "1 Tháng",
        "accessory": "Vớ Tặng + Shopping Bag + HĐ Mua Hàng",
        "type": "Pallashock Mid TTE"
      },
      "brand": "palladium",
      "style": "pampa",
      "season": "không",
      "size": [
        {
          "num": "35",
          "quantity": "2"
        },
        {
          "num": "36",
          "quantity": "3"
        }
      ],
      "type": "giày"
    },
    {
      "_id": "63b852428d9b1ada2e6f44c2",
      "img": [
        "https://product.hstatic.net/200000265619/product/77355-259-m-thumb-web_396e6470fa0a4fdda6adea33a8c1e528_medium.jpg"
      ],
      "name": "Giày Palladium Pampa Eco-Versary 75",
      "price": 3333333,
      "info": {
        "sku": "M3310V",
        "gender": "unsex",
        "color": "white",
        "warranty": "1 thang",
        "accessory": "asdasd",
        "type": "asdas"
      },
      "brand": "palladium",
      "style": "waterproof",
      "type": "giày",
      "season": "không",
      "size": [
        {
          "num": "35",
          "quantity": 2
        }
      ]
    },
    {
      "_id": "63b854f802b7c257481bb09b",
      "img": [
        "https://product.hstatic.net/200000265619/product/vn0a5fcbnav-web1_fa538e8e56dc42869dcaa83b3f7f909a_medium.jpg"
      ],
      "name": "Giày Vans Skate Old Skool",
      "price": 2323444,
      "info": {
        "sku": "abc",
        "gender": "abc",
        "color": "abc",
        "warranty": "abc",
        "accessory": "abc",
        "type": "acb"
      },
      "brand": "vans",
      "style": "old skool",
      "type": "giày",
      "season": "không",
      "size": [
        {
          "num": "35",
          "quantity": 36
        }
      ]
    },
    {
      "_id": "63b856cf02b7c257481bb09c",
      "img": [
        "https://product.hstatic.net/200000265619/product/vn0a4bvu448-web1_48ebcc7b761643c88180c885bb30c708_medium.jpg"
      ],
      "name": "Giày Vans Ua Era Patchwork Trippy Cord",
      "price": 23000000,
      "info": {
        "sku": "a",
        "color": "c",
        "warranty": "d",
        "accessory": "d",
        "type": "e",
        "gender": "b"
      },
      "brand": "vans",
      "style": "era",
      "type": "giày",
      "season": "không",
      "size": [
        {
          "num": "35",
          "quantity": 3
        }
      ]
    },
    {
      "_id": "63b8583702b7c257481bb09d",
      "img": [
        "https://product.hstatic.net/200000265619/product/1sb0015-thumb-web_4aa7d52187734383abda809669cb59b4_medium.jpg"
      ],
      "name": "Dép Sneaker Buzz Seasonal Sandals",
      "price": 1110000,
      "info": {
        "sku": "a",
        "gender": "a",
        "color": "c",
        "warranty": "b",
        "accessory": "a",
        "type": "c"
      },
      "brand": "sneaker buzz",
      "type": "dép",
      "season": "",
      "size": [
        {
          "num": "35",
          "quantity": 3
        }
      ],
      "style": ""
    },
    {
      "_id": "63b85a6202b7c257481bb09e",
      "img": [
        "https://product.hstatic.net/200000265619/product/07776-103-m-thumb-web_0a157ba56f214934b50ac67625b00d8d_medium.jpg"
      ],
      "name": "Giày K-Swiss Court Vittora .5",
      "price": 20000,
      "info": {
        "sku": "a",
        "gender": "b",
        "color": "a",
        "warranty": "d",
        "accessory": "a",
        "type": "a"
      },
      "brand": "k-swiss",
      "type": "giày",
      "season": "",
      "size": [
        {
          "num": "37",
          "quantity": 1
        }
      ],
      "style": ""
    },
    {
      "_id": "63b85ba802b7c257481bb09f",
      "img": [
        "https://product.hstatic.net/200000265619/product/dc4244-601-01_05887acbe5924fcd905e3d0b207a28cd_medium.jpg"
      ],
      "name": "Balo Nike Nk Heritage Bkpk",
      "price": 321000,
      "info": {
        "sku": "1",
        "gender": "2",
        "color": "3",
        "warranty": "q",
        "accessory": "1",
        "type": "5"
      },
      "brand": "nike",
      "style": "",
      "type": "balo",
      "season": "",
      "size": [
        {
          "num": "1",
          "quantity": 3
        }
      ]
    },
    {
        "_id": "63b6e262e1af87bc42c34edb",
        "img": [
          "https://product.hstatic.net/200000265619/product/m3310c-1_5d285682075f4ca4960f58c44059a76f_medium.jpg",
          "https://product.hstatic.net/200000265619/product/m3310c-2_6d745e8762e5416eba192f21fe9b2171_medium.jpg",
          "https://product.hstatic.net/200000265619/product/m3310c-3_655d5d799e2041c68030b8093455a664_medium.jpg",
          "https://product.hstatic.net/200000265619/product/m3310c-4_5a815106aeb04dbb99c73582e5153c42_medium.jpg",
          "https://product.hstatic.net/200000265619/product/m3310v-0_32587e68d19d4d8aa10ce1d2e46b8163_medium.jpg"
        ],
        "name": "Giày Converse Chuck Taylor All Star Classic Hi Top",
        "price": 1550000,
        "info": {
          "sku": "M3310V",
          "gender": "unisex",
          "color": "Black",
          "warranty": "1 tháng",
          "accessory": "Vớ Tặng + Shopping Bag + HĐ Mua Hàng",
          "type": "Chuck Taylor All Star Classic "
        },
        "brand": "converse",
        "style": "clasic",
        "type": "giày",
        "season": "không",
        "size": [
          {
            "num": "35",
            "quantity": "4"
          },
          {
            "num": "36",
            "quantity": "5"
          }
        ]
      },
      {
        "_id": "63b84ef48d9b1ada2e6f44c1",
        "img": [
          "https://product.hstatic.net/200000265619/product/77351-116-m-thumb-web_8749b09f6ceb4403b7fd93d7938cd14e_medium.jpg",
          "https://product.hstatic.net/200000265619/product/77351-116-m-03_db9f2ae4df00459a9e97b67f90862a1b_medium.jpg"
        ],
        "name": "Giày Palladium Pallashock Mid Tte",
        "price": 2525000,
        "info": {
          "sku": "77354-116-M",
          "gender": "UNISEX",
          "color": "STAR WHITE",
          "warranty": "1 Tháng",
          "accessory": "Vớ Tặng + Shopping Bag + HĐ Mua Hàng",
          "type": "Pallashock Mid TTE"
        },
        "brand": "palladium",
        "style": "pampa",
        "season": "không",
        "size": [
          {
            "num": "35",
            "quantity": "2"
          },
          {
            "num": "36",
            "quantity": "3"
          }
        ],
        "type": "giày"
      },
      {
        "_id": "63b852428d9b1ada2e6f44c2",
        "img": [
          "https://product.hstatic.net/200000265619/product/77355-259-m-thumb-web_396e6470fa0a4fdda6adea33a8c1e528_medium.jpg"
        ],
        "name": "Giày Palladium Pampa Eco-Versary 75",
        "price": 3333333,
        "info": {
          "sku": "M3310V",
          "gender": "unsex",
          "color": "white",
          "warranty": "1 thang",
          "accessory": "asdasd",
          "type": "asdas"
        },
        "brand": "palladium",
        "style": "waterproof",
        "type": "giày",
        "season": "không",
        "size": [
          {
            "num": "35",
            "quantity": 2
          }
        ]
      },
      {
        "_id": "63b854f802b7c257481bb09b",
        "img": [
          "https://product.hstatic.net/200000265619/product/vn0a5fcbnav-web1_fa538e8e56dc42869dcaa83b3f7f909a_medium.jpg"
        ],
        "name": "Giày Vans Skate Old Skool",
        "price": 2323444,
        "info": {
          "sku": "abc",
          "gender": "abc",
          "color": "abc",
          "warranty": "abc",
          "accessory": "abc",
          "type": "acb"
        },
        "brand": "vans",
        "style": "old skool",
        "type": "giày",
        "season": "không",
        "size": [
          {
            "num": "35",
            "quantity": 36
          }
        ]
      },
      {
        "_id": "63b856cf02b7c257481bb09c",
        "img": [
          "https://product.hstatic.net/200000265619/product/vn0a4bvu448-web1_48ebcc7b761643c88180c885bb30c708_medium.jpg"
        ],
        "name": "Giày Vans Ua Era Patchwork Trippy Cord",
        "price": 23000000,
        "info": {
          "sku": "a",
          "color": "c",
          "warranty": "d",
          "accessory": "d",
          "type": "e",
          "gender": "b"
        },
        "brand": "vans",
        "style": "era",
        "type": "giày",
        "season": "không",
        "size": [
          {
            "num": "35",
            "quantity": 3
          }
        ]
      },
      {
        "_id": "63b8583702b7c257481bb09d",
        "img": [
          "https://product.hstatic.net/200000265619/product/1sb0015-thumb-web_4aa7d52187734383abda809669cb59b4_medium.jpg"
        ],
        "name": "Dép Sneaker Buzz Seasonal Sandals",
        "price": 1110000,
        "info": {
          "sku": "a",
          "gender": "a",
          "color": "c",
          "warranty": "b",
          "accessory": "a",
          "type": "c"
        },
        "brand": "sneaker buzz",
        "type": "dép",
        "season": "",
        "size": [
          {
            "num": "35",
            "quantity": 3
          }
        ],
        "style": ""
      },
      {
        "_id": "63b85a6202b7c257481bb09e",
        "img": [
          "https://product.hstatic.net/200000265619/product/07776-103-m-thumb-web_0a157ba56f214934b50ac67625b00d8d_medium.jpg"
        ],
        "name": "Giày K-Swiss Court Vittora .5",
        "price": 20000,
        "info": {
          "sku": "a",
          "gender": "b",
          "color": "a",
          "warranty": "d",
          "accessory": "a",
          "type": "a"
        },
        "brand": "k-swiss",
        "type": "giày",
        "season": "",
        "size": [
          {
            "num": "37",
            "quantity": 1
          }
        ],
        "style": ""
      },
      {
        "_id": "63b85ba802b7c257481bb09f",
        "img": [
          "https://product.hstatic.net/200000265619/product/dc4244-601-01_05887acbe5924fcd905e3d0b207a28cd_medium.jpg"
        ],
        "name": "Balo Nike Nk Heritage Bkpk",
        "price": 321000,
        "info": {
          "sku": "1",
          "gender": "2",
          "color": "3",
          "warranty": "q",
          "accessory": "1",
          "type": "5"
        },
        "brand": "nike",
        "style": "",
        "type": "balo",
        "season": "",
        "size": [
          {
            "num": "1",
            "quantity": 3
          }
        ]
      },
]

function MenuProducts() {

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
                {data.map((item,id) => {
                    return (
                        <div key={id} className={cx('item')}>
                            <Product name={item.name} price={item.price} imgs={item.img} />
                        </div>
                    )
                })}
                <Pagination lenghtPage={5} />
            </div>
        </div>
    )
}

export default MenuProducts