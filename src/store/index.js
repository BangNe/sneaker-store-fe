import { configureStore } from '@reduxjs/toolkit'

import brandReducer from './slice/brandSlice'
import bannerReducer from './slice/bannerSlice'
import userReducer from './slice/userSlice'
import productReducer from './slice/productSlice'

const store = configureStore({
  reducer: {
    brand : brandReducer,
    banner : bannerReducer,
    user : userReducer,
    product : productReducer
  },
})

export default store