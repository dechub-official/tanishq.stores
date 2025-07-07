// This file will contain functions for making API calls related to stores

import { apiClient } from './client';

// Placeholder function to simulate fetching stores
export const getStores = async () => {
  // In a real application, you would make an actual fetch or axios call here
  console.log("Fetching stores...");
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, name: 'Store A', location: 'City 1' },
        { id: 2, name: 'Store B', location: 'City 2' },
      ]);
    }, 1000);
  });
};

// Get store details by store code
export const getStoreDetails = async (storeCode, city = '') => {
  const response = await apiClient.get(`/details?storeCode=${storeCode}&city=${city}`);
  return response.data;
};

// Get store count
export const getStoreCount = async () => {
  const response = await apiClient.get('/storeCount');
  return response.data;
};

// Search stores
export const searchStores = async (searchValue) => {
  const response = await apiClient.get(`/search?value=${searchValue}`);
  return response.data;
};

// Get cities by collection
export const getCitiesByCollection = async (collectionName) => {
  const response = await apiClient.get(`/getCitiesByCollection?collection=${collectionName}`);
  return response.data;
};

// Book an appointment
export const bookAppointment = async (appointmentData) => {
  const response = await apiClient.post('/bookAnAppointment', appointmentData);
  return response.data;
};

// Get reviews
export const getReviews = async () => {
  const response = await apiClient.get('/reviews');
  return response.data;
};

// Get full review
export const getFullReview = async () => {
  const response = await apiClient.get('/getFullReview');
  return response.data;
};

// Get like count
export const getLikeDislikeCount = async () => {
  const response = await apiClient.get('/getLikeDislikeCounts');
  return response.data;
};

// Increase like count
export const increaseLikeCount = async () => {
  const response = await apiClient.get('/increaseLikeCount');
  return response.data;
};

export const increaseDislikeCount = async () => {
  const response = await apiClient.get('/increaseDislikeCount');
  return response.data;
}

// Get soulmate stores
export const getSoulmateStores = async (city) => {
  const response = await apiClient.get(`/SoulmateAllStores?city=${city || ''}`);
  return response?.data?.result || [];
};

export const getRhythmStores = async (city) => {
  const response = await apiClient.get(`/RhythmAllStoresForCity?city=${city || ''}`);
  return response?.data?.result || [];
};
// Get celeste stores
export const getCelesteStores = async (city) => {
  const response = await apiClient.get(`/getCelesteAllStoresForCity?city=${city || ''}`);
  return response?.data?.result || [];
};

// Get enchanted collection stores
export const getEnchantedCollectionStores = async (city) => {
  const response = await apiClient.get(`/enchantedCollection?storeCode=&city=${city?.toLowerCase() || ''}`);
  return response.data;
};

// Update store user details
export const updateStoreUserDetails = async (mobileNo, name) => {
  const response = await apiClient.get(`/storeUserDetailsUpdated?mobileNo=${mobileNo}&name=${name}`);
  return response.data;
}; 