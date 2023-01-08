import { configureStore } from '@reduxjs/toolkit'

import brandReducer from './slice/brandSlice'
import bannerReducer from './slice/bannerSlice'
import userReducer from './slice/userSlice'

const store = configureStore({
  reducer: {
    brand : brandReducer,
    banner : bannerReducer,
    user : userReducer
  },
})

export default store