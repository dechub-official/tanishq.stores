import Heading from "../component/heading";
import SearchBox from "../component/search";
import Prebook from "../component/Prebook";
import { Link } from "react-router-dom";

import PopularCity from "../component/Home/popularCityBox";
import PopularCityDetail from "../assets/popularCities/data";
import Marquee from "../component/Home/marquee";
import LatestCollection from "../component/Home/latestCollection";
// import cl3 from "../assets/images/latestCollection/lordbloom.png";
// import cl1 from "../assets/images/latestCollection/kundanstories.png";
// import cl2 from "../assets/images/latestCollection/image3.png";
import hbanner from "../assets/images/Banner/home-banner.jpg";
import hbannerm from "../assets/images/Banner/home-banner-mobile.png";

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
import { useStoreCount } from "../hooks/useStores";
import OfferBanner from "../component/offerBanner";
import exchangeOfferImg from '../assets/images/Banner/exchange-offer.png'
import exchangeOfferMobImg from '../assets/images/Banner/exchange-offer-mob.png'

export default function Home() {
  const [noIndex, setNoindex] = useState(false);
  const [popularCityDetail, setPopularCityDetail] = useState([]);
  const loc = useLocation();

  // Use Tanstack Query hook
  const { data: storeCountData } = useStoreCount();

  useEffect(() => {
    if (loc.pathname == "/app-moduleeb61394") {
      setNoindex(true);
    }
  }, []);

  useEffect(() => {
    if (storeCountData?.result) {
      const storeCount = storeCountData.result;
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

      setPopularCityDetail([...updatedCity]);
    }
  }, [storeCountData]);

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
      <img src={banner_img} className='w-full md:!block hidden' alt="" />
      <img src={mobbanner_img} className='w-full block md:hidden' alt="" />


    </div> */}
      <div className="af-bl">
        <div className="flex flex-col items-center">
          <Heading
            heading={"Welcome to Tanishq!"}
          />
        </div>
      </div>

      <SearchBox />
      {/* <OfferBanner  image={exchangeOfferImg} mobImage={exchangeOfferMobImg} /> */}
      <Heading heading={"Popular Cities"} />

      <div className="flex justify-center w-full">
        {popularCityDetail && (
          <div className="hidden md:!grid lg:grid lg:grid-rows-1 xl:grid-rows-1 md:grid-rows-2 grid-flow-col gap-4 lg:gap-x-4 ">
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
      {/* <Marquee /> */}
      {/* <Prebook /> */}
      <div className=" af-bl mt-4 max-md:mt-7 w-full flex flex-col items-center">
        <Heading heading="Explore our latest collections online even before you walk in!" />


        <div className="flex flex-col items-center  justify-around w-[80%] max-md:w-full max-md:p-[15px] my-6 max-md:mt-[0] max-md:mb-6">
          <Link to="https://www.tanishq.co.in/shop/diamond?lang=en_IN" target="_blank">
          <img src={hbanner} alt="latest collection banner" className="max-md:hidden w-full h-auto rounded-[25px] max-md:rounded-[10px] shadow-lg"/>
          <img src={hbannerm} alt="latest collection banner" className="md:hidden w-full h-auto rounded-[10px] shadow-lg"/>
          </Link>
        </div>

        <Assurance />
        <SuggestArtical />
      </div>

      {/* Dream your next jewellery */}
    </>
  );
}
