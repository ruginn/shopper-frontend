import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:8080/'})

const register = async (userData) => {
    const response = await API.post('api/auth/register', userData)

    if(response.data) {
        localStorage.setItem('auth', JSON.stringify(response.data))
    }
    return response.data
}


const authServices = {
    register
}

export default authServices