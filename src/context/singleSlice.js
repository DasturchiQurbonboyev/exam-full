import { createSlice } from '@reduxjs/toolkit'

export const singleSlice = createSlice({
    name: 'single',
    initialState: {
        value: JSON.parse(localStorage.getItem("single")) || []
    },
    reducers: {
        toggleSingle(state, { payload }) {
            let index = state.value.findIndex((el) => el.id === payload.id)
            if (index < 0) {
                state.value = [payload]
            } else {
                state.value = state.value.filter((el) => el.id !== payload.id)
            }
            localStorage.setItem("single", JSON.stringify(state.value))
        },
        incCart(state, action) {
            let index = state.value.findIndex(el => el.id === action.payload.id)
            state.value = state.value.map((product, inx) => {
                if (index === inx) {
                    return { ...product, quantity: product.quantity + 1 }
                } else {
                    return product
                }
            })
            localStorage.setItem("cart", JSON.stringify(state.value))

        },
        decCart(state, action) {
            let index = state.value.findIndex(el => el.id === action.payload.id)
            state.value = state.value.map((product, inx) => {
                if (index === inx) {
                    return { ...product, quantity: product.quantity - 1 }
                } else {
                    return product
                }
            })
            localStorage.setItem("cart", JSON.stringify(state.value))
        }
    },
})

export const { toggleSingle, incCart, decCart } = singleSlice.actions

export default singleSlice.reducer