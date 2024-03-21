import Heading from "../component/heading";
import SearchBox from "../component/search";

import PopularCity from "../component/Home/popularCityBox";
import PopularCityDetail from "../assets/popularCities/data";
import Marquee from "../component/Home/marquee";
import LatestCollection from "../component/Home/latestCollection";
import cl1 from '../assets/images/latestCollection/image1.png'
import cl2 from '../assets/images/latestCollection/image3.jpg'
import cl3 from '../assets/images/latestCollection/image3.png'
import SuggestArtical from "../component/Home/suggestedArticles";
import { Helmet } from "react-helmet";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import ReactGA from 'react-ga4'

import { useLocation, useNavigate } from "react-router-dom";
export default function Home() {
    const [noIndex,setNoindex]=useState(false)
    const loc=useLocation()
    useEffect(()=>{
        if(loc.pathname=="/app-moduleeb61394"){
            console.log("enter");
          setNoindex(true)
          }
    },[])
    

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home Page" });
    }, [])
    return <>
        <Helmet> <meta
            name="description"
            content="Tanishq store locator will guide you to the nearest stores. Check out all contact details, directions through Store Locator. Visit now."
        /></Helmet>
       {noIndex&& <Helmet>
        <meta name="robots" content="noindex"/> 
        </Helmet>}
        <div className="af-bl">
         
            <div className="flex flex-col items-center">

                <Heading heading={"Welcome to Tanishq!"} subHeading={"Shop from a wide range of exquisite designs for all occasions. All backed by the Trust of TATA"} />
            </div>
        </div>
        <SearchBox />
      

        <Heading heading={"Popular Cities"} />
      
        <div className="flex justify-center w-full">
           
            <div className="hidden md:grid lg:grid lg:grid-rows-1 xl:grid-rows-1 md:grid-rows-2 grid-flow-col gap-4 lg:gap-x-2 ">
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
                        slidesPerView={2}
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

                            768: { slidesPerView: 3, autoplay: true }, 0: { slidesPerView: 2, slidesPerGroup: 1 }
                        }}

                        className="mySwiper"
                    >
{/* { img: cl3, link: 'https://www.tanishq.co.in/festival-of-diamond' }, */}
{/* { img: cl1, link: '/store-locator/jewellery-stores/collections/celeste' } */}
                        {[{ img: cl3, link: 'https://www.tanishq.co.in/exchange' },{ img: cl2, link: 'https://www.tanishq.co.in/string-it' },{ img: cl1, link: '/store-locator/jewellery-stores/collections/celeste' },{ img: cl2, link: 'https://www.tanishq.co.in/string-it' } ].map((data, i) => {
                            if ((i == 3 && window.screen.width > 767)) return
                            return <SwiperSlide  >  <LatestCollection key={i} img={data.img} link={data.link} name={"mumbai"} /> </SwiperSlide>
                        })}

                        {/* <SwiperSlide > <TanishqService heading={"Buy New Jewellery"} subheading={"It can be any jewellery"} img={ring}/> </SwiperSlide>
        <SwiperSlide > <TanishqService heading={"Buy New Jewellery"} subheading={"It can be any jewellery"} img={bangle}/></SwiperSlide>
        <SwiperSlide >  <TanishqService heading={"Buy New Jewellery"} subheading={"It can be any jewellery"} img={chain}/></SwiperSlide>
         */}
                    </Swiper>


                </div>
            </div>



          
            <SuggestArtical />

        </div>

        {/* Dream your next jewellery */}
    </>
}