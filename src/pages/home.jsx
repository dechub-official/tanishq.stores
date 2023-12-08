import Heading from "../component/heading";
import SearchBox from "../component/search";

import PopularCity from "../component/Home/popularCityBox";
import PopularCityDetail from "../assets/popularCities/data";
import Marquee from "../component/Home/marquee";
import LatestCollection from "../component/Home/latestCollection";
import cl1 from '../assets/images/latestCollection/image1.png'
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
{/* <div className="flex w-full justify-center items-baseline"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M31.8111 21.5265C31.1635 24.8792 29.055 27.9063 26.1517 29.6948C23.2374 31.5096 19.7454 32.0746 16.3969 31.9923C13.0594 31.9062 9.54159 31.3113 6.61992 29.2458C5.1738 28.2281 3.9595 26.8137 3.17573 25.1822C2.42507 23.5808 2.01662 21.9007 2.04606 20.0448C1.5493 19.5845 1.09302 19.0532 0.743444 18.4283C0.254045 17.5902 -0.00720978 16.5911 0.000150681 15.6182C-0.00720978 13.6538 0.923754 11.9513 1.80688 10.5631C2.62377 9.21977 3.26404 7.75673 3.60993 6.21885C3.97422 4.70343 4.08829 3.03459 3.87855 1.57529L3.65041 0L4.93462 0.819452C6.22619 1.74367 7.23811 2.84002 8.08076 4.12719C8.90501 5.40689 9.46432 6.88863 9.59679 8.41528C9.72926 9.94193 9.46432 11.4761 8.86453 12.8493C8.25738 14.2188 7.36321 15.4237 6.24459 16.389C6.18203 16.4452 6.08637 16.4339 6.03117 16.3703C5.97966 16.3067 5.98334 16.2169 6.04221 16.1608L6.05325 16.1533C7.0578 15.173 7.85261 13.9419 8.33097 12.6285C8.80565 11.3152 8.95652 9.87832 8.75046 8.52005C8.5444 7.15804 7.96668 5.87835 7.15715 4.78201C6.66039 4.10848 6.06061 3.48735 5.42034 2.94105C5.4277 3.27781 5.4277 3.61083 5.41666 3.95133C5.38354 4.82691 5.26947 5.69874 5.0818 6.55187C4.73223 8.26561 4.0515 9.90452 3.17941 11.405C2.74889 12.1496 2.37355 12.7707 2.10493 13.4929C1.83632 14.1963 1.67441 14.9148 1.68544 15.607C1.67073 16.737 2.20061 17.7548 3.02854 18.578C3.14997 18.4919 3.26772 18.4133 3.38547 18.3385C3.80864 18.0878 4.22812 17.9082 4.64392 17.7473C5.47921 17.4367 6.3145 17.2309 7.14611 17.0551C8.80933 16.7108 10.4726 16.5312 12.1358 16.4227C15.4585 16.2094 18.7776 16.2468 22.093 16.52C23.7526 16.6659 25.4121 16.868 27.0753 17.216C27.9106 17.3956 28.7422 17.6089 29.5922 17.9381C30.0154 18.1065 30.4496 18.3011 30.8912 18.6117C31.1119 18.7688 31.3438 18.9596 31.5609 19.2365C31.7743 19.5097 31.9877 19.925 31.9988 20.404C32.0135 20.7969 31.8957 21.1411 31.7522 21.4105C31.7964 21.433 31.8221 21.4741 31.8148 21.5228L31.8111 21.5265ZM4.57033 19.7492C5.55281 20.3291 6.66039 20.7707 7.78638 21.1224C9.29505 21.5864 10.8589 21.9082 12.4449 22.1289C15.6168 22.5705 18.8549 22.6528 22.0562 22.447C23.6532 22.3347 25.2502 22.1514 26.7846 21.8221C27.5463 21.6575 28.3007 21.4479 28.963 21.171C29.2905 21.0363 29.5959 20.868 29.7799 20.7145C29.8388 20.6584 29.9308 20.5649 29.9676 20.4975C29.9234 20.4489 29.8461 20.3778 29.7431 20.3029C29.5076 20.142 29.1911 19.9849 28.8563 19.8539C28.1792 19.5845 27.4212 19.3825 26.6558 19.2141C25.1177 18.8811 23.5207 18.6753 21.9164 18.5256C18.7114 18.2412 15.4622 18.1926 12.2498 18.3797C10.6455 18.4844 9.04484 18.6416 7.48833 18.9147C6.71559 19.0569 5.95021 19.2328 5.24003 19.476C5.00453 19.5583 4.78375 19.6519 4.57033 19.7492ZM31.5278 21.751C31.3806 21.9456 31.226 22.114 31.0384 22.2786C30.5821 22.6416 30.1442 22.8511 29.7173 23.0307C28.86 23.3787 28.0247 23.592 27.1857 23.7678C25.5115 24.1083 23.8446 24.2842 22.174 24.3852C18.8402 24.5648 15.5027 24.4489 12.1873 23.9549C10.5314 23.708 8.88293 23.3562 7.26018 22.8399C6.07532 22.4545 4.89782 21.983 3.78656 21.3207C3.81231 21.6462 3.84911 21.9755 3.90431 22.2898C4.04414 23.0532 4.26492 23.8053 4.57033 24.5162C5.18852 25.9381 6.16731 27.1953 7.41105 28.1457C9.90588 30.0802 13.2066 30.8323 16.4337 31.0344C19.6644 31.2327 23.0166 30.8174 25.861 29.186C28.6134 27.6331 30.7256 24.8829 31.5278 21.7473V21.751Z" fill="#832729"/>
</svg> */}
        <Heading heading={"Popular Cities"} />
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M0.188913 21.5265C0.836539 24.8792 2.945 27.9063 5.84828 29.6948C8.76259 31.5096 12.2546 32.0746 15.6031 31.9923C18.9406 31.9062 22.4584 31.3113 25.3801 29.2458C26.8262 28.2281 28.0405 26.8137 28.8243 25.1822C29.5749 23.5808 29.9834 21.9007 29.9539 20.0448C30.4507 19.5845 30.907 19.0532 31.2566 18.4283C31.746 17.5902 32.0072 16.5911 31.9998 15.6182C32.0072 13.6538 31.0762 11.9513 30.1931 10.5631C29.3762 9.21977 28.736 7.75673 28.3901 6.21885C28.0258 4.70343 27.9117 3.03459 28.1215 1.57529L28.3496 0L27.0654 0.819452C25.7738 1.74367 24.7619 2.84002 23.9192 4.12719C23.095 5.40689 22.5357 6.88863 22.4032 8.41528C22.2707 9.94193 22.5357 11.4761 23.1355 12.8493C23.7426 14.2188 24.6368 15.4237 25.7554 16.389C25.818 16.4452 25.9136 16.4339 25.9688 16.3703C26.0203 16.3067 26.0167 16.2169 25.9578 16.1608L25.9468 16.1533C24.9422 15.173 24.1474 13.9419 23.669 12.6285C23.1943 11.3152 23.0435 9.87832 23.2495 8.52005C23.4556 7.15804 24.0333 5.87835 24.8428 4.78201C25.3396 4.10848 25.9394 3.48735 26.5797 2.94105C26.5723 3.27781 26.5723 3.61083 26.5833 3.95133C26.6165 4.82691 26.7305 5.69874 26.9182 6.55187C27.2678 8.26561 27.9485 9.90452 28.8206 11.405C29.2511 12.1496 29.6264 12.7707 29.8951 13.4929C30.1637 14.1963 30.3256 14.9148 30.3146 15.607C30.3293 16.737 29.7994 17.7548 28.9715 18.578C28.85 18.4919 28.7323 18.4133 28.6145 18.3385C28.1914 18.0878 27.7719 17.9082 27.3561 17.7473C26.5208 17.4367 25.6855 17.2309 24.8539 17.0551C23.1907 16.7108 21.5274 16.5312 19.8642 16.4227C16.5415 16.2094 13.2224 16.2468 9.90698 16.52C8.24743 16.6659 6.5879 16.868 4.92467 17.216C4.08939 17.3956 3.25778 17.6089 2.40777 17.9381C1.9846 18.1065 1.5504 18.3011 1.10884 18.6117C0.888055 18.7688 0.656232 18.9596 0.43913 19.2365C0.225708 19.5097 0.0122846 19.925 0.00124551 20.404C-0.0134733 20.7969 0.104276 21.1411 0.247784 21.4105C0.203628 21.433 0.177871 21.4741 0.18523 21.5228L0.188913 21.5265ZM27.4297 19.7492C26.4472 20.3291 25.3396 20.7707 24.2136 21.1224C22.7049 21.5864 21.1411 21.9082 19.5551 22.1289C16.3832 22.5705 13.1451 22.6528 9.94378 22.447C8.34679 22.3347 6.7498 22.1514 5.21537 21.8221C4.45367 21.6575 3.69934 21.4479 3.03699 21.171C2.7095 21.0363 2.40408 20.868 2.2201 20.7145C2.16122 20.6584 2.06923 20.5649 2.03244 20.4975C2.07659 20.4489 2.15387 20.3778 2.2569 20.3029C2.4924 20.142 2.80885 19.9849 3.14371 19.8539C3.82077 19.5845 4.57878 19.3825 5.34416 19.2141C6.88227 18.8811 8.47926 18.6753 10.0836 18.5256C13.2886 18.2412 16.5378 18.1926 19.7502 18.3797C21.3545 18.4844 22.9552 18.6416 24.5117 18.9147C25.2844 19.0569 26.0498 19.2328 26.76 19.476C26.9955 19.5583 27.2162 19.6519 27.4297 19.7492ZM0.472246 21.751C0.619433 21.9456 0.773981 22.114 0.961645 22.2786C1.41793 22.6416 1.85581 22.8511 2.28266 23.0307C3.14003 23.3787 3.97531 23.592 4.81428 23.7678C6.48854 24.1083 8.15545 24.2842 9.82603 24.3852C13.1598 24.5648 16.4973 24.4489 19.8127 23.9549C21.4686 23.708 23.1171 23.3562 24.7398 22.8399C25.9247 22.4545 27.1022 21.983 28.2134 21.3207C28.1877 21.6462 28.1509 21.9755 28.0957 22.2898C27.9559 23.0532 27.7351 23.8053 27.4297 24.5162C26.8115 25.9381 25.8327 27.1953 24.5889 28.1457C22.0941 30.0802 18.7934 30.8323 15.5663 31.0344C12.3356 31.2327 8.98338 30.8174 6.13897 29.186C3.38657 27.6331 1.27442 24.8829 0.472246 21.7473V21.751Z" fill="#832729"/>
</svg>
        </div> */}
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

                        {[{ img: cl1, link: '/store-locator/jewellery-stores/collections/celeste' }, { img: cl2, link: 'https://www.tanishq.co.in/string-it' }, { img: cl3, link: '/store-locator/jewellery-stores/collections/kakatiya' }, { img: cl2, link: 'https://www.tanishq.co.in/string-it' }].map((data, i) => {
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