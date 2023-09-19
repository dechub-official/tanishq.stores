import { Route, Routes  } from "react-router-dom";
import Home from "./pages/home";
import Detailed from "./pages/detail";
import CityPage from "./pages/city";

export default function Routing() {
    return <>
    <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Home/>} path="*"/>
        <Route element={<Detailed/>} path="/store-locator/jewellery-stores/:state/:city/:storename"/>
        <Route element={<CityPage/>} path="/store-locator/jewellery-stores/city/:id"/>
    </Routes>
    </>
}