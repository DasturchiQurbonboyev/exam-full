import { configureStore } from '@reduxjs/toolkit'
import wishlistSlice from './wishlistSlice'
import singleSlice from './singleSlice'
import cartSlice from './cartSlice'

export const store = configureStore({
    reducer: {
        wishlist: wishlistSlice,
        single: singleSlice,
        cart: cartSlice
    },
})