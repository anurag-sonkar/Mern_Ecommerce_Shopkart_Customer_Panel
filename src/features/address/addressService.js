import axios from "axios";
import { address_base_url } from "../../utils/base_url"; 
import { config } from "../../utils/config"; 

const createNewAddress = async (formData) => {
    console.log(formData)
    const response = await axios.post(`${address_base_url}/`, formData, config);
    return response.data;
};

const getAllAddress = async () => {
    
    const response = await axios.get(`${address_base_url}/`, config);
    return response.data;
};

const deleteAddress = async (id) => {
    
    const response = await axios.delete(`${address_base_url}/${id}`, config);
    console.log(response)
    return response.data;
};

// const deleteAllCartProduct = async () => {

//     const response = await axios.delete(`${address_base_url}`, config);
//     console.log(response.data)
//     return response.data;
// };


const addressService = {
    createNewAddress,getAllAddress,deleteAddress,
    // deleteAllCartProduct
};

export default addressService;
