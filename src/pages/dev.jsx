import React, { useRef, useState } from "react"
import Heading from "../component/heading";

import InfoSection from "../component/Rivaahcollection/infosection";
import CustomJewelleryForm from "../component/Rivaahcollection/form";

import desktopbanner from "../assets/images/rivaahcollection/Desktop BAnner.mp4";

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
import logo from "../assets/images/rivaahcollection/Logo.png";
import weddingHighlight from "../assets/images/rivaahcollection/weddingHighlight.png";
import fullBg from "../assets/images/rivaahcollection/fullBg.png";
import polkiCollection from "../assets/images/rivaahcollection/polkiCollection.png";
import tarunCollection from "../assets/images/rivaahcollection/tarunCollection.png";
import dharoharCollection from "../assets/images/rivaahcollection/dharoharCollection.png";
import TanishqExperience from "../component/weddingStore/tanishqExprience";


export default function Dev() {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

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
    return (
        <div>
            <div className="flex fixed bottom-0 z-10 w-full bg-[#ffffff5f] py-4 items-center justify-center gap-x-10 ">
                <button
                    className="btn !mb-0 border-0  gap-1 rounded-pill flex justify-center items-center px-6 py-8"

                >
                    <span className="pr-1 text-[9px] md:text-lg font-[500]">Book A Private Visit</span>
                    <i className="bi bi-chevron-right ic-btn p-2 rounded-circle"></i>
                </button>
                <button
                    className="btn !mb-0 border-0 gap-1 rounded-pill flex justify-center items-center px-6 py-8"

                >
                    <span className="pr-1 text-[9px] md:text-lg font-[500]">Meet A Stylist</span>
                    <i className="bi bi-chevron-right ic-btn p-2 rounded-circle"></i>
                </button>
            </div>
            <div>
                <div className="relative w-full ">
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
            </div>
            <div className="max-w-[1200px] mt-10 mx-auto px-4">
                <div>
                    <Heading heading={<p className="text-[38px] max-md:text-[30px] fraunces text-black font-normal">Store Collections</p>} subHeading={<p className="font-fraunces ">Explore our newly launched collection</p>} />

                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8 max-sm:gap-4 mt-20 max-md:mt-10 px-[60px] max-md:px-0">
                        <div className="relative overflow-hidden rounded-[24px] max-sm:rounded-[15px] flex flex-col items-center">
                            <img className="w-full" src={tarun} alt="" />
                            <div class=" bottom-0 absolute inset-0 bg-[linear-gradient(179.73deg,_rgba(51,_36,_34,_0)_63.28%,_rgba(51,_36,_34,_0.65)_81.32%,_#291A18_99.77%)]"></div>
                            <div className="absolute bottom-6 max-md:bottom-3"><Heading heading={<p className="text-4xl font-normal fraunces text-white max-md:text-3xl">Tarun Tahiliani Collection</p>} /></div>
                            <div className="absolute top-3 right-4 "><a href="#" className="flex items-center"><p className="text-[20px] mr-2 font-normal fraunces text-white block underline underline-offset-3">Explore now</p><img className="h-6" src={arrow} alt="" /></a></div>
                        </div>
                        <div className="relative overflow-hidden rounded-[24px] max-sm:rounded-[15px] flex flex-col items-center">
                            <img className="w-full" src={polki} alt="" />
                            <div class=" bottom-0 absolute inset-0 bg-[linear-gradient(179.73deg,_rgba(51,_36,_34,_0)_63.28%,_rgba(51,_36,_34,_0.65)_81.32%,_#291A18_99.77%)]"></div>
                            <div className="absolute bottom-6 max-md:bottom-3"><Heading heading={<p className="text-4xl font-normal fraunces text-white max-md:text-3xl">Polki Collection</p>} /></div>
                            <div className="absolute top-3 right-4 "><a href="#" className="flex items-center"><p className="text-[20px] mr-2 font-normal fraunces text-white block underline underline-offset-3">Explore now</p><img className="h-6" src={arrow} alt="" /></a></div>
                        </div>
                        <div className="relative overflow-hidden rounded-[24px] max-sm:rounded-[15px] flex flex-col items-center">
                            <img className="w-full" src={navraani} alt="" />
                            <div class=" bottom-0 absolute inset-0 bg-[linear-gradient(179.73deg,_rgba(51,_36,_34,_0)_63.28%,_rgba(51,_36,_34,_0.65)_81.32%,_#291A18_99.77%)]"></div>
                            <div className="absolute bottom-6 max-md:bottom-3"><Heading heading={<p className="text-4xl font-normal fraunces text-white max-md:text-3xl">Navraani Collection</p>} /></div>
                            <div className="absolute top-3 right-4 "><a href="#" className="flex items-center"><p className="text-[20px] mr-2 font-normal fraunces text-white block underline underline-offset-3">Explore now</p><img className="h-6" src={arrow} alt="" /></a></div>
                        </div>
                        <div className="relative overflow-hidden rounded-[24px] max-sm:rounded-[15px] flex flex-col items-center">
                            <img className="w-full" src={dharohar} alt="" />
                            <div class=" bottom-0 absolute inset-0 bg-[linear-gradient(179.73deg,_rgba(51,_36,_34,_0)_63.28%,_rgba(51,_36,_34,_0.65)_81.32%,_#291A18_99.77%)]"></div>
                            <div className="absolute bottom-6 max-md:bottom-3"><Heading heading={<p className="text-4xl font-normal fraunces text-white max-md:text-3xl">Dharohar Collection</p>} /></div>
                            <div className="absolute top-3 right-4 "><a href="#" className="flex items-center"><p className="text-[20px] mr-2 font-normal fraunces text-white block underline underline-offset-3">Explore now</p><img className="h-6" src={arrow} alt="" /></a></div>
                        </div>




                    </div>
                </div>


                <div className="mt-[60px]">
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


                <div className="mt-[50px]">
                    <Heading heading={<p className="text-[38px] max-md:text-[30px] fraunces text-black font-normal">A jewellery to fit your timeline</p>} subHeading={<p className="font-fraunces ">Tanishq at every stage!</p>} />


                    <div className="flex gap-8 mt-[50px]">
                        <div className="relative flex justify-center">
                            <img className="drop-shadow-[18px_8px_29px_rgba(0,0,0,0.05)]" src={wedding} alt="" />
                            <div className="absolute flex gap-3 justify-center items-center flex-col bottom-8 max-w-[400px]">
                                <h3 className="text-[20px] font-semibold text-[#1F242D] fraunces">Wedding</h3>
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
                <div className="mt-[100px]  bg-[#FFFCF7] border border-[#E8C69B] p-2 rounded-[8px]">
                    <div className="flex">
                        <div className="w-[54%] p-12 flex flex-col justify-between">
                            <div className="flex justify-between items-center">
                                <div><h3 className="fraunces leading-[40px] text-[#767469] text-[35px] font-normal">Connect with <br></br><span className="fraunces text-[#070202]">A Bridal Stylist</span></h3></div>
                                <div> <img className="w-[100px]" src={logo} alt="tanishq logo" /></div>
                            </div>

                            <CustomJewelleryForm />
                        </div>
                        <div className="w-[46%] ">
                            <img src={bridalstylist} alt="bridal stylist" className=" rounded-[4px]" />
                        </div>
                    </div>
                </div>
                <div className="mt-[60px] relative">
                    <img src={weddingHighlight} className="w-full h-auto" alt="" />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                        <p className="text-[38px] max-md:text-[30px] fraunces text-black font-normal">Introducing Bride’s Dream list!</p>

                        <p className="font-fraunces text-2xl text-[#00000070]">Create your own jewellery board, share with family and friends!</p>
                        <button
                            className="btn border-0 mt-10 gap-1 rounded-pill flex justify-center items-center px-6 py-8"

                        >
                            <span className="pr-1 text-[9px] md:text-lg font-[500]">Make Yours Now</span>
                            <i className="bi bi-chevron-right ic-btn p-2 rounded-circle"></i>
                        </button>
                    </div>

                </div>

            </div>
            <div className="mt-20 relative">
                <img src={fullBg} className="w-full rounded-md h-full object-cover" alt="" />
                <div className="max-w-[1200px] mt-10 mx-auto px-4 ">
                    <div className="absolute fraunces top-[10%] w-full h-full">
                        <h1 className="text-3xl font-normal text-white">Collection Catalogs</h1>
                        <p className="text-xl font-normal max-w-[600px] text-white">Explore Tanishq’s elegant catalog featuring timeless jewelry designs for every occasion and personal style.</p>
                    </div>

                    <div className="grid  grid-cols-2 translate-y-[-30%] gap-4">
                        {collection.map((item, index) => (
                            <div className="flex items-center relative justify-center">
                                <img src={item.frontImg} alt={item.title} className="w-full h-auto rounded-lg" />
                                <div className="flex items-center justify-between">
                                    <div className="absolute bottom-10 left-10">
                                        <h3 className="text-3xl fraunces font-normal text-white">{item.title}</h3>

                                    </div>
                                    <div className="absolute bottom-10 right-10">
                                        <button
                                            className="btn !mb-0 border-0  gap-1 rounded-pill flex justify-center items-center px-6 py-4"

                                        >
                                            <span className="pr-1 text-[9px] md:text-lg font-[500]">Download</span>

                                        </button>
                                    </div>

                                </div>
                            </div>)
                        )}

                    </div>

                </div>
                <div className="mx-5">
                    <TanishqExperience />
                </div>



            </div>
        </div>
    );
}

