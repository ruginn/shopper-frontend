import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:8080/'})

const register = async (userData) => {
    const response = await API.post('api/auth/register', userData)

    if(response.data) {
        localStorage.setItem('auth', JSON.stringify(response.data))
    }
    return response.data
}

const login = async (userData) => {
    const response = await API.post('api/auth/login', userData)

    if(response.data) {
        localStorage.setItem('auth', JSON.stringify(response.data))
    }
    return response.data
}

const logout = async(userData) =>{
    localStorage.removeItem('auth')
}


const authServices = {
    register, login, logout
}

export default authServices