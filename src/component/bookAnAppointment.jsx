import { useEffect, useState } from "react"

import { post } from "../services/apiHandler";

import DeskBookAnAppointmentImage from '../assets/images/DesktopBookAnAppoinment.png'
import buttonGIF from '../assets/images/buton.gif'
import BookAnAppointmentDeepStore from "./bookAnAppointment/detailsMob";
import BookAnAppointmentCity from "./bookAnAppointment/cityMob";
export default function BookAnAppointment({ activeStore, setIndividualStoreData, openingTime, cities, closingTime, isOpen, setisOpen, storeCode, storeName, page = "deepStore" }) {



    const [step, setStep] = useState(1)
    const date = new Date()
    const day = date.getDay()
    const [activeModal, setActiveModal] = useState()
    const [dayInfo, setDayInfo] = useState({ formattedDate: new Date() })
    const [progress, setProgress] = useState(false);
    const [formData, setFormData] = useState({})

    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  
    const getCurrentDivision = () => {
        const now = new Date();
        const hours = now.getHours();

        if (hours < 12) return 0;
        if (hours < 17) return 1;
        return 2;
    };
    useEffect(() => {
        setStep(1)
    }, [storeName])

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

    const handelStep = (step) => {
        if (step == 2 && dayInfo.date && dayInfo.time) {
            setStep(2)
        }
        if (step == 3 && formData.name && formData.email && formData.phone) {

            handleApiRequest()
        }

        else {
            console.log("validation failed");
            console.log(formData);


        }
    }

    const generateTimeSlots = (openingT, closingT) => {
        const opening = convertTo24Hour(openingT);
        const closing = convertTo24Hour(closingT);
        const isToday = +dayInfo.date?.split(" ")[1] == new Date().getDate();
        const slots = [];
        let Time = new Date();
        let openingTime = new Date();
        let closingTime = new Date();
        openingTime.setHours(opening.hours, opening.minutes);
        closingTime.setHours(closing.hours, closing.minutes);

        console.log("openingT", openingT, "closingT", closingT);

        while (openingTime.getHours() < closingTime.getHours() ||
            (openingTime.getHours() === closingTime.getHours() && openingTime.getMinutes() < closingTime.getMinutes())) {

            if (isToday && (Time.getHours() > openingTime.getHours()) || (Time.getHours() == openingTime.getHours() && Time.getMinutes() > openingTime.getMinutes())) {

                openingTime.setMinutes(openingTime.getMinutes() + 30);
                continue

            }
            const formattedTime = formatTime(openingTime.getHours(), openingTime.getMinutes());
            slots.push(formattedTime);

            openingTime.setMinutes(openingTime.getMinutes() + 30); // Add 30 minutes for the next slot
        }

        return slots;
    };


    const formatTime = (hours, minutes) => {
        const period = hours >= 12 ? "PM" : "AM";
        const hour12 = hours % 12 === 0 ? 12 : hours % 12;
        const minute = minutes < 10 ? `0${minutes}` : minutes;
        return `${hour12}:${minute} ${period}`;
    };
    let currentTime = new Date();
    const currentTimeStamp = formatTime(currentTime.getHours(), currentTime.getMinutes());


    // Opening and Closing times
    //   const openingTime = "9:30 AM";
    //   const closingTime = "8:00 PM";

    // Generate time slots within  the provided opening and closing times
    const availableTimes = generateTimeSlots(openingTime, closingTime);



    // Filter divisions to include only those whose times fall within the available times
    const timeDivisions = [
        {
            division: "Morning",
            icon: <svg width={page == "deepStore" ? "14" : "20"} height={page == "deepStore" ? "14" : "20"} className="mb-1 " viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5942 9.77161L8.30624 6.50323C8.38153 6.23339 8.42192 5.95478 8.42192 5.67188C8.42192 3.96602 7.03403 2.57812 5.32817 2.57812C3.62231 2.57812 2.23442 3.96602 2.23442 5.67188C2.23442 6.04398 2.30334 6.40458 2.43173 6.74902L0.401885 9.77745C0.331245 9.88281 0.324542 10.0186 0.384182 10.1305C0.443995 10.2425 0.560698 10.3125 0.687542 10.3125H10.3125C10.4408 10.3125 10.5583 10.2412 10.6174 10.1276C10.6766 10.0138 10.6676 9.87663 10.5942 9.77161ZM5.32817 3.26562C6.65504 3.26562 7.73442 4.345 7.73442 5.67188C7.73442 5.67652 7.7339 5.68098 7.7339 5.68563L7.52885 5.39275C7.33996 5.12273 7.03059 4.95825 6.70093 4.95275C6.36939 4.94364 6.05675 5.10142 5.85892 5.36508L4.5439 7.11872L4.24896 6.64727C4.06282 6.34941 3.7421 6.16842 3.39079 6.16292C3.25278 6.16103 3.11751 6.18802 2.9917 6.23855C2.94701 6.0543 2.92192 5.86523 2.92192 5.67188C2.92192 4.345 4.00129 3.26562 5.32817 3.26562ZM1.33173 9.625L3.08898 7.00305C3.15412 6.90577 3.26068 6.84286 3.38014 6.85059C3.49718 6.85231 3.60392 6.91264 3.66596 7.01181L5.30067 9.625H1.33173ZM6.11157 9.625L4.93457 7.74348L6.40874 5.77792C6.47474 5.68992 6.57942 5.64214 6.68959 5.64025C6.79942 5.64214 6.90254 5.6968 6.96545 5.78703L9.65237 9.625H6.11157Z" fill={`${activeDivision == 0 ? "black" : '#0B0B0A'}`} fill-opacity={`${activeDivision == 0 ? "1" : '0.5'}`} />
                <path d="M8.76562 5.67188C8.76562 5.86163 8.91962 6.01562 9.10938 6.01562H9.96875C10.1585 6.01562 10.3125 5.86163 10.3125 5.67188C10.3125 5.48212 10.1585 5.32812 9.96875 5.32812H9.10938C8.91962 5.32812 8.76562 5.48212 8.76562 5.67188Z" fill={`${activeDivision == 0 ? "black" : '#0B0B0A'}`} fill-opacity={`${activeDivision == 0 ? "1" : '0.5'}`} />
                <path d="M8.60195 4.12529C8.66022 4.12529 8.71934 4.11051 8.77348 4.07906L9.5177 3.64937C9.68219 3.5545 9.73839 3.34429 9.64351 3.17981C9.54864 3.01532 9.33844 2.95895 9.17395 3.054L8.42973 3.48368C8.26525 3.57856 8.20904 3.78876 8.30392 3.95325C8.36769 4.06376 8.48319 4.12529 8.60195 4.12529Z" fill={`${activeDivision == 0 ? "black" : '#0B0B0A'}`} fill-opacity={`${activeDivision == 0 ? "1" : '0.5'}`} />
                <path d="M7.04692 2.69428C7.10106 2.72556 7.16019 2.74051 7.21845 2.74051C7.33722 2.74051 7.45289 2.67881 7.51648 2.56863L7.94617 1.82442C8.04104 1.65993 7.98484 1.44973 7.82036 1.35485C7.65587 1.25963 7.44567 1.31618 7.35079 1.48067L6.92111 2.22488C6.82623 2.3892 6.88244 2.5994 7.04692 2.69428Z" fill={`${activeDivision == 0 ? "black" : '#0B0B0A'}`} fill-opacity={`${activeDivision == 0 ? "1" : '0.5'}`} />
                <path d="M5.32812 2.23438C5.51788 2.23438 5.67188 2.08037 5.67188 1.89062V1.03125C5.67188 0.8415 5.51788 0.6875 5.32812 0.6875C5.13837 0.6875 4.98438 0.8415 4.98438 1.03125V1.89062C4.98438 2.08037 5.13837 2.23438 5.32812 2.23438Z" fill={`${activeDivision == 0 ? "black" : '#0B0B0A'}`} fill-opacity={`${activeDivision == 0 ? "1" : '0.5'}`} />
                <path d="M3.13986 2.56853C3.20345 2.67887 3.31895 2.7404 3.43789 2.7404C3.49615 2.7404 3.55528 2.72562 3.60942 2.69417C3.7739 2.59929 3.83011 2.38909 3.73523 2.22461L3.30554 1.48039C3.21067 1.31625 3.00047 1.2597 2.83598 1.35475C2.6715 1.44962 2.61529 1.65982 2.71017 1.82431L3.13986 2.56853Z" fill={`${activeDivision == 0 ? "black" : '#0B0B0A'}`} fill-opacity={`${activeDivision == 0 ? "1" : '0.5'}`} />
                <path d="M1.13673 3.64937L1.88094 4.07906C1.93509 4.11034 1.99421 4.12512 2.05248 4.12512C2.17124 4.12512 2.28691 4.06342 2.35051 3.95325C2.44538 3.78876 2.38918 3.57856 2.22469 3.48368L1.48048 3.054C1.31616 2.95895 1.10579 3.01532 1.01091 3.17981C0.916038 3.34429 0.972413 3.5545 1.13673 3.64937Z" fill={`${activeDivision == 0 ? "black" : '#0B0B0A'}`} fill-opacity={`${activeDivision == 0 ? "1" : '0.5'}`} />
                <path d="M0.6875 6.01562H1.54688C1.73662 6.01562 1.89062 5.86163 1.89062 5.67188C1.89062 5.48212 1.73662 5.32812 1.54688 5.32812H0.6875C0.49775 5.32812 0.34375 5.48212 0.34375 5.67188C0.34375 5.86163 0.49775 6.01562 0.6875 6.01562Z" fill={`${activeDivision == 0 ? "black" : '#0B0B0A'}`} fill-opacity={`${activeDivision == 0 ? "1" : '0.5'}`} />
            </svg>,

            times: availableTimes.filter(time => {
                const { hours } = convertTo24Hour(time);
                return hours >= 9 && hours < 12; // Morning: 9:00 AM to 12:00 PM
            }),
        },
        {
            division: "Noon",
            icon: <svg width={page == "deepStore" ? "11" : "20"} height={page == "deepStore" ? "11" : "20"} viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1339_797)">
                    <path d="M5.5 8.25C7.01878 8.25 8.25 7.01878 8.25 5.5C8.25 3.98122 7.01878 2.75 5.5 2.75C3.98122 2.75 2.75 3.98122 2.75 5.5C2.75 7.01878 3.98122 8.25 5.5 8.25Z" stroke="black" />
                    <path d="M5.5 0.917969V1.3763" stroke="#0B0B0A" fill={`${activeDivision == 1 ? "black" : '#0B0B0A'}`} opacity={`${activeDivision == 1 ? "1" : '0.5'}`} stroke-linecap="round" />
                    <path d="M5.5 9.625V10.0833" stroke="#0B0B0A" fill={`${activeDivision == 1 ? "black" : '#0B0B0A'}`} opacity={`${activeDivision == 1 ? "1" : '0.5'}`} stroke-linecap="round" />
                    <path d="M10.0833 5.5H9.625" stroke="#0B0B0A" fill={`${activeDivision == 1 ? "black" : '#0B0B0A'}`} opacity={`${activeDivision == 1 ? "1" : '0.5'}`} stroke-linecap="round" />
                    <path d="M1.3763 5.5H0.917969" stroke="#0B0B0A" fill={`${activeDivision == 1 ? "black" : '#0B0B0A'}`} opacity={`${activeDivision == 1 ? "1" : '0.5'}`} stroke-linecap="round" />
                    <path d="M8.74058 2.25977L8.56055 2.43981" stroke="#0B0B0A" fill={`${activeDivision == 1 ? "black" : '#0B0B0A'}`} opacity={`${activeDivision == 1 ? "1" : '0.5'}`} stroke-linecap="round" />
                    <path d="M2.43786 8.56055L2.25781 8.74063" stroke="#0B0B0A" fill={`${activeDivision == 1 ? "black" : '#0B0B0A'}`} opacity={`${activeDivision == 1 ? "1" : '0.5'}`} stroke-linecap="round" />
                    <path d="M8.74058 8.74058L8.56055 8.56055" stroke="#0B0B0A" fill={`${activeDivision == 1 ? "black" : '#0B0B0A'}`} opacity={`${activeDivision == 1 ? "1" : '0.5'}`} stroke-linecap="round" />
                    <path d="M2.43786 2.43982L2.25781 2.25977" stroke="#0B0B0A" fill={`${activeDivision == 1 ? "black" : '#0B0B0A'}`} opacity={`${activeDivision == 1 ? "1" : '0.5'}`} stroke-linecap="round" />
                </g>
                <defs>
                    <clipPath id="clip0_1339_797">
                        <rect width="11" height="11" fill={`${activeDivision == 1 ? "black" : '#0B0B0A'}`} opacity={`${activeDivision == 1 ? "1" : '0.5'}`} />
                    </clipPath>
                </defs>
            </svg>,

            times: availableTimes.filter(time => {
                const { hours } = convertTo24Hour(time);
                return hours >= 12 && hours < 17; // Noon: 12:00 PM to 5:00 PM
            }),
        },
        {
            division: "Evening",
            icon:
                <svg width={page == "deepStore" ? "13" : "20"} height={page == "deepStore" ? "14" : "20"} viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.33301 12.418H8.66634" stroke={`${activeDivision == 2 ? "black" : '#0B0B0A'}`} fill={`${activeDivision == 2 ? "black" : '#0B0B0A'}`} opacity={`${activeDivision == 2 ? "1" : '0.5'}`} stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2.70801 10.793H10.2913" stroke={`${activeDivision == 2 ? "black" : '#0B0B0A'}`} fill={`${activeDivision == 2 ? "black" : '#0B0B0A'}`} opacity={`${activeDivision == 2 ? "1" : '0.5'}`} stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1.08301 9.16797H11.9163" stroke={`${activeDivision == 2 ? "black" : '#0B0B0A'}`} fill={`${activeDivision == 2 ? "black" : '#0B0B0A'}`} opacity={`${activeDivision == 2 ? "1" : '0.5'}`} stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.5 3.75C4.70507 3.75 3.25 5.20507 3.25 7C3.25 7.82425 3.55683 8.57679 4.0625 9.14971H8.9375C9.44315 8.57679 9.75 7.82425 9.75 7C9.75 5.20507 8.29492 3.75 6.5 3.75Z" stroke={`${activeDivision == 2 ? "black" : '#0B0B0A'}`} fill={`${activeDivision == 2 ? "black" : '#0B0B0A'}`} opacity={`${activeDivision == 2 ? "1" : '0.5'}`} />
                    <path d="M6.5 1.58203V2.1237" stroke={`${activeDivision == 2 ? "black" : '#0B0B0A'}`} fill={`${activeDivision == 2 ? "black" : '#0B0B0A'}`} opacity={`${activeDivision == 2 ? "1" : '0.5'}`} stroke-linecap="round" />
                    <path d="M11.9167 7H11.375" stroke={`${activeDivision == 2 ? "black" : '#0B0B0A'}`} fill={`${activeDivision == 2 ? "black" : '#0B0B0A'}`} opacity={`${activeDivision == 2 ? "1" : '0.5'}`} stroke-linecap="round" />
                    <path d="M1.62467 7H1.08301" stroke={`${activeDivision == 2 ? "black" : '#0B0B0A'}`} fill={`${activeDivision == 2 ? "black" : '#0B0B0A'}`} opacity={`${activeDivision == 2 ? "1" : '0.5'}`} stroke-linecap="round" />
                    <path d="M10.33 3.16992L10.1172 3.3827" stroke={`${activeDivision == 2 ? "black" : '#0B0B0A'}`} fill={`${activeDivision == 2 ? "black" : '#0B0B0A'}`} opacity={`${activeDivision == 2 ? "1" : '0.5'}`} stroke-linecap="round" />
                    <path d="M2.88271 3.38271L2.66992 3.16992" stroke={`${activeDivision == 2 ? "black" : '#0B0B0A'}`} fill={`${activeDivision == 2 ? "black" : '#0B0B0A'}`} opacity={`${activeDivision == 2 ? "1" : '0.5'}`} stroke-linecap="round" />
                </svg>
            ,
            times: availableTimes.filter(time => {
                const { hours } = convertTo24Hour(time);
                return hours >= 17 && hours < 20; // Evening: 5:00 PM to 8:00 PM
            }),
        },
    ];





    const currentHour = new Date().getHours();

    const isTimeDisabled = (division) => {
        const isToday = +dayInfo.date?.split(" ")[1] == new Date().getDate(); // Compare with today's day


        if (!isToday) return false;
        const index = division == "Morning" ? 0 : division == "Noon" ? 1 : 2

        if (timeDivisions[index].times.length == 0) return true
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

    const handleDivisions = (division, i) => {
        const isDisabled = isTimeDisabled(division)


        if (!isDisabled)
            setActiveDivision(i)
    }
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleApiRequest = async () => {
        setProgress(true)
        const apiData = await post(`/bookAnAppointment?FirstName=${formData.name.split(" ")[0]}&LastName=${formData.name.split(" ")[1]}&EmailId=${formData.email}&Phone=${formData.phone}&AppointmentTime=${dayInfo.time}&AppointmentDate=${dayInfo.formattedDate}&storeCode=${storeCode}&storeName=${storeName}`)
        setStep(3)
        setProgress(false)
    }

    const handleDate = (i) => {
        const formattedDate = new Date()
        formattedDate.setDate(days[i].split(" ")[1])
        setDayInfo({ day: weekDays[(day + i) % 7], date: days[i], activeIndex: i, formattedDate })
        console.log(days[i], formattedDate);

    }

    const getDeepStoreCard = () => {
        if (step != 3) {
            return <div className="box md:block hidden mb-4 font-fraunces overflow-visible shadow-md h-fit md:max-h-[170px] max-h-[220px] p-4 rounded-md w-full bg-[#FFFCF7]">

                {step == 1 && <> <h1 className="text-[#832729] md:text-[20px] text-[18px] md:text-left text-center font-fraunces font-bold">Heading to Our Store?</h1><p className="text-black font-fraunces  md:text-[16px] text-[14px] md:text-left text-center">Let us make it smoother and tailored for you. Book an appointment to skip the wait.</p>
                    <div className="my-3  flex md:justify-around justify-center gap-x-5">
                        <div className=" overflow-visible">
                            <input type="text" onClick={() => setActiveModal(1)} value={dayInfo.day ? `${dayInfo?.day} ${dayInfo?.date}` : 'Choose Day'} className="md:px-4 px-0 md:w-[initial] w-[100px]  text-center cursor-pointer border !border-black py-3 placeholder:text-[#969288] rounded-full placeholder:text-center " placeholder="Choose Day" />
                            {activeModal == 1 && <div className="absolute z-20">
                                <div className="box p-4 rounded-md shadow-lg bg-white">
                                    <table className="table-auto w-full">

                                        <tbody>
                                            {[...Array(7)].map((_, i) => (

                                                <tr
                                                    key={i}
                                                    className={`w-full cursor-pointer ${i == dayInfo.activeIndex ? "text-black font-bold" : "text-[#767469]"} hover:bg-gray-100 transition-all`}
                                                    onClick={() => { setActiveModal(); handleDate(i) }}
                                                >
                                                    <td className="px-4 py-1 ">
                                                        {i === 0 ? <>Today</> : i === 1 ? "Tomorrow" : weekDays[(day + i) % 7]}
                                                    </td>
                                                    <td className="px-4  py-1">{days[i]}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                            </div>}
                        </div>
                        <div className="">
                            {/* <input type="text" className="px-4 border border-[#444444] py-3 placeholder:text-[#969288] rounded-full placeholder:text-center " placeholder="Choose Time" /> */}
                            <input type="text" onClick={() => setActiveModal(2)} value={dayInfo.time || ''} className="md:px-4 px-0 md:w-[initial] w-[100px]  text-center cursor-pointer border border-black py-3 placeholder:text-black rounded-full placeholder:text-center " placeholder="Choose Time" />
                            {activeModal == 2 && <div className="absolute z-20">
                                <div className="box p-4 flex rounded-md shadow-lg bg-white">


                                    <div>
                                        {timeDivisions.map((timeBlock, i) =>
                                            <>

                                                {!isTimeDisabled(timeBlock.division) && <p onClick={() => { handleDivisions(timeBlock.division, i) }} className={`px-1 py-1 flex gap-x-2 items-center  hover:font-bold cursor-pointer hover:bg-gray-100 ${activeDivision == i ? "text-black font-bold" : "text-[#767469] font-medium"}  transition-all`} >
                                                    {timeBlock.icon}  {timeBlock.division}
                                                </p>}
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

                                                <td onClick={() => { setActiveModal(); setDayInfo({ ...dayInfo, time }) }} className="px-4 py-1">{time}</td>
                                            </div>
                                        ))}
                                    </div>

                                </div>

                            </div>}
                        </div>
                        <button
                            class="btn border-0 gap-1 md:flex rounded-pill hidden justify-center items-center p-2"
                            onClick={() => handelStep(2)}
                        >
                            <span class="pr-1 text-[15px] font-fraunces md:text-[14px] font-[500]">Proceed</span>
                            <i class="bi bi-chevron-right ic-btn p-1 rounded-circle"></i>
                        </button>

                    </div>

                </>}

                {step == 2 && <>
                    <h1 className="text-[#832729] text-[20px] font-fraunces font-bold">You're Almost There!</h1>
                    <div className="my-3 flex  gap-x-1">
                        <div className="relative ">
                            <input type="text" name="name" onChange={handleInputChange} className="px-4 border w-[90%] border-[#444444] py-3 placeholder:text-[#969288] rounded-full placeholder:text-center " placeholder="Name*" />

                        </div>
                        <div className="relative">
                            <input type="text" name="phone" onChange={handleInputChange} className="px-4 border w-[90%] border-[#444444] py-3 placeholder:text-[#969288] rounded-full placeholder:text-center " placeholder="Phone Number*" />
                        </div>


                    </div>
                    <div className="md:my-3 my-6 flex gap-x-3">

                        <div className="relative w-full">
                            <input type="text" name="email" onChange={handleInputChange} className="px-4 border  border-[#444444] w-[98%] py-3 placeholder:text-[#969288] rounded-full placeholder:text-center " placeholder="Type Your Email ID*" />
                        </div>

                        <img src={buttonGIF} onClick={() => handelStep(3)} className="w-[140px] cursor-pointer" alt="" />

                    </div>
                </>}


            </div>

        }
        else {
            return <>
                <div className="relative  max-h-fit mb-8">
                    <img src={DeskBookAnAppointmentImage} className=" " alt="" />
                    <div className="absolute flex justify-around items-center bottom-[15%]  w-[80%] right-[-2%] ibm-plex text-[#636363] font-bold  text-[15px]">
                        <p>{dayInfo.day} ({dayInfo.formattedDate.getDate()}/{dayInfo.formattedDate.getMonth() + 1}/{dayInfo.formattedDate.getFullYear()})</p>
                        <p>{timeDivisions[activeDivision].division}, {dayInfo.time}</p>
                    </div>
                </div>

            </>
        }


    }

    const getCityPageCard = () => {

        if (step != 3) {
            return <>
                <div class="col storeCard h-full md:block hidden  md:max-w-[550px]"> <div class="card h-full  border rounded-xl shadow-sm">

                    <div class="flex items-center stag p-3 mb-2">
                        {/* <i class="bi bi-shop me-2"></i> */}
                        <p class="mb-0">
                            {/* <img src={festiveStrip} className="md:w-[50%] w-[80%]" alt="" /> */}
                        </p>

                    </div>
                    <div className="px-4 h-full">
                        <div className="relative overflow-visible">
                            <svg onClick={() => setisOpen(false)} width="24" height="24" className="top-[-50%]  translate-y-[-75%] cursor-pointer absolute z-50 right-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="#F6F6F6" />
                                <path d="M15.3636 9L9 15.3636M9 9L15.3636 15.3636" stroke="#300708" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>


                        {step == 1 && <div> <h1 className="text-[#832729]  md:text-[20px] text-[18px] md:text-left text-center mb-2 font-fraunces font-semibold">Heading to {storeName}</h1><p className="text-black font-fraunces  md:text-[16px] text-[14px] md:text-left text-center">Let us make it smoother and tailored for you. Book an appointment to skip the wait.</p>
                            <div className="mb-3  mt-10 flex md:justify-around justify-center gap-x-5">
                                <div className="  overflow-visible">
                                    <input type="text" onClick={() => setActiveModal(1)} value={dayInfo.day ? `${dayInfo?.day} ${dayInfo?.date}` : 'Choose Day'} className="md:px-4 px-0  w-[180px]  text-center cursor-pointer border border-black py-3 placeholder:text-black rounded-full placeholder:text-center " placeholder="Choose Day" />
                                    {activeModal == 1 && <div className="absolute z-20">
                                        <div className="box p-4 rounded-md shadow-lg bg-white">
                                            <table className="table-auto w-full">

                                                <tbody>
                                                    {[...Array(7)].map((_, i) => (

                                                        <tr
                                                            key={i}
                                                            className={`w-full cursor-pointer ${i == dayInfo.activeIndex ? "text-black font-bold" : "text-[#767469]"} hover:bg-gray-100 transition-all`}
                                                            onClick={() => { setActiveModal(); handleDate(i) }}
                                                        >
                                                            <td className="px-4 py-1 ">
                                                                {i === 0 ? <>Today</> : i === 1 ? "Tomorrow" : weekDays[(day + i) % 7]}
                                                            </td>
                                                            <td className="px-4  py-1">{days[i]}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>}
                                </div>
                                <div className="">
                                    {/* <input type="text" className="px-4 border border-[#444444] py-3 placeholder:text-[#969288] rounded-full placeholder:text-center " placeholder="Choose Time" /> */}
                                    <input type="text" onClick={() => setActiveModal(2)} value={dayInfo.time || ''} className="md:px-4 px-0 md:w-[180px]  text-center cursor-pointer border border-black py-3 placeholder:text-black rounded-full placeholder:text-center " placeholder="Choose Time" />
                                    {activeModal == 2 && <div className="absolute z-20">
                                        <div className="box p-4 flex rounded-md shadow-lg bg-white">


                                            <div>
                                                {timeDivisions.map((timeBlock, i) =>
                                                    <>

                                                        {!isTimeDisabled(timeBlock.division) && <p onClick={() => { handleDivisions(timeBlock.division, i) }} className={`px-1 py-1 flex gap-x-2 items-center  hover:font-bold cursor-pointer hover:bg-gray-100 ${activeDivision == i ? "text-black font-bold" : "text-[#767469] font-medium"}  transition-all`} >
                                                            {timeBlock.icon}  {timeBlock.division}
                                                        </p>}
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

                                                        <td onClick={() => { setActiveModal(); setDayInfo({ ...dayInfo, time }) }} className="px-4 py-1">{time}</td>
                                                    </div>
                                                ))}
                                            </div>

                                        </div>

                                    </div>}
                                </div>
                                <button
                                    class="btn border-0 gap-1 md:flex rounded-pill hidden justify-center items-center p-2"
                                    onClick={() => handelStep(2)}
                                >
                                    <span class="pr-1 text-[15px] font-fraunces md:text-[14px] font-[500]">Proceed</span>
                                    <i class="bi bi-chevron-right ic-btn p-1 rounded-circle"></i>
                                </button>

                            </div>

                        </div>}

                        {step == 2 && <>
                            <h1 className="text-[#832729] text-[24px] font-fraunces font-semibold ">You're Almost There!</h1>
                            <div className="my-4 flex  gap-x-1">
                                <div className="relative ">
                                    <input type="text" name="name" onChange={handleInputChange} className="px-4 border w-[90%] border-[#444444] py-3 placeholder:text-[#969288] rounded-full placeholder:text-center " placeholder="Name*" />

                                </div>
                                <div className="relative">
                                    <input type="text" name="phone" onChange={handleInputChange} className="px-4 border w-[90%] border-[#444444] py-3 placeholder:text-[#969288] rounded-full placeholder:text-center " placeholder="Phone Number*" />
                                </div>


                            </div>
                            <div className="md:my-3 my-6 flex items-center gap-x-3">

                                <div className="relative w-full">
                                    <input type="text" name="email" onChange={handleInputChange} className="px-4 border  border-[#444444] w-[98%] py-3 placeholder:text-[#969288] rounded-full placeholder:text-center " placeholder="Type Your Email ID*" />
                                </div>

                                <img src={buttonGIF} onClick={() => handelStep(3)} className="w-[160px]  cursor-pointer" alt="" />

                            </div>
                        </>}


                    </div>
                </div>
                </div>
            </>

        }
        else {
            return <>
                <div class="col  h-full md:block hidden   md:max-w-[550px]"> <div class=" px-2 h-full  rounded-xl ">
                <div className="relative overflow-visible">
                            <svg onClick={() => setisOpen(false)} width="24" height="24" className="top-[50%]  translate-y-[25%] cursor-pointer absolute z-[80] right-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="12" fill="#F6F6F6" />
                                <path d="M15.3636 9L9 15.3636M9 9L15.3636 15.3636" stroke="#300708" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    <div className="relative  my-auto flex justify-center items-center h-full ">
                        <img src={DeskBookAnAppointmentImage} className=" " alt="" />
                        <div className="absolute flex justify-around items-center bottom-[25%]  w-[80%] right-[-3%] ibm-plex text-[#636363] font-bold  text-[15px]">
                            <p>{dayInfo.day} ({dayInfo.formattedDate.getDate()}/{dayInfo.formattedDate.getMonth() + 1}/{dayInfo.formattedDate.getFullYear()})</p>
                            <p>{timeDivisions[activeDivision].division}, {dayInfo.time}</p>
                        </div>
                    </div>
                </div>
                </div>

            </>
        }
    }
    const days = getNextSevenDays()
   
// if(!isOpen&&window.innerWidth>=768)return
    return <>

    
        {
            page == "deepStore" ? getDeepStoreCard() :
                getCityPageCard()

        }
         
        {page == "deepStore" ? <BookAnAppointmentDeepStore
            isOpen={isOpen}
            setisOpen={setisOpen}
            step={step}
            setStep={setStep}
            days={days}
            weekDays={weekDays}
            dayInfo={dayInfo}
            setDayInfo={(e) => setDayInfo(e)}
            handleDivisions={handleDivisions}
            activeDivision={activeDivision}
            isTimeDisabled={isTimeDisabled}
            handleInputChange={handleInputChange}
            timeDivisions={timeDivisions}
            storeName={storeName}
            activeModal={activeModal}
            setActiveModal={setActiveModal}
            handleDate={handleDate}
            handelStep={handelStep}
            handleApiRequest={handleApiRequest}

        /> :
            <BookAnAppointmentCity
                isOpen={isOpen}
                setisOpen={setisOpen}
                step={step}
                activeStore={activeStore}
                setStep={setStep}
                days={days}
                weekDays={weekDays}
                dayInfo={dayInfo}
                cities={cities}
                setDayInfo={(e) => setDayInfo(e)}
                handleDivisions={handleDivisions}
                activeDivision={activeDivision}
                isTimeDisabled={isTimeDisabled}
                setIndividualStoreData={setIndividualStoreData}
                timeDivisions={timeDivisions}
                activeModal={activeModal}
                handleInputChange={handleInputChange}
                setActiveModal={setActiveModal}
                handleDate={handleDate}
                handelStep={handelStep}
                handleApiRequest={handleApiRequest}

            />
        }

    </>
}