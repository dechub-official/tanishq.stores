export const useStoreDetails = (storeCode) => {
  return useQuery({
    queryKey: ['storeDetails', storeCode],
    queryFn: async () => {
      const response = await apiClient.get(`/details?storeCode=${storeCode}&city=`);
      return response.data.result;
    },
    enabled: !!storeCode,
  });
}; 