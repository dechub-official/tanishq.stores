import axios from "axios"
import { json } from "react-router-dom";

// const baseURL = 'http://10.110.140.56:8129/stores/tanishq';
const baseURL = 'https://localhost:8129/stores/tanishq';   //local
// const baseURL = 'http://127.0.0.1:8000/'; //vpn

const apiRequest = async (method, endpoint) => {


    try {

    let config = {
      method:  method,
      maxBodyLength: Infinity,
      url:baseURL+endpoint,
    
      headers: { 
        'Accept': 'application/json', 
       
      }
    };
 
    let result=await axios.request(config)
   
    return {
      response: true,
      // status: result.status,
      error: null,
      data: result.data,
    };
   
  } catch (error) {
    return {
      response: false,
      status: error.response?.status,
      // error: error.response.data.errors.message,
      data: error.response?.data,
    };
  }
};

export const get = (endpoint) => apiRequest('get', endpoint);
// export const post = (endpoint, data) => apiRequest('post', endpoint, data);
// export const put = (endpoint, data) => apiRequest('put', endpoint, data);
// export const remove = (endpoint, data) => apiRequest('delete', endpoint, data);
