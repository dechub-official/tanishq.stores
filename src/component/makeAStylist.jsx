import { useEffect, useState } from "react"
import { useBookAppointment } from "../hooks/useStores";

import { gtmEventHandler } from "../utils/gtmDataLayer";
import ConfirmedAppointment from "./bookAnAppointment/confirmedAppoinment";
import FormSection from "./bookAnAppointment/form";
import { CalendarHeart, Clock1, GemIcon } from "lucide-react";
import ringImage from '../assets/images/rivaahcollection/makeStylistProducts/rings.png'


export default function MakeAStylist({ title, isOpen, setisOpen }) {
    // console.log({ activeStore, setIndividualStoreData, openingTime, cities, closingTime, isOpen, setisOpen, storeCode, storeName, page });

    const [step, setStep] = useState(1)

    const [progress, setProgress] = useState(false);
    const [formData, setFormData] = useState({})

    // Use Tanstack Query hook
    const { mutate: bookAppointment } = useBookAppointment();

    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    useEffect(() => {
        setStep(1)
    }, [])




    const handelStep = (step) => {
        if (step == 2) {
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


    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleApiRequest = async () => {
        gtmEventHandler({
            'event': 'generate_lead',
            'dateTimeStamp': new Date(),
        })
        setProgress(true)
        const payload = {
            Phone: formData.phone,
            FirstName: formData.name.split(" ")[0],
            LastName: formData.name.split(" ")[1],
            EmailId: formData.email,

        }

        bookAppointment(payload, {
            onSuccess: () => {
                setStep(3)
                setProgress(false)
            },
            onError: (error) => {
                console.error('Failed to book appointment:', error);
                setProgress(false)
            }
        });
    }





    // if(!isOpen&&window.innerWidth>=768)return
    return <>

        <>
            <div className={` ${isOpen ? "fixed" : "hidden"} md:hidden overflow-hidden max-h-[100vh] top-0 left-0 w-full min-h-[100vh] z-[60] backdrop-blur-lg bg-white/30  `}>

            </div>

            <div className={` block shadow-[#832729] shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] z-[90] absolute !overflow-visible  bottom-0 transition-all duration-150 md:hidden left-0 font-fraunces  h-fit  max-h-[490px] min-h-[490px] px-2  !rounded-t-xl  !rounded-b-none w-full bg-white`}>
                <svg onClick={() => setisOpen(false)} width="24" height="24" className="top-3 absolute z-50 right-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#F6F6F6" />
                    <path d="M15.3636 9L9 15.3636M9 9L15.3636 15.3636" stroke="#300708" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                {step == 1 &&
                    <>
                        <h1 className="text-[#56544E] px-4 text-[22px] leading-normal font-fraunces  text-left mt-[2rem] mb-1 font-[400]"><span className="text-[#767469]">Connect with</span> A Bridal Stylist</h1>
                        <p className="text-[#969288] px-4 font-fraunces mb-5 mt-2 text-[14px]  font-normal">Make your bridal experience smoother and truly yours. Book a bridal stylist and avoid the wait.</p>
                        <p className="text-[#56544E] px-4 ibm-plex font-semibold text-lg font-fraunces flex gap-x-2"><GemIcon /> Your Jewellery Interest</p>

                        <div className="flex my-4 justify-around">
                            <img src={ringImage} className="w-28" alt="" />
                            <img src={ringImage} className="w-28" alt="" />
                            <img src={ringImage} className="w-28" alt="" />


                        </div>
                        <div className="grid grid-cols-2 gap-x-10 px-4  mt-10 justify-between">
                            <div className="w-full">
                                <p className="ibm-plex text-[#56544E] text-base flex gap-x-2 mb-1 ml-2 font-medium"> <CalendarHeart /> Wedding Date</p>
                                <input type="date" className="px-4 w-full rounded-full border border-[#969288] py-4" name="" id="" />
                            </div>
                            <div className="w-full">
                                <p className="ibm-plex  text-[#56544E] text-base flex gap-x-2 mb-1 ml-2 font-medium"> <Clock1 /> Preferred Time</p>
                                <input type="time" className="px-4 w-full rounded-full border border-[#969288] py-4" name="" id="" />
                            </div>
                        </div>

                        <button
                            class="btn border-0 gap-1   flex rounded-pill mx-auto mt-8
                 justify-center items-center p-2"
                            onClick={() => handelStep(2)}
                        >
                            <span class="pr-1 text-[15px] font-fraunces md:text-[14px] font-[500]">Proceed</span>
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
                        // dayInfo={dayInfo}
                        weekDays={weekDays}
                    // activeDivision={timeDivisions[activeDivision].division}
                    />
                }
            </div>

        </>

    </>
}