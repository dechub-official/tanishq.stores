import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Detailed from "./pages/detail";
import CityPage from "./pages/city";
import Page_Not_Found from "./pages/404";
// import Collection from "./pages/collection";
import CelesteCollection from "./pages/celesteCollection";
import DiamondCollection from "./pages/diamondCollection";
import SoulMateCollection from "./pages/soulMateCollection";
import ElysianCollection from "./pages/elysian";
import Dev from "./pages/dev";
import RivaahCatalog from "./pages/rivaahCatalog";

export default function Routing({ setInApp }) {
    return <>
        <Routes >
            <Route exact element={<Home />} path="/" />
            <Route exact element={<Home />} path="/app-moduleeb61394" />
            {/* <Route exact element={<Collection/>} path="/store-locator/jewellery-stores/collections/kakatiya"/> */}
            <Route exact element={<CelesteCollection />} path="/store-locator/jewellery-stores/collections/celeste" />
            <Route exact element={<SoulMateCollection />} path="/store-locator/jewellery-stores/collections/soulmate" />
            <Route exact element={<ElysianCollection />} path="/store-locator/jewellery-stores/collections/elysian" />
            <Route exact element={<DiamondCollection />} path="/store-locator/jewellery-stores/collections/diamonds" />
            <Route element={<Page_Not_Found />} path="*" />
            <Route exact element={<Detailed />} path="/store-locator/jewellery-stores/:state/:city/:storename" />
            <Route exact element={<CityPage />} path="/store-locator/jewellery-stores/city/:id" />
            <Route exact element={<Dev />} path="/wedding-store" />
            <Route exact element={<RivaahCatalog />} path="/rivaah-catalog" />

        </Routes>
    </>
}