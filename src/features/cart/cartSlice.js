import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import cartService from './cartService'

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
    isLoading: false, 
    isSuccess: false, 
    isError: false
}


//  get cart items if logged in 
export const getCartItems = createAsyncThunk('cart/getItems', async(_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await cartService.getCart(token)
    } catch (error) {
        
    }
})

// update cart items if logged in 
export const updateCartItems = createAsyncThunk('cart/update', async(cartInfo, thunkAPI) => {
    try {
        const cartInfo = (JSON.parse(localStorage.getItem('cart')))
        const token = thunkAPI.getState().auth.user.token
        return await cartService.updateCart(cartInfo, token)
    } catch (error) {

    }
})

export const logoutCart = createAsyncThunk('cart/logout', async() => {
    await cartService.cartLogout()
})

// create checkout session
export const checkoutSession = createAsyncThunk('cart/checkout', async(items, thunkAPI) => {
    try{
        console.log(items)
        return await cartService.checkout(items)

    } catch (error) {
        const message = error?.response?.data?.toString()
        return thunkAPI.rejectWithValue(message)
    }
} )



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
    }, 
    extraReducers: (builder) => {
        builder 
            .addCase(getCartItems.pending, (state) => {
                console.log('loadin')
                state.isLoading = true
            })
            .addCase(getCartItems.fulfilled, (state, action) => {
                state.isLoading = false
                console.log(action.payload)
                let count = 0
                let total = 0
                action.payload.map((element) => {
                    count += element.qtyData 
                    total += element.unitCost * element.qtyData
                })
                state.cartItems = count
                state.total = total
                state.elementsInCart = action.payload
            })
            .addCase(getCartItems.rejected, (state, action) => {
                state.isError = true
            })
            .addCase(logoutCart.fulfilled, (state, action) => {
                state.cartItems = 0
                state.total = 0
                state.elementsInCart = []
            })
    }
})

export const {addItem, getItems,removeItem, changeQty} = cartSlice.actions
export default cartSlice.reducer;