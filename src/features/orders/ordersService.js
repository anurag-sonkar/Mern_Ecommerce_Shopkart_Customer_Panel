import axios from "axios";
import { orders_base_url } from "../../utils/base_url"; 
import { config } from "../../utils/config"; 


const getMyOrders = async () => {

    const response = await axios.get(`${orders_base_url}`, config);
    console.log(response)
    return response.data;
};

const ordersService = {
    getMyOrders
};

export default ordersService;
