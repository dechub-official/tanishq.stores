import axios from 'axios';

// const baseURL = 'https://stores.tanishq.co.in/stores/tanishq';
// const baseURL = 'https://localhost:8129/stores/tanishq';   //local
// const baseURL='https://a81d-103-168-164-118.ngrok-free.app/stores/tanishq'
const baseURL = 'https://uat-stores.tanishq.co.in/stores/tanishq'; //vpn

export const apiClient = axios.create({
  baseURL,
  headers: {
    'Accept': 'application/json',
  },
});

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors here
    return Promise.reject(error);
  }
); 