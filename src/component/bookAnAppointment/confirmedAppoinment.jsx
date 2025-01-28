import MonBookAnAppointmentImage from '../../assets/images/bookAnAppoinment.png'
export default function ConfirmedAppointment({dayInfo,weekDays,activeDivision}) {
    return <>
    <div className="relative flex flex-col items-center">
                <img src={MonBookAnAppointmentImage} className="w-[95%] mt-7 mx-auto" alt="" />
                <div className="absolute flex justify-around items-center bottom-[15%] w-full ibm-plex text-[#636363] font-medium mx-4  text-[12px]">
                    <p>{dayInfo.day} ({dayInfo.formattedDate.getDate()}/{dayInfo.formattedDate.getMonth()+1}/{dayInfo.formattedDate.getFullYear()})</p>
                    <p>{activeDivision}, {dayInfo.time}</p>
                </div>
            </div>
    </>
}