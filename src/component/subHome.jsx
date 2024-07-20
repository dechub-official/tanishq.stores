import { useNavigate } from 'react-router-dom'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import bg from '../assets/images/navbar/strip.gif'
import mobile_bg from '../assets/images/navbar/mobile-strip.gif'
import goldbg from '../assets/images/navbar/strip.jpg'
import kalsh from '../assets/images/navbar/exchange.png'
import { useState } from 'react'
// import SubHomeexp from '../assets/images/subhomeExpender.png'
export default function SubHome() {
    // const nav=useNavigate()
    const [open,setOpen]=useState(true)
    return <>
   {/* { open&& <div    id="dashBanner"  className="w-full home-top-banner cursor-pointer text-center text-white flex  justify-center items-center   relative"  >

        <p className='md:text-[white] text-[#ffffffe2] absolute right-1 md:right-5 cursor-pointer md:text-[16px] text-[14px] z-50 font-[600]' onClick={()=>setOpen(false)}>X</p>
        <img src={kalsh} className='md:max-w-[40px] z-50 absolute left-3  max-w-[20px] max-h-[16px] md:max-h-[30px] mr-1' alt="" /> 
            <Swiper
                slidesPerView={1}
                spaceBetween={30}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    infinite: true
                }}

                loop={true}
                loopFillGroupWithBlank={true}
                modules={[Autoplay]}
                breakpoints={{


                }}
                direction='vertical'
             
                className="mySwiper  !bg-[100%,100%]   !bg-transparent  text-[white] font-[600] max-h-[40px]  !my-auto"
                style={{backgroundImage:'url('+bg+')'}}
            >


                <SwiperSlide   className=' !bg-[100%,10%]  max-h-[40px]  !bg-transparent !flex text-[white]  font-[600]' ><div className="flex items-center w-full justify-center  max-h-[40px] ">
                      <p  className='bg-transparent text-white whitespace-nowrap  text-[10px] md:px-2 md:text-[16px] md:font-[600]  md:w-auto'> Tanishq Festival of exchange is live </p></div></SwiperSlide>
                <SwiperSlide  className='!bg-[100%,100%]  max-h-[40px] !bg-transparent text-[white] font-[600]' >   <p  className='bg-transparent text-[white] font-[600] text-[13.5px] px-2 md:text-[14px]   max-h-[40px]  md:w-auto'>Get 100% value. Click to get more details.</p></SwiperSlide>
                

            </Swiper>
        </div>}  */}
        {/* <img src={bg} className='font-[600] max-h-[40px] w-full !my-auto' alt="" /> */}
        <div className='home-top-banner cursor-pointer' id="dashBanner">
        <img src={bg} className='max-h-[40px] md:block hidden w-full object-cover' ></img>
        <img src={mobile_bg} className='max-h-[40px] md:hidden block w-full object-cover' ></img>
        </div>
       
        {/* <div className="w-full  text-center text-white flex md:hidden justify-center items-center   "  >


            <Swiper
                slidesPerView={1}
                spaceBetween={30}

                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    infinite: true
                }}

                loop={true}
                loopFillGroupWithBlank={true}
                modules={[Autoplay]}
                breakpoints={{


                }}
                direction='vertical'
                className="mySwiper !bg-[#a37f29] text-[white] font-[600] max-h-[30px]  !my-auto"
            >


                <SwiperSlide className='!bg-[#a37f29] text-[white] font-[600]' >   <p className='!bg-[#a37f29] text-[white] font-[600] text-[13.5px] px-2 md:text-[14px] font-[500]  md:w-auto'> Trusted by over 2.6 Million Indians. </p></SwiperSlide>
                <SwiperSlide className='!bg-[#a37f29] text-[white] font-[600]' >   <p className='!bg-[#a37f29] text-[white] font-[600] text-[13.5px] px-2 md:text-[14px] font-[500]  md:w-auto'>Exchange gold bought from any jeweller on Tanishq  </p></SwiperSlide> 
                <SwiperSlide className='!bg-[#a37f29] text-[white] font-[600]' >   <p className='!bg-[#a37f29] text-[white] font-[600] text-[13.5px] px-2 md:text-[14px] font-[500]  md:w-auto'>Get 100%* value.&nbsp; <u className='font-[600] cursor-pointer' onClick={() => { window.location.href = "https://www.tanishq.co.in/exchange" }}>Read more</u></p></SwiperSlide>
              
            </Swiper>
        </div>  */}
    </>
}