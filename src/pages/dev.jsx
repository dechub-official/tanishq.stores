import { useRef, useState } from "react"
import Heading from "../component/heading";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import coupon from "../assets/images/rivaahcollection/coupon.png";
import mobileBanner from '../assets/images/rivaahcollection/mainBannerMweb.webp'
import storeicon from '../assets/images/rivaahcollection/storeicon.svg'
import callicon from '../assets/images/rivaahcollection/callicon.svg'
import timeicon from '../assets/images/rivaahcollection/timeicon.svg'
import storelocicon from '../assets/images/rivaahcollection/storelocicon.svg'
import locationicon from '../assets/images/rivaahcollection/locationicon.svg'
import Banner from '../assets/images/rivaahcollection/mainBannerweb.png'
import InfoSection from "../component/Rivaahcollection/infosection";
import MeetStylistform from "../component/Rivaahcollection/meetStylist";
import PrivateVisitForm from "../component/Rivaahcollection/PrivateVisit"

import desktopbanner from "../assets/images/rivaahcollection/DesktopBAnner.mp4";

import divider from "../assets/images/rivaahcollection/divider.png";



import dreamlist from "../assets/images/rivaahcollection/dreamList.png";

import rivaah1 from "../assets/images/rivaahcollection/rivaah1.png";
import rivaah2 from "../assets/images/rivaahcollection/rivaah2.png";
import rivaah3 from "../assets/images/rivaahcollection/rivaah3.png";

import styling from "../assets/images/rivaahcollection/styling.jpg";
import viewingroom from "../assets/images/rivaahcollection/viewingroom.jpg";
import customisation from "../assets/images/rivaahcollection/customisation.jpg";
import dedicated from "../assets/images/rivaahcollection/dedicatedStylists.jpg";


import bridalstylist from "../assets/images/rivaahcollection/bridalStylist.jpg";

import weddingHighlight from "../assets/images/rivaahcollection/weddingHighlight.png";
import MweddingHighlight from "../assets/images/rivaahcollection/MweddingHighlight.png";


import mobPolkiCollection from "../assets/images/rivaahcollection/crafted/polki.png";
import mobHeritageHuesCOllection from "../assets/images/rivaahcollection/crafted/heritage_hues.png";
import mobEternalSparkle from "../assets/images/rivaahcollection/crafted/etrnal.png";
import mobTheSouthernSplendour from "../assets/images/rivaahcollection/crafted/southern.png";

import DPolkiCollection from "../assets/images/rivaahcollection/crafted/polkiD.png";
import DHeritageHuesCOllection from "../assets/images/rivaahcollection/crafted/heritage_huesD.png";
import DEternalSparkle from "../assets/images/rivaahcollection/crafted/etrnalD.png";
import DTheSouthernSplendour from "../assets/images/rivaahcollection/crafted/southernD.png";

import BookAnAppointment from "../component/bookAnAppointment";

import { Clock, ClockIcon, MapPin, NavigationIcon, Phone, PhoneIcon, StoreIcon } from "lucide-react";

import Quality from "../component/Rivaahcollection/Quality";

import exchange from '../assets/images/rivaahcollection/tanishqExchange.png'


import MakeAStylist from "../component/makeAStylist";
import { Link } from "react-router-dom";


export default function Dev() {

    const videoRef = useRef(null)
    const meetStylistPanel = useRef(null)
    const privateVisitPnael = useRef(null)
    const [stylistPopup, setStylistPopup] = useState(false)
    const [privatePopup, setPrivatePopup] = useState(false)
    const [step, setStep] = useState(1);

    const [isPlaying, setIsPlaying] = useState(false)


    const sampleStoreData = {
        activeStore: 0,
        openingTime: "10:30:00",
        cities: [
            {
                storeCode: "CPD",
                storeName: "Delhi - Connaught Place",
                storeAddress: "Tanishq, Odean Cinema Building, D Block, Connaught Place",
                storeCity: "Delhi",
                storeState: "Delhi",
                storeCountry: "India",
                storeZipCode: "110001",
                storePhoneNoOne: "011-43588368",
                storePhoneNoTwo: "",
                storeEmailId: "BTQCPD@TITAN.CO.IN",
                storeLatitude: "28.63427236",
                storeLongitude: "77.22107267",
                storeDateOfOpening: "9811095702",
                storeType: "Stand-alone store",
                storeOpeningTime: "10:30:00",
                storeClosingTime: "8.00.00 PM",
                storeLocationLink: "https://bit.ly/44iPj1m",
                languages: [],
                parking: [""],
                payment: ["Debit Card", "Cash", "Credit Card", "Cheque", "Net Banking", "UPI", "Airpay"],
                kakatiyaStore: "",
                celesteStore: "Y",
                rating: "4.6",
                numberOfRatings: "3378",
                isCollection: "TRUE"
            },
            {
                storeCode: "DDW",
                storeName: "Dwarka Vegas mall",
                storeAddress: "Ground Floor Shop No 73,74,79 & 80, Block - B, Vegas Mall, Dwarka Sec-14",
                storeCity: "Delhi",
                storeState: "Delhi",
                storeCountry: "India",
                storeZipCode: "110078",
                storePhoneNoOne: "9773855771",
                storePhoneNoTwo: "011-61340350",
                storeEmailId: "btqddw@titan.co.in",
                storeLatitude: "28.6011158",
                storeLongitude: "77.0300708",
                storeDateOfOpening: "5-7-2020",
                storeType: "Mall store",
                storeOpeningTime: "10.30.00 AM",
                storeClosingTime: "8.00.00 PM",
                storeLocationLink: "https://www.google.com/maps/place/Tanishq+Jewellery+-+Dwarka/@28.6008379,77.027807,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x371984c051238142!8m2!3d28.6008634!4d77.0299563?authuser=1",
                languages: [],
                parking: [""],
                payment: ["Debit Card", "Cash", "Credit Card", "Cheque", "Net Banking", "UPI", "Airpay"],
                kakatiyaStore: "",
                celesteStore: "Y",
                rating: "4.8",
                numberOfRatings: "2000",
                isCollection: "TRUE"
            },
            {
                storeCode: "DET",
                storeName: "Delhi - Nirman Vihar Vikas Marg",
                storeAddress: "E-374 Nirman Vihar Vikas Marg",
                storeCity: "Delhi",
                storeState: "DELHI",
                storeCountry: "India",
                storeZipCode: "110092",
                storePhoneNoOne: "011 43545934",
                storePhoneNoTwo: "011 4354 5900",
                storeEmailId: "BTQDET@TITAN.CO.IN",
                storeLatitude: "28.63685",
                storeLongitude: "77.28729",
                storeDateOfOpening: "12-09-2008",
                storeType: "Stand-alone store",
                storeOpeningTime: "10.30.00 AM",
                storeClosingTime: "8.30.00 PM",
                storeLocationLink: "https://www.google.com/maps/place/Tanishq+Jewellery+-+Delhi+-+Preet+Vihar/@28.6339782,77.2789765,16z/data=!3m1!5s0x390cfb454d0704b5:0x5c6f81f2197c4016!4m10!1m2!2m1!1stanishq+nirman+vihar+vikas+marg!3m6!1s0x390cfb454d6964f9:0x26033475e5776afe!8m2!3d28.6371238!4d77.2886637!15sCh90YW5pc2hxIG5pcm1hbiB2aWhhciB2aWthcyBtYXJnIgOIAQGSAQ1qZXdlbHJ5X3N0b3Jl4AEA!16s%2Fg%2F124sw0cc6",
                languages: ["English", "Hindi"],
                parking: ["Street Parking"],
                payment: ["Debit Card", "Cash", "Credit Card", "Cheque", "Net Banking", "UPI", "Airpay"],
                kakatiyaStore: "",
                celesteStore: "",
                rating: "4.6",
                numberOfRatings: "3544",
                isCollection: "FALSE"
            },

        ],
        closingTime: "8:00.00 PM",
        isOpen: {
            visible: true,
            mode: "popup"
        },
        storeCode: "CPD",
        storeName: "Delhi - Connaught Place",
        page: "city"
    }


    const handlePlay = () => {
        if (isPlaying) {
            videoRef.current.pause()
            setIsPlaying(false)
            return
        }
        if (videoRef.current) {
            videoRef.current.play()
            setIsPlaying(true)
        }
    }

    const handleEnded = () => {
        setIsPlaying(false)
        videoRef.current.currentTime = 0 // optional: reset video to start
    }
    const cardData = [
        {
            frontImg: customisation,
            backText: "At Rivaah, we craft jewellery that is uniquely yours— infused with your names, motifs, and cherished memories.",
            title: "Jewellery Customization"
        },
        {
            frontImg: styling,
            backText: " With our in-house designer, every heritage piece is reimagined, crafted to tell your story of love and legacy.",
            title: "In House Designer"
        },
        {
            frontImg: viewingroom,
            backText: "At Rivaah, enjoy private viewing rooms crafted for personalized jewellery trials and sharing moments with your loved ones.",
            title: "Private Viewing Room"
        },
        {
            frontImg: dedicated,
            backText: "With our in-house wedding stylist, you get one-on-one consultations to find bridal jewellry that reflects your roots, rituals and dreams.",
            title: "Dedicated Stylist"
        },





    ]

    const collection = [
        {
            frontImg: DEternalSparkle,
            mobileImg: mobEternalSparkle,
            title: " Eternal Sparkle",
        },
        {
            frontImg: DHeritageHuesCOllection,
            mobileImg: mobHeritageHuesCOllection,
            title: " Heritage Hues",

        },
        {
            frontImg: DPolkiCollection,
            mobileImg: mobPolkiCollection,
            title: "The Polki Poetry",
        },


        {
            frontImg: DTheSouthernSplendour,
            mobileImg: mobTheSouthernSplendour,
            title: " The Southern Splendour",
        },

    ]

    useGSAP(function () {
        if (stylistPopup && window.innerWidth > 768) {
            document.body.style.overflow = 'hidden'
            gsap.to(meetStylistPanel.current, {
                opacity: 1,
                display: "flex",
                position: "fixed",
                zIndex: 1000,
            })
        } else {
            document.body.style.overflow = ''
            gsap.to(meetStylistPanel.current, {
                opacity: 0,
                display: "none",
            })
        }
    }, [stylistPopup])

    useGSAP(function () {
        if (privatePopup && window.innerWidth > 768) {
            document.body.style.overflow = 'hidden'
            gsap.to(privateVisitPnael.current, {
                opacity: 1,
                display: "flex",
                position: "fixed",
                zIndex: 1000,
            })
        } else {
            document.body.style.overflow = ''
            gsap.to(privateVisitPnael.current, {
                opacity: 0,
                display: "none",
            })
        }
    }, [privatePopup])
    return (
        <div className="relative">
            <div className="flex  fixed  bottom-0 z-50 w-full bg-[#ffffffc0] py-4 items-center justify-center gap-x-10 ">
                <button onClick={() => setStylistPopup(true)}
                    className="btn !mb-0 border-0  gap-1 rounded-pill flex justify-center items-center px-6 py-8"

                >
                    <span className="pr-1 text-[9px] md:text-lg font-[500]">Book A Private Visit</span>
                    <i className="bi bi-chevron-right ic-btn p-2 rounded-circle"></i>
                </button>
                <button onClick={() => setPrivatePopup(true)}
                    className="btn !mb-0 border-0 gap-1 rounded-pill flex justify-center items-center px-6 py-8"

                >
                    <span className="pr-1 text-[9px] md:text-lg font-[500]">Meet A Stylist</span>
                    <i className="bi bi-chevron-right ic-btn p-2 rounded-circle"></i>
                </button>
            </div>
            <div>
                <div className="block max-md:hidden relative w-full ">
                    <img src={Banner} alt="" />
                    {/* <video
                        ref={videoRef}
                        className="w-full rounded-lg"
                        src={desktopbanner}

                        playsInline
                        onEnded={handleEnded}
                    />
                    <button
                        onClick={handlePlay}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        {!isPlaying && (
                            <>
                                <svg
                                    width="166"
                                    height="166"
                                    viewBox="0 0 166 166"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <foreignObject x="-18" y="-18" width="202" height="202">
                                        <div
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                backdropFilter: "blur(9px)",
                                                clipPath: "url(#bgblur_0_198_1776_clip_path)",
                                                height: "100%",
                                                width: "100%",
                                            }}
                                        />
                                    </foreignObject>
                                    <g data-figma-bg-blur-radius="18">
                                        <circle cx="83" cy="83" r="82" fill="white" fillOpacity="0.1" />
                                        <circle cx="83" cy="83" r="82.5" stroke="white" strokeOpacity="0.2" />
                                    </g>
                                    <path
                                        d="M111.65 83L68.6745 107.812L68.6745 58.1878L111.65 83Z"
                                        fill="white"
                                    />
                                    <defs>
                                        <clipPath
                                            id="bgblur_0_198_1776_clip_path"
                                            transform="translate(18 18)"
                                        >
                                            <circle cx="83" cy="83" r="82" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </>

                        )}
                    </button> */}
                </div>
                <div className="hidden max-md:block relative w-full ">
                    <img src={mobileBanner} alt="" />
                </div>
                {/* <div className="hidden max-md:block relative w-full">
                    <img src={banner} alt="" />
                </div> */}

            </div>

            {/* <div className="md:hidden">
                <PetalSwiper />
            </div> */}


            <div className="max-w-[1200px] mx-auto px-4">

                <div className="box     rounded-3xl pb-6">
                    <div className="mx-auto py-5 mb-10">
                        <p className="text-[#56544E] mt-0 md:mt-5 text-center text-2xl md:text-[36px] mb-2  font-medium fraunces ">Shop from Rivaah South Ex Store</p>
                        <p className="text-[#56544E] text-center text-base flex justify-center items-center font-base  ">
                            <svg width="14" height="13" className="mr-2" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.6787 0.533895C6.82444 0.291713 7.17556 0.291713 7.3213 0.533895L9.2222 3.69253C9.27456 3.77954 9.35997 3.84159 9.45889 3.8645L13.0503 4.69629C13.3257 4.76006 13.4342 5.09399 13.2489 5.30744L10.8323 8.09137C10.7657 8.16806 10.7331 8.26846 10.7419 8.36962L11.0606 12.0423C11.0851 12.3239 10.801 12.5303 10.5407 12.42L7.14628 10.982C7.05278 10.9424 6.94722 10.9424 6.85372 10.982L3.45926 12.42C3.199 12.5303 2.91494 12.3239 2.93938 12.0423L3.25812 8.36962C3.2669 8.26846 3.23428 8.16806 3.16771 8.09137L0.751081 5.30744C0.56579 5.09399 0.674289 4.76006 0.949657 4.69629L4.54111 3.8645C4.64004 3.84159 4.72544 3.77954 4.7778 3.69253L6.6787 0.533895Z" fill="#85591C" />
                            </svg>
                            <b>5.0</b> (574 Reviews)</p>
                    </div>



                    <div className="store-details hidden md:grid grid-cols-3 gap-x-20">
                        <div className="box  shadow-lg h-full  border-2 border-[#FFF2E0] rounded-3xl py-6 px-6">
                            <div className="flex  gap-x-2">
                                <span className="text-xl font-semibold text-[#954648] fraunces"> <MapPin /></span>
                                <div>
                                    <div className="flex justify-between">
                                        <p className="text-[#954648] text-xl font-semibold fraunces "> Address</p>
                                        {/* <p className="text-[#954648] underline font-bold">View Details</p> */}
                                    </div>
                                    <p className="text-[#56544E] mt-5 text-lg font-normal ibm-plex">F-44 ,South Ex Part -1, Near Metro station Gate no -1,	New Delhi 	110049</p>
                                </div>
                            </div>

                        </div>
                        <div className="box  shadow-lg  border-2 border-[#FFF2E0] rounded-3xl py-6 px-6">
                            <div className="flex  gap-x-2">
                                <span className="text-xl font-semibold text-[#954648] fraunces"> <Clock /></span>
                                <div>
                                    <div className="flex justify-start relative  gap-x-5">
                                        <p className="text-[#954648] font-bold text-xl fraunces "> Timings</p>
                                        {/* <p className="rounded-full bg-green-200 absolute left-[50%] whitespace-nowrap translate-y-[-10%] text-green-800 font-bold px-4 py-2">Open now</p> */}

                                    </div>
                                    <p className="text-[#56544E] mt-5 text-lg font-bold ibm-plex">10:30 AM - 08:00 PM</p>
                                </div>
                            </div>

                        </div>
                        <div className="box  shadow-lg border-2 border-[#FFF2E0] rounded-3xl py-6 px-6">
                            <div className="flex  gap-x-2">
                                <span className="text-xl font-semibold text-[#954648] fraunces"> <Phone /></span>
                                <div>
                                    <div className="flex justify-between">
                                        <p className="text-[#954648] text-xl font-semibold fraunces ">Contact Details</p>

                                    </div>
                                    <p className="text-[#56544E] mt-5 text-lg font-bold ibm-plex"> 011 4034 9241</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="md:hidden">
                        <div className="flex w-full items-center px-5 gold-ribbon rounded-[12px] ">
                            <span className="text-xl font-semibold text-[#56544E] fraunces"> <img src={storeicon} className="w-[20px]" alt="Store Icon" /></span>
                            <div className="flex w-full py-3 ml-4 items-center justify-between">
                                <p className="text-[#56544E] text-2xl font-semibold fraunces "> Store Details</p>

                                <img src={storelocicon} alt="" />

                            </div>
                        </div>

                        <div className="px-5">

                            <p className="text-[#56544E] mt-5 text-lg font-normal gap-4 ibm-plex flex items-start">
                                <img src={locationicon} className="min-w-[18px] pt-1 inline-block " alt="Location Icon" />
                                F-44 ,South Ex Part -1, Near Metro station Gate no -1,	New Delhi 	110049</p>
                            <p className="text-[#56544E] mt-3 text-lg flex gap-4 font-normal ibm-plex">
                                <img src={callicon} className="min-w-[18px] inline-block " alt="Call Icon" />
                                011 4034 9241</p>
                            <p className="text-[#56544E] mt-3 text-lg flex gap-[12px] font-normal ibm-plex items-center">
                                <img src={timeicon} className="min-w-[20px] inline-block " alt="time icon" />
                                10:30 AM - 08:00 PM
                                {/* <p className="rounded-full bg-green-200  whitespace-nowrap text-[14px]  text-green-800 font-bold px-[11px] py-[2px]">Open now</p> */}
                            </p>
                        </div>
                    </div>

                </div>
                {/* <div className="md:hidden mt-[60px]">
                    <div className="max-md:flex hidden flex-col items-center justify-center ">
                        <img src={divider} className="rotate-[180deg] w-[135px] mb-[-15px]" alt="" />
                        <Heading heading={<p className="text-[38px] max-md:text-[27px] fraunces text-[#56544E] font-semibold">Bridal Journey Timeline</p>} />
                        <img src={divider} className="w-[135px] mt-[-15px]" alt="" />

                    </div>
                    <BridalSlider />
                </div> */}
                <div className="md:hidden block mt-5">

                    <div className="max-md:flex hidden flex-col items-center justify-center ">
                        <img src={divider} className="rotate-[180deg] w-[135px] mb-[-10px]" alt="" />
                        <Heading heading={<p className="text-[38px] max-md:text-[25px] max-md:max-w-[250px] max-md:leading-[32px] fraunces text-[#56544E] font-normal">What Makes Rivaah Unique For  You</p>} />
                        <img src={divider} className="w-[135px] mt-[-5px]" alt="" />

                    </div>
                    <div className="grid grid-cols-2 gap-8 max-sm:gap-4 max-sm:gap-4 mt-20 max-md:mt-7 px-[60px] max-md:px-0">
                        {
                            cardData.map((ele, i) => {
                                return <>
                                    <div className="relative overflow-hidden rounded-[24px] max-sm:rounded-[15px] flex flex-col items-center">
                                        <img className="w-full max-md:object-cover max-md:h-[180px]" src={ele.frontImg} alt="" />
                                        <div class=" bottom-0 absolute inset-0 bg-[linear-gradient(179.73deg,_rgba(51,_36,_34,_0)_63.28%,_#832729_99.32%,_#291A18_100.77%)]"></div>
                                        <div className="absolute bottom-6 max-md:bottom-2"><Heading heading={<p className="text-4xl max-md:max-w-[125px] max-md:text-[16px] max-md:leading-6 font-normal fraunces text-white max-md:text-3xl">{ele.title}</p>} /></div>
                                        {/* <img className="h-6" src={arrow} alt="" /> */}
                                        <div className="max-md:hidden absolute top-3 right-4 "><a href="#" className="flex items-center"><p className="text-[20px] mr-2 font-normal fraunces text-black block underline underline-offset-3">Explore now</p></a></div>
                                    </div>
                                </>
                            })
                        }

                    </div>
                </div>




                <div className="mt-[60px] max-md:hidden">
                    <Heading heading={<p className="text-[38px] max-md:text-[30px] max-md:leading-[32px] fraunces text-black font-normal">What makes wedding store unique?</p>} subHeading={<p className="font-fraunces max-md:leading-[18px] max-md:mt-4"> We at Tanishq believe a bride deserves her own space to decide</p>} />

                    <div className="mt-10 flip grid grid-cols-4 max-md:grid-cols-2 justify-center gap-9 p-6 max-md:p-0 max-md:gap-4">
                        {cardData.map((card, index) => (
                            <div
                                key={index}
                                className="w-[100%] h-[300px] relative cursor-pointer"
                                style={{ perspective: "1000px" }}
                            >
                                <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180">
                                    {/* Front */}
                                    <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg">
                                        {card.frontImg ? (
                                            <img
                                                src={card.frontImg}
                                                alt="card front"
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="bg-beige text-brown flex items-center justify-center text-center h-full p-4">
                                                {card.frontText}
                                            </div>
                                        )}
                                    </div>

                                    {/* Back */}
                                    <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#E8C69B] text-brown rounded-xl flex items-center justify-center p-5 shadow-lg">
                                        <p className="text-center fraunces text-xl font-normal text-[#644117]">{card.backText}</p>
                                    </div>
                                </div>
                                <style jsx>{`
             .flip > div:hover > div{
              transform: rotateY(180deg);
            }
          `}</style>
                                <p className="font-light text-[21px] fraunces text-[#A76F25] text-center mt-2">{card.title}</p>
                            </div>
                        ))}
                    </div>


                </div>

                <div className=" mt-[60px]">
                    {/* <div className="max-md:hidden">
                        <Heading heading={<p className="text-[38px] max-md:text-[30px] fraunces text-black font-normal"> Crafted Curations</p>} subHeading={<p className="font-fraunces "> From polkis of Punjab, filigree of Bengal, temple jewellery from south or eternal diamonds, there is a Rivaah for you</p>} />

                    </div> */}
                    <div className="flex  flex-col items-center justify-center ">
                        <img src={divider} className="rotate-[180deg] w-[135px] mb-[-15px]" alt="" />
                        <Heading heading={<p className="text-[38px] max-md:text-[30px] fraunces text-black font-normal"> Store Collections</p>} subHeading={<p className="font-fraunces "> Polkis of Punjab, Bengal’s filigree, South’s temple jewellery, and eternal diamonds, all await you at the Rivaah store</p>} />

                        <img src={divider} className="w-[135px] mt-[-15px]" alt="" />

                    </div>
                    <div className="grid grid-cols-2 gap-8 max-sm:gap-4 max-sm:gap-4 mt-20 max-md:mt-7 px-[60px] max-md:px-0">
                        {
                            collection.map((ele, i) => {
                                return <>
                                    <div className="relative overflow-hidden rounded-[24px] max-sm:rounded-[15px] flex flex-col items-center">
                                        <img className="w-full md:hidden  max-md:object-cover max-md:h-[250px]" src={ele.mobileImg} alt="" />
                                        <img className="w-full md:block hidden  max-md:object-cover max-md:h-[250px]" src={ele.frontImg} alt="" />
                                        <div class="md:hidden bottom-0 absolute inset-0 bg-[linear-gradient(to_bottom,rgba(51,36,34,0)_60%,rgba(51,36,34,0.65)_104%,#291a18_150%)]"></div>
                                        <div className="md:hidden absolute bottom-6 max-md:bottom-2"><Heading heading={<p className="text-4xl max-md:max-w-[125px] max-md:text-[16px] max-md:leading-6 font-normal fraunces text-white max-md:text-3xl">{ele.title}</p>} /></div>
                                        {/* <img className="h-6" src={arrow} alt="" /> */}
                                        {/* <div className="max-md:hidden absolute top-3 right-4 "><a href="#" className="flex items-center"><p className="text-[20px] mr-2 font-normal fraunces text-black block underline underline-offset-3">Explore now</p></a></div> */}
                                    </div>
                                </>
                            })
                        }

                    </div>
                </div>


                {/* <div className="mt-[60px]">
                    <InfoSection />
                </div> */}
                <div className="max-md:block mt-[60px] relative hidden">

                    <div className="max-md:flex hidden flex-col items-center justify-center ">
                        <div className="absolute top-0">
                            <Heading heading={<p className="text-[25px]  fraunces text-[#631517] font-semibold"> Crafted Curations</p>} subHeading={<p className="font-fraunces px-5"> Explore Rivaah catalog featuring timeless jewelry designs for every occasion and personal style.</p>} />
                        </div>

                        <img src={MweddingHighlight} alt="" />
                        <Link to="https://www.tanishq.co.in/thejoyofdressing?lang=en_IN#"
                            class="btn border-0 absolute bottom-3 mt-10 gap-1 rounded-pill flex justify-center items-center px-6 py-8"

                        >  <span class="pr-1 text-[14px] md:text-lg font-[500] fraunces">Browse Collection</span><i class="bi bi-chevron-right ic-btn p-2 rounded-circle"></i></Link>
                    </div>
                    <div className="container mx-auto px-0"></div>

                </div>
                {/* <div className="max-md:block hidden mt-[50px]">
                    <div className="flex flex-col items-center justify-center ">
                        <img src={divider} className="rotate-[180deg] w-[135px] mb-[-5px]" alt="" />
                        <Heading heading={<p className="text-[38px] max-md:text-[27px] fraunces text-[#56544E] font-semibold leading-[35px]">Rivaah Spotlights</p>} />

                        <img src={divider} className="w-[135px] mt-[-15px] mt-[-3px]" alt="" />

                    </div>

                    <div className="mt-7">
                        <Swiper
                            spaceBetween={13}
                            slidesPerView={2.2}
                        >
                            <SwiperSlide><img className="rounded-[14px]" src={rivaah3} alt="" /></SwiperSlide>
                            <SwiperSlide><img className="rounded-[14px]" src={rivaah2} alt="" /></SwiperSlide>
                            <SwiperSlide><img className="rounded-[14px]" src={rivaah1} alt="" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div> */}

                {/* <div className="max-md:block hidden mt-[50px]">
                    <div className="flex flex-col items-center justify-center ">
                        <img src={divider} className="rotate-[180deg] w-[135px] mb-[-5px]" alt="" />
                        <Heading heading={<p className="text-[38px] max-md:text-[27px] fraunces text-[#56544E] font-semibold leading-[35px]">Collection Catalogs</p>} />

                        <img src={divider} className="w-[135px] mt-[-15px] mt-[-3px]" alt="" />

                    </div>

                    <div className="mt-7">
                        <Swiper
                            spaceBetween={13}
                            slidesPerView={1.8}

                        >
                            {collection.map((item, index) => (
                                <SwiperSlide>
                                    <div className="flex items-center relative justify-center">
                                        <img src={dharoharmweb} alt={item.title} className="w-full h-auto rounded-[12px]" />
                                        <div className="absolute bottom-0 left-0 w-full h-full py-2 px-2 flex flex-col items-center justify-between">
                                            <div className=" left-10">
                                                <h3 className="text-[14px] fraunces font-normal text-[#F0DBBC]">{item.title}</h3>

                                            </div>
                                            <div className="flex justify-between right-10 items-center w-full">
                                                <div className="bg-white p-[5px] rounded-full flex justify-center items-center">
                                                    <svg width={"8.5px"} height={"7.5px"} fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M4 3.04004V6.04004M4 3.04004C4 2.33997 4 1.98994 3.85467 1.72255C3.72683 1.48735 3.52287 1.29612 3.27199 1.17628C2.98677 1.04004 2.6134 1.04004 1.86667 1.04004H1.53333C1.34665 1.04004 1.25331 1.04004 1.182 1.0741C1.11928 1.10406 1.06829 1.15187 1.03633 1.21067C1 1.27751 1 1.36502 1 1.54004V4.91504C1 5.09007 1 5.17757 1.03633 5.24441C1.06829 5.30323 1.11928 5.35101 1.182 5.38098C1.25331 5.41504 1.34665 5.41504 1.53333 5.41504H2.51556C2.69562 5.41504 2.78565 5.41504 2.87271 5.4296C2.94998 5.44251 3.02537 5.46388 3.0973 5.49335C3.17835 5.52651 3.25326 5.57332 3.40307 5.66698L4 6.04004M4 3.04004C4 2.33997 4 1.98994 4.14533 1.72255C4.27317 1.48735 4.47713 1.29612 4.728 1.17628C5.01323 1.04004 5.3866 1.04004 6.13333 1.04004H6.46667C6.65337 1.04004 6.7467 1.04004 6.818 1.0741C6.88073 1.10406 6.9317 1.15187 6.96367 1.21067C7 1.27751 7 1.36502 7 1.54004V4.91504C7 5.09007 7 5.17757 6.96367 5.24441C6.9317 5.30323 6.88073 5.35101 6.818 5.38098C6.7467 5.41504 6.65337 5.41504 6.46667 5.41504H5.48443C5.30437 5.41504 5.21433 5.41504 5.1273 5.4296C5.05 5.44251 4.97463 5.46388 4.9027 5.49335C4.82167 5.52651 4.74673 5.57332 4.59693 5.66698L4 6.04004"
                                                            stroke="#832729"
                                                            strokeWidth="0.3"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </div>
                                                <button
                                                    className="btn !mb-0 border-0  rounded-pill flex justify-center items-center px-2 !h-[19px]"

                                                >
                                                    <span className="text-[7.5px] pr-[6px] font-[500] fraunces">Download Now</span>

                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                            )}

                        </Swiper>
                    </div>
                </div> */}
                {/* 
                <div className="mt-[50px] block max-md:hidden">
                    <Heading heading={<p className="text-[38px] max-md:text-[30px] fraunces text-black font-normal">A jewellery to fit your timeline</p>} subHeading={<p className="font-fraunces ">Tanishq at every stage!</p>} />


                    <div className="flex max-lg:flex-col gap-8 mt-[50px] justify-center">
                        <div className="relative flex justify-center">
                            <img className="drop-shadow-[18px_8px_29px_rgba(0,0,0,0.05)]" src={wedding} alt="" />
                            <div className="absolute flex gap-3 justify-center items-center flex-col bottom-8 max-w-[400px]">
                                <h3 className="text-[20px] font-semibold text-[#1F242D] fraunces">Wedding</h3>
                                <p className="text-center font-normal text-[14px] text-[#1F242D] ibm-plex">Shine on your special day with jewelry that tells your love story. Our Bridal Collection is crafted to make you feel radiant, symbolizing the eternal bond you share.</p>
                                <button className="mt-4 text-[20px] font-normal text-[#070202] fraunces border border-[#832729] py-2 px-8 rounded-full">Shop Now</button>
                            </div>

                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="relative flex justify-center">
                                <img className="drop-shadow-[18px_8px_29px_rgba(0,0,0,0.05)]" src={haldi} alt="" />
                                <div className="absolute flex gap-3 justify-center items-center flex-col bottom-8 max-w-[400px]">
                                    <h3 className="text-[20px] font-semibold text-[#1F242D] fraunces">Haldi</h3>
                                    <p className="text-center font-normal text-[14px] text-[#1F242D] ibm-plex">Shine on your special day with jewelry that tells your love story. Our Bridal Collection is crafted to make you feel radiant, symbolizing the eternal bond you share.</p>
                                    <button className="mt-4 text-[20px] font-normal text-[#070202] fraunces border border-[#832729] py-2 px-8 rounded-full">Shop Now</button>
                                </div>

                            </div>
                            <div className="relative flex justify-center">
                                <img className="drop-shadow-[18px_8px_29px_rgba(0,0,0,0.05)]" src={mahandi} alt="" />
                                <div className="absolute flex gap-3 justify-center items-center flex-col bottom-8 max-w-[400px]">
                                    <h3 className="text-[20px] font-semibold text-[#1F242D] fraunces">Mehndi</h3>
                                    <p className="text-center font-normal text-[14px] text-[#1F242D] ibm-plex">Shine on your special day with jewelry that tells your love story. Our Bridal Collection is crafted to make you feel radiant, symbolizing the eternal bond you share.</p>
                                    <button className="mt-4 text-[20px] font-normal text-[#070202] fraunces border border-[#832729] py-2 px-8 rounded-full">Shop Now</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div> */}

                <div ref={privateVisitPnael} className="opacity-0  hidden absolute h-screen w-screen top-0 left-0  md:flex items-center justify-center z-10 after:content-[''] after:absolute after:inset-0 after:z-0 backdrop-blur-md after:bg-white/70 ">
                    <div className="z-10 max-w-[1000px] w-full relative top-0 left-0  bg-[#FFFCF7] border border-[#E8C69B] p-2 rounded-[8px] shadow">
                        <button className="absolute top-4 right-4 " onClick={() => setPrivatePopup(false)}> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="#F6F6F6" />
                            <path
                                d="M15.3636 9L9 15.3636M9 9L15.3636 15.3636"
                                stroke="#300708"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        </button>
                        <div className="flex">
                            <div className="w-[54%] p-8 ">


                                {step === 3 ?
                                    <div className=" relative flex flex-col justify-center h-full">
                                        <img className="absolute p-7 " src={coupon} alt="thank you" />
                                        <div className="z-10 flex justify-end pr-[55px]">
                                            <div className="max-w-[230px]">
                                                <p className="text-[20px] text-[#2B2A26] font-semibold fraunces text-center leading-7">Your have successfully Booked Your stylist </p>
                                                <p className="text-[#767469]  text-[16px] ibm-plex text-center mt-6 leading-6">Store Team will let you to confirm your visit & will guide you with the store address .</p>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <MeetStylistform step={step} setStep={setStep} />}
                            </div>
                            <div className="w-[46%] ">
                                <img src={bridalstylist} alt="bridal stylist" className="w-[476px] rounded-[4px]" />
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={meetStylistPanel} className="opacity-0  hidden absolute h-screen w-screen top-0 left-0  md:flex items-center justify-center z-10 after:content-[''] after:absolute after:inset-0 after:z-0 backdrop-blur-md after:bg-white/70 ">
                    <div className="z-10 max-w-[1000px] w-full relative top-0 left-0  bg-[#FFFCF7] border border-[#E8C69B] p-2 rounded-[8px] shadow">
                        <button className="absolute top-4 right-4 " onClick={() => setStylistPopup(false)}> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="#F6F6F6" />
                            <path
                                d="M15.3636 9L9 15.3636M9 9L15.3636 15.3636"
                                stroke="#300708"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        </button>
                        <div className="flex">
                            <div className="w-[54%] p-8 ">


                                {step === 3 ?
                                    <div className=" relative flex flex-col justify-center h-full">
                                        <img className="absolute p-7 " src={coupon} alt="thank you" />
                                        <div className="z-10 flex justify-end pr-[55px]">
                                            <div className="max-w-[230px]">
                                                <p className="text-[20px] text-[#2B2A26] font-semibold fraunces text-center leading-7">Your have successfully Booked Your stylist </p>
                                                <p className="text-[#767469]  text-[16px] ibm-plex text-center mt-6 leading-6">Store Team will let you to confirm your visit & will guide you with the store address .</p>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <PrivateVisitForm step={step} setStep={setStep} />}
                            </div>
                            <div className="w-[46%] ">
                                <img src={bridalstylist} alt="bridal stylist" className="w-[476px] rounded-[4px]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div ref={meetStylistPanel} className="opacity-0  hidden absolute h-screen w-screen top-0 left-0  md:flex items-center justify-center z-10 after:content-[''] after:absolute after:inset-0 after:z-0 backdrop-blur-md after:bg-white/70 ">
                    <div className="z-10 max-w-[590px] h-[440px] w-full relative top-0 left-0  bg-[#FFFCF7] border border-[#E8C69B] p-2 rounded-[8px] shadow">
                        <button className="absolute top-4 right-4 " onClick={() => setStylistPopup(false)}> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="#F6F6F6" />
                            <path
                                d="M15.3636 9L9 15.3636M9 9L15.3636 15.3636"
                                stroke="#300708"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        </button>

                        <div className=" p-8 h-full">


                            {stepForm2 === 3 ?
                                <div className=" relative flex flex-col justify-center h-full">
                                    <img className="absolute p-7 " src={coupon} alt="thank you" />
                                    <div className="z-10 flex justify-end pr-[70px]">
                                        <div className="max-w-[240px]">
                                            <p className="text-[24px] text-[#832729] font-semibold fraunces text-center leading-9">🌸 We’re Ready to<br />Welcome You!</p>
                                            <p className="text-[#767469] text-[16px] ibm-plex text-center mt-5 leading-6">Your private visit to Tanishq is confirmed. We look forward to welcoming you at your scheduled time for a personalized experience.</p>
                                        </div>
                                    </div>
                                </div>
                                :
                                <PrivateVisitForm stepForm2={stepForm2} setStepForm2={setStepForm2} />}


                        </div>
                    </div>
                </div> */}
            </div>
            <div className="my-[65px] md:block hidden  relative">
                <img src={weddingHighlight} className="w-full h-auto" alt="" />
                <div className="absolute top-0 left-0 w-full h-full flex  items-center justify-around px-10">
                    <div className="">
                        <p className="text-[38px] max-md:text-[30px] fraunces text-[#631517] font-normal">Collection Catalog</p>

                        <p className="fraunces text-2xl text-[#00000070]">Explore Rivaah catalog featuring timeless jewelry <br /> designs for every occasion and personal style.</p>

                    </div>

                    <Link to="https://www.tanishq.co.in/thejoyofdressing?lang=en_IN#"
                        className="btn border-0 mt-10 gap-1 rounded-pill flex justify-center items-center px-6 py-8"

                    >
                        <span className="pr-1 text-[9px] md:text-lg font-[500]">Make Yours Now</span>
                        <i className="bi bi-chevron-right ic-btn p-2 rounded-circle"></i>
                    </Link>
                </div>

            </div>



            {/* <div className="relative md:block hidden ">
                <img src={fullBg} className="w-full absolute top-0 z-0 rounded-md  object-cover h-[400px]" alt="" />
                <div className="max-w-[1200px]  mx-auto px-4 ">
                    <div className="relative pt-[80px]">
                        <div className="fraunces top-[10%] w-full h-full mb-10">
                            <h1 className="text-[40px] font-normal text-white fraunces ">Collection Catalogs</h1>
                            <p className="text-[20px] font-normal max-w-[520px] fraunces text-white max-w-[500px]">Explore Tanishq’s elegant catalog featuring timeless jewelry designs for every occasion and personal style.</p>
                        </div>

                        <div className="grid  grid-cols-2  gap-4">
                            {collection.map((item, index) => (
                                <div className="flex items-center relative justify-center">
                                    <img src={item.frontImg} alt={item.title} className="w-full h-auto rounded-lg" />
                                    <div className="absolute bottom-14 left-0 w-full px-12 flex items-center justify-between">
                                        <div className=" left-10">
                                            <h3 className="text-3xl fraunces font-normal text-white">{item.title}</h3>

                                        </div>
                                        <div className=" right-10">
                                            <button
                                                className="btn !mb-0 border-0  gap-1 rounded-pill flex justify-center items-center px-6 py-4"

                                            >
                                                <span className="pr-1 text-[9px] md:text-[12px] font-[500] fraunces">Download Now</span>

                                            </button>
                                        </div>

                                    </div>
                                </div>)
                            )}

                        </div>
                    </div>

                </div>
            </div> */}


            <div className="relative max-w-[1400px] mt-10 w-full mx-auto">


                <div className="mx-5">
                    {/* <Heading heading={<p className="text-[38px] max-md:text-[30px] max-md:leading-[32px] fraunces text-black font-normal">Ways to Shop from Tanishq</p>} /> */}
                    <section className="mx-2 flex jtustify-center items-center md:mx-10 relative my-5">
                        {/* Background Images */}
                        <img
                            src="https://staticimg.tanishq.co.in/microsite/dailywear/assets-new/images/bg/uniqueBorder.png"
                            className="rounded-lg lg:block min-h-[400px] hidden w-full"
                            alt="Background"
                        />
                        <img
                            src="https://staticimg.tanishq.co.in/microsite/dailywear/assets-new/images/bg/uniqueBorderMobile.png"
                            className="rounded-lg block lg:hidden max-h-[700px] w-full"
                            alt="Mobile Background"
                        />

                        {/* Left Content */}
                        <div className="absolute max-lg:items-center max-lg:flex-col flex-row flex justify-between w-full h-full max-lg:py-[40px] px-20 max-lg:px-5">
                            <div className="flex flex-col justify-center ">
                                <div className="pb-4 lg:block flex justify-center flex-col items-center">
                                    <img
                                        src={exchange}
                                        className="rounded-lg mb-3 lg:w-[120px] lg:mx-0 mx-auto w-[100px]"
                                        alt="Tanishq Promise"
                                    />

                                    <h2 className="fraunces text-[28px] lg:text-[60px] font-[400] text-[#300708]">
                                        Tanishq Exchange
                                    </h2>
                                    <p className="ibm-plex lg:w-[500px] lg:mx-0 mx-10 lg:text-[20px] max-lg:text-center text-[12px] font-[400] text-[#56544E] lg:text-[#300708]"> Every hour over 100 Indians join Tanishq's exchange community to upgrade their old gold at a better value!</p>
                                </div>

                                {/* Learn More button - Desktop */}
                                <div
                                    className="button-tw rounded-full hover:!bg-[#832729] mt-10 w-fit cursor-pointer hover:shadow-xl hover:translate-y-[-2%] duration-150 hidden lg:flex items-center justify-between pl-8 pr-3 py-[0.8rem] !text-white"
                                    style={{
                                        background: 'linear-gradient(90.18deg, rgba(131, 39, 41, 0.6) 0.17%, rgba(99, 21, 23, 0.6) 99.86%)',
                                    }}
                                >
                                    <a href="https://www.tanishq.co.in/exchange?lang=en_IN">
                                        <p className="fraunces font-[300]">Learn More</p>
                                    </a>
                                    <div
                                        className="rounded-full ml-4 font-[600] min-w-[30px] max-w-[30px] bg-[#A76767] flex justify-center text-[15px] items-center min-h-[30px] max-h-[30px] text-white"
                                        style={{
                                            boxShadow: '16px 16px 15.9px 4px #6315174F inset',
                                        }}
                                    >
                                        <img
                                            src="https://staticimg.tanishq.co.in/microsite/dailywear/assets-new/images/arrow/Arrow right.png"
                                            className="max-w-[20px] min-w-[20px]"
                                            alt="Arrow"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Right Side GIFs */}
                            <div className="flex flex-col justify-center">
                                <div className="flex justify-center items-center relative w-full">
                                    <img
                                        src="https://staticimg.tanishq.co.in/microsite/dailywear/assets-new/images/exchange/exchange-desktop.gif"
                                        className="lg:block hidden lg:w-[400px] w-[200px] h-[200px] rounded-2xl lg:h-[400px] object-cover"
                                        alt="Exchange Desktop"
                                    />
                                    <img
                                        src="https://staticimg.tanishq.co.in/microsite/dailywear/assets-new/images/exchange/exchange-mobile.gif"
                                        className="block lg:hidden lg:w-[400px] w-[200px] h-[200px] rounded-2xl lg:h-[400px] object-cover"
                                        alt="Exchange Mobile"
                                    />
                                </div>
                            </div>

                            {/* Learn More button - Mobile */}
                            <div
                                className=" rounded-full lg:hidden hover:!bg-[#832729] mt-10 w-fit cursor-pointer hover:shadow-xl hover:translate-y-[-2%] duration-150 flex items-center justify-between pl-8 pr-3 py-[0.8rem] !text-white"
                                style={{
                                    background: 'linear-gradient(90.18deg, rgba(131, 39, 41, 0.6) 0.17%, rgba(99, 21, 23, 0.6) 99.86%)',
                                }}
                            >
                                <a href="https://www.tanishq.co.in/exchange?lang=en_IN">
                                    <p className="fraunces font-[300]">Learn More</p>
                                </a>
                                <div
                                    className="rounded-full ml-4 font-[600] min-w-[30px] max-w-[30px] bg-[#A76767] flex justify-center text-[15px] items-center min-h-[30px] max-h-[30px] text-white"
                                    style={{
                                        boxShadow: '16px 16px 15.9px 4px #6315174F inset',
                                    }}
                                >
                                    <img
                                        src="https://staticimg.tanishq.co.in/microsite/dailywear/assets-new/images/arrow/Arrow right.png"
                                        className="max-w-[20px] min-w-[20px]"
                                        alt="Arrow"
                                    />
                                </div>
                            </div>
                        </div>


                    </section>
                </div>
                {/* <Heading heading={<p className="text-[38px] max-md:text-[30px] fraunces  font-normal"> The Tanishq Assurance</p>} /> */}
                <div className="max-lg:pb-20">
                    <Quality />
                </div>

                {stylistPopup && <div className={`fixed left-0 w-full top-0  z-[90]  min-h-full `}><BookAnAppointment {...sampleStoreData} title={<><span className="text-[#832729]">Book Your</span> Private Visit</>} setisOpen={setStylistPopup} /></div>}
                {privatePopup && <div className={`fixed left-0 w-full top-0  z-[90]  min-h-full `}><MakeAStylist {...sampleStoreData} title={<><span className="text-[#832729]">Book Your</span> Private Visit</>} setisOpen={setPrivatePopup} /></div>}



            </div>

            {/* <div className="max-md:hidden max-w-[1200px] my-[70px] mx-auto px-4">
                <div className="flex gap-10 rounded-[12px] py-10 px-7 border border-[rgba(18,25,46,0.12)]">
                    <div className="w-[50%]">
                        <img className="rounded-[12px]" src={store} alt="" />
                    </div>
                    <div className="w-[50%] flex flex-col justify-center items-start">
                        <p className="fraunces text-[30px] text-black leading-[35px] mb-3">Your Rivaah Wedding Lounge</p>
                        <button style={{ filter: "drop-shadow(4px 4px 8.9px rgba(60, 0, 0, 0.25))" }} className={` btn text-[12px] mt-[10px] !mb-0 text-[rgb(255_255_255/52%)] rounded-full  border-0 gap-1 md:flex rounded-pill hidden justify-center items-center !h-[53px] pl-7 pr-3`}>
                            <span className="pr-1 text-[16px] text-white font-fraunces max-md:text-[11px] font-[500]">Visit Now</span>
                            <i className="bi bi-chevron-right  p-1 rounded-circle bg-[#A76767] rounded-full w-10 h-10 flex items-center justify-center"
                                style={{ boxShadow: ' inset -1px -1px 4px #A76767, inset 16px 16px 15.9px 4px rgba(99, 21, 23, 0.31)', }}></i>
                        </button>
                    </div>
                </div>

            </div> */}
        </div>
    );
}

