import config from '../cofig'

// no layout
import SignUp from '../Pages/SignUp'
import LogIn from '../Pages/LogIn'
import Pay from '../Pages/Pay'
// import homeLayout 
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import Products from '../Pages/Products'
import Order from '../Pages/Order'
import ProductDetails from '../Pages/productDetails'

//import userLayout
import InfoUser from '../Pages/InfoUser'
import AddressUser from '../Pages/AddressUser'
import OrderUser from '../Pages/OrderUser'

//import adminLayout
import Account from '../Pages/Account'

// public routes
const publicRoutes = [
    {path: config.routes.home, component: Home},
    {path: config.routes.cart, component: Cart},
    {path: config.routes.products, component: Products},
    {path: config.routes.productDetails, component: ProductDetails},
    {path: config.routes.signup, component: SignUp , layout : null},
    {path: config.routes.login, component: LogIn , layout : null},
    {path: config.routes.pay, component: Pay, layout: null},
    {path: config.routes.infoUser, component: InfoUser, layout: 'user'},
    {path: config.routes.addressUser, component: AddressUser, layout: 'user'},
    {path: config.routes.orderUser, component: OrderUser, layout: 'user'},
    {path: config.routes.account, component: Account, layout: 'admin'},
]

// private routes
const privateRoutes = [
    {path: '/order', component: Order},
]

export {publicRoutes,privateRoutes}