import axios from "axios";
import { cart_base_url } from "../../utils/base_url";
import { getConfig } from "../../utils/config";
// import { config } from "../../utils/config";

const addToCart = async (cart) => {
  const response = await axios.post(`${cart_base_url}`, cart, getConfig());
  return response.data;
};
const getCart = async () => {
  const response = await axios.get(`${cart_base_url}`, getConfig());
  return response.data;
};
const deleteCartProduct = async (id) => {
  const response = await axios.delete(`${cart_base_url}/${id}`, getConfig());
  return response.data;
};

const deleteAllCartProduct = async () => {
  const response = await axios.delete(`${cart_base_url}`, getConfig());
  return response.data;
};

const cartService = {
  addToCart,
  getCart,
  deleteCartProduct,
  deleteAllCartProduct,
};

export default cartService;
