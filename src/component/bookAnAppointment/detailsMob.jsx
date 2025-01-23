import ButtonStrip from "./sliderButton";


import FormSection from "./form";
import ConfirmedAppointment from "./confirmedAppoinment";
export default function BookAnAppointmentDeepStore({step,isOpen,storeName,setisOpen,days,weekDays,dayInfo,setDayInfo,handleDivisions,activeDivision,isTimeDisabled,timeDivisions,activeModal,setActiveModal,handleDate,handelStep,handleInputChange}) {
    return <>
     <div className={` ${isOpen ? "absolute" : "hidden"} overflow-hidden max-h-[800%] top-0 left-0 w-full min-h-[800%] z-[60] backdrop-blur-lg bg-white/30  `}>

</div>


<div className={` block shadow-[#832729] shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] fixed z-[70] ${isOpen ? "bottom-[0]" : "bottom-[-150%]"} transition-all duration-150 md:hidden left-0 font-fraunces !overflow-visible  h-fit  max-h-[450px] px-2  !rounded-t-md !rounded-b-none w-full bg-white`}>
    <svg onClick={() => setisOpen(false)} width="24" height="24" className="top-3 absolute z-50 right-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#F6F6F6" />
        <path d="M15.3636 9L9 15.3636M9 9L15.3636 15.3636" stroke="#300708" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    {step == 1 &&
        <>
            <h1 className="text-black px-4 text-[22px] font-fraunces  text-left mt-[2rem] mb-1 font-[400]"><span className="text-[#832729] font-fraunces ">Heading </span> {storeName}</h1>
            <p className="text-black px-4 font-fraunces mb-5 text-[14px]  font-normal">Let us make it smoother and tailored for you. <br />Book an appointment to skip the wait.</p>
            <ButtonStrip
                days={days}
                weekDays={weekDays}
                dayInfo={dayInfo}
                setDayInfo={(e) => setDayInfo(e)}
                handleDivisions={handleDivisions}
                activeDivision={activeDivision}
                isTimeDisabled={isTimeDisabled}
                timeDivisions={timeDivisions}
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                handleDate={handleDate}
            />
            <button
                class="btn border-0 gap-1 flex rounded-pill mx-auto mt-5
                 justify-center items-center p-2"
                onClick={() => handelStep(2)}
            >
                <span class="pr-1 text-[15px] font-fraunces md:text-[14px] font-[500]">Proceed</span>
                <i class="bi bi-chevron-right ic-btn p-1 rounded-circle"></i>
            </button>
        </>}

    {step == 2 && <>
       
        {/* <h1 className="text-black px-4 text-[22px] font-fraunces  text-left  mb-2 mt-[2rem] font-medium"><span className="text-[#832729] font-fraunces ">You're</span> Almost There!</h1>
        <div className="my-3 px-4  gap-x-1">
            <div className="relative mb-6 mt-10 ">
                <label className="ibm-plex text-[#636363] font-medium flex gap-x-1 mb-3 text-[14px]" htmlFor="">
                    <svg width="20" height="21" className="ml-2" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.0005 8.83297C11.841 8.83297 13.333 7.34096 13.333 5.50047C13.333 3.65998 11.841 2.16797 10.0005 2.16797C8.15998 2.16797 6.66797 3.65998 6.66797 5.50047C6.66797 7.34096 8.15998 8.83297 10.0005 8.83297Z" fill="#636363" />
                        <path d="M16.667 15.082C16.667 17.152 16.667 18.832 9.99953 18.832C3.33203 18.832 3.33203 17.152 3.33203 15.082C3.33203 13.012 6.31703 11.332 9.99953 11.332C13.682 11.332 16.667 13.012 16.667 15.082Z" fill="#636363" />
                    </svg>
                    Full Name *</label>
                <input type="text" name="name" onChange={handleInputChange} className="px-4 border w-[90%]  py-3 placeholder:text-[#969288] placeholder:font-medium ibm-plex outline-none rounded-full shadow-md " placeholder="Name" />

            </div>
            <div className="relative my-6 ">
                <label className="ibm-plex text-[#636363] font-medium flex items-center mb-3 gap-x-1 text-[14px]" htmlFor="">
                    <svg width="19" className="ml-2" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1339_1022)">
                            <path d="M14.5095 2.48869C11.1896 -0.830265 5.80764 -0.829468 2.48869 2.49051C-0.830265 5.81049 -0.829468 11.1924 2.49051 14.5113C5.81049 17.8303 11.1924 17.8295 14.5113 14.5095C16.1053 12.9151 17.0005 10.7527 17 8.49819C16.9995 6.24403 16.1037 4.08237 14.5095 2.48869ZM12.873 11.8404C12.8726 11.8408 12.8722 11.8412 12.8718 11.8415V11.8387L12.4412 12.2665C11.8842 12.8306 11.073 13.0626 10.302 12.8785C9.52519 12.6706 8.78675 12.3397 8.11466 11.8982C7.49024 11.4992 6.91157 11.0326 6.38916 10.507C5.90848 10.0299 5.47664 9.50593 5.09998 8.94304C4.68799 8.33735 4.36191 7.67754 4.13098 6.98236C3.86625 6.1657 4.08562 5.26958 4.69766 4.66754L5.20198 4.16322C5.3422 4.02237 5.57004 4.02187 5.71085 4.16209C5.71122 4.16246 5.71161 4.16282 5.71198 4.16322L7.3043 5.75554C7.44515 5.89576 7.44565 6.1236 7.30543 6.26441C7.30507 6.26478 7.3047 6.26514 7.3043 6.26554L6.3693 7.20054C6.10102 7.4659 6.06729 7.88758 6.28998 8.19222C6.62815 8.65633 7.00239 9.09305 7.40916 9.4984C7.86268 9.95388 8.35571 10.3682 8.88248 10.7366C9.18685 10.9489 9.5995 10.9131 9.8628 10.6516L10.7666 9.73357C10.9068 9.59273 11.1347 9.59223 11.2755 9.73245C11.2759 9.73281 11.2762 9.73318 11.2766 9.73357L12.8718 11.3316C13.0127 11.4718 13.0132 11.6996 12.873 11.8404Z" fill="#636363" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1339_1022">
                                <rect width="19" height="17" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    Phone Number*</label>
                <input type="text" name="phone" onChange={handleInputChange} className="px-4 border w-[90%]  py-3 placeholder:text-[#969288] placeholder:font-medium ibm-plex outline-none rounded-full shadow-md " placeholder="Phone" />

            </div>
            <div className="relative my-6 ">
                <label className="ibm-plex text-[#636363] font-medium flex items-center mb-3 gap-x-1 text-[14px]" htmlFor="">
                    <svg className="ml-2" width="19" height="19" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1339_1050)">
                            <path d="M13.6077 11.3711L11.8489 13.1358C11.1357 13.8516 9.88075 13.867 9.15211 13.1358L7.39323 11.3711L1.07617 17.7087C1.31131 17.8174 1.57057 17.8823 1.8462 17.8823H19.1548C19.4304 17.8823 19.6896 17.8175 19.9247 17.7087L13.6077 11.3711Z" fill="#636363" />
                            <path d="M19.1547 3.11719H1.84612C1.57049 3.11719 1.31123 3.18207 1.07617 3.29081L7.8264 10.0634C7.82685 10.0639 7.82739 10.064 7.82784 10.0644C7.82829 10.0649 7.82837 10.0655 7.82837 10.0655L10.0232 12.2676C10.2564 12.5007 10.7445 12.5007 10.9777 12.2676L13.1721 10.0658C13.1721 10.0658 13.1726 10.0649 13.1731 10.0644C13.1731 10.0644 13.1741 10.0639 13.1745 10.0634L19.9246 3.29077C19.6895 3.18199 19.4303 3.11719 19.1547 3.11719Z" fill="#636363" />
                            <path d="M0.196301 4.15039C0.0746484 4.3964 0 4.66948 0 4.96201V16.0362C0 16.3287 0.0745664 16.6018 0.19626 16.8478L6.52427 10.4993L0.196301 4.15039Z" fill="#636363" />
                            <path d="M20.8045 4.15039L14.4766 10.4994L20.8045 16.848C20.9261 16.602 21.0008 16.3289 21.0008 16.0363V4.96209C21.0008 4.66948 20.9261 4.3964 20.8045 4.15039Z" fill="#636363" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1339_1050">
                                <rect width="21" height="21" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>


                    E-mail*</label>
                <input type="email" name="email" onChange={handleInputChange} className="px-4 border w-[90%]  py-3 placeholder:text-[#969288] placeholder:font-medium ibm-plex outline-none rounded-full shadow-md " placeholder="E-mail" />

            </div>

        </div>
        <div className="mt-5 px-4 w-full mx-auto flex justify-center">
            <img src={buttonGIF} onClick={() => handelStep(3)} className="w-[180px] cursor-pointer" alt="" />
            {/* <button
                class="btn border-0 gap-1 rounded-pill flex justify-center items-center p-2"
                onClick={()=>handelStep(3)}
            >
                <span class="pr-1 text-[15px] font-fraunces md:text-[14px] whitespace-nowrap font-[500]">Book Now</span>
                {progress ? <svg version="1.1" id="L9" height={"25px"} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 100 100" enable-background="new 0 0 0 0" >
            <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                from="0 50 50"
                to="360 50 50"
                repeatCount="indefinite" />
            </path>
          </svg> : <i class="bi bi-chevron-right ic-btn p-1 rounded-circle"></i>}
            </button> 

        </div> */}

        <FormSection
            handelStep={handelStep}
            handleInputChange={
                handleInputChange
            }
            />
    </>}

    {
        step == 3 && 
        <ConfirmedAppointment 
        dayInfo={dayInfo}
        weekDays={weekDays}
        activeDivision={activeDivision}
        />
    }
</div>
    </>
}