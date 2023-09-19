import { useEffect, useState } from 'react'
import cityData from '../assets/cityData/Banner'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import SearchBox from '../component/search'

import Button from '../component/button'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Banner from "../assets/images/store banner.png"
import MobBanner from "../assets/images/cityPageBanner/bannermob.png"
import MobileBanner from "../assets/images/mobile-banner.png"
import map from '../assets/images/detailed/buttons/map.png'
import calender from '../assets/images/detailed/buttons/calender.png'
import { Helmet } from "react-helmet";
import crousal from '../assets/images/cityPageBanner/cityBanner.png'
import FAQ from '../component/Faq'
import SuggestArtical from '../component/Home/suggestedArticles'
import { get } from '../services/apiHandler'
import Maps from '../component/maps'
import ReactGA from 'react-ga'
export default function CityPage() {
    
    const { id } = useParams()
    const [city, setcity] = useState({})
    const [data, setData] = useState([])
    const [Position, setPosition] = useState([])
    const Navigate = useNavigate()
    const loc = useLocation()
    //(loc);
    
    const { state } = loc;
    const faq = [{
        question: "How do I redeem Encircle Points?", answer: <> <span className='text-[rgba(119,7,10,0.70)]'>Offline Redemption:</span>  While making purchases at Tanishq, Goldplus, Zoya, MIA, World of Titan, Fastrack, Helios & Titan Eye plus outlets across India, provide registered mobile number to the cashier before final billing to redeem points. Available points can be redeemed at the will of the customer at the store. OTP is must to redeem points at the store as well as online. Points will be credited only when the membership number is provided while billing or check out. <br />

            <span className='text-[rgba(119,7,10,0.70)]'>Online Redemption:</span> Encircle redemption is applicable only for  <span className='text-[rgba(119,7,10,0.70)]'>login/sign</span>login/sign users. After the OTP verification, the user can redeem available encircle points.</>
    }, {
        question: "Do I need to pay shipping / delivery charges?", answer: <>There are no shipping/delivery charges within India. For information on shipping charges for international orders please see the Shipping and Handling Charges section under
            <br />
            <span className='text-[rgba(119,7,10,0.70)]'>Shipping Policy</span> section</>
    }, { question: "Can I send gifts to my loved ones?", answer: <>Yes, you can send any of the products available on <span className='text-[rgba(119,7,10,0.70)]'>www.tanishq.co.in</span> as gifts to your loved ones along with a personalized message.</> }, 
    { question: "What happens if my order is lost in transit?", answer: <>In the unlikely event that an order gets lost during transit, we wait for 15 days to track your lost order and if we are still unsuccessful, then we process your refund through the payment mode that you had opted for at the time of placing the order.</> }, {
        question: "Questions on Cash On Delivery (COD)", answer: <>1. What is cash on delivery payment option?
            Cash on Delivery is a mode of payment provided by Titan where you can pay in cash upon the receipt of your product. We do not take any advance payment for COD orders.
            <br />
            2. Is Cash on Delivery available for an international shipping address?
            No, cash on delivery service is available only for addresses within India.
            <br />
            3. Is there any extra charge to be incurred due to Cash on Delivery?
            We do not charge any extra amount for COD service.
            <br />
            4. Which products are eligible for Cash on Delivery?
            All the products featuring on www.tanishq.co.in are available for COD, except gift cards/gift vouchers and helmets.
            <br />
            5. Is there any limit on the cart value for me to order as COD?
            Currently, orders of cart value between INR 1000 to INR 10,000 for selected pin-code addresses within India are eligible for COD service.
            <br />
            6. Can I place as many orders as I wish by way of COD?
            No, you can place a maximum of 3 COD orders in a day.
            <br />
            7. Which pin codes are eligible for Cash on Delivery?
            Currently, we are serving selected pin codes for COD. Please check if we do COD to your pin code in the product page, shopping cart page, checkout payment page. If there is no courier service available in your area, we do apologize for the inconvenience caused.
            <br />
            8. How will I receive my refund?
            In the case of COD, the amount can be refunded either through cheque or online transfer as NEFT (National Electronic Fund Transfer). The mode of refund depends on the customer’s choice: A) If the customer provides a cancelled cheque with the returned product then the refund can be made within 7-15 working days & amount will be refunded directly into customer's account through online transfer as NEFT. B) If customer doesn't provide any cancelled cheque then amount will be refunded through cheque on customer’s name only, which will be sent by courier at the address provided by customer at time of registering/placing the order. It may take up to 30 working days.
            <br />
            9. What are the other terms and conditions for Cash on Delivery?
            Once the order is placed successfully, there will be a confirmation call from our support center for validation of order. If the confirmation call is unanswered we reserve the rights to cancel the order. The order amount should be paid in full at the receipt of the product. The package can be opened only after making the payment. Please note that partial order can’t be delivered.
            <br />
            10. How do I cancel my order if I have ordered through Cash on delivery?
            You need to call the customer care on 1800-266-0123 or email us at ecommsupport@titan.co.in to cancel your order, but note that the order can be cancelled only before shipping.
            <br />
            11. What are the acceptable currencies for a COD order?
            Our delivery partners will only accept Indian Rupees. Denominations of Rs 500 and Rs 1,000 which are deemed illegal as on 9th November 2016 will not be accepted</>
    }]
    useEffect(()=>{
        ReactGA.pageview(window.location.pathname)
    },[])
    const loadData = async () => {
        if (id != "nearbysearch") {
            try {
                setPosition([])
                const data = await get(`/details?storeCode=&city=${id}`)
                // const data=await axios.get(`http://10.54.4.78:8129/stores/tanishq/search?value=${e.target.value}`)

                setData(data.data.result);
                //(data.data.result);
                const location = data.data.result.map((pos) => {
                    return {
                        lat: Number(pos.storeLatitude),
                        lng: Number(pos.storeLongitude),
                        name: `Tanishq Jewellery - ${pos.storeName}`

                    }
                })
                setPosition([...location])
            }
            catch (error) {
                //(error);
              
            }
        }
        else {
            if (!state)
                Navigate("/")

            //(state);
            let storeCode=[]
            try {
             storeCode = state.data.data.results.map(async (pos) => {

              
                    [...document.getElementsByClassName("af-bl")].forEach(element => {
                        element.style.filter = "blur(5px)";
                    });
                    const data = await get(`/search?value=${pos.name.replace("Tanishq Jewellery - ", "")}`)
                    // const data=await axios.get(`http://10.54.4.78:8129/stores/tanishq/search?value=${e.target.value}`)

                    return data?.data?.result;

                })
               


            }

            catch (error) {
                //(error);
            
            }

            Promise.all([...storeCode]).then((values) => {
                //(values);
                const tempStoreData = values.map(async (code) => {
                    if (code && code.length > 0) {
                        code = code[0]

                        try {
                            // [...document.getElementsByClassName("af-bl")].forEach(element => {
                            //     element.style.filter = "blur(5px)";
                            // });
                            const data = await get(`/details?storeCode=${code.storeCode}&city=`)
                            // const data=await axios.get(`http://10.54.4.78:8129/stores/tanishq/search?value=${e.target.value}`)

                            return data.data.result;

                        }
                        catch (error) {
                            //(error);

                        }
                    }
                })
                Promise.all([...tempStoreData]).then((values) => {
                    //(values);
                    let actualData = []
                    values.forEach((stdata) => {
                        if (stdata && stdata.length > 0) {
                            stdata = stdata[0]
                            actualData.push(stdata)
                        }
                    })
                    const location = actualData.map((pos) => {

                        return {
                            lat: Number(pos.storeLatitude),
                            lng: Number(pos.storeLongitude),
                            name: `Tanishq Jewellery - ${pos.storeName}`

                        }


                    })
                    setPosition([...location])
                    setData([...actualData]);

                })
            });
            [...document.getElementsByClassName("af-bl")].forEach(element => {
                element.style.filter = "blur(0px)";
            });
            //(storeCode);

        }

    }
    useEffect(() => {

        let General = ""
        const result = cityData.filter((data) => {
            if (data.name == "general") {
                General = data
            }
            return data.name == id;

        });
        if (result.length > 0)
            setcity({ ...result[0] })
        else
            setcity({ ...General })

        loadData()
    }, [id])

    const BookAppointment = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;

    }
    return <>
        <Helmet>
            <title>Jewellery Shops in {id} </title>
            <meta name="description" content={`Tanishq stores in ${id} are the one of the well known jewellery stores for all gold and diamond jewelleries. Visit our stores for the latest jewellery collections.`}>
            </meta>
        </Helmet>
        <div className="flex flex-col items-center mb-8 af-bl">


            {/* <Heading heading={"Welcome to Tanishq!"} subHeading={"400+ stores, 8L+ Designs, Backed by the trust of TATA  | India’s favourite jewellery store"}/> */}

        </div>

        <SearchBox />
        <div className="flex flex-col items-center justify-center af-bl">

            <div className="flex justify-center af-bl">
                <div className="w-[90%] justify-center flex  my-6 relative">
                    <img src={Banner} className="md:block hidden" alt="" />
                    <img src={MobileBanner} className="md:hidden block" alt="" />
                    <div className="md:w-[50%] top-[29%] md:top-[60%] md:left-[3%]   absolute flex justify-center">
                        <p className=" text-[18px]   text-[rgba(119,7,10,0.70)] italic font-serif  text-center font-[200] max-w-[250px]">Welcome to {id || "NearBy Search"}</p>
                    </div>
                </div>
            </div>
            {/* <div className="w-[90%] flex  my-6 relative">
                        <img src={city.img} className="" alt="" />
                        <div className="w-[100%]  md:top-[15%] top-[5%]  absolute flex justify-center">
                            <p className=" md:text-[40px] text-[25px]   text-[#832729]  text-center font-[700] ">{city.title||"city Name"}</p>
                        </div>
                    </div> */}
            <div className="flex justify-center w-full">
                <h2 className="text-[20px] w-fit border-b-[3px] border-[#832729] pb-2 leading-10  font-[700] text-center text-[#832729] mb-2">Tanishq Stores in {id || "NearBy Search"}</h2>
            </div>
            <div className="flex flex-wrap justify-around items-start w-full">

                <div className="my-4 md:w-[40%] w-[90%] flex flex-col items-center border-[1px] border-black rounded-[17px]  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-5 px-4 md:px-6 md:max-h-[900px] max-h-[500px] overflow-y-scroll">

                    {data.map((data, i) => {
                        return <div key={i} className="box bg-[#F2F2F2] w-[100%]  my-2 px-2 md:px-8 p-4 rounded-[22px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                            <h2 className='text-[#832729] py-2 md:text-[18px] text-[15px] font-[700]'>{`Tanishq Jewellery - ${data.storeName}`}</h2>
                            <p className='pb-4 font-[600] border-b-[#832729] border-b-[4px] cursor-pointer' onClick={() => Navigate(`/store-locator/jewellery-stores/${data.storeState.toLowerCase().replace(" ","-")}/${data.storeCity.toLowerCase().replace(" ","-")}/${data.storeName.toLowerCase().split("- ")[1]?data.storeName.toLowerCase().split("- ")[1].replace(" ","-").replace(",","-"):data.storeName.toLowerCase().replace(" ","-").replace(",","-")}-${data.storeCode}`)}>See all Details {">>>"}</p>
                            <p className='my-2 text-[15px] max-w-[300px] font-[500]'>{data.storeAddress}</p>
                            <p className='my-2 text-[15px] max-w-[300px] font-[500]'>Phone: {data.storePhoneNoOne}</p>
                            <p className='my-2 text-[15px] max-w-[300px] font-[500]'>{`Working Hours: ${data.storeOpeningTime} - ${data.storeClosingTime}`}</p>
                            <div className="flex justify-items-start ">
                                <div className="w-[50%]">
                                    <Button name="Get Directions" iconstyle={"md:w-[17px]"} style={'text-white bg-[#832729] font-500 text-[10px] px-2'} onclick={() => BookAppointment(data.storeLocationLink)} icon={map} />
                                </div>
                                <div className="w-[60%]">
                                    <Button name="Book an Appointment" iconstyle={"w-[17px]"} style={'text-white bg-[#832729] font-500 text-[10px] px-2'} onclick={() => BookAppointment("https://www.tanishq.co.in/book-an-appointment")} icon={calender} />
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <div className=" md:min-h-[950px] h-[650px] max-h-[500px] py-5 px-4    md:my-0 my-10 md:w-[40%] w-full">
                    {(Position || Position.length > 0) && <Maps center={[...Position]} />}
                </div>

            </div>

            {/* <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-[20px] w-fit border-b-[3px] border-[#832729] pb-2 leading-10  font-[700] text-center text-[#832729] mb-2">Tanishq Store Services</h2>
       
       
         <div className="flex flex-col items-center  justify-around w-[80%] my-6">
         <Swiper
        slidesPerView={3}
        spaceBetween={20}
    
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
           
            768: { slidesPerView:3,autoplay:false},0: { centeredSlides:true,slidesPerView:1}
        }}
       
        className="mySwiper"
      >
        
        <SwiperSlide > <TanishqService heading={"Buy New Jewellery"} subheading={"It can be any jewellery"} img={ring}/> </SwiperSlide>
        <SwiperSlide > <TanishqService heading={"Buy New Jewellery"} subheading={"It can be any jewellery"} img={bangle}/></SwiperSlide>
        <SwiperSlide >  <TanishqService heading={"Buy New Jewellery"} subheading={"It can be any jewellery"} img={chain}/></SwiperSlide>
        
            </Swiper>


         </div>
          </div> */}
            <div className="md:flex hidden flex-col w-[90%] items-center justify-center ">
                <div className='my-10'>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
navigation={true}
                        modules={[ Autoplay,Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={crousal} className='md:w-full w-[90%] max-h-[500px]' alt="" srcset="" /></SwiperSlide>
                        <SwiperSlide><img src={crousal} className='md:w-full w-[90%] max-h-[500px]' alt="" srcset="" /></SwiperSlide>

                    </Swiper>
                </div>
            </div>
            <div className="flex md:hidden flex-col w-[90%] items-center justify-center ">
                <div className='my-10'>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[ Autoplay,Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img src={MobBanner} className='md:w-full w-[90%] max-h-[500px]' alt="" srcset="" /></SwiperSlide>
                        <SwiperSlide><img src={MobBanner} className='md:w-full w-[90%] max-h-[500px]' alt="" srcset="" /></SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </div>
        <FAQ data={faq} />
        <SuggestArtical />
    </>
}