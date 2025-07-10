import { useState } from "react";

import ReactGA from 'react-ga4'
import { useNavigate } from "react-router-dom";
import festiveStrip from '../assets/images/navbar/festive-strip.gif'
import '../assets/css/storeCard.css'
import { gtmEventHandler } from "../utils/gtmDataLayer";
export default function StorePlate({ data, setIndividualStoreData, index, setBookAnAppointmentModal }) {

  const modifiedClosingTime = data.storeClosingTime?.replace(/(\d{1,2}:\d{2})([AP]M)$/, '$1 $2').replace(".", ":");
  const modifiedOpeningTime = data.storeOpeningTime?.replace(/(\d{1,2}:\d{2})([AP]M)$/, '$1 $2').replace(".", ":");

  const Navigate = useNavigate()
  const [Clicks, setClicks] = useState({ Bookan: 0, getDir: 0 })

  const normalizeTimeString = (timeStr) => {
    // Replace dots with colons, and normalize to hh:mm:ss AM/PM format
    timeStr = timeStr.replace(/\./g, ":");

    // Check if it's in 12-hour or 24-hour format
    const hasAmPm = timeStr.match(/(AM|PM)$/i);

    if (!hasAmPm) {
      // If no AM/PM, assume 24-hour format
      if (!timeStr.includes(":")) {
        timeStr += ":00:00"; // Assume only hours were provided, e.g. "22" -> "22:00:00"
      } else if (timeStr.split(":").length === 2) {
        timeStr += ":00"; // Add seconds if missing
      }
      return timeStr; // Already 24-hour format
    }

    // If AM/PM format is present, add missing parts
    const timeParts = timeStr.split(" ");
    let timePart = timeParts[0];

    if (timePart.split(":").length === 1) {
      timePart += ":00:00"; // If only hours are provided (e.g. "10 AM")
    } else if (timePart.split(":").length === 2) {
      timePart += ":00"; // If hours and minutes are provided but no seconds
    }

    return timePart + " " + timeParts[1]; // Return normalized 12-hour format
  };

  const convertTime12to24 = (time12h) => {
    // Parse the time string: "hh:mm:ss AM/PM"
    const [time, modifier] = time12h.split(" ");

    let [hours, minutes, seconds] = time.split(":").map(Number);

    // Convert 12-hour format to 24-hour format
    if (modifier === "PM" && hours !== 12) {
      hours += 12;
    }
    if (modifier === "AM" && hours === 12) {
      hours = 0;
    }

    return { hours, minutes, seconds };
  };

  const checkTime = (timeString, openingTime) => {
    // Get the current time
    const currentTime = new Date();

    // Normalize the dynamic time string
    const normalizedTimeString = normalizeTimeString(timeString);
    const OpeningNormalizedTimeString = normalizeTimeString(openingTime);
    // console.log("normalizedTimeString",normalizedTimeString);


    let comparisonTime;
    let OpeningcomparisonTime;

    if (normalizedTimeString.includes("AM") || normalizedTimeString.includes("PM")) {
      // If the time is in 12-hour format
      const { hours, minutes, seconds } = convertTime12to24(normalizedTimeString);
      comparisonTime = new Date();
      comparisonTime.setHours(hours, minutes, seconds, 0);
    } else {
      // If the time is in 24-hour format
      const [hours, minutes, seconds] = normalizedTimeString.split(":").map(Number);
      comparisonTime = new Date();
      comparisonTime.setHours(hours, minutes || 0, seconds || 0, 0);
    }

    if (OpeningNormalizedTimeString.includes("AM") || OpeningNormalizedTimeString.includes("PM")) {
      // If the time is in 12-hour format
      const { hours, minutes, seconds } = convertTime12to24(OpeningNormalizedTimeString);
      OpeningcomparisonTime = new Date();
      OpeningcomparisonTime.setHours(hours, minutes, seconds, 0);
    } else {
      // If the time is in 24-hour format
      const [hours, minutes, seconds] = OpeningNormalizedTimeString.split(":").map(Number);
      OpeningcomparisonTime = new Date();
      OpeningcomparisonTime.setHours(hours, minutes || 0, seconds || 0, 0);
    }


    if (currentTime < comparisonTime && currentTime >= OpeningcomparisonTime) {
      return true
    } else {
      return false
    }
  };


  // useEffect(()=>{
  //   console.log(checkTime());

  // },[])
  const handleBookAnAppointment = (e) => {
    e.stopPropagation();
    ReactGA.event({
      category: "Book An Appointment",
      storeName: data?.storeName,
      value: Clicks.Bookan + 1,
      action: "Book An Appointment",
    });
    setClicks({ ...Clicks, Bookan: Clicks.Bookan + 1 })
    // if (localStorage.getItem("nav-hide")) {
    //   handleAppPopup()
    //   return
    // }

    setIndividualStoreData({ storeClosingTime: modifiedClosingTime, storeOpeningTime: modifiedOpeningTime, storeName: data?.storeName, storeCode: data?.storeCode, activeStore: index })

    if (window.innerWidth <= 768) {

      setBookAnAppointmentModal({ visible: true, mode: "popup" })
    }
    else {
      setBookAnAppointmentModal({ visible: true, mode: "card" })
    }
  }
  const handleStoreNavidation = (data) => {

    gtmEventHandler({
      'event': 'store_selected',
      'storeName': data.storeName
    })
    Navigate(`/store-locator/jewellery-stores/${data.storeState.toLowerCase().replace(" ", "-")}/${data.storeCity.toLowerCase().replace(" ", "-")}/${data.storeName.toLowerCase().split("- ")[1] ? data.storeName.toLowerCase().split("- ")[1].replace(/ /g, "-").replace(",", "-") : data.storeName.toLowerCase().replace(" ", "-").replace(",", "-")}-${data.storeCode}`);

  }
  return (
    <>
      <div onClick={() => { handleStoreNavidation(data) }} class="col cursor-pointer storeCard h-full md:max-w-[550px]"> <div class="card border h-full rounded-xl shadow-sm">
        <div class="flex items-center stag p-3 mb-2">
          {/* <i class="bi bi-shop me-2"></i> */}
          <p class="mb-0">
            {/* <img src={festiveStrip} className="md:w-[50%] w-[80%]" alt="" /> */}
          </p>

        </div>
        <div class="flex flex-col px-3">
          <span class="stores mb-2"
          >{`Tanishq Jewellery - ${data.storeName}`}</span>
          <span class="addre md:min-h-[50px]">{data.storeAddress}</span>
          <p class="text-[#6c757d] md:mt-0 mt-4 addre">
            <span class="status"> {checkTime(data.storeClosingTime?.replace(/.\d{2}\s/, ' '), data.storeOpeningTime?.replace(/.\d{2}\s/, ' ')) ? <>Open Now <span className="text-[#56544E]">closes  {data.storeClosingTime?.replace(/.\d{2}\s/, ' ')}</span></> : <><span className="text-[#56544E]">Closed now </span> Open at {data.storeOpeningTime?.replace(/.\d{2}\s/, ' ')}</>}</span>
          </p>
        </div>
        <div class="flex gap-2 mt-8 px-1 md:px-3">
          <button
            class="btn relative z-10 border-0 gap-1 rounded-pill bg-red-50 flex justify-center items-center px-2 py-1 pr-1 md:p-2"
            onClick={handleBookAnAppointment}
          >
            <span class="pr-1 text-[9px] whitespace-nowrap md:text-[12px] font-[500]">BOOK AN APPOINTMENT</span>
            <i class="bi bi-chevron-right ic-btn rounded-full"></i>
          </button>
          <button
            class="btn border-0 gap-1 rounded-pill flex justify-center items-center px-2 py-1"
            onClick={() => { handleStoreNavidation(data) }}
          >
            <span class="pr-1 text-[9px] md:text-[12px] font-[500]">STORE DETAILS</span>
            <i class="bi bi-chevron-right ic-btn p-2 rounded-circle"></i>
          </button>
        </div>
      </div>
      </div>
    </>





  )
}