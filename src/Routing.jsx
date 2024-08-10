import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Detailed from "./pages/detail";
import CityPage from "./pages/city";
import Page_Not_Found from "./pages/404";
// import Collection from "./pages/collection";
import CelesteCollection from "./pages/celesteCollection";
import DiamondCollection from "./pages/diamondCollection";

export default function Routing({ setInApp }) {
    return <>
        <Routes >
            <Route exact element={<Home />} path="/" />
            <Route element={<Home /> } path="/app-moduleeb61394" />
            {/* <Route exact element={<Collection/>} path="/store-locator/jewellery-stores/collections/kakatiya"/> */}
            <Route exact element={<CelesteCollection />} path="/store-locator/jewellery-stores/collections/celeste" />
            <Route exact element={<DiamondCollection />} path="/store-locator/jewellery-stores/collections/diamonds" />
            <Route element={<Page_Not_Found />} path="*" />
            <Route element={<Detailed />} path="/store-locator/jewellery-stores/:state/:city/:storename" />
            <Route element={<CityPage />} path="/store-locator/jewellery-stores/city/:id" />
        </Routes>
    </>
}