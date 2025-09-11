import { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ReactGA from "react-ga4";

// Components
import BookAnAppointment from "../component/bookAnAppointment";
import Marquee from "../component/Home/marquee";
import Heading from "../component/heading";
import StoreList from "../helper/getStoreList";
import Assurance from "../component/assurance";
import SuggestArtical from "../component/Home/suggestedArticles";
import FAQ from "../component/Faq";
import CollectionFilter from "../component/Collection/collectionFilters";

// Skeleton
const SkeletonLoader = () => (
  <div className="flex flex-wrap justify-around w-full px-4 py-10 animate-pulse">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="w-72 h-40 bg-gray-200 rounded-md mb-6" />
    ))}
  </div>
);

// FAQ data (unchanged)
const faqData = [/* your faq data */];

export default function CollectionLayout({
  desktopBanner,
  mobileBanner,
  storeLink,
  title,
  stores = [],
  collectionName,
  selectedCities,
  setSelectedCities,
  gaPageTitle = "Soulmate Collection Page",
  appointmentEnabled = false,
}) {
  const [BookAnAppointmentModal, setBookAnAppointmentModal] = useState(true);
  const [individualStoreData, setIndividualStoreData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: gaPageTitle });
  }, []);

  useEffect(() => {
    if (stores.length) {
      setTimeout(() => setLoading(false), 500); // simulate slight delay
    }
  }, [stores]);

  const headingContent = useMemo(() => (
    <>
      <div className="md:!block hidden">
        <Heading heading={<p className="text-4xl fraunces">{title} Available at {stores.length} Stores</p>} />
      </div>
      <div className="block md:hidden">
        <Heading heading={<p className="text-4xl fraunces">{title} <br /><span className="text-[18px]">Available at {stores.length} Stores</span></p>} />
      </div>
    </>
  ), [title, stores.length]);

  const showAppointmentModal = appointmentEnabled && individualStoreData && BookAnAppointmentModal?.visible && BookAnAppointmentModal?.mode === "popup";

  return (
    <>
      {/* Desktop Banner */}
      <div className="md:flex hidden w-full justify-center">
        <Swiper
          slidesPerView="auto"
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <a href={storeLink} target="_blank" rel="noreferrer">
              <img src={desktopBanner} className="w-full" alt="Desktop Banner" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Mobile Banner */}
      <div className="flex md:hidden w-full justify-center">
        <Swiper
          slidesPerView="auto"
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <a href={storeLink} target="_blank" rel="noreferrer">
              <img src={mobileBanner} className="w-full" alt="Mobile Banner" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Appointment Modal */}
      {showAppointmentModal && (
        <div className="absolute top-0 w-full min-h-screen z-[90] bg-white/90">
          <BookAnAppointment
            cities={stores}
            activeStore={individualStoreData.activeStore}
            setIndividualStoreData={setIndividualStoreData}
            page="city"
            openingTime={individualStoreData.storeOpeningTime}
            isOpen={BookAnAppointmentModal}
            storeCode={individualStoreData.storeCode}
            storeName={individualStoreData.storeName}
            setisOpen={() => setBookAnAppointmentModal({ visible: false })}
            closingTime={individualStoreData.storeClosingTime}
          />
        </div>
      )}

      {/* <Marquee /> */}
      {headingContent}

      <div className="w-[80%] mx-auto">
        <CollectionFilter
          collectionName={collectionName}
          selectedCities={selectedCities}
          setSelectedCities={setSelectedCities}
        />
      </div>

      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className="flex flex-wrap justify-around w-full">
          <StoreList
            data={stores}
            BookAnAppointmentModal={BookAnAppointmentModal}
            individualStoreData={individualStoreData}
            setIndividualStoreData={setIndividualStoreData}
            setBookAnAppointmentModal={setBookAnAppointmentModal}
          />
        </div>
      )}

      <Assurance />
      <FAQ data={faqData} />
      <SuggestArtical />
    </>
  );
}
