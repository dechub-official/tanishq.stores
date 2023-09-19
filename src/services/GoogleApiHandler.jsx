import axios from "axios"
import { json } from "react-router-dom";

const key = 'key=AIzaSyDhXC0pZWKq8zdR9D5AXT1nC1gFIkCIx3w';
const baseURL = 'https://maps.googleapis.com/maps/api/place';
const proxy="https://cors-anywhere.herokuapp.com/"
// const proxy=""
const apiRequest = async (method, endpoint) => {


    try {

    let config = {
      method:  method,
      maxBodyLength: Infinity,
      url:proxy+baseURL+endpoint+'&'+key,
    
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
