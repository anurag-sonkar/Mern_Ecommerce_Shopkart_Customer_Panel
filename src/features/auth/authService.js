import axios from "axios";
import { auth_base_url } from "../../utils/base_url";
import { getConfig } from "../../utils/config";

const login = async (userData) => {
    const response = await axios.post(`${auth_base_url}/auth/login`, userData);

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data.result; 
}

const signOut = async ()=>{
    const response = await axios.put(`${auth_base_url}/logout`,{}, getConfig())
    if(response.data){
        if(localStorage.getItem('user')) {
            // localStorage.removeItem('user')
            localStorage.clear()
          }

    }
    return response.data
    
}

const register = async (data)=>{
    const response = await axios.post(`${auth_base_url}/auth/register`, data ,{
        headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data.result


}

// const getWishlist = async ()=>{
//     const response = await axios.get(`${auth_base_url}/wishlist` , getConfig())
//     return response.data
// }

const forgotPassword = async (data)=>{
    const response = await axios.post(`${auth_base_url}/auth/forgot-password` , data)
    return response.data
}

const resetPassword = async (data)=>{
    try {
        const {password ,token} = data
    const response = await axios.put(`${auth_base_url}/auth/reset-password/${token}` , {password})
    console.log(response)
    return response.data
    } catch (error) {
        return error.message
        
    }
}


const authService = {
    login,signOut,register,forgotPassword,resetPassword
}

export default authService;
