import React, { useRef, useState } from "react"
import Heading from "../component/heading";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import coupon from "../assets/images/rivaahcollection/coupon.png";

import InfoSection from "../component/Rivaahcollection/infosection";
import MeetStylistform from "../component/Rivaahcollection/meetStylist";
import PrivateVisitForm from "../component/Rivaahcollection/PrivateVisit"

import desktopbanner from "../assets/images/rivaahcollection/Desktop BAnner.mp4";

import divider from "../assets/images/rivaahcollection/divider.png";

import banner from '../assets/images/rivaahcollection/BANNER.png';

import dreamlist from "../assets/images/rivaahcollection/dream list.png";

import rivaah1 from "../assets/images/rivaahcollection/rivaah 1.png";
import rivaah2 from "../assets/images/rivaahcollection/rivaah 2.png";
import rivaah3 from "../assets/images/rivaahcollection/rivaah 3.png";

import dharohar from "../assets/images/rivaahcollection/Dharohar Collection.png";
import navraani from "../assets/images/rivaahcollection/Navraani Collection.png";
import polki from "../assets/images/rivaahcollection/Polki Collection.png";
import tarun from "../assets/images/rivaahcollection/Tarun Tahiliani Collection.png";
import arrow from "../assets/images/rivaahcollection/arrow.svg";


import styling from "../assets/images/rivaahcollection/styling.png";
import viewingroom from "../assets/images/rivaahcollection/viewingroom.png";
import customisation from "../assets/images/rivaahcollection/customisation.png";
import dedicated from "../assets/images/rivaahcollection/dedicated stylists.png";

import wedding from "../assets/images/rivaahcollection/wedding.png";
import mahandi from "../assets/images/rivaahcollection/mehandi.png";
import haldi from "../assets/images/rivaahcollection/haldi.png";

import bridalstylist from "../assets/images/rivaahcollection/bridal stylist.png";

import weddingHighlight from "../assets/images/rivaahcollection/weddingHighlight.png";
import fullBg from "../assets/images/rivaahcollection/fullBg.png";
import polkiCollection from "../assets/images/rivaahcollection/polkiCollection.png";
import tarunCollection from "../assets/images/rivaahcollection/tarunCollection.png";
import dharoharCollection from "../assets/images/rivaahcollection/dharoharCollection.png";
import TanishqExperience from "../component/weddingStore/tanishqExprience";
import BookAnAppointment from "../component/bookAnAppointment";
import storeDump from '../assets/images/rivaahcollection/storeDump.png'
import { Clock, ClockIcon, Locate, MapPin, Navigation, NavigationIcon, Phone, PhoneIcon, Star, StoreIcon } from "lucide-react";
import Assurance from "../component/assurance";
import Quality from "../component/Rivaahcollection/Quality";


export default function Dev() {

    const videoRef = useRef(null)
    const meetStylistPanel = useRef(null)
    const privateVisitPnael = useRef(null)
    const [stylistPopup, setStylistPopup] = useState(false)
    const [privatePopup, setPrivatePopup] = useState(false)
    const [step, setStep] = useState(1);
    const [stepForm2, setStepForm2] = useState(1);
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
            frontImg: dedicated,
            backText: "Rivaah stores provide dedicated bridal stylists who guide each bride with expert advice, cultural insights, and personalized jewellery recommendations.",
            title: "Dedicated stylists"
        },
        {
            frontImg: viewingroom,
            backText: "Rivaah stores feature private viewing rooms, offering brides an exclusive, comfortable space for personalized jewellery trials and styling consultations.",
            title: "Private viewing room"
        },
        {
            frontImg: styling,
            backText: "Tanishq Rivaah stores offer jewellery customisation, allowing brides to personalise designs that reflect their traditions, style, and story.",
            title: "Customisation"
        },
        {
            frontImg: customisation,
            backText: "Rivaah stores offer personalized styling consultations, helping brides choose jewelry that reflects their culture, personality, and wedding vision with expert guidance and custom designs.",
            title: "Styling Consultations"
        },
    ]

    const collection = [
        {
            frontImg: tarunCollection,
            title: "Tarun Tahiliani Collection",

        },
        {
            frontImg: polkiCollection,
            title: "Polki Collection",
        },
        {
            frontImg: tarunCollection,
            title: "Navraani Collection",
        },
        {
            frontImg: dharoharCollection,
            title: "Dharohar Collection",
        }
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
        <div>
            <div className="flex  fixed bottom-0 z-10 w-full bg-[#ffffff5f] py-4 items-center justify-center gap-x-10 ">
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
                    <video
                        ref={videoRef}
                        className="w-full rounded-lg"
                        src={desktopbanner}
                        muted
                        playsInline
                        onEnded={handleEnded}
                    />
                    {!isPlaying && (
                        <button
                            onClick={handlePlay}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            {/* Your SVG play button */}
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
                        </button>
                    )}
                </div>
                <div className="hidden max-md:block relative w-full">
                    <img src={banner} alt="" />
                </div>

            </div>

            <div className="max-w-[1200px] mt-10 mx-auto px-4">

                <div className="flex my-4 justify-between md:justify-center items-center">
                    <div>
                        <p className="text-[38px] max-md:text-[30px]  md:text-center fraunces text-black font-normal ">Rivaah South Ex</p>
                        <div className="md:hidden flex items-center text-[#FF9A00] gap-x-2">
                            <Star fill="#FF9A00" /> <span className="text-[#56544E] font-semibold">4.2</span> <span className="text-[#56544E] font-normal">(2753 Reviews)</span>
                        </div>
                    </div>
                    <img src={storeDump} className="w-14  md:hidden" alt="" />
                </div>




                <div className="store-details hidden md:grid grid-cols-3 gap-x-20">
                    <div className="box  shadow-lg  border-2 border-[#FFF2E0] rounded-3xl py-6 px-6">
                        <div className="flex  gap-x-2">
                            <span className="text-xl font-semibold text-[#954648] fraunces"> <MapPin /></span>
                            <div>
                                <div className="flex justify-between">
                                    <p className="text-[#954648] text-xl font-semibold fraunces "> Address</p>
                                    <p className="text-[#954648] underline font-bold">View Details</p>
                                </div>
                                <p className="text-[#56544E] mt-5 text-lg font-normal ibm-plex">F-44 ,South Ex Part -1, Near Metro station Gate no -1,	New Delhi 	110049</p>
                            </div>
                        </div>

                    </div>
                    <div className="box  shadow-lg h-fit border-2 border-[#FFF2E0] rounded-3xl py-6 px-6">
                        <div className="flex  gap-x-2">
                            <span className="text-xl font-semibold text-[#954648] fraunces"> <Clock /></span>
                            <div>
                                <div className="flex justify-start relative  gap-x-5">
                                    <p className="text-[#954648] font-bold text-xl fraunces "> Timings</p>
                                    <p className="rounded-full bg-green-200 absolute left-[50%] whitespace-nowrap translate-y-[-10%] text-green-800 font-bold px-4 py-2">Open now</p>

                                </div>
                                <p className="text-[#56544E] mt-5 text-lg font-bold ibm-plex">10:00 AM - 08:00 PM</p>
                            </div>
                        </div>

                    </div>
                    <div className="box  shadow-lg h-fit border-2 border-[#FFF2E0] rounded-3xl py-6 px-6">
                        <div className="flex  gap-x-2">
                            <span className="text-xl font-semibold text-[#954648] fraunces"> <Phone /></span>
                            <div>
                                <div className="flex justify-between">
                                    <p className="text-[#954648] text-xl font-semibold fraunces "> Other Details</p>

                                </div>
                                <p className="text-[#56544E] mt-5 text-lg font-bold ibm-plex">+91 12345 67890</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="box md:hidden   shadow-lg  border-2 border-[#FFF2E0] rounded-3xl py-6 px-6">
                    <div className="flex  gap-x-2">
                        <span className="text-xl font-semibold text-[#56544E] fraunces"> <StoreIcon /></span>
                        <div>
                            <div className="flex justify-between">
                                <p className="text-[#954648] text-xl font-semibold fraunces "> Store Details</p>
                                <p className="bg-[#954648] text-white rounded-full p-3 text-[10px] w-12 flex justify-center translate-y-[-10%] items-center h-12  font-bold"><NavigationIcon /></p>
                            </div>
                            <p className="text-[#56544E] mt-5 text-lg font-normal ibm-plex">F-44 ,South Ex Part -1, Near Metro station Gate no -1,	New Delhi 	110049</p>
                            <p className="text-[#56544E] mt-5 text-lg flex gap-x-3 font-semibold ibm-plex"><PhoneIcon /> +91 12345 67890</p>
                            <p className="text-[#56544E] mt-5 text-lg flex gap-x-3 font-semibold ibm-plex"><ClockIcon /> 10:00 AM - 08:00 PM     <p className="rounded-full bg-green-200  whitespace-nowrap text-sm translate-y-[-10%] text-green-800 font-bold px-2 py-2">Open now</p></p>
                        </div>
                    </div>

                </div>
                <div className="mt-[60px]">
                    <div className="max-md:hidden">
                        <Heading heading={<p className="text-[38px] max-md:text-[30px] fraunces text-black font-normal">Store Collections</p>} subHeading={<p className="font-fraunces ">Explore our newly launched collection</p>} />

                    </div>
                    <div className="max-md:flex hidden flex-col items-center justify-center ">
                        <img src={divider} className="rotate-[180deg] w-[135px] mb-[-15px]" alt="" />
                        <Heading heading={<p className="text-[38px] max-md:text-[27px] fraunces text-[#56544E] font-semibold">Choose Your collection</p>} />
                        <img src={divider} className="w-[135px] mt-[-15px]" alt="" />

                    </div>
                    <div className="grid grid-cols-2 gap-8 max-sm:gap-4 max-sm:gap-4 mt-20 max-md:mt-7 px-[60px] max-md:px-0">
                        <div className="relative overflow-hidden rounded-[24px] max-sm:rounded-[15px] flex flex-col items-center">
                            <img className="w-full max-md:object-cover max-md:h-[250px]" src={tarun} alt="" />
                            <div class=" bottom-0 absolute inset-0 bg-[linear-gradient(179.73deg,_rgba(51,_36,_34,_0)_63.28%,_rgba(51,_36,_34,_0.65)_81.32%,_#291A18_99.77%)]"></div>
                            <div className="absolute bottom-6 max-md:bottom-2"><Heading heading={<p className="text-4xl max-md:max-w-[125px] max-md:text-[16px] max-md:leading-6 font-normal fraunces text-white max-md:text-3xl">Tarun Tahiliani Collection</p>} /></div>
                            <div className="max-md:hidden absolute top-3 right-4 "><a href="#" className="flex items-center"><p className="text-[20px] mr-2 font-normal fraunces text-white block underline underline-offset-3">Explore now</p><img className="h-6" src={arrow} alt="" /></a></div>
                        </div>
                        <div className="relative overflow-hidden rounded-[24px] max-sm:rounded-[15px] flex flex-col items-center">
                            <img className="w-full max-md:object-cover max-md:h-[250px]" src={polki} alt="" />
                            <div class=" bottom-0 absolute inset-0 bg-[linear-gradient(179.73deg,_rgba(51,_36,_34,_0)_63.28%,_rgba(51,_36,_34,_0.65)_81.32%,_#291A18_99.77%)]"></div>
                            <div className="absolute bottom-6 max-md:bottom-2"><Heading heading={<p className="text-4xl max-md:max-w-[105px] max-md:text-[16px] max-md:leading-6 font-normal fraunces text-white max-md:text-3xl">Polki Collection</p>} /></div>
                            <div className="max-md:hidden absolute top-3 right-4 "><a href="#" className="flex items-center"><p className="text-[20px] mr-2 font-normal fraunces text-white block underline underline-offset-3">Explore now</p><img className="h-6" src={arrow} alt="" /></a></div>
                        </div>
                        <div className="relative overflow-hidden rounded-[24px] max-sm:rounded-[15px] flex flex-col items-center">
                            <img className="w-full max-md:object-cover max-md:h-[250px]" src={navraani} alt="" />
                            <div class=" bottom-0 absolute inset-0 bg-[linear-gradient(179.73deg,_rgba(51,_36,_34,_0)_63.28%,_rgba(51,_36,_34,_0.65)_81.32%,_#291A18_99.77%)]"></div>
                            <div className="absolute bottom-6 max-md:bottom-2"><Heading heading={<p className="text-4xl max-md:max-w-[105px] max-md:text-[16px] max-md:leading-6 font-normal fraunces text-white max-md:text-3xl">Navraani Collection</p>} /></div>
                            <div className="max-md:hidden absolute top-3 right-4 "><a href="#" className="flex items-center"><p className="text-[20px] mr-2 font-normal fraunces text-white block underline underline-offset-3">Explore now</p><img className="h-6" src={arrow} alt="" /></a></div>
                        </div>
                        <div className="relative overflow-hidden rounded-[24px] max-sm:rounded-[15px] flex flex-col items-center">
                            <img className="w-full max-md:object-cover max-md:h-[250px]" src={dharohar} alt="" />
                            <div class=" bottom-0 absolute inset-0 bg-[linear-gradient(179.73deg,_rgba(51,_36,_34,_0)_63.28%,_rgba(51,_36,_34,_0.65)_81.32%,_#291A18_99.77%)]"></div>
                            <div className="absolute bottom-6 max-md:bottom-2"><Heading heading={<p className="text-4xl max-md:max-w-[105px] max-md:text-[16px] max-md:leading-6 font-normal fraunces text-white max-md:text-3xl">Dharohar Collection</p>} /></div>
                            <div className="max-md:hidden absolute top-3 right-4 "><a href="#" className="flex items-center"><p className="text-[20px] mr-2 font-normal fraunces text-white block underline underline-offset-3">Explore now</p><img className="h-6" src={arrow} alt="" /></a></div>
                        </div>




                    </div>
                </div>


                <div className="mt-[60px] max-md:hidden">
                    <Heading heading={<p className="text-[38px] max-md:text-[30px] max-md:leading-[32px] fraunces text-black font-normal">What makes wedding store unique?</p>} subHeading={<p className="font-fraunces max-md:leading-[18px] max-md:mt-4">We at Tanishq believe a bride deserves her own space to decide</p>} />



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


                <div className="mt-[60px]">
                    <InfoSection />
                </div>

                <div className="max-md:block hidden">
                    <div style={{ boxShadow: "0px -4px 40px rgba(0, 0, 0, 0.06)" }} className="border border-[##FFFFFF] bg-[#FFFFFF] rounded-[18px] p-5">
                        <div className="max-md:flex hidden flex-col items-center justify-center ">

                            <Heading heading={<p className="text-[38px] max-md:text-[27px] fraunces text-[#56544E] font-semibold leading-[35px]">Introducing Bride’s Dream list</p>} />
                            <p className='ibm-plex text-[#56544E] text-center mt-[-10px] mb-5'>Let’s check which ornaments pair best with each outfit, based on regional preferences and traditional styles.</p>

                            <img src={dreamlist} alt="" />
                            <button class="btn border-0 mt-10 gap-1 rounded-pill flex justify-center items-center px-6 py-8" fdprocessedid="zs2ow8"><span class="pr-1 text-[14px] md:text-lg font-[500] fraunces">Create Your Dream List</span><i class="bi bi-chevron-right ic-btn p-2 rounded-circle"></i></button>
                        </div>
                        <div className="container mx-auto px-0"></div>
                    </div>
                </div>

                <div className="max-md:block hidden mt-[50px]">
                    <div className="flex flex-col items-center justify-center ">
                        <img src={divider} className="rotate-[180deg] w-[135px] mb-[-5px]" alt="" />
                        <Heading heading={<p className="text-[38px] max-md:text-[27px] fraunces text-[#56544E] font-semibold leading-[35px]">Rivaah Spotlights</p>} />

                        <img src={divider} className="w-[135px] mt-[15px] mt-[-3px]" alt="" />

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
                </div>
                <div className="mt-[50px] block max-md:hidden">
                    <Heading heading={<p className="text-[38px] max-md:text-[30px] fraunces text-black font-normal">A jewellery to fit your timeline</p>} subHeading={<p className="font-fraunces ">Tanishq at every stage!</p>} />


                    <div className="flex gap-8 mt-[50px]">
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
                </div>


                <div ref={meetStylistPanel} className="opacity-0  hidden absolute h-screen w-screen top-0 left-0  md:flex items-center justify-center z-10 after:content-[''] after:absolute after:inset-0 after:z-0 backdrop-blur-md after:bg-white/70 ">
                    <div className="z-10 max-w-[1000px] w-full relative top-0 left-0  bg-[#FFFCF7] border border-[#E8C69B] p-2 rounded-[8px] shadow">
                        <button className="absolute top-4 right-4 " onClick={() => setStylistPopup(false)}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="#F6F6F6" />
                            <path d="M15.3636 9L9 15.3636M9 9L15.3636 15.3636" stroke="#300708" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
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


                <div ref={privateVisitPnael} className="opacity-0  hidden absolute h-screen w-screen top-0 left-0  md:flex items-center justify-center z-10 after:content-[''] after:absolute after:inset-0 after:z-0 backdrop-blur-md after:bg-white/70 ">
                    <div className="z-10 max-w-[590px] h-[440px] w-full relative top-0 left-0  bg-[#FFFCF7] border border-[#E8C69B] p-2 rounded-[8px] shadow">
                        <button className="absolute top-4 right-4 " onClick={() => setPrivatePopup(false)}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="#F6F6F6" />
                            <path d="M15.3636 9L9 15.3636M9 9L15.3636 15.3636" stroke="#300708" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
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
                </div>


                <div className="mt-[60px] md:block hidden  relative">
                    <img src={weddingHighlight} className="w-full h-auto" alt="" />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                        <p className="text-[38px] max-md:text-[30px] fraunces text-black font-normal">Introducing Bride’s Dream list!</p>

                        <p className="fraunces text-2xl text-[#00000070]">Create your own jewellery board, share with family and friends!</p>
                        <button
                            className="btn border-0 mt-10 gap-1 rounded-pill flex justify-center items-center px-6 py-8"

                        >
                            <span className="pr-1 text-[9px] md:text-lg font-[500]">Make Yours Now</span>
                            <i className="bi bi-chevron-right ic-btn p-2 rounded-circle"></i>
                        </button>
                    </div>

                </div>

            </div>
            <div className="space-y-20 relative">
                <div className="relative md:block hidden ">
                    <img src={fullBg} className="w-full absolute top-0 z-0 rounded-md  object-cover" alt="" />
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
                </div>

                <div className="mx-5">
                    <TanishqExperience />
                </div>
                <Quality />
                {stylistPopup && <div className={`fixed left-0 w-full top-0  z-[90]  min-h-full `}><BookAnAppointment {...sampleStoreData} setisOpen={setStylistPopup} /></div>}



            </div>
        </div>
    );
}

