import config from '../cofig'
// import homeLayout 
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import Products from '../Pages/Products'
import Order from '../Pages/Order'

// public routes
const publicRoutes = [
    {path: config.routes.home, component: Home},
    {path: config.routes.cart, component: Cart},
    {path: config.routes.products, component: Products},
]

// private routes
const privateRoutes = [
    {path: '/order', component: Order},
]

export {publicRoutes,privateRoutes}