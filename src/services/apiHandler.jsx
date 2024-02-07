import axios from "axios"


// const baseURL = 'https://uat-stores.tanishq.co.in/stores/tanishq';
const baseURL = 'https://localhost:8129/stores/tanishq';   //local
// const baseURL='https://5ac4-2401-4900-4a96-f5bf-bd9e-74fa-fade-aba4.ngrok.io/stores/tanishq'
// const baseURL = 'http://127.0.0.1:8000/'; //vpn

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
