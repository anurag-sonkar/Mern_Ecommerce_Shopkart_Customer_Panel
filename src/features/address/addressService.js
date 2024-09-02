import axios from "axios";
import { address_base_url } from "../../utils/base_url"; 
import { getConfig } from "../../utils/config";
// import { config } from "../../utils/config"; 

const createNewAddress = async (formData) => {
    const response = await axios.post(`${address_base_url}/`, formData, getConfig());
    return response.data;
};

const getAllAddress = async () => {
    
    const response = await axios.get(`${address_base_url}/`, getConfig());
    return response.data;
};

const deleteAddress = async (id) => {
    
    const response = await axios.delete(`${address_base_url}/${id}`, getConfig());
    return response.data;
};

// const deleteAllCartProduct = async () => {

//     const response = await axios.delete(`${address_base_url}`, config);
//     return response.data;
// };


const addressService = {
    createNewAddress,getAllAddress,deleteAddress,
    // deleteAllCartProduct
};

export default addressService;
