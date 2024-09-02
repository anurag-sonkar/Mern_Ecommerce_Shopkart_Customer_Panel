import axios from "axios";
import { products_base_url } from "../../utils/base_url";
import { getConfig } from "../../utils/config";
// import { config } from "../../utils/config";

const getAllFilterProducts = async (data) => {
  const { category, brand, color , minPrice , maxPrice , tag ,star,sortBy,sortOrder , limit , page} = data;

  const colorEncoded = color ? encodeURIComponent(color) : '';

  const response = await axios.get(`${products_base_url}?category=${category || ''}&brand=${brand || ''}&color=${colorEncoded}&minPrice=${minPrice||''}&maxPrice=${maxPrice||''}&tag=${tag||''}&totalrating=${star||''}&sortBy=${sortBy||''}&sortOrder=${sortOrder}&limit=${limit||''}&page=${page||''}`, getConfig());

  console.log(response.data)

};


const getAllProducts = async () => {
  const response = await axios.get(`${products_base_url}`, getConfig());
  return response.data;
};

const getProduct = async(id)=>{
  const response = await axios.get(`${products_base_url}${id}` ,getConfig())
  return response.data
}

// const addToWishlist = async(id)=>{
//   const response = await axios.put(`${products_base_url}addtowishlist` ,{productId : id} ,getConfig())
//   console.log(response.data)
//   return response.data
// }

const addProductReview = async(data)=>{
  const response = await axios.put(`${products_base_url}rating` ,data ,getConfig())
  return response.data
}

const productsService = {
  getAllProducts,
  getProduct,
  addProductReview,
  getAllFilterProducts
};

export default productsService;
