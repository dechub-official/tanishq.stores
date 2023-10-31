import axios from "axios"


const key = 'key=mapskeyplaceholder';
// const baseURL = 'http://localhost:8129/stores/tanishq/googleMaps?url=https://maps.googleapis.com/maps/api/place';
const baseURL='https://uat-stores.tanishq.co.in/stores/tanishq/googleMaps?url=https://maps.googleapis.com/maps/api/place'

// const proxy=""
const apiRequest = async (method, endpoint) => {


    try {

    let config = {
      method:  method,
      maxBodyLength: Infinity,
      url:baseURL+endpoint+'%26'+key,
    
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
    //   status: error.response?.status,
      // error: error.response.data.errors.message,
    //   data: error.response?.data,
    };
  }
};

export const googleget = (endpoint) => apiRequest('get', endpoint);
// export const post = (endpoint, data) => apiRequest('post', endpoint, data);
// export const put = (endpoint, data) => apiRequest('put', endpoint, data);
// export const remove = (endpoint, data) => apiRequest('delete', endpoint, data);
