import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import Products from '../Pages/Products'
import Order from '../Pages/Order'

// public routes
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/cart', component: Cart},
    {path: '/products', component: Products},
]

// private routes
const privateRoutes = [
    {path: '/order', component: Order},
]

export {publicRoutes,privateRoutes}