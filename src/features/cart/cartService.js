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

const cartService = {
    checkout
}

export default cartService