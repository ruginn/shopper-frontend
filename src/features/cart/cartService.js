import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:8080/'})

const checkout = async ()=>{
    const cartItems = localStorage.getItem('cart')
    const response = await API.post('api/cart/checkout', cartItems)
    if (response.data) {
        console.log(response.data)         
    }
    return response.data
}


const getCart = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await API.get('api/cart/getcart', config , config)
    if (response.data){
        console.log(response.data.cartItems)
        localStorage.setItem('cart', JSON.stringify(response.data.cartItems))
        // localStorage.setItem('cart', response.data.cartItems)
    }
}

const updateCart = async (cartInfo, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await API.put('api/cart/updatecart', cartInfo, config)
    if (response.data){
        console.log(response.data)
        
    }
}

const cartService = {
    checkout, getCart, updateCart
}

export default cartService