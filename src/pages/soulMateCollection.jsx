
import { useEffect, useState } from "react";
import { useSoulmateStores } from "../hooks/useStores";
import CollectionLayout from "../layouts/CollectionPageLayout";
import crousal1 from "./../assets/images/Banner/soulmate-diamond-desktop.jpg";
import mobcrousal1 from "./../assets/images/Banner/soulmate-diamond-mobile.jpg";
import ReactGA from 'react-ga4'
export default function SoulMateCollection() {
    const [selectedCities, setSelectedCities] = useState([])
    const { data: soulmateStores = [] } = useSoulmateStores(selectedCities);

    useEffect(() => {

        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Soulmate Collection Page" });
    }, [selectedCities])
    return (
        <CollectionLayout
            desktopBanner={crousal1}
            mobileBanner={mobcrousal1}
            storeLink="https://www.tanishq.co.in/shop/soulmate-diamond-pair?lang=en_IN"
            title="Soulmate Collection Exclusively"
            stores={soulmateStores}
            collectionName="soulmate"
            gaPageTitle="Soulmate-Collection Page"
            appointmentEnabled={true}
            selectedCities={selectedCities}
            setSelectedCities={setSelectedCities}
        />
    );
}
