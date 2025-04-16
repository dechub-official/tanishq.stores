import { Link, useLocation, useNavigate } from 'react-router-dom'
import qr from '../../assets/images/getapp_qr.webp'
import { useRef, useState } from 'react'
import FilterButton from './filterButton'



export default function FilterStoreListExpander({ cities, toggleCity, selectedCities }) {


    const inputtarget = useRef()

    const stopScroll = (e) => {
        const body = document.body;
        const menu = document.getElementsByClassName("filter-select")[0];
    
        if (e.target.checked) {
            body.style.overflow = "hidden";
            // menu.style.left = "0px";
            menu.style.setProperty("z-index", "60", "important");
        } else {
            body.style.overflow = "scroll";
            // menu.style.left = "-100%"; // Optional: hide menu again
            menu.style.setProperty("z-index", "1", "important");
        }
    };
    const handleInputClick = () => {
        inputtarget.current.click()
    }


    return <>

        <div id="menuToggle" className='top-0 filter-select  cursor-default'>

            <input type="checkbox" ref={inputtarget} onChange={stopScroll} />
            <button onClick={handleInputClick} className="flex items-center relative  gap-1 border-2 border-[#701d1d] rounded-full px-6 py-2 text-lg shadow-sm hover:bg-gray-100 transition">
                <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414A1 1 0 0014 13v5a1 1 0 01-.553.894l-4 2A1 1 0 018 20v-7a1 1 0 00-.293-.707L1.293 6.707A1 1 0 011 6V4z"
                    />
                </svg>
                <p>Filter</p>
                <svg
                    className="w-3 h-3 ml-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <ul id="menu-filters" className='bg-[white] font-fraunces'>

                <p className=' text-[20px] font-semibold  text-[#832729] text-center font-fraunces  my-2 whitespace-nowrap'>Other Stores</p>


                <div className="flex justify-end absolute right-2 top-5 p-2">
                    <svg width="24" height="25" className='cursor-pointer' onClick={handleInputClick} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12.5" r="12" fill="#F6F6F6" />
                        <path d="M15.3636 9.5L9 15.8636M9 9.5L15.3636 15.8636" stroke="#300708" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <hr />
                <div className='flex flex-wrap gap-4 my-4'>


                    {cities.map((city) => {
                        const isSelected = selectedCities.includes(city);
                        const customCss = isSelected
                            ? 'bg-[#701d1d] text-white border-[#701d1d]'
                            : 'bg-white text-[#444444] border-[#444444] hover:bg-[#f8eaea]'

                        return (
                            <FilterButton
                                key={city}
                                onClick={() => toggleCity(city)}
                                customCss={customCss}
                                city={city} />
                        );
                    })}

                </div>




            </ul>
        </div>




    </>
}
