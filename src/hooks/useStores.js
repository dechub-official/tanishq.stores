// This file will contain custom Tanstack Query hooks related to stores
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getStoreDetails,
  getStoreCount,
  searchStores,
  getCitiesByCollection,
  bookAppointment,
  getReviews,
  getFullReview,
  getLikeCount,
  increaseLikeCount,
  getSoulmateStores,
  getCelesteStores,
  getEnchantedCollectionStores,
  updateStoreUserDetails,
  getStores
} from '../api/stores';

// Custom hook to fetch stores
export const useFetchStores = () => {
  return useQuery({
    queryKey: ['stores'], // Unique key for this query
    queryFn: getStores, // The function that fetches the data
  });
};

// Hook for fetching store details
export const useStoreDetails = (storeCode, city = '') => {
  return useQuery({
    queryKey: ['storeDetails', storeCode, city],
    queryFn: () => getStoreDetails(storeCode, city),
    enabled: !!storeCode,
  });
};

// Hook for fetching store count
export const useStoreCount = () => {
  return useQuery({
    queryKey: ['storeCount'],
    queryFn: getStoreCount,
  });
};

// Hook for searching stores
export const useSearchStores = (searchValue) => {
  return useQuery({
    queryKey: ['searchStores', searchValue],
    queryFn: () => searchStores(searchValue),
    enabled: !!searchValue,
  });
};

// Hook for fetching cities by collection
export const useCitiesByCollection = (collectionName) => {
  return useQuery({
    queryKey: ['citiesByCollection', collectionName],
    queryFn: () => getCitiesByCollection(collectionName),
    enabled: !!collectionName,
  });
};

// Hook for booking an appointment
export const useBookAppointment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: bookAppointment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['storeDetails'] });
    },
  });
};

// Hook for fetching reviews
export const useReviews = () => {
  return useQuery({
    queryKey: ['reviews'],
    queryFn: getReviews,
  });
};

// Hook for fetching full review
export const useFullReview = () => {
  return useQuery({
    queryKey: ['fullReview'],
    queryFn: getFullReview,
  });
};

// Hook for fetching like count
export const useLikeCount = () => {
  return useQuery({
    queryKey: ['likeCount'],
    queryFn: getLikeCount,
  });
};

// Hook for increasing like count
export const useIncreaseLikeCount = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: increaseLikeCount,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['likeCount'] });
    },
  });
};

// Hook for fetching soulmate stores
export const useSoulmateStores = () => {
  return useQuery({
    queryKey: ['soulmateStores'],
    queryFn: getSoulmateStores,
  });
};

// Hook for fetching celeste stores
export const useCelesteStores = (city) => {
  return useQuery({
    queryKey: ['celesteStores', city],
    queryFn: () => getCelesteStores(city),
    enabled: !!city,
  });
};

// Hook for fetching enchanted collection stores
export const useEnchantedCollectionStores = (city) => {
  return useQuery({
    queryKey: ['enchantedCollectionStores', city],
    queryFn: () => getEnchantedCollectionStores(city),
  });
};

// Hook for updating store user details
export const useUpdateStoreUserDetails = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ mobileNo, name }) => updateStoreUserDetails(mobileNo, name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['storeDetails'] });
    },
  });
}; 