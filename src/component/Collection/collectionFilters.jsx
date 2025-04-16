import React, { useState } from 'react';
import { FilterPluseIcon } from '../../shared/svg/Icon';
import FilterStoreListExpander from './filterStoreListExpander';
import FilterButton from './filterButton';

const cities = [
    'Bangalore',
    'Chennai',
    'Mumbai',
    'Kolkata',
    'Pune',
    'Delhi',
    'Hyderabad',
];

const CollectionFilter = () => {
    const [selectedCities, setSelectedCities] = useState(['Bangalore']);

    const toggleCity = (city) => {
        if (selectedCities.includes(city)) {
            setSelectedCities(selectedCities.filter((c) => c !== city));
        } else {
            setSelectedCities([...selectedCities, city]);
        }
    };

    return (
        <>
            <div className="flex md:flex-wrap overflow-x-scroll items-center justify-between gap-2 p-4">
                {/* Filter Button */}
                <FilterStoreListExpander cities={cities} toggleCity={toggleCity} selectedCities={selectedCities} />

                {/* City Filter Pills */}
                {cities.map((city) => {
                    const isSelected = selectedCities.includes(city);
                  const customCss=  isSelected
                    ? 'bg-[#701d1d] text-white border-[#701d1d]'
                    : 'bg-white text-[#701d1d] border-[#701d1d] hover:bg-[#f8eaea]'
                    return (
                        <FilterButton
                            key={city}
                            toggleCity={() => toggleCity(city)}
                            customCss={customCss}
                            city={city}
                            icon={<FilterPluseIcon />} />

                    );
                })}
            </div>

        </>

    );
};

export default CollectionFilter;
