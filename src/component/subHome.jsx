import { useNavigate } from 'react-router-dom'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import bg from '../assets/images/navbar/background.webp'
import kalsh from '../assets/images/navbar/kalsh.png'
import { useState } from 'react'
// import SubHomeexp from '../assets/images/subhomeExpender.png'
export default function SubHome() {
    // const nav=useNavigate()
    const [open,setOpen]=useState(true)
    return <>
      { open&& <div className="w-full  text-center text-white flex  justify-center items-center   relative"  >

        <p className='text-[white] absolute right-5 cursor-pointer text-[16px] z-50 font-[600]' onClick={()=>setOpen(false)}>X</p>
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
                className="mySwiper  !bg-[100%,100%]  !bg-transparent  text-[white] font-[600] max-h-[40px]  !my-auto"
                style={{backgroundImage:'url('+bg+')'}}
            >


                <SwiperSlide   className=' !bg-[100%,100%]  !bg-transparent !flex text-[white]  font-[600]' ><div className="flex relative"> <img src={kalsh} className='max-w-[20px] max-h-[20px]' alt="" />  <p  className='bg-transparent text-[yellow] whitespace-nowrap  text-[13.5px] px-2 md:text-[16px] font-[300]  md:w-auto'> AKSHAYA TRITYA OFFER IS LIVE.&nbsp; &nbsp; <span className='text-[white]'>UP TO 20% OFF* ! <span onClick={()=>{window.location.href = "https://www.tanishq.co.in/dailywear?lang=en_IN" }} className='cursor-pointer underline'>SHOP NOW</span> </span>
 </p></div></SwiperSlide>
                {/* <SwiperSlide  className='!bg-[100%,100%] !bg-transparent text-[white] font-[600]' >   <p  className='bg-transparent text-[white] font-[600] text-[13.5px] px-2 md:text-[14px] font-[500]  md:w-auto'>Get 100%* value.&nbsp; <u className='font-[600] cursor-pointer' onClick={() => { window.location.href = "https://www.tanishq.co.in/exchange" }}>Read more</u></p></SwiperSlide> */}
                {/* <SwiperSlide >  <TanishqService heading={"Buy New Jewellery"} subheading={"It can be any jewellery"} img={chain}/></SwiperSlide> */}

            </Swiper>
        </div>}
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
        </div> */}
    </>
}