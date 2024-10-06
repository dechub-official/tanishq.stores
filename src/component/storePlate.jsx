import { useState } from "react";
import Button from "./button";
import ReactGA from 'react-ga4'
import { useNavigate } from "react-router-dom";
import map from '../assets/images/detailed/buttons/map.png'
import calender from '../assets/images/detailed/buttons/calender.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import '../assets/css/storeCard.css'
export default function StorePlate({ data }) {
    const Navigate = useNavigate()
    const [Clicks, setClicks] = useState({ Bookan: 0, getDir: 0 })
    const BookAppointment = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;

    }
    const handleAppPopup = () => {

        window.location.href = window.location.origin + window.location.pathname + "#bookAnAppointment"

    }
    return (
            <>
               <div class="col storeCard md:max-w-[550px]"> <div class="card border rounded-xl shadow-sm">
            <div class="flex items-center stag p-3 mb-2">
              <i class="bi bi-shop me-2"></i>
              <p class="mb-0"></p>
            </div>
            <div class="flex flex-col px-3">
              <span class="stores mb-2"
                >{`Tanishq Jewellery - ${data.storeName}`}</span>
              <span class="addre md:min-h-[50px]">{data.storeAddress}</span>
              <p class="text-[#6c757d] addre">
                <span class="status">Open Now</span> closes {data.storeClosingTime?.replace(/.\d{2}\s/, ' ')}
              </p>
            </div>
            <div class="flex gap-2 mt-8 px-1 md:px-3">
              <button
                class="btn border-0 gap-1 rounded-pill flex justify-center items-center pr-1 md:p-2"
                onclick={() => {
                                        ReactGA.event({
                                            category: "Book An Appointment",
                                            value: Clicks.Bookan + 1,
                                            action: "Book An Appointment",
                                        });
                                        setClicks({ ...Clicks, Bookan: Clicks.Bookan + 1 })
                                        if (localStorage.getItem("nav-hide")) {
                                            handleAppPopup()
                                        }
                                        else
                                            BookAppointment("https://www.tanishq.co.in/book-an-appointment")
                                    }}
              >
                <span class="pr-1 text-[12px] whitespace-nowrap md:text-[12px] font-[500]">BOOK AN APPOINTMENT</span>
                <i class="bi bi-chevron-right ic-btn rounded-full"></i>
              </button>
              <button
                class="btn border-0 gap-1 rounded-pill flex justify-center items-center p-2"
                onClick={() => Navigate(`/store-locator/jewellery-stores/${data.storeState.toLowerCase().replace(" ", "-")}/${data.storeCity.toLowerCase().replace(" ", "-")}/${data.storeName.toLowerCase().split("- ")[1] ? data.storeName.toLowerCase().split("- ")[1].replace(/ /g, "-").replace(",", "-") : data.storeName.toLowerCase().replace(" ", "-").replace(",", "-")}-${data.storeCode}`)}
              >
                <span class="pr-1 text-[10px] md:text-[12px] font-[500]">STORE DETAILS</span>
                <i class="bi bi-chevron-right ic-btn p-2 rounded-circle"></i>
              </button>
            </div>
          </div>
          </div>
            </>





        // <><div className="box bg-[white] md:min-w-[500px] min-w-[90%] max-w-[90%] sm:min-w-[310px] flex flex-col  md:max-w-[500px] min-h-[370px] md:max-h-[370px]  my-4 px-4  md:px-8 pt-4 rounded-[22px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        //     <h2 className='text-[#832729] py-2 md:text-[18px] text-[15px] font-[700]'>{`Tanishq Jewellery - ${data.storeName}`}</h2>
        //     <p className='pb-4 font-[700] text-[#832729]  border-b-[#832729] border-b-[3px] cursor-pointer' onClick={() => Navigate(`/store-locator/jewellery-stores/${data.storeState.toLowerCase().replace(" ", "-")}/${data.storeCity.toLowerCase().replace(" ", "-")}/${data.storeName.toLowerCase().split("- ")[1] ? data.storeName.toLowerCase().split("- ")[1].replace(/ /g, "-").replace(",", "-") : data.storeName.toLowerCase().replace(" ", "-").replace(",", "-")}-${data.storeCode}`)}>View Store Page{">>>"}</p>
        //     <p className='my-2 text-[15px] max-w-[300px] min-h-[60px]  font-[500]'>{data.storeAddress}</p>
        //     <p className='my-2 text-[15px] max-w-[300px] font-[500]'>Phone: {data.storePhoneNoOne}</p>
        //     <p className='my-2 py-2 pb-0  mb-2 text-[15px] max-w-[300px] font-[500]'>{`Working Hours: ${data.storeOpeningTime?.replace(/.\d{2}\s/, ' ')} - ${data.storeClosingTime?.replace(/.\d{2}\s/, ' ')}`}</p>
        //     <p className="border-b-[#832729] mb-2 border-b-[3px]"></p>

        //     <div className="w-full bg-[#F2F2F2] text-center text-white flex  items-center   "  >



        //     </div>

        //     <div className="flex  mt-1  ">

        //         <div className="flex w-[100%] ">
        //             <div className="w-[50%] flex ">
        //                 <Button name="Get Directions" iconstyle={"min-w-[15px] max-w-[15px] mr-1 w-[12px]"} style={'text-white bg-[#832729] font-500 text-[10px]  px-2'} onclick={() => {
        //                     ReactGA.event({
        //                         category: data.storeLocationLink,
        //                         value: Clicks.getDir + 1,
        //                         action: "Get Directions",
        //                     });
        //                     setClicks({ ...Clicks, getDir: Clicks.getDir + 1 })
        //                     BookAppointment(data.storeLocationLink)
        //                 }}
        //                     icon={map}
        //                 />
        //             </div>
        //             <div className="w-[60%] flex ">
        //                 <Button name="Book an Appointment" iconstyle={"min-w-[14px] max-w-[14px]  mr-1"} style={'whitespace-nowrap text-white bg-[#832729] font-500 text-[10px] px-1'} onclick={() => {
        //                     ReactGA.event({
        //                         category: "Book An Appointment",
        //                         value: Clicks.Bookan + 1,
        //                         action: "Book An Appointment",
        //                     });
        //                     setClicks({ ...Clicks, Bookan: Clicks.Bookan + 1 })
        //                     if (localStorage.getItem("nav-hide")) {
        //                         handleAppPopup()
        //                     }
        //                     else
        //                         BookAppointment("https://www.tanishq.co.in/book-an-appointment")
        //                 }}
        //                     icon={calender} />
        //             </div>

        //         </div>
        //     </div>


        // </div>
        )
}