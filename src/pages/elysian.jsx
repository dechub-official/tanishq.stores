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

import CollectionLayout from "../layouts/CollectionPageLayout";
import { useRhythmStores } from "../hooks/useStores";
export default function ElysianCollection() {

    const [selectedCities, setSelectedCities] = useState([])
    const { data = [] } = useRhythmStores(selectedCities);




    useEffect(() => {

        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Elysian-Collection Page" });
    }, [selectedCities])


    return <CollectionLayout
        desktopBanner={crousal1}
        mobileBanner={mobcrousal1}
        storeLink="https://www.tanishq.co.in/shop/elan?lang=en_IN"
        title="Elysian Collection Exclusively"
        stores={data}
        selectedCities={selectedCities}
        setSelectedCities={setSelectedCities}
        collectionName="rhythm"
        gaPageTitle="Elysian-Collection Page"
        appointmentEnabled={true}
    />
}