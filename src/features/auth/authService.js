import axios from "axios";
import { auth_base_url } from "../../utils/base_url";
import { config } from "../../utils/config";

const login = async (userData) => {
    // console.log(userData)
    const response = await axios.post(`${auth_base_url}/auth/login`, userData);
    console.log(response)

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data.result; 
}

const signOut = async ()=>{
    const response = await axios.put(`${auth_base_url}/logout`,{}, config)
    if(response.data){
        if(localStorage.getItem('user')) {
            localStorage.removeItem('user')
          }
    }
    // console.log(response.data)
    return response.data
    
}

const register = async (data)=>{
    const response = await axios.post(`${auth_base_url}/auth/register`, data ,{
        headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log(response)
    return response.data.result


}

const getWishlist = async ()=>{
    const response = await axios.get(`${auth_base_url}/wishlist` , config)
    console.log(response)
    return response.data
}




const authService = {
    login,signOut,register,getWishlist
}

export default authService;