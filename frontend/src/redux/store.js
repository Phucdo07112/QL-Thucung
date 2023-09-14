import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slides/productSlice'
import userReducer from './slides/userSlice'
import orderReducer from './slides/orderSlice'
export const store = configureStore({
  reducer: {
    search: productSlice,
    user: userReducer,
    order: orderReducer,
  },
})