import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:8080/'})

const checkout = async ()=>{
    const cartItems = localStorage.getItem('cart')
    // const response = await API.post('api/cart/checkout', cartItems)
    // if (response.data) {
    //     console.log(response.data)         
    // }
    // return response.data
    fetch("http://localhost:8080/api/cart/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Send along all the information about the items
        body: cartItems
      })
        .then(res => {
          if (res.ok) return res.json()
          // If there is an error then make sure we catch that
          return res.json().then(e => Promise.reject(e))
        })
        .then(({ url }) => {
          // On success redirect the customer to the returned URL
          window.location = url
        })
        .catch(e => {
          console.error(e.error)
        })
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
        return response.data.cartItems
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


const cartLogout = async() =>{
    localStorage.removeItem('cart')
}

const cartService = {
    checkout, getCart, updateCart, cartLogout
}

export default cartService