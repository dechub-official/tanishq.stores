import { Swiper, SwiperSlide } from "swiper/react";
import FAQ from "../component/Faq";
import SuggestArtical from "../component/Home/suggestedArticles";
import TanishqService from "../component/tanishqService"
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import ReactGA from 'react-ga4'

import crousal1 from "./../assets/images/diamonds/diamond_banner.png"
import crousal2 from "./../assets/images/celeste/des2.jpg"
import crousal3 from "./../assets/images/celeste/des3.jpg"
import crousal4 from "./../assets/images/celeste/des4.jpg"
import mobcrousal1 from "./../assets/images/celeste/mob1.jpg"
import mobcrousal2 from "./../assets/images/celeste/mob2.jpg"
import mobcrousal3 from "./../assets/images/celeste/mob3.jpg"
import mobcrousal4 from "./../assets/images/celeste/mob4.jpg"

// import crousal2 from "./../assets/images/tanishqServices/Eng 2.jpg"
// import crousal3 from "./../assets/images/tanishqServices/Eng 3.jpg"
// import crousal4 from "./../assets/images/tanishqServices/Eng 4.jpg"
// import crousal5 from "./../assets/images/tanishqServices/Tel 1.jpg"


import kp1 from "./../assets/images/celeste/pr1.png"
import kp2 from "./../assets/images/celeste/pr2.png"
import kp3 from "./../assets/images/celeste/pr3.png"
import kp4 from "./../assets/images/celeste/pr4.png"
import kp5 from "./../assets/images/celeste/pr5.png"
import kp6 from "./../assets/images/celeste/pr6.png"
import kp7 from "./../assets/images/celeste/pr7.png"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../component/button";
import { useEnchantedCollectionStores } from "../hooks/useStores";
import Marquee from "../component/Home/marquee";
import Heading from "../component/heading";
import StorePlate from "../component/storePlate";
import FanSwiper from "../component/fanSwiper";
import DiamondStorePlate from "../component/diamondStorePlate";
import Assurance from "../component/assurance";

export default function DiamondCollection() {
    const nav = useNavigate();
    const [selectedCity, setSelectedCity] = useState('');
    
    // Use Tanstack Query hook
    const { data: enchantedStores = [] } = useEnchantedCollectionStores(selectedCity);

    const city = [{
        name: "Mumbai"
    }, {
        name: "Bangalore"
    }, {
        name: "Chennai"
    }, {
        name: "Delhi"
    }, {
        name: "Kolkata"
    }, {
        name: "Hyderabad"
    }, {
        name: "Pune"
    }];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Celeste-Collection Page" });
    }, []);

    return <div className="diamond-bg">
        <div className="md:flex hidden diamond-bg flex-col overflow-hidden w-full items-center justify-center">
            <div className=''>
                <Swiper
                    slidesPerView={'auto'}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation,]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <a href="https://www.tanishq.co.in/shop/enchanted-trails?lang=en_IN#home" target="_blank" className="min-w-full">
                            <img src={crousal1} className='w-full object-cover' alt="" srcset="" />
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        <div className="flex md:hidden flex-col overflow-hidden w-full items-center justify-center">
            <div className=''>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation,]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <a href="https://www.tanishq.co.in/Celeste" target="_blank">
                            <img src={mobcrousal1} className='w-full' alt="" srcset="" />
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        {/* <Marquee /> */}
        <h1 className="text-white fraunces text-center md:underline md:text-[35px] text-[25px] font-[400] my-5">
            <span className="md:text-[35px] text-[20px]">Find out </span> 
            <br className="md:hidden" /> 
            Your Favorite Outfit
        </h1>
        <FanSwiper />
        {/* <button className="pl-6 pr-2 translate-y-[-20%] bg-white fraunces mx-auto flex gap-x-2 items-center justify-center text-[18px] hover:translate-y-[-50%]  duration-200 text-[rgb(30,42,76)] rounded-full py-2">Know More <span className="md:inline hidden">About Enchanted Trails</span> <span className="min-w-[30px]  flex justify-center items-center min-h-[30px]  rounded-full text-white bg-black ">{">"}</span> </button> */}



        {/* <div className="md:block hidden">
            <Heading heading={<u className="text-[20px] break-keep">Celeste Collection Exclusively Available at {data.length} Stores</u>} />
        </div> */}
        <div>
            <h2 className="text-white fraunces text-center text-[20px] md:block hidden md:text-[25px] font-[400] my-5 underline">
                Enchanted Trails Collections Exclusively Available in Following Stores
            </h2>
        </div>
        <div>
            <h2 className="text-white fraunces text-center text-[20px] md:text-[25px] font-[400] my-5 block md:hidden">
                <span className="md:text-[25px] text-[18px]">The Collections Exclusively</span> 
                <br className="md:hidden" />  
                Available in Following Stores
            </h2>
        </div>

        <div className="flex md:justify-around justify-center flex-wrap gap-x-1 md:gap-x-2 md:gap-y-3 gap-y-5 px-2 mt-10 container md:max-w-[80%] md:mx-auto">
            {city.map((ele) => (
                <div key={ele.name} className="box border-2 px-4 py-1 fraunces gap-x-5 text-[16px] border-solid border-white rounded-lg flex justify-center items-center text-white">
                    {ele.name} 
                    <input 
                        className="custom-radio" 
                        onClick={() => setSelectedCity(ele.name)} 
                        name="store" 
                        type="radio" 
                    />
                </div>
            ))}
        </div>
        <div className="flex flex-wrap justify-around items-start w-full">
            <div className="my-4 md:w-[88%] flex flex-wrap justify-around items-center rounded-[17px] py-5 px-4 md:px-6">
                {enchantedStores.map((data, i) => (
                    <DiamondStorePlate key={i} data={data} />
                ))}
            </div>
        </div>
        {/* <Assurance/> */}
        {/* <FAQ data={faq} /> */}
        {/* <SuggestArtical /> */}
    </div>
}