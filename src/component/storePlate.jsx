import { useState } from "react";
import Button from "./button";
import ReactGA from 'react-ga4'
import { useNavigate } from "react-router-dom";
import map from '../assets/images/detailed/buttons/map.png'
import calender from '../assets/images/detailed/buttons/calender.png'
export default function StorePlate({data}) {
    const Navigate = useNavigate()
    const [Clicks, setClicks] = useState({ Bookan: 0, getDir: 0 })
    const BookAppointment = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;

    }
    return <>
     <div className="box bg-[#F2F2F2] md:min-w-[45%] md:max-w-[45%] min-h-[330px] md:max-h-[330px]  my-4 px-2 md:px-8 p-4 rounded-[22px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                                <h2 className='text-[#832729] py-2 md:text-[18px] text-[15px] font-[700]'>{`Tanishq Jewellery - ${data.storeName}`}</h2>
                                <p className='pb-4 font-[700] text-[#832729]  border-b-[#832729] border-b-[4px] cursor-pointer' onClick={() => Navigate(`/store-locator/jewellery-stores/${data.storeState.toLowerCase().replace(" ", "-")}/${data.storeCity.toLowerCase().replace(" ", "-")}/${data.storeName.toLowerCase().split("- ")[1] ? data.storeName.toLowerCase().split("- ")[1].replace(/ /g, "-").replace(",", "-") : data.storeName.toLowerCase().replace(" ", "-").replace(",", "-")}-${data.storeCode}`)}>Visit Store Page{">>>"}</p>
                                <p className='my-2 text-[15px] max-w-[300px] min-h-[55px] max-h-[55px] font-[500]'>{data.storeAddress}</p>
                                <p className='my-2 text-[15px] max-w-[300px] font-[500]'>Phone: {data.storePhoneNoOne}</p>
                                <p className='my-2 mb-4 text-[15px] max-w-[300px] font-[500]'>{`Working Hours: ${data.storeOpeningTime?.replace(/.\d{2}\s/, ' ')} - ${data.storeClosingTime?.replace(/.\d{2}\s/, ' ')}`}</p>
                                <div className="flex mb-3  ">

                                    <div className="flex w-[100%] ">
                                        <div className="w-[50%] flex ">
                                            <Button name="Get Directions" iconstyle={"min-w-[15px] max-w-[15px] mr-1 w-[12px]"} style={'text-white bg-[#832729] font-500 text-[10px]  px-2'} onclick={() => {
                                                ReactGA.event({
                                                    category: data.storeLocationLink,
                                                    value: Clicks.getDir + 1,
                                                    action: "Get Directions",
                                                });
                                                setClicks({ ...Clicks, getDir: Clicks.getDir + 1 })
                                                BookAppointment(data.storeLocationLink)
                                            }}
                                                icon={map}
                                            />
                                        </div>
                                        <div className="w-[60%] flex ">
                                            <Button name="Book an Appointment" iconstyle={"min-w-[14px] max-w-[14px]  mr-1"} style={'whitespace-nowrap text-white bg-[#832729] font-500 text-[10px] px-1'} onclick={() => {
                                                ReactGA.event({
                                                    category: "Book An Appointment",
                                                    value: Clicks.Bookan + 1,
                                                    action: "Book An Appointment",
                                                });
                                                setClicks({ ...Clicks, Bookan: Clicks.Bookan + 1 })
                                                BookAppointment("https://www.tanishq.co.in/book-an-appointment")
                                            }}
                                                icon={calender} />
                                        </div>

                                    </div>
                                </div>
                            </div>
    </>
}