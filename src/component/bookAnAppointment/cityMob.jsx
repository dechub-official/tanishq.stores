import ButtonStrip from "./sliderButton";
import MonBookAnAppointmentImage from '../../assets/images/coupon.png'

import ButtonStripCity from "./sliderButtonCity";
import FormSection from "./form";
import ConfirmedAppointment from "./confirmedAppoinment";
export default function BookAnAppointmentCity({step,cities,activeStore,setIndividualStoreData,isOpen,setisOpen,days,weekDays,dayInfo,setDayInfo,handleDivisions,activeDivision,isTimeDisabled,timeDivisions,activeModal,setActiveModal,handleDate,handelStep,handleInputChange}) {
    return <>
     <div className={` ${isOpen ? "absolute" : "hidden"} md:hidden overflow-hidden max-h-[800%] top-0 left-0 w-full min-h-[800%] z-[60] backdrop-blur-lg bg-white/30  `}>

</div>


<div className={` block shadow-[#832729] shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] fixed overflow-visible z-[70] ${isOpen ? "bottom-[0]" : "bottom-[-150%]"} transition-all duration-150 md:hidden left-0 font-fraunces  h-fit  max-h-[650px] min-h-[500px] px-2 overflow-scroll !rounded-t-xl  !rounded-b-none w-full bg-white`}>
    <svg onClick={() => setisOpen(false)} width="24" height="24" className="top-3 absolute z-50 right-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#F6F6F6" />
        <path d="M15.3636 9L9 15.3636M9 9L15.3636 15.3636" stroke="#300708" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    {step == 1 &&
        <>
            <h1 className="text-black px-4 text-[22px] font-fraunces  text-left mt-[2rem] mb-1 font-[400]"><span className="text-[#832729] font-fraunces ">Heading to </span> {cities[activeStore]?.storeName}</h1>
            <p className="text-black px-4 font-fraunces mb-5 text-[14px]  font-normal">Let us make it smoother and tailored for you. <br />Book an appointment to skip the wait.</p>
            <ButtonStripCity
                days={days}
                weekDays={weekDays}
                dayInfo={dayInfo}
                setIndividualStoreData={setIndividualStoreData}
                cities={cities}
                activeStore={activeStore}
                setDayInfo={(e) => setDayInfo(e)}
                handleDivisions={handleDivisions}
                activeDivision={activeDivision}
                isTimeDisabled={isTimeDisabled}
                timeDivisions={timeDivisions}
                activeModal={activeModal}
                setActiveModal={setActiveModal}
                handleDate={handleDate}
            />
            {/* <div className="w-full bg-white fixed bottom-0 shadow-[#490A0C] left-0 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"> */}
            <button
                class="btn border-0 gap-1   flex rounded-pill mx-auto mt-8
                 justify-center items-center p-2"
                onClick={() => handelStep(2)}
            >
                <span class="pr-1 text-[15px] font-fraunces md:text-[14px] font-[500]">Procced</span>
                <i class="bi bi-chevron-right ic-btn p-1 rounded-circle"></i>
            </button>
            {/* </div> */}
          
        </>}

    {step == 2 && <FormSection
    handelStep={handelStep}
    handleInputChange={
        handleInputChange
    }
    />}

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