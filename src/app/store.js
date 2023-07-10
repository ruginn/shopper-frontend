import {configureStore} from '@reduxjs/toolkit'
import authReducers from '../features/auth/authSlice'
import cartReducers from '../features/cart/cartSlice'
import generalReducers from '../features/general'

export const store = configureStore({
    reducer: {
        auth: authReducers,
        cart: cartReducers,
        general: generalReducers, 
    }
})