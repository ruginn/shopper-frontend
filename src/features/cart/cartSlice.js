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
                pastItems = (JSON.parse(localStorage.getItem('cart')))
                // pastItems.push(info.payload)
                const sameElement = pastItems.filter(element => element.element === info.payload.element)
                console.log(sameElement.length)
                if (sameElement.length === 1){                   
                    let numVal = Number(sameElement[0].qtyData) + Number(info.payload.qtyData)
                    sameElement[0].qtyData = numVal
                } else{
                    pastItems.push(info.payload) 
                }
                // sameElement[0].qtyData += info.payload.qtyData
                console.log(sameElement[0])
                console.log(pastItems)
                const otherElements = pastItems.filter(element => element.element !== info.payload.element)
                if (sameElement[0]){
                    pastItems = [...otherElements, sameElement[0]]
                }
                localStorage.setItem('cart', JSON.stringify(pastItems))
            }else {
                localStorage.setItem('cart', JSON.stringify([info.payload]))
            }
            const cartItem = JSON.parse(localStorage.getItem('cart'))
            // const cartItemVal = JSON.parse(cartItem).length
            let totalItems = 0
            for (let i = 0; i < cartItem.length; i++){
                totalItems += Number(cartItem[i].qtyData)
            }
            state.cartItems = totalItems
        },
        getItems: (state) =>{
            if (localStorage.getItem('cart')){
                const cartItem = JSON.parse(localStorage.getItem('cart'))
            let totalItems = 0
            for (let i = 0; i < cartItem.length; i++){
                totalItems += Number(cartItem[i].qtyData)
            }
            state.cartItems = totalItems

            }else{
                state.cartItems = 0
            }

        },
    }
})

export const {addItem, getItems} = cartSlice.actions
export default cartSlice.reducer;