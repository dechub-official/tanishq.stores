import React, { useRef, useState } from 'react';
import FilterButton from './filterButton';
import { DropDownIcon } from '../../shared/svg/Icon';
import { POPULAR_CITIES } from '../../shared/data/populerData';

export default function FilterStoreListExpander({ cities, toggleCity, selectedCities }) {
    const inputtarget = useRef();
    const [isOtherStoresExpanded, setIsOtherStoresExpanded] = useState(false);

    const stopScroll = (e) => {
        const body = document.body;
        const menu = document.getElementsByClassName("filter-select")[0];

        if (e.target.checked) {
            body.style.overflow = "hidden";
            menu.style.setProperty("z-index", "60", "important");
        } else {
            body.style.overflow = "scroll";
            menu.style.setProperty("z-index", "1", "important");
        }
    };

    const handleInputClick = () => {
        inputtarget.current.click();
    };

    const toggleOtherStores = () => {
        setIsOtherStoresExpanded(!isOtherStoresExpanded);
    };

    return (
        <>
            <div id="menuToggle" className="top-0  filter-select cursor-default">
                <input type="checkbox" ref={inputtarget} onChange={stopScroll} />
                <button
                    onClick={handleInputClick}
                    className="flex items-center justify-center  gap-3 rounded-full border min-h-full px-8 py-4 text-lg transition"
                >
                    <svg
                        className="w-7 h-7 block "
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414A1 1 0 0014 13v5a1 1 0 01-.553.894l-4 2A1 1 0 018 20v-7a1 1 0 00-.293-.707L1.293 6.707A1 1 0 011 6V4z"
                        />
                    </svg>

                </button>

                <ul id="menu-filters" className="bg-[white] md:min-w-[500px] min-w-full font-fraunces">
                    <div className="flex justify-end absolute right-2 top-0 p-2">
                        <svg
                            width="24"
                            height="25"
                            className="cursor-pointer"
                            onClick={handleInputClick}
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="12" cy="12.5" r="12" fill="#F6F6F6" />
                            <path
                                d="M15.3636 9.5L9 15.8636M9 9.5L15.3636 15.8636"
                                stroke="#300708"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <button
                        onClick={toggleOtherStores}
                        className="flex   items-center justify-center w-full text-[20px] font-bold text-[#832729] text-left font-fraunces"
                    >
                        <p className='whitespace-nowrap '>Filters</p>


                    </button>

                    {/* Other Stores Expandable Section */}
                    <div className="px-5 border border-[#F5F4F8] shadow-sm rounded-lg m-2  mt-5 py-2">
                        <button
                            onClick={toggleOtherStores}
                            className="flex   items-center justify-between w-full text-[18px] font-semibold text-[#832729] text-left font-fraunces"
                        >
                            <p className='whitespace-nowrap '>Other Stores</p>
                            <DropDownIcon className={`w-4 h-4 transition-transform ${isOtherStoresExpanded ? 'transform rotate-180' : ''}`} />

                        </button>

                        {isOtherStoresExpanded && (
                            <div className="flex flex-wrap gap-4 overflow-y-scroll max-h-[80vh] mt-4 mb-2">
                                {cities.map((city) => {
                                    if (POPULAR_CITIES.includes(city))
                                        return
                                    const isSelected = selectedCities.includes(city);
                                    const customCss = isSelected
                                        ? 'bg-[#701d1d] text-white border-[#701d1d]'
                                        : 'bg-white text-[#444444] border-[#444444] hover:bg-[#f8eaea]';

                                    return (
                                        <FilterButton
                                            key={city}
                                            toggleCity={() => toggleCity(city)}
                                            customCss={customCss}
                                            city={city}
                                        />
                                    );
                                })}
                            </div>
                        )}

                    </div>
                </ul>
            </div>
        </>
    );
}