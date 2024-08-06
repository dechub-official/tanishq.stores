import { useState } from "react";
import Button from "./button";
import ReactGA from 'react-ga4'
import { useNavigate } from "react-router-dom";
import map from '../assets/images/detailed/buttons/map.png'
import calender from '../assets/images/detailed/buttons/calender.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
export default function DiamondStorePlate({ data }) {
    const Navigate = useNavigate()
    const [Clicks, setClicks] = useState({ Bookan: 0, getDir: 0 })
    const BookAppointment = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;

    }
    const handleAppPopup = () => {

        window.location.href = window.location.origin + window.location.pathname + "#bookAnAppointment"

    }
    return <>
        <div className="box md:bg-[white] bg-[#121a2d] md:min-w-[500px] min-w-[99%] max-w-[99%] sm:min-w-[310px] flex flex-col  md:max-w-[500px] min-h-[330px] md:max-h-[330px]  my-4   md:px-8 pt-4 rounded-[22px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <div className="px-4">
            <h2 className='text-white md:text-[#0D1323] py-2 md:text-[18px] text-[15px] font-[700]'>{`Tanishq Jewellery - ${data.storeName}`}</h2>
            <p className='pb-4 font-[700] text-white md:text-[#0D1323]  border-b-[#0D1323] border-b-[3px] cursor-pointer' onClick={() => Navigate(`/store-locator/jewellery-stores/${data.storeState.toLowerCase().replace(" ", "-")}/${data.storeCity.toLowerCase().replace(" ", "-")}/${data.storeName.toLowerCase().split("- ")[1] ? data.storeName.toLowerCase().split("- ")[1].replace(/ /g, "-").replace(",", "-") : data.storeName.toLowerCase().replace(" ", "-").replace(",", "-")}-${data.storeCode}`)}>View Store Page{">>>"}</p>
            <p className='my-2 text-[15px] max-w-[300px] text-white md:text-[#0D1323] min-h-[60px]  font-[500]'>{data.storeAddress}</p>
            <p className='my-2 text-[15px] max-w-[300px] text-white md:text-[#0D1323] font-[500]'>Phone: {data.storePhoneNoOne}</p>
            <p className='my-2 py-2 pb-0  mb-2 text-[15px] max-w-[300px] text-white md:text-[#0D1323] font-[500]'>{`Working Hours: ${data.storeOpeningTime?.replace(/.\d{2}\s/, ' ')} - ${data.storeClosingTime?.replace(/.\d{2}\s/, ' ')}`}</p>
            <p className="border-b-[#0D1323] mb-2 border-b-[3px]"></p>

            <div className="w-full bg-[#F2F2F2] text-center text-white flex  items-center   "  >



            </div>
            </div>
            <div className="flex  mt-1  ">

                <div className="flex gap-x-1 mx-2 w-[100%] ">
                    <div className="w-[50%] flex ">

                        <button onclick={() => {
                            ReactGA.event({
                                category: data.storeLocationLink,
                                value: Clicks.getDir + 1,
                                action: "Get Directions",
                            });
                            setClicks({ ...Clicks, getDir: Clicks.getDir + 1 })
                            BookAppointment(data.storeLocationLink)
                        }} className="pl-6 pr-2  md:bg-[#0D1323] bg-white fraunces flex gap-x-2 items-center justify-center md:text-[15px] text-[12px] hover:translate-y-[-5%]  duration-200 md:text-[white] text-[#0D1323] rounded-full py-2  md:py-1">Get Directions <span className="md:min-w-[25px]  flex justify-center md:bg-white bg-[#0D1323] items-center md:min-h-[25px] min-h-[25px] min-w-[25px]  md:text-[15px] text-[12px] rounded-full text-white md:text-black mr-2 ">{">"}</span> </button>


                    </div>
                    <div className="w-[60%] flex ">
                   

                        <button onclick={() => {
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
                        }} className="pl-6 pr-2  md:bg-[#0D1323] bg-white fraunces flex gap-x-2 items-center justify-center md:text-[15px] text-[12px] hover:translate-y-[-5%]  duration-200 md:text-[white] text-[#0D1323] rounded-full py-2 md:py-1">Book an Appointment <span className="md:min-w-[25px]  flex justify-center md:bg-white bg-[#0D1323] items-center md:min-h-[25px] min-h-[25px] min-w-[25px]  rounded-full text-white md:text-black mr-2 whitespace-nowrap">{">"}</span> </button>
                    </div>

                </div>
            </div>


        </div>
    </>
}