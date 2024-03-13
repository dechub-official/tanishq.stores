import { useNavigate } from 'react-router-dom'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// import SubHomeexp from '../assets/images/subhomeExpender.png'
export default function SubHome() {
    // const nav=useNavigate()
    return <>
        <div className="w-full text-center text-white flex justify-center items-center   "  >
          
 
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
                        className="mySwiper !bg-[#832729] max-h-[30px]  !my-auto"
                    >


                        <SwiperSlide className='!bg-[#832729]' >   <p className='!bg-[#832729] text-[13.5px] px-2 md:text-[14px] font-[500]  md:w-auto'> Trusted by over 2.6 Million Indians. Exchange gold bought from any jeweller on Tanishq </p></SwiperSlide>
        <SwiperSlide className='!bg-[#832729]' >   <p className='!bg-[#832729] text-[13.5px] px-2 md:text-[14px] font-[500]  md:w-auto'>Get 100%* value.&nbsp; <u className='font-[600] cursor-pointer' onClick={()=>{window.location.href="https://www.tanishq.co.in/exchange"}}>Read more</u></p></SwiperSlide>
        {/* <SwiperSlide >  <TanishqService heading={"Buy New Jewellery"} subheading={"It can be any jewellery"} img={chain}/></SwiperSlide> */}
        
                    </Swiper>
                    </div>
    </>
}