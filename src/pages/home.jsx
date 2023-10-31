import Heading from "../component/heading";
import SearchBox from "../component/search";

import PopularCity from "../component/Home/popularCityBox";
import PopularCityDetail from "../assets/popularCities/data";
import Marquee from "../component/Home/marquee";
import LatestCollection from "../component/Home/latestCollection";
import cl1 from '../assets/images/latestCollection/image1.jpg'
import cl2 from '../assets/images/latestCollection/image3.jpg'
import cl3 from '../assets/images/latestCollection/image2.jpg'
import SuggestArtical from "../component/Home/suggestedArticles";
import { Helmet } from "react-helmet";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { useEffect } from "react";
import ReactGA from 'react-ga4'

import { useNavigate } from "react-router-dom";
export default function Home() {
    const nav = useNavigate()
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Home Page" });
    }, [])
    return <>
        <Helmet> <meta
            name="description"
            content="Tanishq store locator will guide you to the nearest stores. Check out all contact details, directions through Store Locator. Visit now."
        /></Helmet>
        <div className="af-bl">
            {/* <SubHome/> */}
            <div className="flex flex-col items-center">

                <Heading heading={"Welcome to Tanishq!"} subHeading={"Shop from a wide range of exquisite designs for all occasions. All backed by the Trust of TATA"} />
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

                        {[{ img: cl1, link: 'https://www.tanishq.co.in/dharohar' }, { img: cl2, link: 'https://www.tanishq.co.in/string-it' }, { img: cl3, link: '/store-locator/jewellery-stores/collections/kakatiya' }, { img: cl2, link: 'https://www.tanishq.co.in/string-it' }].map((data, i) => {
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



            {/* <Heading heading="Exclusively available on select stores" />
            <div className="flex justify-center w-[75%]">
                {[...Array(2)].map((data) => {
                    return <div className="ml-6"><LatestCollection key={data} img={cl1} name={"mumbai"} /></div>
                })}
            </div> */}
            {/* <Heading heading="Dream your next jewellery" subHeading="Some options to make your dream come true!" /> */}
            {/* <div className=" af-bl flex  flex-col  overflow-hidden  pb-2  w-[78%] items-center justify-center ">
                <div className=''>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        speed={2000}
                        autoplay={{
                            delay: 2500,
                            speed:300,
                            disableOnInteraction: false,
                        }}
navigation={true}
                        modules={[ Autoplay,Navigation]}
                        className="mySwiper"
                    >
                       
                        <SwiperSlide>
                            <div className="relative">
                           <img src={crousal1} className='w-full   ' alt="" srcset="" />
                           <div className="absolute bottom-2 flex justify-center w-full">
                          <Button name={"Know More"} onclick={()=>{nav("/store-locator/jewellery-stores/collections/kakatiya")}} />
                          </div>
                          </div>
                            </SwiperSlide>
                        <SwiperSlide> <div className="relative">
                           <img src={crousal2} className='w-full   ' alt="" srcset="" />
                           <div className="absolute bottom-2 flex justify-center w-full">
                          <Button name={"Know More"} onclick={()=>{nav("/store-locator/jewellery-stores/collections/kakatiya")}} />
                          </div>
                          </div></SwiperSlide>
                        <SwiperSlide> <div className="relative">
                           <img src={crousal3} className='w-full   ' alt="" srcset="" />
                           <div className="absolute bottom-2 flex justify-center w-full">
                          <Button name={"Know More"} onclick={()=>{nav("/store-locator/jewellery-stores/collections/kakatiya")}} />
                          </div>
                          </div></SwiperSlide>
                        <SwiperSlide> <div className="relative">
                           <img src={crousal4} className='w-full   ' alt="" srcset="" />
                           <div className="absolute bottom-2 flex justify-center w-full">
                          <Button name={"Know More"} onclick={()=>{nav("/store-locator/jewellery-stores/collections/kakatiya")}} />
                          </div>
                          </div></SwiperSlide>
                        <SwiperSlide> <div className="relative">
                           <img src={crousal5} className='w-full   ' alt="" srcset="" />
                           <div className="absolute bottom-2 flex justify-center w-full">
                          <Button name={"Know More"} onclick={()=>{nav("/store-locator/jewellery-stores/collections/kakatiya")}} />
                          </div>
                          </div></SwiperSlide>
                       
                        <SwiperSlide> <div className="relative">
                           <img src={crousal6} className='w-full   ' alt="" srcset="" />
                           <div className="absolute bottom-2 flex justify-center w-full">
                          <Button name={"Know More"} onclick={()=>{nav("/store-locator/jewellery-stores/collections/kakatiya")}} />
                          </div>
                          </div></SwiperSlide>

                    </Swiper>
                </div>
            </div> */}
            <SuggestArtical />

        </div>

        {/* Dream your next jewellery */}
    </>
}