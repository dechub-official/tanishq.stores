import Heading from "../component/heading";
import SearchBox from "../component/search";

import PopularCity from "../component/Home/popularCityBox";
import PopularCityDetail from "../assets/popularCities/data";
import Marquee from "../component/Home/marquee";
import LatestCollection from "../component/Home/latestCollection";
import cl1 from '../assets/images/latestCollection/image1.png'
import cl2 from '../assets/images/latestCollection/image2.png'
import cl3 from '../assets/images/latestCollection/image3.png'
import SuggestArtical from "../component/Home/suggestedArticles";
import { Helmet } from "react-helmet";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect } from "react";
import ReactGA from 'react-ga'
export default function Home() {
    useEffect(()=>{
        ReactGA.pageview(window.location.pathname)
    },[])
    return <>
    <Helmet> <meta
      name="description"
      content="Tanishq store locator will guide you to the nearest stores. Check out all contact details, directions through Store Locator. Visit now."
    /></Helmet>
        <div className="af-bl">
            <div className="flex flex-col items-center">
             
                <Heading heading={"Welcome to Tanishq!"} subHeading={"400+ stores, 8L+ Designs, Backed by the trust of TATA  | India’s favourite jewellery store"} />
            </div>
        </div>
        <SearchBox />
        {/*  */}

        <Heading heading={"Popular Cities"} />
        <div className="flex justify-center w-full">
            {/* <div className="hidden md:grid md:grid-rows-1 grid-rows-4 grid-flow-col gap-4 ">
                {[...Array(10)].map((data, index) => {

                    return <div className="col-span-1"><PopularCity key={data} img={Mumbai} name={"mumbai"} /></div>
                })}
            </div> */}
            <div className="hidden md:grid md:grid-rows-1 grid-rows-4 grid-flow-col gap-4 ">
                {PopularCityDetail.map((data, index) => {

                    return <div className="col-span-1"><PopularCity key={index} img={data.img} name={data.name} /></div>
                })}
            </div>
            <div className="flex md:hidden flex-wrap justify-center">
            {PopularCityDetail.map((data, index) => {

return <div className="col-span-1"><PopularCity key={index} img={data.img} name={data.name} /></div>
})}
            </div>
        </div>
        <Marquee />
        <div className=" af-bl w-full flex flex-col items-center">
            <Heading heading="Explore our latest collections online even before you walk in!" />
           
               
               
                 <div className="flex flex-col items-center justify-center w-full">
          {/* <h2 className="text-[20px] w-fit border-b-[3px] border-[#832729] pb-2 leading-10  font-[700] text-center text-[#832729] mb-2">Tanishq Store Services</h2> */}
       
       
         <div className="flex flex-col items-center  justify-around w-[80%] my-6">
         <Swiper
        slidesPerView={3}
        spaceBetween={20}
    
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Autoplay]}
        breakpoints={{
           
            768: { slidesPerView:3,autoplay:false},0: { centeredSlides:false,slidesPerGroup:2,slidesPerView:2}
        }}
       
        className="mySwiper"
      >   
       
          {[cl1, cl2, cl3,cl1].map((data, i) => {
                    return <SwiperSlide >  <LatestCollection key={i} img={data} name={"mumbai"} /> </SwiperSlide>
                })}
               
        {/* <SwiperSlide > <TanishqService heading={"Buy New Jewellery"} subheading={"It can be any jewellery"} img={ring}/> </SwiperSlide>
        <SwiperSlide > <TanishqService heading={"Buy New Jewellery"} subheading={"It can be any jewellery"} img={bangle}/></SwiperSlide>
        <SwiperSlide >  <TanishqService heading={"Buy New Jewellery"} subheading={"It can be any jewellery"} img={chain}/></SwiperSlide>
         */}
            </Swiper>


         </div>
          </div> 
               
              
         
            {/* <Heading heading="Exclusively available on select stores" />
            <div className="flex justify-center w-[75%]">
                {[...Array(2)].map((data) => {
                    return <div className="ml-6"><LatestCollection key={data} img={cl1} name={"mumbai"} /></div>
                })}
            </div> */}
            <Heading heading="Dream your next jewellery" subHeading="Some options to make your dream come true!" />
            <SuggestArtical />

        </div>

        {/* Dream your next jewellery */}
    </>
}