import Heading from "../component/heading";
import SearchBox from "../component/search";
import SubHome from "../component/subHome";
import Mumbai from "../assets/images/popularCities/Mumbai.png"
import PopularCity from "../component/Home/popularCityBox";
import Marquee from "../component/Home/marquee";
import LatestCollection from "../component/Home/latestCollection";
import cl1 from '../assets/images/latestCollection/image1.png'
import cl2 from '../assets/images/latestCollection/image2.png'
import cl3 from '../assets/images/latestCollection/image3.png'
import SuggestArtical from "../component/Home/suggestedArticles";
export default function Home() {
    return <>
    <div className="flex flex-col items-center">
    <SubHome />
    <Heading heading={"Welcome to Tanishq!"} subHeading={"400+ stores, 8L+ Designs, Backed by the trust of TATA  | India’s favourite jewellery store"}/>
    <SearchBox />
    {/*  */}
    <Heading heading={"Popular Cities"}/>
    <div className="flex justify-center w-full">
    <div className="flex justify-around w-[80%] flex-wrap ">
    {[...Array(10)].map((data)=>{
return <PopularCity key={data} img={Mumbai} name={"mumbai"}/>
    })}
    </div>
    </div>
    <Marquee/>
    <Heading heading="Explore our latest collections online even before you walk in!"/>
    <div className="flex justify-around w-[75%] my-4">
    {[cl1,cl2,cl3].map((data,i)=>{
return <LatestCollection key={i} img={data} name={"mumbai"}/>
    })}
    </div>
    <Heading heading="Exclusively available on select stores"/>
    <div className="flex justify-center w-[75%]">
    {[...Array(2)].map((data)=>{
return <div className="ml-6"><LatestCollection key={data} img={cl1} name={"mumbai"}/></div>
    })}
    </div>
    <Heading heading="Dream your next jewellery"subHeading="Some options to make your dream come true!"/>
    <SuggestArtical/>

    </div>
    {/* Dream your next jewellery */}
    </>
}