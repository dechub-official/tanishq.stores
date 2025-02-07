import axios from "axios"


// const baseURL = 'https://stores.tanishq.co.in/stores/tanishq';
// const baseURL = 'https://localhost:8129/stores/tanishq';   //local
// const baseURL='https://a81d-103-168-164-118.ngrok-free.app/stores/tanishq'
const baseURL = 'https://uat-stores.tanishq.co.in/stores/tanishq'; //vpn

const apiRequest = async (method, endpoint,data) => {


    try {

    let config = {
      method:  method,
      maxBodyLength: Infinity,
      url:baseURL+endpoint,
      data,
    
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
export const post = (endpoint, data) => apiRequest('post', endpoint, data);
// export const put = (endpoint, data) => apiRequest('put', endpoint, data);
// export const remove = (endpoint, data) => apiRequest('delete', endpoint, data);
