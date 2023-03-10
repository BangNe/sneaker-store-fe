import config from '../cofig'
// import homeLayout 
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import Products from '../Pages/Products'
import Order from '../Pages/Order'
import SignUp from '../Pages/SignUp'
import LogIn from '../Pages/LogIn'
import ProductDetails from '../Pages/productDetails'

// public routes
const publicRoutes = [
    {path: config.routes.home, component: Home},
    {path: config.routes.cart, component: Cart},
    {path: config.routes.products, component: Products},
    {path: config.routes.productDetails, component: ProductDetails},
    {path: config.routes.signup, component: SignUp , layout : null},
    {path: config.routes.login, component: LogIn , layout : null}
]

// private routes
const privateRoutes = [
    {path: '/order', component: Order},
]

export {publicRoutes,privateRoutes}