import { Route, Routes  } from "react-router-dom";
import Home from "./pages/home";
import Detailed from "./pages/detail";
import CityPage from "./pages/city";
import Page_Not_Found from "./pages/404";
import Collection from "./pages/collection";

export default function Routing() {
    return <>
    <Routes>
        <Route exact element={<Home/>} path="/"/>
        <Route exact element={<Collection/>} path="/store-locator/jewellery-stores/collections/kakatiya"/>
        <Route element={<Page_Not_Found/>} path="*"/>
        <Route element={<Detailed/>} path="/store-locator/jewellery-stores/:state/:city/:storename"/>
        <Route element={<CityPage/>} path="/store-locator/jewellery-stores/city/:id"/>
    </Routes>
    </>
}