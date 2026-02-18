import axios from 'axios';

// Allow overriding the API base URL through an environment variable for local/dev testing.
// Example .env.development: REACT_APP_API_BASE_URL=http://localhost:8080/stores/tanishq
const defaultBase = 'https://stores.tanishq.co.in/stores/tanishq';
const baseURL = process.env.REACT_APP_API_BASE_URL || defaultBase;

export const apiClient = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
  },
});

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);