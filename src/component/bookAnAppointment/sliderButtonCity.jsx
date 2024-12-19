import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles


const ButtonStripCity = ({ days, weekDays, cities, activeStore, dayInfo, handleDate, setDayInfo, timeDivisions, isTimeDisabled, handleDivisions, activeDivision, activeModal, setActiveModal, setIndividualStoreData }) => {
    const date = new Date()
    const dayCount = date.getDay()
    const startingTime = !isTimeDisabled("Morning") ? 0 : !isTimeDisabled("Noon") ? 1 : 2

    const handleCity = (data) => {

        setIndividualStoreData(prv => ({
            ...prv,
            storeName: data.storeName,
            storeCode: data.storeCode,
            activeStore: data.activeIndex
        }));

    }
    return (
        <div className="flex pl-3 flex-col w-full">

            <p className="flex gap-x-2 mb-3 pl-2 ibm-plex text-[14px]  items-center font-medium text-[#636363]">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1727_1324)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.25 2.75071L14.7493 2.74921C15.992 2.74696 17 3.74891 17 4.9901V14.7554C17 15.995 15.9928 17 14.7545 17H4.2455C3.005 17 2 15.9853 2 14.7554V4.9946C2 3.75566 3.00425 2.75071 4.25075 2.75071H5.7455L5.75 4.25064H7.25V2.75746C7.25 2.33973 7.583 2.00075 8 2.00075C8.414 2.00075 8.75 2.33298 8.75 2.75746V4.24314C8.75 4.24539 10.25 4.24989 10.25 4.24989V2.75671C10.25 2.33898 10.583 2 11 2C11.414 2 11.75 2.33223 11.75 2.75671V4.24239C11.75 4.24464 14.75 4.24839 14.75 4.24839C15.164 4.24914 15.5 4.58137 15.5 4.99835V6.49902H3.5V4.99835C3.5 4.58437 3.833 4.24914 4.25 4.24914H7.25C7.25375 4.67062 7.58825 4.9991 8 4.9991C8.41475 4.9991 8.74625 4.66387 8.75 4.24914H10.25C10.2537 4.67062 10.5883 4.9991 11 4.9991C11.4148 4.9991 11.7463 4.66387 11.75 4.24914H13.25V2.74921V2.75071ZM14.7493 15.5001H4.25075C3.836 15.4738 3.5 15.1333 3.5 14.7299V8.00045H15.5V14.7299C15.5 15.1408 15.1663 15.4738 14.7493 15.5001ZM5.75 9.50037H7.25V11.0003H5.75V9.50037ZM5.75 12.5002H7.25V14.0001H5.75V12.5002ZM8.75 12.5002H10.25V14.0001H8.75V12.5002ZM11.75 12.5002H13.25V14.0001H11.75V12.5002ZM11.75 9.50037H13.25V11.0003H11.75V9.50037ZM8.75 9.50037H10.25V11.0003H8.75V9.50037Z" fill="#66686C" />
                    </g>
                    <defs>
                        <filter id="filter0_d_1727_1324" x="-264.667" y="-251.333" width="548.333" height="548.333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="13.3333" />
                            <feGaussianBlur stdDeviation="133.333" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1727_1324" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1727_1324" result="shape" />
                        </filter>
                    </defs>
                </svg>

                Choose Day
            </p>
            <div className="flex gap-x-4 mr-2">
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={-10}
                    className="border-[1px] border-[#E0E0E0] rounded-full p-0 "
                >
                    {days.map((day, i) => {
                        return <SwiperSlide className="button-strip !w-auto my-1 ml-2">
                            <button
                                onClick={() => handleDate(i)}
                                className={`spot_button ibm-plex duration-100 px-6 md:px-12  py-4 rounded-full text-[12px] font-[400] `}
                                style={dayInfo.activeIndex == i ? {
                                    background: "linear-gradient(90.18deg, #832729 0.17%, #631517 99.86%)",
                                    color: "white"
                                } : {}}
                            >
                                {i === 0 ? "Today" : i === 1 ? "Tomorrow" : weekDays[(dayCount + i) % 7]}
                            </button>




                        </SwiperSlide>
                    })
                    }

                </Swiper>
            </div>


            <p className="flex gap-x-2 pl-2 mt-7 mb-3 ibm-plex text-[14px]  items-center font-medium text-[#636363]">
                <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.66602 5V7.66667L9.33268 9.33333" stroke="#66686C" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.33333 1.89188C5.31391 1.32465 6.4524 1 7.66667 1C11.3485 1 14.3333 3.98477 14.3333 7.66667C14.3333 11.3485 11.3485 14.3333 7.66667 14.3333C3.98477 14.3333 1 11.3485 1 7.66667C1 6.4524 1.32465 5.31391 1.89188 4.33333" stroke="#66686C" stroke-linecap="round" />
                </svg>


                Choose Time
            </p>
            <div className="flex relative  gap-x-4">


                {activeModal == 2 && <div className={`absolute z-50 ${activeDivision == 1 + startingTime && 'left-[35%]'} ${activeDivision == 2 + startingTime && 'left-[70%]'} bottom-[85%]`}>
                    <div className="box pl-1 flex rounded-md shadow-lg bg-white">
                        <div> {timeDivisions[activeDivision].times.map((time, i) => (
                            <div
                                key={i}
                                className="hover:font-bold cursor-pointer hover:bg-gray-100 transition-all"
                            >

                                {/* Show division name only for the first time in each block */}
                                {i == 0 && <p className={` py-1 flex  items-center px-2 justify-center mr-1 font-bold   gap-x-2 transition-all`} >
                                    {timeDivisions[activeDivision].icon} {timeDivisions[activeDivision].division}
                                </p>}
                                <td onClick={() => { setActiveModal(); setDayInfo({ ...dayInfo, time }) }} className={`px-2 py-1 ${time == dayInfo.time && 'font-bold'}`}>{time}</td>
                            </div>
                        ))}
                        </div>

                    </div>

                </div>}
                <Swiper
                    slidesPerView="3"
                    spaceBetween={15}


                    className=" p-1 mx-auto"
                >
                    {/* {timeDivisions.map((timeBlock, i) =>
                        <> {!isTimeDisabled(timeBlock.division) && <>
                            <SwiperSlide className="button-strip  my-2 ">
                                <button
                                    onClick={() => {
                                        if (dayInfo.activeIndex != null) { handleDivisions(timeBlock.division, i); setActiveModal(2) }
                                    }}
                                    className={`spot_button ibm-plex duration-100 border-[1px] border-[#E0E0E0] rounded-2xl mx-auto px-2  w-[90px] h-[100px]  text-[16px] font-[400] ${activeDivision == i ? "active-day-city" : 'deactive-day-city'}`}
                                    style={activeDivision == i ? {
                                        background: "linear-gradient(90.18deg, #832729 0.17%, #631517 99.86%)",
                                        color: "white"
                                    } : {}}
                                >



                                    <p className={` py-1 flex flex-col gap-x-2 items-baseline justify-start text-[15px] ibm-plex  hover:font-bold cursor-pointer  ${activeDivision == i ? "text-white " : "text-[#969288] font-medium"}  transition-all`} >
                                        <span className={`w-[40px] h-[40px] ${activeDivision == i ? "bg-white" : "bg-[#969288]"} rounded-full  flex justify-center items-center`}>
                                            {timeBlock.icon}
                                        </span>   <br />  {timeBlock.division}
                                    </p>




                                </button>
                            </SwiperSlide>
                        </>}</>
                    )} */}

                    {timeDivisions.map((timeBlock, i) =>
                        <> {!isTimeDisabled(timeBlock.division) && <>
                            <SwiperSlide className="button-strip !w-auto my-2 ">
                                <button
                                    onClick={() => {
                                        if (dayInfo.activeIndex != null) { handleDivisions(timeBlock.division, i); setActiveModal(2) }
                                    }}
                                    className={`spot_button ibm-plex duration-100 border-[1px] border-[#E0E0E0] rounded-s-full px-5 md:px-12  py-2 rounded-full text-[16px] font-[400] ${activeDivision == i ? "active-day" : ''}`}
                                    style={activeDivision == i ? {
                                        background: "linear-gradient(90.18deg, #832729 0.17%, #631517 99.86%)",
                                        color: "white"
                                    } : {}}
                                >



                                    <p className={` py-1 flex gap-x-2 items-center  hover:font-bold cursor-pointer  ${activeDivision == i ? "text-white font-bold" : "text-black font-medium"}  transition-all`} >
                                        {timeBlock.icon}    {timeBlock.division}
                                    </p>




                                </button>
                            </SwiperSlide>
                        </>}</>
                    )}
                </Swiper>
            </div>
            {/* <p className="flex gap-x-2 mb-3 mt-4 pl-2 ibm-plex text-[14px]  items-center font-medium text-[#636363]">
            <svg width="18" height="16" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 0.5H1V2H13V0.5ZM13.75 8V6.5L13 2.75H1L0.25 6.5V8H1V12.5H8.5V8H11.5V12.5H13V8H13.75ZM7 11H2.5V8H7V11Z" fill="#66686C"/>
</svg>

                Choose Store
            </p>
                <div className=" gap-y-3 flex flex-col">
               
            {cities.map((data, i) => {
                          return (
                            <>
                               <button
                onClick={() => handleCity({...data,activeIndex:i})}
                className={`spot_button ibm-plex duration-100 px-6 w-fit text-[#a6a297] md:px-12 border border-gray-300  py-2 rounded-full text-[16px] font-[400] `}
                style={activeStore== i ? {
                    background: "linear-gradient(90.18deg, #832729 0.17%, #631517 99.86%)",
                    color: "white"
                } : {}}
            >
               {data.storeName}
              
            </button>
                            </>
                          );
                        })
                        }

                </div> */}


        </div>



    );
};

export default ButtonStripCity;
