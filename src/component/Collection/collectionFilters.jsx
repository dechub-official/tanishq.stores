import React, { useState, useEffect } from 'react';
import { FilterPluseIcon } from '../../shared/svg/Icon';
import FilterStoreListExpander from './filterStoreListExpander';
import FilterButton from './filterButton';
import { useCitiesByCollection } from '../../hooks/useStores';
import { POPULAR_CITIES } from '../../shared/data/populerData';


// Popular cities to prioritize in the filter display




const CollectionFilter = ({ collectionName = 'celeste', selectedCities,setSelectedCities }) => {
    const [allCities, setAllCities] = useState([]);
    const [displayCities, setDisplayCities] = useState([]);
  
    // Use Tanstack Query hook
    const { data: citiesData, isLoading } = useCitiesByCollection(collectionName);

    useEffect(() => {
        if (citiesData?.result) {
            setAllCities(citiesData.result);
            const popularCitiesAvailable = POPULAR_CITIES.filter(city =>
                citiesData.result.includes(city)
            );

            // Set display cities to popular cities if available, otherwise use all cities
            setDisplayCities(popularCitiesAvailable.length > 0 ? popularCitiesAvailable : citiesData.result);
        }
    }, [citiesData]);

    const toggleCity = (inputCity) => {
        let city = [inputCity]
        if (selectedCities.includes(inputCity)) {
            city = selectedCities.filter((c) => c !== city);
        }
        console.log(city[0]);
        
       
        setSelectedCities([...city]);
    };

    if (isLoading) {
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