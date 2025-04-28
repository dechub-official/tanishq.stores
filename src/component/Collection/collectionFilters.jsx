import React, { useState, useEffect } from 'react';
import { FilterPluseIcon } from '../../shared/svg/Icon';
import FilterStoreListExpander from './filterStoreListExpander';
import FilterButton from './filterButton';
import { get } from '../../services/apiHandler';
import { POPULAR_CITIES } from '../../shared/data/populerData';


// Popular cities to prioritize in the filter display


// API function to fetch cities
const getCitiesByCollection = async (collectionName) => {
  try {
    const response = await get(`/getCitiesByCollection?collection=${collectionName}`);
    if (response.data && response.data.result) {
      return response.data.result;
    }
    return [];
  } catch (error) {
    console.error('Error fetching cities:', error);
    return [];
  }
};

const CollectionFilter = ({ collectionName = 'celeste',selectedCities,setSelectedCities }) => {
    const [allCities, setAllCities] = useState([]);
    const [displayCities, setDisplayCities] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCities = async () => {
            setLoading(true);
            try {
                const cityList = await getCitiesByCollection(collectionName);
                setAllCities(cityList);
                
                // Filter out popular cities that exist in the API response
                const popularCitiesAvailable = POPULAR_CITIES.filter(city => 
                    cityList.includes(city)
                );
                
                // Set display cities to popular cities if available, otherwise use all cities
                setDisplayCities(popularCitiesAvailable.length > 0 ? popularCitiesAvailable : cityList);
                
                
            } catch (error) {
                console.error('Failed to fetch cities:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCities();
    }, [collectionName]);

    const toggleCity = (city) => {
         if (selectedCities.includes(city)) {
             setSelectedCities(selectedCities.filter((c) => c !== city));
         } else {
            setSelectedCities([city]);
         }
    };

    if (loading) {
        return <div className="p-4">Loading cities...</div>;
    }

    return (
        <>
            <div className="flex md:flex-nowrap overflow-x-scroll items-center justify-between gap-2 p-4">
                {/* Filter Button - shows all cities in the dropdown */}
                <FilterStoreListExpander 
                    cities={allCities} 
                    toggleCity={toggleCity} 
                    selectedCities={selectedCities} 
                />

                {/* City Filter Pills - only shows popular cities if available */}
                {displayCities.map((city) => {
                    const isSelected = selectedCities.includes(city);
                    const customCss = isSelected
                        ? 'bg-[#701d1d] text-white border-[#701d1d]'
                        : 'bg-white text-[#701d1d] border-[#701d1d] hover:bg-[#f8eaea]';
                    
                    return (
                        <FilterButton
                            key={city}
                            toggleCity={() => toggleCity(city)}
                            customCss={customCss}
                            city={city}
                            icon={<FilterPluseIcon />} 
                        />
                    );
                })}
            </div>
        </>
    );
};

export default CollectionFilter;