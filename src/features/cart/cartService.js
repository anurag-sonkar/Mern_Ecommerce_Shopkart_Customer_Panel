import axios from "axios";
import { cart_base_url } from "../../utils/base_url"; 
import { config } from "../../utils/config"; 

const addToCart = async (cart) => {

    const response = await axios.post(`${cart_base_url}`, cart, config);
    console.log(response)
    return response.data;
};
const getCart = async () => {

    const response = await axios.get(`${cart_base_url}`, config);
    return response.data;
};
const deleteCartProduct = async (id) => {

    const response = await axios.delete(`${cart_base_url}/${id}`, config);
    return response.data;
};

const deleteAllCartProduct = async () => {

    const response = await axios.delete(`${cart_base_url}`, config);
    console.log(response.data)
    return response.data;
};


const cartService = {
    addToCart,getCart,deleteCartProduct,deleteAllCartProduct
};

export default cartService;