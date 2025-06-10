import { Swiper, SwiperSlide } from "swiper/react";
import FAQ from "../component/Faq";
import SuggestArtical from "../component/Home/suggestedArticles";
import TanishqService from "../component/tanishqService"
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import ReactGA from 'react-ga4'

import crousal1 from "./../assets/images/elysian/lisa-pink-stone.png"

import mobcrousal1 from "./../assets/images/elysian/mob-lisa-pink-stone.png"

import { useEffect, useState } from "react";

import { get } from "../services/apiHandler";
import Marquee from "../component/Home/marquee";
import Heading from "../component/heading";

import StoreList from "../helper/getStoreList";
import BookAnAppointment from "../component/bookAnAppointment";
import CollectionFilter from "../component/Collection/collectionFilters";
import CollectionLayout from "../layouts/CollectionPageLayout";
export default function ElysianCollection() {


    const [data, setData] = useState([])
    const [selectedCities, setSelectedCities] = useState([])
    const loadData = async () => {

        try {

            const data = await get(`/getelysianAllStoresForCity?city=${selectedCities[0] ?? null} `)
            if (data?.data?.result?.length > 0) {
                setData(data?.data?.result);
            }

            //(data.data.result);

        }
        catch (error) {
            //(error);

        }



    }


    useEffect(() => {
        loadData()
        // window.scrollTo({ top: 0, behavior: 'smooth' });
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Celeste-Collection Page" });
    }, [selectedCities])


    return  <CollectionLayout
            desktopBanner={crousal1}
            mobileBanner={mobcrousal1}
            storeLink="https://www.tanishq.co.in/shop/elan?lang=en_IN"
            title="Elysian Collection Exclusively"
            stores={data}
            gaPageTitle="Elysian-Collection Page"
            appointmentEnabled={true}
        />
}