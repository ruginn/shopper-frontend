import {createSlice} from '@reduxjs/toolkit'

const itemsInCart = (JSON.parse(localStorage.getItem('cart')))
let sum = 0
if (itemsInCart){
    for (let i = 0; i <= itemsInCart.length -1; i++){

      let itemCost = Number(itemsInCart[i].qtyData) * Number(itemsInCart[i].unitCost)
      sum += itemCost
    }
  }
const initialState = {
    cartItems: 0, 
    elementsInCart: itemsInCart,
    total: sum,
}

export const cartSlice = createSlice({
    name: 'cart', 
    initialState, 
    reducers: {
        addItem: (state, info) => {
            let pastItems, sameElement
            if (localStorage.getItem('cart')){
                pastItems = (JSON.parse(localStorage.getItem('cart')))
                const checkItems = pastItems.map((item) =>{
                    if (item.element.toLowerCase() === info.payload.element.toLowerCase()){
                        item.qtyData += Number(info.payload.qtyData)
                        if (item.qtyData >= 9){
                            item.maxQty = true
                            item.qtyData = 9
                        }
                        return item
                    }else{
                        return item
                    }
                })
                sameElement = pastItems.filter(element => element.element === info.payload.element)
                if(sameElement.length === 0){
                    checkItems.push(info.payload)
                }
                state.elementsInCart = checkItems
                localStorage.setItem('cart', JSON.stringify(checkItems))
            }else {
                // state.total = Number(info.payload.qtyData) * Number(info.payload.unitCost)
                state.elementsInCart = [info.payload]
                localStorage.setItem('cart', JSON.stringify([info.payload]))
            }
            if (sameElement && sameElement[0]?.maxQty){

            } else{
                state.total += Number(info.payload.qtyData) * Number(info.payload.unitCost)
            }
            // state.total += Number(info.payload.qtyData) * Number(info.payload.unitCost)
            const cartItem = JSON.parse(localStorage.getItem('cart'))
            let totalItems = 0
            for (let i = 0; i < cartItem.length; i++){
                totalItems += Number(cartItem[i].qtyData)
            }
            state.cartItems = totalItems
        },
        getItems: (state) =>{
            let cartItem
            if (localStorage.getItem('cart')){
                cartItem = JSON.parse(localStorage.getItem('cart'))
                let totalItems = 0
                for (let i = 0; i < cartItem.length; i++){
                    totalItems += Number(cartItem[i].qtyData)
                }
                // if (cartItem){
                //     for (let i = 0; i <= cartItem.length -1; i++){
              
                //       let itemCost = Number(cartItem[i].qtyData) * Number(cartItem[i].unitCost)
                //       state.total += itemCost
                //     }
                //   }  
             state.cartItems = totalItems
            }else{
                state.cartItems = 0
            }
            state.elementsInCart = cartItem
        },
        removeItem: (state, info) => {
            let pastItems, otherElements
            if (localStorage.getItem('cart')){
                pastItems = (JSON.parse(localStorage.getItem('cart')))
                let sameElement = pastItems.filter(element => element.element === info.payload.element)
                otherElements = pastItems.filter(element => element.element !== info.payload.element)
                state.total -= Number(sameElement[0].qtyData) * Number(sameElement[0].unitCost)
                state.cartItems -= Number(sameElement[0].qtyData)
                localStorage.setItem('cart', JSON.stringify(otherElements))
            }
            state.elementsInCart = otherElements
        },
        changeQty: (state, info) => {
            let pastItems = (JSON.parse(localStorage.getItem('cart')))
            const newList = pastItems.map((element) => {
                if (element.element == info.payload.element){
                    state.total -= (element.qtyData * element.unitCost)
                    state.cartItems -= element.qtyData
                    element.qtyData = info.payload.qtyData 
                    state.cartItems += info.payload.qtyData
                    state.total += (element.qtyData * element.unitCost)
                    if (element.qtyData >= 9){
                        element.maxQty = true
                    } else {
                        element.maxQty = false 
                    }
                }
                return element
            })
            localStorage.setItem('cart', JSON.stringify(newList))
            state.elementsInCart = newList
        }
    }
})

export const {addItem, getItems,removeItem, changeQty} = cartSlice.actions
export default cartSlice.reducer;