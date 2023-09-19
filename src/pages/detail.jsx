import Marquee from "../component/Home/marquee"
import call from '../assets/images/detailed/buttons/call.png'
import map from '../assets/images/detailed/buttons/map.png'
import calender from '../assets/images/detailed/buttons/calender.png'
import Heading from "../component/heading"
import SearchBox from "../component/search"
import SubHome from "../component/subHome"
import Banner from "../assets/images/store banner.png"
import MobileBanner from "../assets/images/mobile-banner.png"
import Button from "../component/button"
import filledStar from '../assets/images/star-filled.png'
import unfilledStar from '../assets/images/star-unfilled.png'

import { useNavigate, useParams } from "react-router-dom"
import relocate from '../assets/images/relocate.png'
import FAQ from "../component/Faq"
import Maps from "../component/maps"
import { useEffect, useState } from "react"
import { get } from "../services/apiHandler"

import { Helmet } from "react-helmet"
import SuggestArtical from "../component/Home/suggestedArticles"
import { googleget } from "../services/GoogleApiHandler"
import ReactGA from 'react-ga'
export default function Detailed() {
    const { storename } = useParams()
    const id=storename.split('-')[storename.split('-').length-1]
    const [callbtn, setcallbtn] = useState("Call")
    const nav = useNavigate()
    const [storeDetail, setStoreDetail] = useState({})
    const [NearByStore, setNearByStore] = useState([])
    const [newId, setNewId] = useState()
    const [GoogleStore, setGoogleStore] = useState([])
    const [FaqData, setFaq] = useState([])
  
    const getNewLocation=async(name)=>{
        try {
            [...document.getElementsByClassName("af-bl")].forEach(element => {
                element.style.filter = "blur(5px)";
            });
            const data = await get(`/search?value=${name.replace("Tanishq Jewellery - ","")}`)
            // const data=await axios.get(`http://10.54.4.78:8129/stores/tanishq/search?value=${e.target.value}`)
//(data.data);
            nav(`/detail/${data.data.result[0].storeCode}`)

        }
        catch (error) {
            //(error);

        }
    }
    const loadData = async (id) => {
        try {

            const data = await get(`/details?storeCode=${id}&city=`)
            // const data=await axios.get(`http://10.54.4.78:8129/stores/tanishq/search?value=${e.target.value}`)

            setStoreDetail(data.data.result[0]);
            setFaq([{ question: `Which gold jewellery shop is best in ${data.data.result[0].storeName}?`,
             answer: `One of the best jewellery stores specialising in gold and diamond jewellery is the 
             Tanishq in ${data.data.result[0].storeName}. Head over to your nearest store or the one in 
             ${data.data.result[0].storeCity} and browse through their timeless jewellery pieces. Don't 
             forget to get your purity certificate and avail the festive offers on your purchase.` },
             {
                question:`Can I book an appointment at Tanishq jewellery store  ${data.data.result[0].storeName}?`,
                answer:`Looking for a personalized shopping experience? Book an appointment now for an exclusive experience at the Tanishq jewellery store in  ${data.data.result[0].storeCity} and browse through our massive festive collection. Book your appointments now here - https://www.tanishq.co.in/book-an-appointment`
             },
             {
                question:`What are the best-selling jewellery products at Tanishq ${data.data.result[0].storeName}?`,
                answer:`Tanishq has a range of best-selling products, each piece carefully handcrafted to perfection. Our topic picks are festive jewellery, bridal jewellery, daily wear jewellery, and office wear jewellery. Head to the Tanishq stores for a personalized shopping experience and avail festive offers on your purchase.`
             },
             {question:`What is the USP of Tanishq jewellery store in ${data.data.result[0].storeName}?`,
              answer:`Tanishq, a TATA product always stands apart from its competitors due to various reasons. Some of these include the mark of trust and the loyalty that the brand has consistently built over the years. Another important aspect is the purity of our products and our authenticity certification for all our products. Lastly, not only are our products unique, but each product has been carefully crafted to perfection by our skilled craftsmen.`
            }
            
            ])
            const placeId = await googleget("/nearbysearch/json?keyword=Tanishq Jewellery&location=" + data.data.result[0].storeLatitude + "," + data.data.result[0].storeLongitude + "&rankby=distance")
            //(placeId.data.results);
            // const config={ ,}

         
               
                
             const storeCode  =placeId.data.results.map(async(pos)=>{
    
                    try {
                       
                        const data = await get(`/search?value=${pos.name.replace("Tanishq Jewellery - ","")}`)
                        // const data=await axios.get(`http://10.54.4.78:8129/stores/tanishq/search?value=${e.target.value}`)
        
                        return data.data.result;
        
                    }
                    catch (error) {
                        //(error);
        
                    }
    
                   
                })
    
              
    
                Promise.all([...storeCode]).then((values) => {
                    //(values);
                   const tempStoreData= values.map(async(code)=>{
                        if(code&&code.length>0)
                      {  code=code[0]
    
                        try {
                            // [...document.getElementsByClassName("af-bl")].forEach(element => {
                            //     element.style.filter = "blur(5px)";
                            // });
                            const data = await  get(`/details?storeCode=${code.storeCode}&city=`)
                            // const data=await axios.get(`http://10.54.4.78:8129/stores/tanishq/search?value=${e.target.value}`)
            
                            return data.data.result;
            
                        }
                        catch (error) {
                            //(error);
            
                        }}
                    })
                    Promise.all([...tempStoreData]).then((values) => {
                        //(values);
                        let actualData=[]
                    values.forEach((stdata)=>{
                            if(stdata&&stdata.length>0){
                                stdata=stdata[0]
                               actualData.push(stdata)
                            }
                        })
                      
                      
                    setNearByStore([...actualData]);
                    //("dfr",actualData);
            
                    })
                });
                [...document.getElementsByClassName("af-bl")].forEach(element => {
                    element.style.filter = "blur(0px)";
                });
                //(storeCode);
              
            



            
            const store = placeId.data.results.filter((data) => {
                return data.name.toLowerCase().indexOf("tanishq") != -1
            })
            // setNearByStore([...store])

            const GMB = await googleget(`/details/json?placeid=${placeId.data.results[0].place_id}&key=AIzaSyDhXC0pZWKq8zdR9D5AXT1nC1gFIkCIx3w`)

         
            //("GMB",GMB.data.result);
            setGoogleStore({ ...GMB.data.result })
        }
        catch (error) {
            //(error);

        }

    }
    useEffect(()=>{
        ReactGA.pageview(window.location.pathname)
    },[])
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        loadData(id)


    }, [id])
   
    const copyText = () => {
        //("cho");
        navigator.clipboard.writeText(storeDetail.storePhoneNoOne)
        setcallbtn("Copied")
        setTimeout(() => {
            //("enter");
            setcallbtn("call")
        }, 5000)
        clearTimeout(copyText)
    }
    const getDirection = () => {
        const newWindow = window.open(storeDetail.storeLocationLink, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;

    }
    const BookAppointment = () => {
        const newWindow = window.open("https://www.tanishq.co.in/book-an-appointment", '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;

    }
    const reviewsandratings = [{ name: "Reliability", width: "80%", rating: 4 }, { name: "Positive Solution", width: "70%", rating: 3 }, { name: "Payout Rating", width: "90%", rating: 4.5 }, { name: "Customer satisfaction", width: "60%", rating: 2.6 }]
    return <>
{storeDetail.storeName&&<Helmet>
    <title>Jewellery Shop in {storeDetail.storeName.split("-")[1]?storeDetail.storeName.split("-")[1]:storeDetail.storeName} | Tanishq Jewellery Store in {storeDetail.storeName?.split("-")[1]+","+storeDetail.storeName?.split("-")[0]}</title>

    <meta name="description" content={`Tanishq ${storeDetail.storeName.split("-")[1]} store is one of the well known jewellery store for all gold and diamond jewelleries. Visit our store for the latest jewellery collections.`}>
        </meta>
</Helmet>}
        <div >
            <div className="flex flex-col items-center mb-8 af-bl">
                

                {/* <Heading heading={"Welcome to Tanishq!"} subHeading={"400+ stores, 8L+ Designs, Backed by the trust of TATA  | India’s favourite jewellery store"}/> */}

            </div>

            <SearchBox />
            {/*  */}
            <Marquee />
            <section className="af-bl">
                <div className="flex justify-center af-bl">
                    <div className="w-[90%]  flex  my-6 relative">
                        <img src={Banner} className="md:block hidden" alt="" />
                        <img src={MobileBanner} className="md:hidden block" alt="" />
                        <div className="md:w-[50%] top-[29%] md:top-[60%] md:left-[3%] md:transform-none translate-x-[20%]  absolute flex justify-center">
                            <p className=" text-[18px]   text-[rgba(119,7,10,0.70)] italic  font-serif  text-center font-[200] max-w-[250px]">Welcome to {storeDetail.storeName}</p>
                        </div>
                    </div>
                </div>
                <Heading heading={<>Shop from <span className="text-[#832729]">{storeDetail.storeName}</span></>}></Heading>
                <div className="flex flex-col items-center">
                    <div className="flex justify-around md:w-[40%] w-full mb-4">
                        <Button name={callbtn} icon={call} onclick={copyText} />
                        <Button name="Get Directions" onclick={getDirection} icon={map} />
                        <Button name="Book an Appointment" icon={calender} onclick={BookAppointment} />
                    </div>
                    <div className="flex md:w-[40%] justify-center items-center">
                        <p className=" font-[400] md:text-[18px] text-[12px]">Working Hours {storeDetail.storeOpeningTime} -  {storeDetail.storeClosingTime}</p>
                        <div className="rating flex ml-4">
                            {[...Array(5)].map((_, ind) => {

                                return Math.round(GoogleStore.rating&& GoogleStore.rating) >= ind + 1 ? <img className="w-[15px] h-[15px] mr-1" src={filledStar} /> : <img className="mr-1 w-[15px] h-[15px]" src={unfilledStar} />
                            })}
                        </div>

                    </div>
                </div>
                <div className="flex w-[100%] flex-wrap justify-center mt-8">
                    <div className="w-full flex flex-col items-center ">
                        <div className="flex flex-wrap w-full justify-center md:justify-around">
                            <div className="box md:w-[40%] w-[90%]">
                                <div className="w-full md:border-2 rounded-[17px] md:px-10 px-4 py-5">
                                    <h1 className="text-[#832729] text-center text-[22px]   border-b-2  ">{storeDetail.storeName}</h1>
                                    {storeDetail.storeAddress && <p className="font-[500] text-[17px] md:text-[17px] my-2">{storeDetail.storeAddress}</p>}
                                    {storeDetail.storePhoneNoOne && <p className="font-[500] text-[17px] md:text-[17px] my-2">Phone: {storeDetail.storePhoneNoOne}</p>}
                                    {storeDetail.storeClosingTime && <p className="font-[500] text-[17px] md:text-[17px] my-2">Open Until {storeDetail.storeClosingTime}</p>}
                                </div>
                                <div className="mt-6 w-full">
                                    <div className=" w-full md:border-2 rounded-[17px] md:px-8 px-2 md:py-5">
                                        <div className="flex md:flex-nowrap flex-wrap justify-between">
                                            <div className="md:w-[60%] ">
                                                <h1 className="text-[#832729] md:mt-2 font-[700] underline text-[19px] md:text-[18px]">Business Hours</h1>
                                                <div className=" md:block flex justify-around">
                                                    <div className="text-left md:text-[17px] text-[17px] text-[#343434]">
                                                        {GoogleStore && GoogleStore?.opening_hours?.weekday_text.map((data) => {
                                                            return <p>{data}</p>
                                                        })}
                                                    </div>
                                                    {/* <p>Monday</p> <p>Tuesday</p><p>Wednesday</p> <p>Thursday</p>  <p>Friday</p> <p>Saturday</p>  <p>Sunday</p> */}
                                                    {/* </div>
                                                    <div className="text-left md:text-[17px] text-[17px] text-[#343434]">

                                                        <p>:11.00am to 8.30pm</p> <p>:11.00am to 8.30pm</p><p>:11.00am to 8.30pm</p> <p>:11.00am to 8.30pm</p>  <p>:11.00am to 8.30pm</p> <p>:11.00am to 8.30pm</p>  <p>:11.00am to 8.30pm</p>
                                                    </div> */}
                                                </div>
                                                <h1 className="text-[#832729]  mt-5 font-[700] md:mt-4 underline text-[19px] md:text-[18px]">Parking Options</h1>

                                                <div className="text-left md:mt-0 mt-2 md:text-[17px] text-[17px] text-[#343434]">
                                                    <p>Valet Parking</p>
                                                </div>
                                            </div>
                                            {/*      */}
                                            <div className="md:w-[40%] w-[60%]  md:ml-6 my-3 md:my-0">
                                                <h1 className="text-[#832729] font-[700] underline md:text-[18px] text-[19px]">Language Spoken</h1>
                                                <div className="flex justify-around md:mt-0 mt-2">
                                                    <div className="text-left md:mt-0  md:text-[17px] text-[17px] text-[#343434]">
                                                        <p className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                                                            <circle cx="6.5" cy="6.5" r="6.5" fill="#D9D9D9" />
                                                            <path d="M4 5.59375L7.28125 8.875L14.5 1" stroke="#832729" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>&nbsp;English</p> <p className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                                                            <circle cx="6.5" cy="6.5" r="6.5" fill="#D9D9D9" />
                                                            <path d="M4 5.59375L7.28125 8.875L14.5 1" stroke="#832729" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>&nbsp;Hindi</p><p className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                                                            <circle cx="6.5" cy="6.5" r="6.5" fill="#D9D9D9" />
                                                            <path d="M4 5.59375L7.28125 8.875L14.5 1" stroke="#832729" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>&nbsp;Kannada</p>
                                                    </div>
                                                    <div className="text-left md:mr-0 ml-4 md:text-[17px] text-[17px]  text-[#343434]">

                                                        <p className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                                                            <circle cx="6.5" cy="6.5" r="6.5" fill="#D9D9D9" />
                                                            <path d="M4 5.59375L7.28125 8.875L14.5 1" stroke="#832729" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>&nbsp;Tamil</p>
                                                        <p className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                                                            <circle cx="6.5" cy="6.5" r="6.5" fill="#D9D9D9" />
                                                            <path d="M4 5.59375L7.28125 8.875L14.5 1" stroke="#832729" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>&nbsp;Telugu</p>
                                                        <p className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                                                            <circle cx="6.5" cy="6.5" r="6.5" fill="#D9D9D9" />
                                                            <path d="M4 5.59375L7.28125 8.875L14.5 1" stroke="#832729" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>&nbsp;Malayalam</p>
                                                    </div>
                                                </div>
                                                <h1 className="text-[#832729] font-[700] mt-4 underline md:text-[18px] text-[19px]">Payment Options</h1>
                                                <div className="flex justify-between items-center md:mt-0 mt-2 md:w-[80%]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 35 26" fill="none">
                                                        <path d="M14.9799 15.7105C14.9666 15.6971 14.9495 15.6904 14.9287 15.6904H14.5479C14.5226 15.5672 14.4751 15.4603 14.4054 15.3697H14.9243C14.9451 15.3697 14.9621 15.363 14.9755 15.3497C14.9888 15.3364 14.9955 15.3193 14.9955 15.2985V15.0713C14.9955 15.0505 14.9888 15.0334 14.9755 15.02C14.9621 15.0067 14.9451 15 14.9242 15H13.0713C13.0505 15 13.0334 15.0067 13.02 15.02C13.0067 15.0334 13 15.0505 13 15.0713V15.3675C13 15.3868 13.0071 15.4035 13.0212 15.4176C13.0353 15.4317 13.052 15.4387 13.0713 15.4387H13.3942C13.7075 15.4387 13.9064 15.5226 13.9911 15.6904H13.0713C13.0505 15.6904 13.0334 15.6971 13.02 15.7104C13.0067 15.7238 13 15.7408 13 15.7616V15.9888C13 16.0096 13.0067 16.0267 13.02 16.04C13.0334 16.0534 13.0505 16.0601 13.0713 16.0601H14.0223C13.9896 16.1818 13.9135 16.2746 13.794 16.3385C13.6744 16.4023 13.5167 16.4343 13.3207 16.4343H13.0713C13.052 16.4343 13.0353 16.4413 13.0212 16.4554C13.007 16.4695 13 16.4862 13 16.5055V16.7884C13 16.8077 13.0067 16.8241 13.02 16.8374C13.3051 17.1403 13.6748 17.5642 14.1292 18.1091C14.1425 18.1269 14.1611 18.1358 14.1848 18.1358H14.6191C14.6503 18.1358 14.6719 18.1225 14.6837 18.0957C14.6986 18.069 14.6957 18.0438 14.6748 18.02C14.2413 17.4884 13.9005 17.0905 13.6526 16.8262C13.905 16.7966 14.1099 16.7149 14.2673 16.5813C14.4246 16.4477 14.5204 16.2739 14.5546 16.0601H14.9287C14.9495 16.0601 14.9666 16.0534 14.9799 16.0401C14.9933 16.0267 15 16.0097 15 15.9889V15.7617C15 15.7409 14.9933 15.7238 14.9799 15.7105Z" fill="#66686C" />
                                                        <path d="M27.6493 25.194H0.719155C0.528423 25.194 0.345503 25.1183 0.210636 24.9834C0.0757679 24.8485 0 24.6656 0 24.4749V9.06052C0 8.86979 0.0757679 8.68687 0.210636 8.55201C0.345503 8.41714 0.528423 8.34137 0.719155 8.34137H27.6493C27.8401 8.34137 28.023 8.41714 28.1579 8.55201C28.2927 8.68687 28.3685 8.86979 28.3685 9.06052V24.4749C28.3685 24.6656 28.2927 24.8485 28.1579 24.9834C28.023 25.1183 27.8401 25.194 27.6493 25.194ZM1.43831 23.7557H26.9302V9.77968H1.43831V23.7557Z" fill="#66686C" />
                                                        <path d="M23.013 23.015H5.35991C5.16918 23.015 4.98626 22.9393 4.85139 22.8044C4.71652 22.6695 4.64076 22.4866 4.64076 22.2959C4.64019 21.9131 4.48784 21.5462 4.21713 21.2757C3.94641 21.0051 3.57944 20.8529 3.19669 20.8525C3.00596 20.8525 2.82304 20.7768 2.68817 20.6419C2.55331 20.507 2.47754 20.3241 2.47754 20.1334V13.4028C2.47754 13.2121 2.55331 13.0292 2.68817 12.8943C2.82304 12.7594 3.00596 12.6836 3.19669 12.6836C3.57951 12.6831 3.94648 12.5308 4.21717 12.2601C4.48786 11.9894 4.64019 11.6224 4.64076 11.2396C4.64076 11.0489 4.71652 10.8659 4.85139 10.7311C4.98626 10.5962 5.16918 10.5204 5.35991 10.5204H23.013C23.2037 10.5204 23.3867 10.5962 23.5215 10.7311C23.6564 10.8659 23.7322 11.0489 23.7322 11.2396C23.7325 11.6215 23.884 11.9877 24.1535 12.2582C24.423 12.5288 24.7886 12.6817 25.1705 12.6836C25.3612 12.6836 25.5441 12.7594 25.679 12.8943C25.8139 13.0292 25.8896 13.2121 25.8896 13.4028V20.1334C25.8896 20.3241 25.8139 20.507 25.679 20.6419C25.5441 20.7768 25.3612 20.8525 25.1705 20.8525C24.7878 20.8529 24.4209 21.0051 24.1503 21.2757C23.8797 21.5463 23.7275 21.9132 23.7271 22.2959C23.7271 22.4857 23.6521 22.6679 23.5183 22.8026C23.3845 22.9373 23.2029 23.0137 23.013 23.015ZM5.99133 21.5767H22.3881C22.5167 21.0788 22.7756 20.6241 23.1382 20.2594C23.5009 19.8948 23.9541 19.6333 24.4513 19.502V14.0306C23.9528 13.901 23.4979 13.6406 23.1337 13.2764C22.7695 12.9121 22.5091 12.4573 22.3794 11.9587H5.98773C5.85823 12.4573 5.59789 12.9123 5.23364 13.2765C4.86938 13.6408 4.41444 13.9011 3.91585 14.0306V19.502C4.41472 19.6318 4.86983 19.8927 5.23409 20.2574C5.59836 20.6222 5.85854 21.0777 5.98773 21.5767H5.99133Z" fill="#66686C" />
                                                        <path d="M14.1847 20.7317C13.4006 20.7318 12.6341 20.4995 11.9821 20.0639C11.3301 19.6284 10.8219 19.0092 10.5218 18.2848C10.2217 17.5604 10.1432 16.7633 10.2962 15.9943C10.4491 15.2253 10.8268 14.5189 11.3813 13.9645C11.9357 13.4101 12.6422 13.0326 13.4112 12.8798C14.1803 12.7269 14.9774 12.8056 15.7017 13.1058C16.4261 13.4061 17.0451 13.9143 17.4805 14.5664C17.916 15.2185 18.1482 15.9851 18.1479 16.7692C18.1462 17.8197 17.7281 18.8267 16.9852 19.5695C16.2423 20.3122 15.2352 20.7302 14.1847 20.7317ZM14.1847 14.2428C13.6851 14.2426 13.1968 14.3906 12.7814 14.668C12.3659 14.9454 12.0421 15.3398 11.8508 15.8012C11.6595 16.2627 11.6094 16.7705 11.7067 17.2605C11.804 17.7504 12.0444 18.2005 12.3975 18.5539C12.7506 18.9072 13.2006 19.1479 13.6905 19.2454C14.1804 19.343 14.6883 19.2932 15.1498 19.1021C15.6114 18.9111 16.0059 18.5875 16.2836 18.1722C16.5612 17.757 16.7095 17.2687 16.7096 16.7692C16.7092 16.0995 16.4431 15.4573 15.9697 14.9837C15.4964 14.51 14.8543 14.2435 14.1847 14.2428Z" fill="#66686C" />
                                                        <path d="M29.3551 21.0754C29.1706 21.0755 28.9931 21.0046 28.8594 20.8774C28.7257 20.7503 28.646 20.5766 28.6367 20.3923C28.6275 20.208 28.6894 20.0272 28.8098 19.8873C28.9301 19.7474 29.0996 19.6592 29.2832 19.6407L30.1131 19.5537L28.6532 5.6546L5.50144 8.08535C5.31166 8.10528 5.12173 8.04901 4.97345 7.92891C4.82516 7.80881 4.73066 7.63472 4.71073 7.44494C4.69079 7.25516 4.74707 7.06524 4.86717 6.91695C4.98727 6.76867 5.16135 6.67416 5.35113 6.65423L29.2156 4.14869C29.3095 4.13873 29.4046 4.14738 29.4952 4.17416C29.5858 4.20094 29.6703 4.24532 29.7438 4.30476C29.8172 4.3642 29.8783 4.43754 29.9234 4.52059C29.9685 4.60363 29.9968 4.69475 30.0066 4.78874L31.6168 20.119C31.6268 20.2129 31.6181 20.308 31.5914 20.3986C31.5646 20.4892 31.5202 20.5737 31.4608 20.6472C31.4013 20.7206 31.328 20.7817 31.2449 20.8268C31.1619 20.8719 31.0708 20.9002 30.9768 20.91L29.4313 21.0726C29.4054 21.074 29.3803 21.0754 29.3551 21.0754Z" fill="#66686C" />
                                                        <path d="M32.6258 16.8037C32.4469 16.8035 32.2745 16.7367 32.1422 16.6163C32.01 16.4959 31.9273 16.3305 31.9104 16.1524C31.8936 15.9743 31.9436 15.7964 32.0509 15.6532C32.1582 15.5101 32.3149 15.4121 32.4906 15.3783L32.9587 15.2884L30.3252 1.56261L7.78615 5.88617C7.59856 5.92212 7.40438 5.88209 7.24631 5.77487C7.08825 5.66765 6.97925 5.50203 6.9433 5.31444C6.90734 5.12686 6.94738 4.93267 7.0546 4.77461C7.16182 4.61654 7.32744 4.50755 7.51502 4.47159L30.761 0.0128335C30.9482 -0.0230078 31.1419 0.0169235 31.2997 0.123855C31.4575 0.230787 31.5663 0.395973 31.6024 0.583123L34.5063 15.7221C34.5422 15.9093 34.5021 16.1032 34.3951 16.261C34.288 16.4188 34.1226 16.5276 33.9353 16.5635L32.7617 16.7886C32.7169 16.7978 32.6714 16.8029 32.6258 16.8037Z" fill="#66686C" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 31 25" fill="none">
                                                        <path d="M30.4491 2.86276C30.0474 2.38795 29.4849 2.09794 28.8651 2.04617L7.03461 0.223351C6.41473 0.171584 5.81205 0.364304 5.33719 0.76591C4.86426 1.16594 4.57466 1.72557 4.52126 2.34236L4.08205 6.46292H2.32832C1.04449 6.46292 0 7.50741 0 8.79125V22.4567C0 23.7406 1.04449 24.7851 2.32832 24.7851H24.2349C25.5188 24.7851 26.5633 23.7406 26.5633 22.4567V20.24L27.3406 20.3049C27.4062 20.3103 27.4714 20.313 27.5361 20.313C28.7329 20.313 29.7533 19.3922 29.8546 18.1783L30.9918 4.56025C31.0435 3.94043 30.8507 3.33763 30.4491 2.86276ZM2.32832 7.67386H24.2349C24.851 7.67386 25.3523 8.17512 25.3523 8.79125V10.0364H1.21093V8.79125C1.21093 8.17512 1.7122 7.67386 2.32832 7.67386ZM1.21093 11.2474H25.3523V13.7594H1.21093V11.2474ZM24.2349 23.5741H2.32832C1.7122 23.5741 1.21093 23.0729 1.21093 22.4567V14.9703H25.3523V22.4567C25.3523 23.0729 24.851 23.5741 24.2349 23.5741ZM29.785 4.45944L28.6479 18.0775C28.5966 18.6915 28.0553 19.1496 27.4414 19.0981L26.5633 19.0248V8.79125C26.5633 7.50741 25.5188 6.46292 24.2349 6.46292H5.29989L5.72608 2.46442C5.72656 2.45982 5.72698 2.45528 5.72735 2.45062C5.77863 1.83662 6.31968 1.37864 6.93386 1.43011L28.7644 3.25292C29.0619 3.27775 29.3319 3.41694 29.5246 3.64484C29.7173 3.87274 29.8098 4.16197 29.785 4.45944Z" fill="#66686C" />
                                                        <path d="M22.8184 16.7705H16.9912C16.6568 16.7705 16.3857 17.0416 16.3857 17.376V21.1777C16.3857 21.5121 16.6568 21.7831 16.9912 21.7831H22.8184C23.1528 21.7831 23.4238 21.5121 23.4238 21.1777V17.376C23.4238 17.0416 23.1528 16.7705 22.8184 16.7705ZM22.2129 20.5722H17.5967V17.9814H22.2129V20.5722Z" fill="#66686C" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="15" viewBox="0 0 53 15" fill="none">
                                                        <path d="M40.1887 14.1194H37.3777L41.2872 0H44.0984L40.1887 14.1194Z" fill="#66686C" />
                                                        <path d="M38.7294 0.446357C38.5345 0.177687 38.2339 0.0421124 37.8255 0.0421124H22.3678L21.6021 2.80753H24.4148V2.80593H35.6644L34.846 5.76115H23.5961L23.5971 5.75503H20.7856L18.4521 14.1791H21.2651L22.831 8.52497H35.4768C35.8717 8.52497 36.2434 8.39027 36.593 8.12087C36.9418 7.85118 37.1714 7.51866 37.2815 7.12156L38.8473 1.46622C38.9616 1.05586 38.9221 0.715318 38.7294 0.446357Z" fill="#66686C" />
                                                        <path d="M16.8147 13.238C16.6594 13.7971 16.1504 14.1838 15.57 14.1838H1.06636C0.671151 14.1838 0.377407 14.0491 0.18425 13.78C-0.0087604 13.5106 -0.0501612 13.1774 0.0601932 12.7804L3.59911 0.0412731H6.41279L3.25187 11.4193H14.5069L17.6678 0.0412731H20.4809L16.8147 13.238Z" fill="#66686C" />
                                                        <path d="M48.9539 0.0264311L52.5129 7.10442L45.0312 14.1805L48.9539 0.0264311Z" fill="#66686C" />
                                                        <path d="M46.4586 0.0264006L50.015 7.10439L42.5303 14.1805L46.4586 0.0264006Z" fill="#66686C" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="md:w-[40%] md:h-full h-[300px]  md:my-0 my-5 w-[90%]">

                                {/* {storeDetail.storeLatitude&&!isNaN(parseFloat(storeDetail.storeLatitude)) && <Maps center={[{ lat: Number(storeDetail.storeLatitude), lng: Number(storeDetail.storeLongitude) }]} lang={storeDetail.storeLongitude} />} */}
                                {storeDetail.storeLatitude&&!isNaN(storeDetail.storeLatitude) && <Maps center={[{ lat: Number(storeDetail.storeLatitude), lng: Number(storeDetail.storeLongitude) }]} lang={storeDetail.storeLongitude} />}
                            </div>
                        </div>
                        <div className="flex w-full flex-wrap justify-center">
                            {/* <div className="mt-6 md:w-[30%] w-[100%] md:block flex flex-wrap justify-center">
                                <div className=" md:w-[80%] w-[90%] border-2 rounded-[17px] px-8 py-5">
                                    <div className="flex md:justify-between">
                                        <div className="w-full ">
                                            <h1 className="text-[#832729] font-[700] underline text-[18px]">Reviews and Ratings</h1>
                                            <div className="flex justify-between items-start  my-2">
                                                <h1 className="text-[#832729] text-[30px] font-[700]">4.5</h1>
                                                <div className="rating">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="22" viewBox="0 0 120 22" fill="none">
                                                        <path d="M6.97466 13.2626L4.30985 21.4636L11.2845 16.3945L18.2554 21.4636L15.5943 13.2626L22.5653 8.19726H13.9493L11.2845 0L8.61969 8.19726H0L6.97466 13.2626Z" fill="#832729" />
                                                        <path d="M38.0811 8.19726L35.4162 0L32.7514 8.19726H24.1299L31.1064 13.2626L28.4416 21.4636L35.4162 16.3945L42.3909 21.4636L39.7261 13.2626L46.7007 8.19726H38.0811Z" fill="#832729" />
                                                        <path d="M62.214 8.19726L59.5492 0L56.8844 8.19726H48.2628L55.2375 13.2626L52.5727 21.4636L59.5492 16.3945L66.5238 21.4636L63.859 13.2626L70.8337 8.19726H62.214Z" fill="#832729" />
                                                        <path d="M86.3438 8.19726L83.679 0L81.0142 8.19726H72.3945L79.3692 13.2626L76.7044 21.4636L83.679 16.3945L90.6555 21.4636L87.9907 13.2626L94.9654 8.19726H86.3438Z" fill="#832729" />
                                                        <path d="M110.476 8.19726L107.811 0L105.146 8.19726H96.5303L103.501 13.2626L100.836 21.4636L107.811 16.3945L114.786 21.4636L112.121 13.2626L119.097 8.19726H110.476Z" fill="#CACBCC" />
                                                    </svg>
                                                    Based on 565 ratings</div>
                                            </div>
                                            {reviewsandratings.map((data, i) => {
                                                return <div key={i} className="my-4">
                                                    <div className="flex items-center justify-between my-2">
                                                        <p class="text-[#414042] text-sm">
                                                            {data.name}
                                                        </p>
                                                        <p class="text-[#414042] text-sm">
                                                            {data.rating}
                                                        </p>
                                                    </div>
                                                    <div className="w-full h-2 bg-blue-200 rounded-full">
                                                        <div className={`w-[${data.width}] h-full text-center text-xs text-white bg-[#832729] rounded-full`}>
                                                        </div>
                                                    </div>
                                                </div>
                                            })}
                                            <div className="flex justify-between items-center my-5">
                                                <p className="text-[#832729] text-[18px] font-[600] underline">See all Reviews</p>
                                                <img src={nextBtn} className="w-[30px] cursor-pointer" alt="" onClick={getDirection} />
                                            </div>
                                        </div>
                                      

                                    </div>

                                </div>
                               
                            </div> */}

                            <div className="mt-6  w-[90%]">
                                <div className="flex justify-around flex-wrap w-full">
                                {GoogleStore.reviews && GoogleStore.reviews?.slice(0, 4).map((data, i) => {
                                    return <div className="mb-4 md:w-[48%] border-2 rounded-[17px] px-8 py-5">
                                        {i == 0 && <p className="text-[#832729] text-[18px] font-[700]">Total Reviews <span className="text-[#66686C]">{GoogleStore.reviews.length}</span></p>}
                                        <div className="flex justify-between items-baseline">
                                            <div>
                                                <p className="text-[#414042] font-[600] text-[19px] mt-4">{data.author_name}</p>
                                                <div className="flex">
                                                    {[...Array(5)].map((_, ind) => {

                                                        return Number(data.rating) >= ind + 1 ? <img className="w-[15px] h-[15px] mr-1" src={filledStar} /> : <img className="mr-1 w-[15px] h-[15px]" src={unfilledStar} />
                                                    })}
                                                </div>
                                            </div>
                                            <p className="text-[#414042] font-[600] text-[15px] md:text-[19px] mt-4">{data.relative_time_description
                                            }</p>
                                        </div>
                                        <div className="content">

                                            <p className="text-[#414042] text-justify font-[600] text-[13px] mt-4">{data.text}</p>
                                        </div>
                                    </div>
                                })}
                                </div>


                                <div className="flex justify-center items-center text-[#66686C] cursor-pointer" > <span onClick={getDirection}>See all Reviews {">>>"}</span></div>

                                {/* <div className="md:ml-6 md:block hidden">
                                {storeDetail.storeLatitude&& <Maps maxh={500} center={{lat:Number(storeDetail.storeLatitude),lng:Number(storeDetail.storeLongitude)}} lang={storeDetail.storeLongitude}/>}
                                </div> */}

                            </div>
                            {NearByStore.length>1&&<div className="my-4 md:w-[80%] w-[90%] border-2 rounded-[17px] md:px-8 px-5 py-5 max-h-[400px] overflow-y-scroll">
                                <h1 className="text-[#832729] font-[700] underline text-[18px]  ">Other Tanishq Stores Nearby  </h1>
                                <div className=" grid md:grid-cols-3 grid-cols-1 gap-4">
                                    {NearByStore.slice(1, NearByStore.length + 1).map((data) => {
                                        return <div key={data} onClick={()=>nav(`/store-locator/jewellery-stores/${data.storeState.toLowerCase().replace(" ","-")}/${data.storeCity.toLowerCase().replace(" ","-")}/${data.storeName.toLowerCase().split("- ")[1]?data.storeName.toLowerCase().split("- ")[1].replace(" ","-").replace(",","-"):data.storeName.toLowerCase().replace(" ","-").replace(",","-")}-${data.storeCode}`)} className=" col-auto  w-fit cursor-pointer md:px-6 px-2 md:m-4 h-fit py-4 my-2 mx-auto rounded-[7px] bg-[#832729]  flex justify-between items-start">
                                            <img src={relocate} alt="" className="md:w-[30px] w-[20px] mr-2" />
                                            <p className="text-[#FFF] font-[500] text-[15px] max-w-[250px] min-w-[250px] md:text-[16px] leading-4">{data.storeName} <br /><span className="text-[13px] max-w-[20px] overflow-clip">{data.storeAddress} </span></p>
                                        </div>
                                    })}
                                </div>
                            </div>}
                        </div>

                    </div>

                </div>
                <FAQ data={FaqData} />
                <SuggestArtical />
            </section>
        </div>
    </>
}