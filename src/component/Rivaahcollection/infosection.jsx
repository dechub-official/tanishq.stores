import { useRef } from 'react'

import Heading from '../heading'
import divider from "../../assets/images/rivaahcollection/divider.png";
import VideoBox from '../videoBox'
import infoVideo1 from '../../assets/images/rivaahcollection/infoVideo1.mp4'
import infoVideo2 from '../../assets/images/rivaahcollection/infoVideo2.mp4'

export default function InfoSection() {
    const videoRef = useRef(null)
    const playBtnRef = useRef(null)

    const handlePlay = () => {
        if (videoRef.current.paused) {
            videoRef.current.play()
            playBtnRef.current.classList.add('hidden')
        }
    }

    const handleVideoClick = () => {
        if (videoRef.current.paused) {
            videoRef.current.play()
            playBtnRef.current.classList.add('hidden')
        } else {
            videoRef.current.pause()
            playBtnRef.current.classList.remove('hidden')
        }
    }

    const handleVideoEnd = () => {
        playBtnRef.current.classList.remove('hidden')
    }


    const videoPlayButtom = <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.4697 9.53581C23.1364 11.0754 23.1364 14.9244 20.4697 16.464L6.2649 24.6652C3.59824 26.2048 0.264907 24.2803 0.264907 21.2011L0.264907 4.79875C0.264908 1.71955 3.59824 -0.204951 6.26491 1.33465L20.4697 9.53581Z" fill="white" />
    </svg>

    return (
        <div>
            {/* <Heading heading={<p className="text-[38px] max-md:text-[27px] fraunces text-[#56544E] font-semibold leading-[35px]"> Celebrating Timeless Craftsmanship</p>} /> */}
            {/* desktop */}
            <div className="py-10  lg:block max-md:hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="relative bg-white rounded-[24px] px-[36px] flex flex-col items-start justify-center border-[#F4E3CC] border z-[1] max-lg:py-20
          relative before:z-0 before:content-['']  before:absolute before:inset-0 before:border before:border-[#F4E3CC] before:mx-[10px] before:rounded-[24px] before:mt-[-1px] before:mb-[-1px]
             relative after:z-0 after:content-['']  after:absolute after:inset-0 after:border after:border-[#F4E3CC] after:my-[10px] after:rounded-[24px] after:ml-[-0.5px] after:mr-[-1px]">

                            <h2 className="z-[2] relative text-[37px] font-semibold tracking-tight text-[#2B2A26] leading-[45px] font-fraunces">
                                Celebrating Timeless Craftsmanship
                            </h2>
                            <p className="z-[2] relative text-[16px] text-[#767469] ibm-plex leading-relaxed mt-4">
                                From the Polkis of Punjab to South India’s
                                temple jewellery — Tanishq celebrates the
                                artistry of karigars, whose craftsmanship
                                brings each timeless piece to life
                            </p>
                            <button className={`z-[2] relative text-[10px] mt-10 text-[rgb(255_255_255/52%)] rounded-full bg-[linear-gradient(90.18deg,#832729_0.17%,#631517_99.86%)] border-0 gap-1 md:flex rounded-pill hidden justify-center items-center py-2 pl-6 pr-2`}>
                                <span className="pr-1 text-[12px] text-white font-fraunces max-md:text-[11px] font-[500]">Learn More</span>
                                <i className="bi bi-chevron-right  p-1 rounded-circle bg-[#832729] rounded-full w-8 h-8 flex items-center justify-center"
                                    style={{ boxShadow: 'inset -1px -1px 4px rgba(131, 39, 40, 0.6), inset 16px 16px 15.9px 4px rgba(73, 10, 12, 0.57)', }}></i>
                            </button>


                        </div>

                        {/* Card 2 */}
                        {/* <div className="rounded-[24px] bg-[#FFFCF7] flex flex-col justify-end border border-[#F4E3CC] p-4">
                            <div className="relative flex justify-center items-center">
                                <img src="https://tanishq-gold.vercel.app/assets/images/highlight-ring.png" className="w-full object-contain" alt="ring" />
                                <div className='absolute top-[45px] group'>
                                    <div style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.08)' }} className="w-8  h-8 bg-[rgb(255_255_255/59%)] rounded-full animate-pulse cursor-pointer flex justify-center items-center">
                                        <div style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.08)' }} className='h-4 w-4 bg-white rounded-full'></div>
                                    </div>
                                    <div style={{ borderRadius: "0 5px 5px 5px", boxShadow: "18px 8px 29px rgba(0, 0, 0, 0.12)" }} className="fraunces absolute top-full mb-2 bg-white text-black px-4 py-2 border border-[#E2E1DF] text-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                        Casual wear
                                    </div>
                                </div>
                                <div className='absolute top-[155px] left-[100px] group'>
                                    <div className="w-8  h-8 bg-[rgb(255_255_255/59%)] rounded-full animate-pulse cursor-pointer flex justify-center items-center">
                                        <div className='h-4 w-4 bg-white rounded-full'></div>
                                    </div>
                                    <div style={{ borderRadius: "0 5px 5px 5px", boxShadow: "18px 8px 29px rgba(0, 0, 0, 0.12)" }} className="fraunces absolute top-full mb-2 bg-white text-black px-4 py-2 border border-[#E2E1DF] text-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                        22k Gold
                                    </div>
                                </div>

                            </div>
                            <div className="bg-white rounded-[12px] p-4 mt-6 border border-[rgba(0,0,0,0.1)" style={{ boxShadow: "6px 8px 24px -5px rgba(0, 0, 0, 0.2)" }}>
                                <div className="flex items-center justify-between gap-2">
                                    <div>
                                        <h4 className="text-sm font-normal text-gray-900 ">
                                            <a className='fraunces' href="#">Statement Gold Finger Ring</a>
                                        </h4>
                                        <div className="flex items-center gap-2">
                                            <span className="text-base font-fraunces text-gray-900">35,000/-</span>
                                            <small className="text-[#631517] -mb-[2px]">20% off</small>
                                        </div>
                                    </div>
                                    <a href="#" className="p-2 rounded-full hover:bg-gray-100 border border-[#CFCEC8]">
                                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_16_760)">
                                                <path d="M8.16028 1.63965C9.23081 4.12054 10.5974 5.25929 13.875 7.13701" stroke="#490A0C" strokeWidth="0.6875" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M0.8125 7.1377L13.8747 7.1377" stroke="#490A0C" strokeWidth="0.6875" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M8.15479 12.6396C9.22532 10.1588 10.5919 9.02001 13.8695 7.14229" stroke="#490A0C" strokeWidth="0.6875" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_16_760">
                                                    <rect width="13.75" height="13.75" fill="white" transform="translate(0.125 0.264648)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div> */}
                        <div className="relative rounded-[24px] overflow-hidden">
                            <VideoBox height={{ height: "530px" }} src={infoVideo2} thumbnail="https://tanishq-gold.vercel.app/assets/images/portrait-video-banner.png" playBtn={videoPlayButtom} pauseBtn={videoPlayButtom} />
                        </div>

                        {/* Card 3 - Video */}
                        <div className="relative rounded-[24px] overflow-hidden">
                            <VideoBox height={{ height: "530px" }} src={infoVideo1} thumbnail="https://tanishq-gold.vercel.app/assets/images/portrait-video-banner.png" playBtn={videoPlayButtom} pauseBtn={videoPlayButtom} />
                        </div>
                    </div>
                </div>
            </div>

            {/* // mobile */}

            <div className="hidden max-md:block pb-10 ">
                <div className="max-md:flex hidden flex-col items-center justify-center ">
                    <img src={divider} className="rotate-[180deg] w-[135px] mb-[-5px]" alt="" />
                    <Heading heading={<p className="text-[38px] max-md:text-[27px] fraunces text-[#56544E] font-semibold leading-[35px]">Beautiful Hands - <br />An Initiative by Tanishq</p>} />
                    <p className='ibm-plex text-[#56544E] text-center mt-[-10px]'>At Tanishq, we believe that every piece of gold jewellery
                        is a work of art, crafted with unparalleled skill and
                        dedication. Our artisans, or karigars, are the heart of
                        this artistry, transforming raw gold into exquisite treasures.</p>
                    <img src={divider} className="w-[135px] mt-[15px] mb-10" alt="" />

                </div>
                <div className="container mx-auto px-0">
                    <div className="">
                        {/* Card 1 */}
                        <div className="relative rounded-[24px] overflow-hidden">
                            <VideoBox height={{ height: "320px" }} src="https://tanishq-gold.vercel.app/assets/images/video/video.mp4" thumbnail="https://tanishq-gold.vercel.app/assets/images/portrait-video-banner.png" playBtn={videoPlayButtom} pauseBtn={videoPlayButtom} />

                        </div>

                        {/* Card 2 */}
                        <div className="rounded-b-[24px] mt-[-15px] bg-[#F6F6F6] flex flex-col justify-end rounded-t-0 border border-[#F2E7E9] p-4 items-center">
                            <div className="relative flex justify-center items-center flex-col">
                                <img src="https://tanishq-gold.vercel.app/assets/images/highlight-ring.png" className="w-full object-contain" alt="ring" />
                                <p className='text-[#474747] text-[20px] font-normal fraunces'>Statement Gold Finger Ring</p>
                                <p className='text-[#919191] mt-[7px] font-bold inter text-[17px]'>₹25,087</p>
                                <div className='absolute top-[45px] group'>
                                    <div style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.08)' }} className="w-8  h-8 bg-[rgb(255_255_255/59%)] rounded-full animate-pulse cursor-pointer flex justify-center items-center">
                                        <div style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.08)' }} className='h-4 w-4 bg-white rounded-full'></div>
                                    </div>
                                    <div style={{ borderRadius: "0 5px 5px 5px", boxShadow: "18px 8px 29px rgba(0, 0, 0, 0.12)" }} className="fraunces absolute top-full mb-2 bg-white text-black px-4 py-2 border border-[#E2E1DF] text-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                        Casual wear
                                    </div>
                                </div>
                                <div className='absolute top-[155px] left-[100px] group'>
                                    <div className="w-8  h-8 bg-[rgb(255_255_255/59%)] rounded-full animate-pulse cursor-pointer flex justify-center items-center">
                                        <div className='h-4 w-4 bg-white rounded-full'></div>
                                    </div>
                                    <div style={{ borderRadius: "0 5px 5px 5px", boxShadow: "18px 8px 29px rgba(0, 0, 0, 0.12)" }} className="fraunces absolute top-full mb-2 bg-white text-black px-4 py-2 border border-[#E2E1DF] text-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                        22k Gold
                                    </div>
                                </div>

                            </div>
                            <a href='#' className="mt-5 mb-7 flex items-center justify-center gap-5 border border-[#D9BDBE] rounded-full px-6 py-[10px]  text-[16px] font-normal text-[#070202] fraunces">
                                View product
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M0.619047 1L4.61905 5L0.619047 9"
                                        stroke="black"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>

                            </a>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}
