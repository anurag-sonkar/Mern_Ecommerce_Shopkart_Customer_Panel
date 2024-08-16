import axios from "axios";
import { products_base_url } from "../../utils/base_url";
import { config } from "../../utils/config";

const getAllFilterProducts = async (data) => {
  const { category, brand, color , minPrice , maxPrice , tag ,star } = data;
  console.log(tag,star)

  const colorEncoded = color ? encodeURIComponent(color) : '';

  const response = await axios.get(`${products_base_url}?category=${category || ''}&brand=${brand || ''}&color=${colorEncoded}&minPrice=${minPrice||''}&maxPrice=${maxPrice||''}&tag=${tag||''}&totalrating=${star||''}`, config);

  return response.data;
};


const getAllProducts = async () => {
  const response = await axios.get(`${products_base_url}`, config);
  return response.data;
};

const getProduct = async(id)=>{
  const response = await axios.get(`${products_base_url}${id}` ,config)
  return response.data
}

const addToWishlist = async(id)=>{
  const response = await axios.put(`${products_base_url}addtowishlist` ,{productId : id} ,config)
  // console.log(response.data)
  return response.data
}

const addProductReview = async(data)=>{
  const response = await axios.put(`${products_base_url}rating` ,data ,config)
  return response.data
}

const productsService = {
  getAllProducts,
  addToWishlist,
  getProduct,
  addProductReview,
  getAllFilterProducts
};

export default productsService;
