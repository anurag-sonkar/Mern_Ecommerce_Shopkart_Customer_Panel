import axios from "axios";
import { products_base_url } from "../../utils/base_url";
import { config } from "../../utils/config";

const getAllProducts = async () => {
  const response = await axios.get(`${products_base_url}/`, config);
  return response.data;
};

const getProduct = async(id)=>{
  const response = await axios.get(`${products_base_url}/${id}` ,config)
  return response.data
}

const addToWishlist = async(id)=>{
  const response = await axios.put(`${products_base_url}/addtowishlist` ,{productId : id} ,config)
  console.log(response.data)
  return response.data
}

const productsService = {
  getAllProducts,
  addToWishlist,
  getProduct
};

export default productsService;
