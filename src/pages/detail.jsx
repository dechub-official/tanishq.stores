import Marquee from "../component/Home/marquee"
import call from '../assets/images/detailed/buttons/call.png'
import map from '../assets/images/detailed/buttons/map.png'
import calender from '../assets/images/detailed/buttons/calender.png'
import Heading from "../component/heading"
import SearchBox from "../component/search"


import Button from "../component/button"
import filledStar from '../assets/images/starFilled.png'
import unfilledStar from '../assets/images/starUnfilled.png'
import cash from '../assets/images/detailed/paymentOptions/cash.png'
import cheque from '../assets/images/detailed/paymentOptions/cheque.png'
import credit from '../assets/images/detailed/paymentOptions/credit.png'
import debit from '../assets/images/detailed/paymentOptions/debit.png'
import gold from '../assets/images/detailed/paymentOptions/gold.png'
import netBanking from '../assets/images/detailed/paymentOptions/netBanking.png'
import upi from '../assets/images/detailed/paymentOptions/upi.png'
import airpay from '../assets/images/detailed/paymentOptions/airpay.png'

import { useNavigate, useParams } from "react-router-dom"
import relocate from '../assets/images/relocate.png'
import FAQ from "../component/Faq"
import Maps from "../component/maps"
import { useEffect, useState } from "react"
import { get } from "../services/apiHandler"

import { Helmet } from "react-helmet"
import SuggestArtical from "../component/Home/suggestedArticles"
import { googleget } from "../services/GoogleApiHandler"
import ReactGA from 'react-ga4'
import Banner from "../component/Home/Banner"
export default function Detailed() {
    const { storename } = useParams()
    const id=storename.split('-')[storename.split('-').length-1]
    const [callbtn, setcallbtn] = useState("Call")
    const nav = useNavigate()
    const [storeDetail, setStoreDetail] = useState({})
    const [NearByStore, setNearByStore] = useState([])
    const [Clicks, setClicks] = useState({Bookan:0,getDir:0})
    const [GoogleStore, setGoogleStore] = useState([])
   const [position,setPosition]=useState([])
    const [FaqData, setFaq] = useState([])
    const [payments,setpayments]=useState([])

    const loadData = async (id) => {
        try {
            setPosition([])
            const data = await get(`/details?storeCode=${id}&city=`)
            // const data=await axios.get(`http://10.54.4.78:8129/stores/tanishq/search?value=${e.target.value}`)
            if(!data.data.result)nav("/pagenotfound")
            setStoreDetail(data.data.result[0]);
        let unText=[]
        let pay=data.data.result[0].payment?.map((data)=>{
           
           if(data.toLowerCase()=="cheque") {
            console.log(data);
            return <img className="max-w-[30px] m-2 " src={cheque} alt="" /> 
           } 
           else if(data.toLowerCase()=="airpay"){
                return <img className="max-w-[30px] m-2 " src={airpay} alt="" /> 
           } 
           else if(data.toLowerCase()=="old gold exchange"){
              return <img className="max-w-[30px] m-2 " src={gold} alt="" />
           } 
           else if(data.toLowerCase()=="net banking"){
            return <img className="max-w-[30px] m-2 " src={netBanking} alt="" /> 
           } 
         else if(data.toLowerCase()=="credit card"){
            return <img className="max-w-[30px] m-2 " src={credit} alt="" />
         }
         else if(data.toLowerCase()=="debit card"){
            return <img className="max-w-[30px] m-2 " src={debit} alt="" />
         }
         else if(data.toLowerCase()=="cash"){
            return <img className="max-w-[30px] m-2 " src={cash} alt="" />
         }
         else if(data.toLowerCase()=="upi"){
    
         }
         else unText.push(<p>{data}</p>)
        })
        if(pay==undefined)pay=[]
        pay.push(<img src={upi} className="max-w-[35px] m-2 mr-0 " alt="" /> )
        setpayments([...pay,...unText])

           
            setPosition([{lat:data.data.result[0].storeLatitude,lng:data.data.result[0].storeLongitude}])
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
            // const placeId = await googleget("/nearbysearch/json?keyword=Tanishq Jewellery%26location=" + data.data.result[0].storeLatitude + "," + data.data.result[0].storeLongitude + "%26rankby=distance")
            //(placeId.data.results);
            // const config={ ,}

         
               
                
            //  const storeCode  =placeId.data.results.map(async(pos)=>{
    
            //         try {
                       
            //             const data = await get(`/search?value=${pos.name.replace("Tanishq Jewellery - ","")}`)
            //             // const data=await axios.get(`http://10.54.4.78:8129/stores/tanishq/search?value=${e.target.value}`)
        
            //             return data.data.result;
        
            //         }
            //         catch (error) {
            //             //(error);
        
            //         }
    
                   
            //     })
    
              
    
                // Promise.all([...storeCode]).then((values) => {
                //     //(values);
                //    const tempStoreData= values.map(async(code)=>{
                //         if(code&&code.length>0)
                //       {  code=code[0]
    
                //         try {
                //             // [...document.getElementsByClassName("af-bl")].forEach(element => {
                //             //     element.style.filter = "blur(5px)";
                //             // });
                //             const data = await  get(`/details?storeCode=${code.storeCode}&city=`)
                //             // const data=await axios.get(`http://10.54.4.78:8129/stores/tanishq/search?value=${e.target.value}`)
            
                //             return data.data.result;
            
                //         }
                //         catch (error) {
                //             //(error);
            
                //         }}
                //     })
                //     Promise.all([...tempStoreData]).then((values) => {
                //         //(values);
                //         let actualData=[]
                //     values.forEach((stdata)=>{
                //             if(stdata&&stdata.length>0){
                //                 stdata=stdata[0]
                //                actualData.push(stdata)
                //             }
                //         })
                      
                      
                //     setNearByStore([...actualData]);
                //     //("dfr",actualData);
            
                //     })
                // });
                // [...document.getElementsByClassName("af-bl")].forEach(element => {
                //     element.style.filter = "blur(0px)";
                // });
                //(storeCode);
              
            



            
           
            // setNearByStore([...store])

            // const GMB = await googleget(`/details/json?placeid=${placeId.data.results[0].place_id}`)

         
            //("GMB",GMB.data.result);
            // setGoogleStore({ ...GMB.data.result })
        }
        catch (error) {
            //(error);
            console.log(error);

        }

    }
    useEffect(()=>{
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Deep Store Page" });
    },[])
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
        loadData(id)


    }, [id])
   
    const copyText = () => {
        //("cho");
        navigator.clipboard?.writeText(storeDetail?.storePhoneNoOne)
        setcallbtn("Copied")
        setTimeout(() => {
            //("enter");
            setcallbtn("call")
        }, 5000)
        clearTimeout(copyText)
    }
    const getDirection = () => {
        ReactGA.event({ category:storeDetail.storeLocationLink ,
        value:Clicks.getDir+1,
        action:"Get Directions", });
        setClicks({...Clicks,getDir:Clicks.getDir+1})
        const newWindow = window.open(storeDetail.storeLocationLink, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;

    }
    const BookAppointment = () => {
        ReactGA.event({
            category: "deep-store-page Book An Appointment",
            value:Clicks.Bookan+1,
            action: "Book An Appointment", });
            setClicks({...Clicks,Bookan:Clicks.Bookan+1})
        const newWindow = window.open("https://www.tanishq.co.in/book-an-appointment", '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;

    }
    const reviewsandratings = [{ name: "Reliability", width: "80%", rating: 4 }, { name: "Positive Solution", width: "70%", rating: 3 }, { name: "Payout Rating", width: "90%", rating: 4.5 }, { name: "Customer satisfaction", width: "60%", rating: 2.6 }]
    return <>
{storeDetail.storeName&&<Helmet>
  

        <title>Jewellery Shop in {storeDetail.storeName.split("-")[1]?storeDetail.storeName.split("-")[1]:storeDetail.storeName} | Tanishq Jewellery Store in {storeDetail.storeName?.split("-")[1]?storeDetail.storeName?.split("-")[1]:storeDetail.storeState+","+storeDetail.storeName?.split("-")[0]}</title>

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
                <Banner name={storeDetail.storeName}/>
                <Heading heading={<>Shop from <span className="text-[#832729]">{storeDetail.storeName}</span></>}></Heading>
                <div className="flex flex-col  items-center">
                    <div className="flex justify-around md:w-[40%] w-full mb-4">
                       <a href={"tel:"+storeDetail?.storePhoneNoOne}><Button name={callbtn} style={"text-[12px]"} iconstyle={"mr-1 w-[18px]"} icon={call} onclick={copyText} /></a> 
                        <Button name="Get Directions" style={"text-[12px]"} iconstyle={"mr-1 w-[18px]"} onclick={getDirection} icon={map} />
                        <Button name="Book an Appointment" style={"text-[12px]"} iconstyle={"mr-1 w-[18px]"} icon={calender} onclick={BookAppointment} />
                    </div>
                    <div className="flex md:w-[40%] justify-center items-center">
                        <p className=" font-[400] md:text-[18px] text-[12px]">Working Hours {storeDetail.storeOpeningTime} -  {storeDetail.storeClosingTime}</p>
                        {/* <div className="rating flex ml-4">
                            {[...Array(5)].map((_, ind) => {

                                return Math.round(GoogleStore.rating&& GoogleStore.rating) >= ind + 1 ? <img  className="w-[15px] h-[15px] mr-1" src={filledStar} /> : <img className="mr-1 w-[15px] h-[15px]" src={unfilledStar} />
                            })}
                        </div> */}

                    </div>
                </div>
                <div className="flex w-[100%] flex-wrap justify-center mt-8">
                    <div className="w-full flex flex-col items-center ">
                        <div className="flex flex-wrap w-full md:w-[90%] justify-center md:justify-around">
                            <div className="box md:w-[40%] w-[90%]">
                                <div className="w-full md:border-2 rounded-[17px] md:px-10 px-4 py-2 md:py-5">
                                    <h1 className="text-[#832729] text-center text-[22px]   border-b-2  ">{storeDetail.storeName}</h1>
                                    {storeDetail.storeAddress && <p className="font-[500] text-[17px] md:text-[17px] my-2">{storeDetail.storeAddress}</p>}
                                    {storeDetail.storePhoneNoOne && <p className="font-[500] text-[17px] md:text-[17px] my-2">Phone: {storeDetail.storePhoneNoOne}</p>}
                                    {storeDetail.storeClosingTime && <p className="font-[500] text-[17px] md:text-[17px] my-2">Open Until {storeDetail.storeClosingTime}</p>}
                                </div>
                                <div className="md:mt-9 w-full">
                                    <div className=" w-full md:border-2 rounded-[17px] md:px-8 px-2 md:py-5">
                                        <div className="flex md:flex-nowrap flex-wrap justify-between">
                                            <div className="md:w-[60%] ">
                                               { GoogleStore && GoogleStore?.opening_hours&&<h1 className="text-[#832729] md:mt-2 font-[700] underline text-[19px] md:text-[18px]">Business Hours</h1>}
                                                <div className=" md:block flex justify-around">
                                                    <div className="text-left md:text-[17px] text-[17px] text-[#343434]">
                                                        {GoogleStore && GoogleStore?.opening_hours?.weekday_text.map((data) => {
                                                            return <p>{data}</p>
                                                        })}
                                                    </div>
                                             
                                                </div>
                                                <h1 className="text-[#832729]  mt-5 font-[700] md:mt-4 underline text-[19px] md:text-[18px]">Parking Options</h1>

                                                <div className="text-left md:mt-0 mt-2 md:text-[17px] text-[17px] text-[#343434]">
                                                   {storeDetail&&storeDetail.parking?.map((data)=>{
                                                    return <p>{data}</p>
                                                   })}
                                                </div>
                                            </div>
                                            {/*      */}
                                            <div className="md:w-[40%] w-[60%]  md:ml-6 my-3 md:my-0">
                                                <h1 className="text-[#832729] font-[700] underline md:text-[18px] text-[19px]">Language Spoken</h1>
                                                <div className="flex md:justify-around md:mt-0 mt-2">
                                                <div className="text-left md:mt-0 flex flex-wrap md:text-[17px] text-[17px] text-[#343434]">
                                                    {
                                                        storeDetail&&storeDetail.languages?.map((data,i)=>{
                                                            if(i<(storeDetail.length-1)/2){
                                                                return <p className="flex m-2 md:mx-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                                                                    <circle cx="6.5" cy="6.5" r="6.5" fill="#D9D9D9" />
                                                                    <path d="M4 5.59375L7.28125 8.875L14.5 1" stroke="#832729" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>&nbsp;{data}</p>
                                                         
                                                            }
                                                            else {
                                                                      
                                                  

                                                   return <p className="flex mx-2 md:mx-2 my-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                                                        <circle cx="6.5" cy="6.5" r="6.5" fill="#D9D9D9" />
                                                        <path d="M4 5.59375L7.28125 8.875L14.5 1" stroke="#832729" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>&nbsp;{data}</p>
                                                    
                                             
                                                            }
                                                        })
                                                    }
                                                    </div>
                                              
                                                </div>
                                                <h1 className="text-[#832729] font-[700] mt-4 underline md:text-[18px] text-[19px]">Payment Options</h1>
                                                <div className="flex justify-start flex-wrap items-center w-[80%] md:mt-0 mt-2 md:w-[80%]">
                                                   {payments?.map((data)=>{
                                                    return data
                                                   })}
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="md:w-[40%] md:h-full h-[300px] MapWrapper md:my-0 my-5 w-[90%]">

                                
                                {((storeDetail.storeLatitude&&!isNaN(storeDetail.storeLatitude)||(storeDetail.storeLatitude&&!isNaN(storeDetail.storeLatitude)))) && 
                                <Maps center={[...position]} loclink={storeDetail.storeLocationLink} isStore={true} remin="100%" style="md:h-full md:min-h-[550px] min-h-[300px]" />}
                            </div>
                        </div>
                        <div className="flex w-full flex-wrap justify-center">
              

                            <div className="mt-6  w-[90%]">
                                <div className="flex justify-around flex-wrap w-full">
                                {GoogleStore.reviews && GoogleStore.reviews?.slice(0, 4).map((data, i) => {
                                    return <div className="mb-4 md:w-[48%] border-2 rounded-[17px] px-8 py-5">
                                        {i == 0 && <p className="text-[#832729] text-[18px] font-[700]">Total Reviews <span className="text-[#66686C]">{GoogleStore.user_ratings_total}</span></p>}
                                        <div className="flex justify-between items-baseline">
                                            <div>
                                                <p className="text-[#414042] font-[600] text-[19px] mt-4">{data.author_name}</p>
                                                <div className="flex">
                                                    {[...Array(5)].map((_, ind) => {

                                                        return Number(data.rating) >= ind + 1 ? <img className="w-[15px] h-[15px] mr-1" src={filledStar} /> : <img className="mr-1 w-[15px] h-[15px]" src={unfilledStar} />
                                                    })}
                                                </div>
                                            </div>
                                            <p className="text-[#414042] font-[600] text-[15px] whitespace-nowrap md:text-[19px] mt-4">{data.relative_time_description
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
                                        return <div key={data} onClick={()=>nav(`/store-locator/jewellery-stores/${data.storeState.toLowerCase().replace(" ","-")}/${data.storeCity.toLowerCase().replace(" ","-")}/${data.storeName.toLowerCase().split("- ")[1]?data.storeName.toLowerCase().split("- ")[1].replace(/ /g,"-").replace(",","-"):data.storeName.toLowerCase().replace(" ","-").replace(",","-")}-${data.storeCode}`)} className=" col-auto  w-fit cursor-pointer md:px-6 px-2 md:m-4 h-fit py-4 my-2 mx-auto rounded-[7px] bg-[#832729]  flex justify-between items-start">
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