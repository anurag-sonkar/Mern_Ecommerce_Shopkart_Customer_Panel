import axios from "axios";
import { getConfig } from "../../utils/config";
import { auth_base_url, products_base_url } from "../../utils/base_url";

const getWishlist = async ()=>{
  const response = await axios.get(`${auth_base_url}/wishlist` , getConfig())
  console.log(response)
  return response.data
}




const addToWishlist = async(id)=>{
  const response = await axios.put(`${products_base_url}/addtowishlist` ,{productId : id} ,getConfig())
  console.log(response)
  return response.data
}


const wishlistService = {
  getWishlist,
  addToWishlist,
  
};

export default wishlistService;
