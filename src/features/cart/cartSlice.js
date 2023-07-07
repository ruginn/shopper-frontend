import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cartItems: 0
}

export const cartSlice = createSlice({
    name: 'cart', 
    initialState, 
    reducers: {
        addItem: (state, info) => {
            let pastItems
            if (localStorage.getItem('cart')){
                console.log('hello')
                pastItems = JSON.parse(localStorage.getItem('cart'))
                pastItems.push(info.payload.name)
                localStorage.setItem('cart', JSON.stringify(pastItems))
            }else {
                localStorage.setItem('cart', [info.payload.name])
            }
            state.cartItems += 1
        }
    }
})

export const {addItem} = cartSlice.actions
export default cartSlice.reducer;