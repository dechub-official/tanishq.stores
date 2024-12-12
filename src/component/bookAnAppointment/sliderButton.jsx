import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles


const ButtonStrip = ({ days, weekDays, dayInfo,handleDate, setDayInfo, timeDivisions, isTimeDisabled, handleDivisions, activeDivision, activeModal, setActiveModal }) => {
    const date = new Date()
    const dayCount = date.getDay()
    // const handleSpot = (i) => {
       
    //     setDayInfo({ day: weekDays[(dayCount + i) % 7], date: days[i], activeIndex: i })
    //     console.log({ day: weekDays[(dayCount + i) % 7], date: days[i], activeIndex: i });

    // }


    return (
        <div className="flex pl-3 flex-col w-full">

            <p className="flex gap-x-2 mb-3 pl-2 ibm-plex text-[17px]  items-center font-[400] text-[#636363]">
                <svg width="17" height="17" className="mb-1" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1339_499)">
                        <path d="M14.6849 1.5332H2.31431C1.22278 1.5332 0.337891 2.4181 0.337891 3.50962V15.0236C0.337891 16.1151 1.22278 17 2.31431 17H14.6849C15.7764 17 16.6613 16.1151 16.6613 15.0236V3.50962C16.6613 2.41804 15.7764 1.5332 14.6849 1.5332Z" fill="#636363" />
                        <path d="M16.6613 5.24615V2.85142C16.6613 1.75989 15.7764 0.875 14.6849 0.875H2.31431C1.22278 0.875 0.337891 1.75989 0.337891 2.85142V5.24615H16.6613Z" fill="#D1D1D1" />
                        <path d="M16.6613 5.69346V3.50962C16.6613 2.4181 15.7764 1.5332 14.6849 1.5332H2.31431C1.22278 1.5332 0.337891 2.4181 0.337891 3.50962V5.69346H16.6613Z" fill="white" />
                        <path d="M3.57457 2.59375C3.1936 2.59375 2.88477 2.90258 2.88477 3.28355C2.88477 3.66452 3.1936 3.9733 3.57457 3.9733C3.95554 3.9733 4.26432 3.66447 4.26432 3.28355C4.26437 2.90258 3.95554 2.59375 3.57457 2.59375Z" fill="#B54E51" />
                        <path d="M3.57606 0C3.37228 0 3.20703 0.165246 3.20703 0.369033V3.24427C3.20703 3.44811 3.37228 3.6133 3.57606 3.6133C3.77985 3.6133 3.9451 3.44811 3.9451 3.24427V0.369033C3.9451 0.165246 3.77991 0 3.57606 0Z" fill="#636363" />
                        <path d="M6.85777 2.59375C6.4768 2.59375 6.16797 2.90258 6.16797 3.28355C6.16797 3.66452 6.4768 3.9733 6.85777 3.9733C7.23874 3.9733 7.54752 3.66447 7.54752 3.28355C7.54758 2.90258 7.23874 2.59375 6.85777 2.59375Z" fill="#B54E51" />
                        <path d="M6.85731 0C6.65353 0 6.48828 0.165246 6.48828 0.369033V3.24427C6.48828 3.44811 6.65353 3.6133 6.85731 3.6133C7.0611 3.6133 7.22635 3.44811 7.22635 3.24427V0.369033C7.22635 0.165246 7.0611 0 6.85731 0Z" fill="#636363" />
                        <path d="M10.141 2.59375C9.76001 2.59375 9.45117 2.90258 9.45117 3.28355C9.45117 3.66452 9.76001 3.9733 10.141 3.9733C10.5219 3.9733 10.8307 3.66447 10.8307 3.28355C10.8307 2.90258 10.5219 2.59375 10.141 2.59375Z" fill="#B54E51" />
                        <path d="M10.1405 0C9.93673 0 9.77148 0.165246 9.77148 0.369033V3.24427C9.77148 3.44811 9.93673 3.6133 10.1405 3.6133C10.3443 3.6133 10.5095 3.44811 10.5095 3.24427V0.369033C10.5095 0.165246 10.3443 0 10.1405 0Z" fill="#636363" />
                        <path d="M13.4242 2.59375C13.0432 2.59375 12.7344 2.90258 12.7344 3.28355C12.7344 3.66452 13.0432 3.9733 13.4242 3.9733C13.8051 3.9733 14.1139 3.66447 14.1139 3.28355C14.1139 2.90258 13.8051 2.59375 13.4242 2.59375Z" fill="#B54E51" />
                        <path d="M13.4237 0C13.2199 0 13.0547 0.165246 13.0547 0.369033V3.24427C13.0547 3.44811 13.2199 3.6133 13.4237 3.6133C13.6275 3.6133 13.7928 3.44811 13.7928 3.24427V0.369033C13.7928 0.165246 13.6276 0 13.4237 0Z" fill="#636363" />
                        <path d="M6.36133 8.42383H7.8532V9.9157H6.36133V8.42383Z" fill="white" />
                        <path d="M9.14648 8.42383H10.6384V9.9157H9.14648V8.42383Z" fill="white" />
                        <path d="M11.9336 8.42383H13.4255V9.9157H11.9336V8.42383Z" fill="white" />
                        <path d="M3.57617 10.7617H5.06805V12.2536H3.57617V10.7617Z" fill="white" />
                        <path d="M6.36133 10.7617H7.8532V12.2536H6.36133V10.7617Z" fill="white" />
                        <path d="M9.14648 10.7617H10.6384V12.2536H9.14648V10.7617Z" fill="white" />
                        <path d="M11.9336 10.7617H13.4255V12.2536H11.9336V10.7617Z" fill="white" />
                        <path d="M3.57617 13.1016H5.06805V14.5934H3.57617V13.1016Z" fill="white" />
                        <path d="M6.36133 13.1016H7.8532V14.5934H6.36133V13.1016Z" fill="white" />
                        <path d="M9.14648 13.1016H10.6384V14.5934H9.14648V13.1016Z" fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1339_499">
                            <rect width="17" height="17" fill="white" />
                        </clipPath>
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
                                className={`spot_button ibm-plex duration-100 px-6 md:px-12  py-4 rounded-full text-[16px] font-[400] `}
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


            <p className="flex gap-x-2 pl-2 mt-10 mb-3 ibm-plex text-[17px]  items-center font-[400] text-[#636363]">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.66602 5V7.66667L9.33268 9.33333" stroke="#66686C" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.33333 1.89188C5.31391 1.32465 6.4524 1 7.66667 1C11.3485 1 14.3333 3.98477 14.3333 7.66667C14.3333 11.3485 11.3485 14.3333 7.66667 14.3333C3.98477 14.3333 1 11.3485 1 7.66667C1 6.4524 1.32465 5.31391 1.89188 4.33333" stroke="#66686C" stroke-linecap="round"/>
</svg>


                Choose Time
            </p>
            <div className="flex relative  gap-x-4">


                {activeModal == 2 && <div className={`absolute z-50 ${activeDivision == 1 && 'left-[35%]'} ${activeDivision == 2 && 'left-[70%]'} bottom-[85%]`}>
                    <div className="box pl-1 flex rounded-md shadow-lg bg-white">



                        <div>
                            {timeDivisions[activeDivision].times.map((time, i) => (
                                <div
                                    key={i}
                                    className="hover:font-bold cursor-pointer hover:bg-gray-100 transition-all"
                                >
                                    {/* Show division name only for the first time in each block */}
                                    {i==0&&<p className={` py-1 flex  items-center px-2 justify-center mr-1 font-bold   gap-x-2 transition-all`} >
                                {timeDivisions[activeDivision].icon}    {timeDivisions[activeDivision].division}
                                </p>}
                                    <td onClick={() => { setActiveModal(); setDayInfo({ ...dayInfo, time }) }} className={`px-2 py-1 ${time == dayInfo.time && 'font-bold'}`}>{time}</td>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>}
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={15}
                    className=" p-1"
                >
                {timeDivisions.map((timeBlock, i) =>
                     <> {!isTimeDisabled(timeBlock.division) && <>
                        <SwiperSlide className="button-strip !w-auto my-2 ">
                            <button
                                onClick={() => {
                                    if(dayInfo.activeIndex!=null)
                                    {handleDivisions(timeBlock.division, i); setActiveModal(2)} }}
                                className={`spot_button ibm-plex duration-100 border-[1px] border-[#E0E0E0] rounded-s-full px-5 md:px-12  py-2 rounded-full text-[16px] font-[400] ${activeDivision == i?"active-day":''}`}
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

        </div>



    );
};

export default ButtonStrip;
