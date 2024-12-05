import { useEffect, useState } from "react"

export default function BookAnAppointment({openingTime,closingTime}) {
    console.log({openingTime,closingTime});
    
    const [step, setStep] = useState(1)
    const date = new Date()
    const day = date.getDay()
    const [activeModal, setActiveModal] = useState()
    const [dayInfo, setDayInfo] = useState({})
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const getCurrentDivision = () => {
        const now = new Date();
        const hours = now.getHours();

        if (hours < 12) return 0;
        if (hours < 17) return 1;
        return 2;
    };

    const [activeDivision, setActiveDivision] = useState(getCurrentDivision());

    

    const convertTo24Hour = (time) => {
        const [timeString, period] = time.split(' ');
        const [hours, minutes] = timeString.split(':').map(Number);
      
        let hours24 = hours;
        if (period === 'PM' && hours !== 12) {
          hours24 += 12; // Convert PM times except 12 PM
        }
        if (period === 'AM' && hours === 12) {
          hours24 = 0; // Convert 12 AM to 0 hours
        }
      
        return { hours: hours24, minutes };
      };
      
      const generateTimeSlots = (opening, closing) => {
        const openingTime = convertTo24Hour(opening);
        const closingTime = convertTo24Hour(closing);
      
        const slots = [];
        let currentTime = new Date();
        currentTime.setHours(openingTime.hours, openingTime.minutes);
      
        while (currentTime.getHours() < closingTime.hours || 
               (currentTime.getHours() === closingTime.hours && currentTime.getMinutes() < closingTime.minutes)) {
          const formattedTime = formatTime(currentTime.getHours(), currentTime.getMinutes());
          slots.push(formattedTime);
      
          currentTime.setMinutes(currentTime.getMinutes() + 30); // Add 30 minutes for the next slot
        }
      
        return slots;
      };
      
      const formatTime = (hours, minutes) => {
        const period = hours >= 12 ? "PM" : "AM";
        const hour12 = hours % 12 === 0 ? 12 : hours % 12;
        const minute = minutes < 10 ? `0${minutes}` : minutes;
        return `${hour12}:${minute} ${period}`;
      };
      
      
      
      // Opening and Closing times
    //   const openingTime = "9:30 AM";
    //   const closingTime = "8:00 PM";
      
      // Generate time slots within  the provided opening and closing times
      const availableTimes = generateTimeSlots(openingTime, closingTime);

   
      
      // Filter divisions to include only those whose times fall within the available times
      const timeDivisions = [
        {
          division: "Morning",
          times: availableTimes.filter(time => {
            const { hours } = convertTo24Hour(time);
            return hours >= 9 && hours < 12; // Morning: 9:00 AM to 12:00 PM
          }),
        },
        {
          division: "Noon",
          times: availableTimes.filter(time => {
            const { hours } = convertTo24Hour(time);
            return hours >= 12 && hours < 17; // Noon: 12:00 PM to 5:00 PM
          }),
        },
        {
          division: "Evening",
          times: availableTimes.filter(time => {
            const { hours } = convertTo24Hour(time);
            return hours >= 17 && hours < 20; // Evening: 5:00 PM to 8:00 PM
          }),
        },
      ];
      
      console.log(timeDivisions);
      
      

    const currentHour = new Date().getHours();

    const isTimeDisabled = (division) => {
        const isToday = +dayInfo.date?.split(" ")[1] == new Date().getDay()+1; // Compare with today's day
        // console.log(+dayInfo.date?.split(" ")[1],new Date().getDay());
        
        console.log(isToday);
        
        if (!isToday) return false;

        switch (division) {
            case "Morning":
                return currentHour >= 12; // Disable Morning if current time is Noon or later
            case "Noon":
                return currentHour >= 17; // Disable Noon if current time is Evening or later
            case "Evening":
                return false; // Evening is never disabled
            default:
                return false;
        }
    };
    const getNextSevenDays = () => {
        const days = [];
        const today = new Date();

        for (let i = 0; i < 7; i++) {
            const nextDay = new Date(today);
            nextDay.setDate(today.getDate() + i);
            const formattedDate = nextDay.toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
            });
            days.push(formattedDate);
        }
        return days;
    };

    const handleDivisions=(division,i)=>{
       const isDisabled= isTimeDisabled(division)
       if(!isDisabled)
        setActiveDivision(i)
    }

    return <>
        <div className="box mb-4 font-fraunces overflow-visible shadow-md h-fit md:max-h-[170px] max-h-[220px] p-4 rounded-md w-full bg-[#FFFCF7]">

            {step == 1 && <> <h1 className="text-[#832729] md:text-[20px] text-[18px] md:text-left text-center font-fraunces font-bold">Heading to Our Store?</h1><p className="text-black font-fraunces  md:text-[16px] text-[14px] md:text-left text-center">Let us make it smoother and tailored for you. Book an appointment to skip the wait.</p>
                <div className="my-3  flex md:justify-around justify-center gap-x-5">
                    <div className=" overflow-visible">
                        <input type="text" onClick={() => setActiveModal(1)} value={dayInfo.day?`${dayInfo?.day} ${dayInfo?.date}`:'Choose Day'} className="md:px-2 px-0 md:w-[initial] w-[100px]  text-center cursor-pointer border border-[#444444] py-3 placeholder:text-[#969288] rounded-full placeholder:text-center " placeholder="Choose Day" />
                        {activeModal == 1 && <div className="absolute z-20">
                            <div className="box p-4 rounded-md shadow-lg bg-white">
                                <table className="table-auto w-full">

                                    <tbody>
                                        {[...Array(7)].map((_, i) => (

                                            <tr
                                                key={i}
                                                className={`w-full cursor-pointer ${i == dayInfo.activeIndex ? "text-black font-bold" : "text-[#767469]"} hover:bg-gray-100 transition-all`}
                                                onClick={() => { setActiveModal(); setDayInfo({ day: weekDays[(day + i) % 7], date: getNextSevenDays()[i], activeIndex: i }) }}
                                            >
                                                <td className="px-2 py-1 ">
                                                    {i === 0 ? "Today" : i === 1 ? "Tomorrow" : weekDays[(day + i) % 7]}
                                                </td>
                                                <td className="px-2  py-1">{getNextSevenDays()[i]}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>}
                    </div>
                    <div className="">
                        {/* <input type="text" className="px-4 border border-[#444444] py-3 placeholder:text-[#969288] rounded-full placeholder:text-center " placeholder="Choose Time" /> */}
                        <input type="text" onClick={() => setActiveModal(2)} value={dayInfo.time||''} className="md:px-2 px-0 md:w-[initial] w-[100px] text-center cursor-pointer border border-[#444444] py-3 placeholder:text-[#969288] rounded-full placeholder:text-center " placeholder="Choose Time" />
                        {activeModal == 2 && <div className="absolute z-20">
                            <div className="box p-4 flex rounded-md shadow-lg bg-white">


                                <div>
                                    {timeDivisions.map((timeBlock, i) =>
                                     <>
                                           
                                        <p onClick={() => { handleDivisions(timeBlock.division,i)}} className={`px-2 py-1  hover:font-bold cursor-pointer hover:bg-gray-100 ${activeDivision == i ? "text-black font-bold" : "text-[#767469] font-medium"}  transition-all`} >
                                            {timeBlock.division}
                                        </p>
                                        </>
                                    )}
                                </div>
                                <div>
                                    {timeDivisions[activeDivision].times.map((time, i) => (
                                        <div
                                            key={i}
                                            className="hover:font-bold cursor-pointer hover:bg-gray-100 transition-all"
                                        >
                                            {/* Show division name only for the first time in each block */}

                                            <td onClick={() => { setActiveModal(); setDayInfo({ ...dayInfo, time }) }} className="px-2 py-1">{time}</td>
                                        </div>
                                    ))}
                                </div>

                            </div>

                        </div>}
                    </div>
                    <button
                        class="btn border-0 gap-1 md:flex rounded-pill hidden justify-center items-center p-2"
                        onClick={() => setStep(2)}
                    >
                        <span class="pr-1 text-[15px] font-fraunces md:text-[14px] font-[500]">Procced</span>
                        <i class="bi bi-chevron-right ic-btn p-1 rounded-circle"></i>
                    </button>

                </div>
                <button
                        class="btn border-0 gap-1 flex mx-auto rounded-pill md:hidden justify-center items-center p-2"
                        onClick={() => setStep(2)}
                    >
                        <span class="pr-1 text-[15px] font-fraunces md:text-[14px] font-[500]">Proceed to Book an Appointment</span>
                        <i class="bi bi-chevron-right ic-btn p-1 rounded-circle"></i>
                    </button>
                </>}

            {step == 2 && <>
                <h1 className="text-[#832729] text-[20px] font-fraunces font-bold">You're Almost There!</h1>
                <div className="my-3 flex  gap-x-1">
                    <div className="relative ">
                        <input type="text" className="px-4 border w-[90%] border-[#444444] py-3 placeholder:text-[#969288] rounded-full placeholder:text-center " placeholder="Name*" />

                    </div>
                    <div className="relative">
                        <input type="text" className="px-4 border w-[90%] border-[#444444] py-3 placeholder:text-[#969288] rounded-full placeholder:text-center " placeholder="Phone Number*" />
                    </div>


                </div>
                <div className="md:my-3 my-6 flex gap-x-3">

                    <div className="relative w-full">
                        <input type="text" className="px-4 border  border-[#444444] w-[98%] py-3 placeholder:text-[#969288] rounded-full placeholder:text-center " placeholder="Type Your Email ID*" />
                    </div>
                    <button
                        class="btn border-0 gap-1 rounded-pill flex justify-center items-center p-2"
                        onClick={() => setStep(3)}
                    >
                        <span class="pr-1 text-[15px] font-fraunces md:text-[14px] whitespace-nowrap font-[500]">Book Now</span>
                        <i class="bi bi-chevron-right ic-btn p-1 rounded-circle"></i>
                    </button>

                </div>
            </>}
        </div>
    </>
}