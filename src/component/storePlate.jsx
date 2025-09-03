import { useState } from "react";

export default function StorePlate({
  data = {
    storeName: "Sample Store",
    storeAddress: "123 Main Street, Sample City, Sample State 12345",
    storeClosingTime: "9:00 PM",
    storeOpeningTime: "10:00 AM",
    storeCode: "S001",
    storeState: "Sample State",
    storeCity: "Sample City"
  },
  setIndividualStoreData = () => { },
  index = 0,
  setBookAnAppointmentModal = () => { }
}) {

  const modifiedClosingTime = data.storeClosingTime?.replace(/(\d{1,2}:\d{2})([AP]M)$/, '$1 $2').replace(".", ":");
  const modifiedOpeningTime = data.storeOpeningTime?.replace(/(\d{1,2}:\d{2})([AP]M)$/, '$1 $2').replace(".", ":");

  const [Clicks, setClicks] = useState({ Bookan: 0, getDir: 0 });

  const normalizeTimeString = (timeStr) => {
    timeStr = timeStr.replace(/\./g, ":");
    const hasAmPm = timeStr.match(/(AM|PM)$/i);

    if (!hasAmPm) {
      if (!timeStr.includes(":")) {
        timeStr += ":00:00";
      } else if (timeStr.split(":").length === 2) {
        timeStr += ":00";
      }
      return timeStr;
    }

    const timeParts = timeStr.split(" ");
    let timePart = timeParts[0];

    if (timePart.split(":").length === 1) {
      timePart += ":00:00";
    } else if (timePart.split(":").length === 2) {
      timePart += ":00";
    }

    return timePart + " " + timeParts[1];
  };

  const convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.split(" ");
    let [hours, minutes, seconds] = time.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) {
      hours += 12;
    }
    if (modifier === "AM" && hours === 12) {
      hours = 0;
    }

    return { hours, minutes, seconds };
  };

  const checkTime = (timeString, openingTime) => {
    const currentTime = new Date();
    const normalizedTimeString = normalizeTimeString(timeString);
    const OpeningNormalizedTimeString = normalizeTimeString(openingTime);

    let comparisonTime;
    let OpeningcomparisonTime;

    if (normalizedTimeString.includes("AM") || normalizedTimeString.includes("PM")) {
      const { hours, minutes, seconds } = convertTime12to24(normalizedTimeString);
      comparisonTime = new Date();
      comparisonTime.setHours(hours, minutes, seconds, 0);
    } else {
      const [hours, minutes, seconds] = normalizedTimeString.split(":").map(Number);
      comparisonTime = new Date();
      comparisonTime.setHours(hours, minutes || 0, seconds || 0, 0);
    }

    if (OpeningNormalizedTimeString.includes("AM") || OpeningNormalizedTimeString.includes("PM")) {
      const { hours, minutes, seconds } = convertTime12to24(OpeningNormalizedTimeString);
      OpeningcomparisonTime = new Date();
      OpeningcomparisonTime.setHours(hours, minutes, seconds, 0);
    } else {
      const [hours, minutes, seconds] = OpeningNormalizedTimeString.split(":").map(Number);
      OpeningcomparisonTime = new Date();
      OpeningcomparisonTime.setHours(hours, minutes || 0, seconds || 0, 0);
    }

    if (currentTime < comparisonTime && currentTime >= OpeningcomparisonTime) {
      return true;
    } else {
      return false;
    }
  };

  const handleBookAnAppointment = (e) => {
    e.stopPropagation();
    setClicks({ ...Clicks, Bookan: Clicks.Bookan + 1 });
    setIndividualStoreData({
      storeClosingTime: modifiedClosingTime,
      storeOpeningTime: modifiedOpeningTime,
      storeName: data?.storeName,
      storeCode: data?.storeCode,
      activeStore: index
    });

    if (window.innerWidth <= 768) {
      setBookAnAppointmentModal({ visible: true, mode: "popup" });
    } else {
      setBookAnAppointmentModal({ visible: true, mode: "card" });
    }
  };

  const handleStoreNavigation = (data) => {
    console.log('Store navigation:', data.storeName);
  };

  return (
    <>
      <div className="card-container  relative group">
        <div
          onClick={() => { handleStoreNavigation(data) }}
          className="col cursor-pointer storeCard h-full md:max-w-[550px]"
        >
          <div className="card border h-full rounded-xl shadow-sm">
            <div className="flex items-center stag p-3 mb-2">
              <p className="mb-0">
                {/* <img src={festiveStrip} className="md:w-[50%] w-[80%]" alt="" /> */}
              </p>
            </div>

            <div className="flex flex-col px-3">
              <span className="stores mb-2">
                {`Tanishq Jewellery - ${data.storeName}`}
              </span>
              <span className="addre md:min-h-[50px]">
                {data.storeAddress}
              </span>
              <p className="text-[#6c757d] md:mt-0 mt-4 addre">
                <span className="status">
                  {checkTime(
                    data.storeClosingTime?.replace(/.\d{2}\s/, ' '),
                    data.storeOpeningTime?.replace(/.\d{2}\s/, ' ')
                  ) ? (
                    <>
                      Open Now <span className="text-[#56544E]">closes {data.storeClosingTime?.replace(/.\d{2}\s/, ' ')}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-[#56544E]">Closed now </span> Open at {data.storeOpeningTime?.replace(/.\d{2}\s/, ' ')}
                    </>
                  )}
                </span>
              </p>
            </div>

            <div className="flex gap-2 mt-8 px-1 md:px-3">
              <button
                className="btn relative z-10 border-0 gap-1 rounded-pill bg-red-50 flex justify-center items-center px-2 py-1 pr-1 md:p-2"
                onClick={handleBookAnAppointment}
              >
                <span className="pr-1 text-[9px] whitespace-nowrap md:text-[12px] font-[500]">BOOK AN APPOINTMENT</span>
                <i className="bi bi-chevron-right ic-btn rounded-full"></i>
              </button>

              <button
                className="btn border-0 gap-1 rounded-pill flex justify-center items-center px-2 py-1"
                onClick={() => { handleStoreNavigation(data) }}
              >
                <span className="pr-1 text-[9px] md:text-[12px] font-[500]">STORE DETAILS</span>
                <i className="bi bi-chevron-right ic-btn p-2 rounded-circle"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}