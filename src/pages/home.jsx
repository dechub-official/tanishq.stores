import Heading from "../component/heading";
import SearchBox from "../component/search";
import Prebook from "../component/Prebook";

import PopularCity from "../component/Home/popularCityBox";
import PopularCityDetail from "../assets/popularCities/data";
import Marquee from "../component/Home/marquee";
import LatestCollection from "../component/Home/latestCollection";
import cl3 from "../assets/images/latestCollection/elva.gif";
import cl1 from "../assets/images/latestCollection/kundanstories.png";
import cl2 from "../assets/images/latestCollection/image3.png";

import SuggestArtical from "../component/Home/suggestedArticles";
import { Helmet } from "react-helmet";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";

import { useLocation } from "react-router-dom";
import Assurance from "../component/assurance";
import { get } from "../services/apiHandler";
import OfferBanner from "../component/offerBanner";
import exchangeOfferImg from '../assets/images/Banner/exchange-offer.png'
import exchangeOfferMobImg from '../assets/images/Banner/exchange-offer-mob.png'

export default function Home() {
  const [noIndex, setNoindex] = useState(false);
  const [popularCityDetail, setPopularCityDetail] = useState([]);
  const loc = useLocation();
  useEffect(() => {
    if (loc.pathname == "/app-moduleeb61394") {
      setNoindex(true);
    }
    getStoresCount();
  }, []);

  const getStoresCount = async () => {
    const apiStores = await get("/storeCount");
    // console.log(apiStores);
    const storeCount = apiStores.data.result;
    // const pre=
    const obj = storeCount.reduce(
      (pre, cur) => {
      
        return { ...pre, [cur.storeCity]: cur.storeCount };
      },
      { [storeCount[0].storeCity]: storeCount[0].storeCity }
    );
   
    const updatedCity = PopularCityDetail.map((ele) => {
      const count = obj[ele.name];
      return {
        ...ele,
        store: count,
      };
    });
    console.log(updatedCity);

    setPopularCityDetail([...updatedCity]);
  };

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "Home Page",
    });
  }, []);
  return (
    <>
      <Helmet>
        {" "}
        <meta
          name="description"
          content="Tanishq store locator will guide you to the nearest stores. Check out all contact details, directions through Store Locator. Visit now."
        />
      </Helmet>
      {noIndex && (
        <Helmet>
          <meta name="robots" content="noindex" />
        </Helmet>
      )}
      {/* <div className="flex container mt-5 mx-auto home-top-banner" id="dashBanner">
      <img src={banner_img} className='w-full md:block hidden' alt="" />
      <img src={mobbanner_img} className='w-full block md:hidden' alt="" />


    </div> */}
      <div className="af-bl">
        <div className="flex flex-col items-center">
          <Heading
            heading={"Welcome to Tanishq!"}
            subHeading={
              "Shop from a wide range of exquisite designs for all occasions. All backed by the Trust of TATA"
            }
          />
        </div>
      </div>

      <SearchBox />
      <OfferBanner url={"https://www.tanishq.co.in/exchange"} image={exchangeOfferImg} mobImage={exchangeOfferMobImg} />
      <Heading heading={"Popular Cities"} />

      <div className="flex justify-center w-full">
        {popularCityDetail && (
          <div className="hidden md:grid lg:grid lg:grid-rows-1 xl:grid-rows-1 md:grid-rows-2 grid-flow-col gap-4 lg:gap-x-4 ">
            {popularCityDetail?.map((data, index) => {
              return (
                <div className="col-span-1">
                  <PopularCity
                    key={index}
                    img={data.img}
                    name={data.name}
                    totalStore={data.store}
                  />
                </div>
              );
            })}
          </div>
        )}
        <div className="flex md:hidden flex-wrap justify-center">
          {popularCityDetail.map((data, index) => {
            return (
              <div className="col-span-1">
                <PopularCity
                  key={index}
                  img={data.img}
                  totalStore={data.store}
                  name={data.name}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Marquee />
      {/* <Prebook /> */}
      <div className=" af-bl w-full flex flex-col items-center">
        <Heading heading="Explore our latest collections online even before you walk in!" />

   
        <div className="flex flex-col items-center  justify-around w-[80%] my-6">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                infinite: true,
              }}
              loop={true}
              loopFillGroupWithBlank={true}
              modules={[Autoplay]}
              breakpoints={{
                768: { slidesPerView: 3, autoplay: true },
                0: { slidesPerView: 2, slidesPerGroup: 1 },
              }}
              className="mySwiper"
            >
              {/* { img: cl3, link: 'https://www.tanishq.co.in/festival-of-diamond' }, */}
              {/* { img: cl1, link: '/store-locator/jewellery-stores/collections/celeste' } */}
              {[
                { img: cl3, link: "https://www.tanishq.co.in/shop/elan?lang=en_IN" },
                { img: cl1, link: "https://www.tanishq.co.in/gold" },
                { img: cl2, link: "https://www.tanishq.co.in/exchange" },
                { img: cl1, link: "https://www.tanishq.co.in/gold" },
              ].map((data, i) => {
                if (i == 3 && window.screen.width > 767) return;
                return (
                  <SwiperSlide>
                    {" "}
                    <LatestCollection
                      key={i}
                      img={data.img}
                      link={data.link}
                      name={data.name}
                    />{" "}
                  </SwiperSlide>
                );
              })}

              {/* <SwiperSlide > <TanishqService heading={"Buy New Jewellery"} subheading={"It can be any jewellery"} img={ring}/> </SwiperSlide>
        <SwiperSlide > <TanishqService heading={"Buy New Jewellery"} subheading={"It can be any jewellery"} img={bangle}/></SwiperSlide>
        <SwiperSlide >  <TanishqService heading={"Buy New Jewellery"} subheading={"It can be any jewellery"} img={chain}/></SwiperSlide>
         */}
            </Swiper>
          </div>

        <Assurance />
        <SuggestArtical />
      </div>

      {/* Dream your next jewellery */}
    </>
  );
}
