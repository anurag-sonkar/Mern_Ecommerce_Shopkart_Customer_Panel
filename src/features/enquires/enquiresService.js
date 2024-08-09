import axios from "axios";
import { enquiry_base_url } from "../../utils/base_url";
import { config } from "../../utils/config";

const createEnquire = async (data) => {
    const response = await axios.post(`${enquiry_base_url}/`, data, config);
    console.log(response.data)
    return response.data;
  };
  


const enquiresService = {
    createEnquire,
};

export default enquiresService;
