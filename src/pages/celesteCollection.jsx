
import ReactGA from 'react-ga4'

import crousal1 from "./../assets/images/celeste/des1.jpg"

import mobcrousal1 from "./../assets/images/celeste/mob1.jpg"

import { useEffect, useState } from "react";


import CollectionLayout from "../layouts/CollectionPageLayout";
import { useCelesteStores } from "../hooks/useStores";
export default function CelesteCollection() {

    const [selectedCities, setSelectedCities] = useState([])
    const { data = [] } = useCelesteStores(selectedCities);




    useEffect(() => {

        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Elysian-Collection Page" });
    }, [selectedCities])


    return <CollectionLayout
        desktopBanner={crousal1}
        mobileBanner={mobcrousal1}
        storeLink="https://www.tanishq.co.in/shop/elan?lang=en_IN"
        title="Celeste Collection Exclusively"
        stores={data}
        selectedCities={selectedCities}
        setSelectedCities={setSelectedCities}
        collectionName="rhythm"
        gaPageTitle="Celeste Collection Page"
        appointmentEnabled={true}
    />
}