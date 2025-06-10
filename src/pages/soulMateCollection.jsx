
import { useSoulmateStores } from "../hooks/useStores";
import CollectionLayout from "../layouts/CollectionPageLayout";
import crousal1 from "./../assets/images/Banner/soulmate-diamond-desktop.jpg";
import mobcrousal1 from "./../assets/images/Banner/soulmate-diamond-mobile.jpg";

export default function SoulMateCollection() {
    const { data: soulmateStores = [] } = useSoulmateStores();
 return (
        <CollectionLayout
            desktopBanner={crousal1}
            mobileBanner={mobcrousal1}
            storeLink="https://www.tanishq.co.in/shop/soulmate-diamond-pair?lang=en_IN"
            title="Soulmate Collection Exclusively"
            stores={soulmateStores}
            
            gaPageTitle="Soulmate-Collection Page"
            appointmentEnabled={true}
        />
    );
}
