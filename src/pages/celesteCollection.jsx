import { Swiper, SwiperSlide } from "swiper/react";
import FAQ from "../component/Faq";
import SuggestArtical from "../component/Home/suggestedArticles";
import TanishqService from "../component/tanishqService"
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import ReactGA from 'react-ga4'

import crousal1 from "./../assets/images/celeste/des1.jpg"
import crousal2 from "./../assets/images/celeste/des2.jpg"
import crousal3 from "./../assets/images/celeste/des3.jpg"
import crousal4 from "./../assets/images/celeste/des4.jpg"
import mobcrousal1 from "./../assets/images/celeste/mob1.jpg"
import mobcrousal2 from "./../assets/images/celeste/mob2.jpg"
import mobcrousal3 from "./../assets/images/celeste/mob3.jpg"
import mobcrousal4 from "./../assets/images/celeste/mob4.jpg"

// import crousal2 from "./../assets/images/tanishqServices/Eng 2.jpg"
// import crousal3 from "./../assets/images/tanishqServices/Eng 3.jpg"
// import crousal4 from "./../assets/images/tanishqServices/Eng 4.jpg"
// import crousal5 from "./../assets/images/tanishqServices/Tel 1.jpg"


import kp1 from "./../assets/images/celeste/pr1.png"
import kp2 from "./../assets/images/celeste/pr2.png"
import kp3 from "./../assets/images/celeste/pr3.png"
import kp4 from "./../assets/images/celeste/pr4.png"
import kp5 from "./../assets/images/celeste/pr5.png"
import kp6 from "./../assets/images/celeste/pr6.png"
import kp7 from "./../assets/images/celeste/pr7.png"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../component/button";
import { get } from "../services/apiHandler";
import Marquee from "../component/Home/marquee";
import Heading from "../component/heading";
import StorePlate from "../component/storePlate";
export default function CelesteCollection() {
  
    const nav=useNavigate()
    const [Position, setPosition] = useState([])
    const [data, setData] = useState([])
    const CelesteProduct=[{
        name:"The Victory Cup",
        img:kp1
    },
    {
        name:"Love Ring",
        img:kp2
    },{
        name:"To-Gether",
        img:kp3
    },{
        name:"Love Bracelet",
        img:kp4
    },{
        name:"A Cut Above The Rest",
        img:kp5
    },{
        name:"Studded Celebration",
        img:kp6
    },{
        name:"World Cup Trophy",
        img:kp7
    }]

    const loadData = async () => {
      
            try {
                setPosition([])
                const data = await get(`/CelesteDetails?storeCode=&city=`)
                // const data = await get(`/details?storeCode=&city=mumbai`)
                // const data=await axios.get(`http://10.54.4.78:8129/stores/tanishq/search?value=${e.target.value}`)
                    if(!data.data.result)
                    nav("/pagenotfound")
                setData(data.data.result);
                //(data.data.result);
            
            }
            catch (error) {
                //(error);
              
            }
        
     

    }


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
        loadData()
        window.scrollTo({top: 0, behavior: 'smooth'});
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Celeste-Collection Page" });
    },[])
    
    const BookAppointment = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;

    }
return <>
  <div className="md:flex hidden flex-col  overflow-hidden    w-full items-center justify-center ">
                <div className=''>
                    <Swiper
                        slidesPerView={'auto'}
                        // spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
navigation={true}
                        modules={[ Autoplay,Navigation,]}
                        className="mySwiper"
                    >
                       
                        <SwiperSlide>
                            <a href="https://www.tanishq.co.in/Celeste" target="_blank" className="min-w-full"><img src={crousal1} className='w-full   ' alt="" srcset="" />
                            </a></SwiperSlide>

                       
                       
                        <SwiperSlide>
                        <a href="https://www.tanishq.co.in/Celeste" className="w-full" target="_blank"><img src={crousal2} className='w-full   ' alt="" srcset="" />
                        </a></SwiperSlide>
                        <SwiperSlide>
                        <a href="https://www.tanishq.co.in/Celeste" className="w-full" target="_blank"><img src={crousal3} className='w-full   ' alt="" srcset="" />
                        </a></SwiperSlide>
                        <SwiperSlide>
                        <a href="https://www.tanishq.co.in/Celeste" className="w-full" target="_blank"><img src={crousal4} className='w-full   ' alt="" srcset="" />
                        </a></SwiperSlide>

                    </Swiper>
                </div>
            </div>
            <div className="flex md:hidden flex-col  overflow-hidden    w-full items-center justify-center ">
                <div className=''>
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
                        modules={[ Autoplay,Navigation,]}
                        className="mySwiper"
                    >
                       
                        <SwiperSlide>
                            <a href="https://www.tanishq.co.in/Celeste" target="_blank"><img src={mobcrousal1} className='w-full   ' alt="" srcset="" />
                            </a></SwiperSlide>

                            
                        <SwiperSlide>
                            <a href="https://www.tanishq.co.in/Celeste" target="_blank"><img src={mobcrousal2} className='w-full   ' alt="" srcset="" />
                            </a></SwiperSlide>
                            
                        <SwiperSlide>
                            <a href="https://www.tanishq.co.in/Celeste" target="_blank"><img src={mobcrousal3} className='w-full   ' alt="" srcset="" />
                            </a></SwiperSlide>
                            
                        <SwiperSlide>
                            <a href="https://www.tanishq.co.in/Celeste" target="_blank"><img src={mobcrousal4} className='w-full   ' alt="" srcset="" />
                            </a></SwiperSlide>
                        {/* <SwiperSlide>  <a href="https://www.tanishq.co.in/Celeste" target="_blank"><img src={crousal2} className='w-full   ' alt="" srcset="" />
                        </a>
                        </SwiperSlide> */}
                        {/* <SwiperSlide>
                        <a href="https://www.tanishq.co.in/Celeste" target="_blank"><img src={crousal3} className='w-full   ' alt="" srcset="" />
                        </a></SwiperSlide> */}
                        {/* <SwiperSlide>
                        <a href="https://www.tanishq.co.in/Celeste" target="_blank"><img src={crousal4} className='w-full   ' alt="" srcset="" />
                        </a></SwiperSlide>
                        <SwiperSlide>
                        <a href="https://www.tanishq.co.in/Celeste" target="_blank"><img src={crousal5} className='w-full   ' alt="" srcset="" />
                        </a></SwiperSlide> */}
                       
                       

                    </Swiper>
                </div>
            </div>
            <Marquee/>
            <div className="md:block hidden">
            <Heading heading={<u className="text-[25px]">Explore Collection Online</u>}/>
            <div className="flex w-full justify-center">
            <div className="py-4 w-full md:w-[88%]">
            <Swiper
                    slidesPerView={'auto'} 
                    spaceBetween={30}
                   navigation={true}
                       autoplay={{
                         delay: 1500,
                         disableOnInteraction: false,
                         
                       }}
                       speed={800}
                       pagination={
                       { clickable:true}
                       }
                      
                       
                       loop={true}
                       loopFillGroupWithBlank={true}
                      
                       breakpoints={{
                          
                           768: { slidesPerView:5,slidesPerGroup:5,autoplay:true},0: { slidesPerView:"auto", centeredSlides:true}
                       }}
                       modules={[Autoplay,Navigation]}
                        className="mySwiper">
                            {CelesteProduct.map((data,i)=>{
return  <SwiperSlide key={i}><TanishqService img={data.img} name={data.name} disablelink={true} /></SwiperSlide>
                            })}
           
           
            </Swiper>
            </div>
            
</div>
</div>
<div className="flex justify-center my-5">

    <div className="txt px-24 rounded-[10px] py-3 md:block hidden bg-[#F2E9E9] text-[20px] cursor-pointer font-[700] break-keep whitespace-nowrap text-[#832729]" onClick={()=>BookAppointment("https://www.tanishq.co.in/Celeste")}>Know More About the Celeste Collection</div>
    <div className="txt px-10 py-2 block md:hidden   rounded-[10px] bg-[#F2E9E9] text-center text-[#832729]  font-[700] break-keep whitespace-nowrap  cursor-pointer" onClick={()=>BookAppointment("https://www.tanishq.co.in/Celeste")}>Know more about the <br />Celeste Collection</div>

</div>
<div className="md:block hidden">
<Heading heading={<u className="text-[20px] break-keep">Celeste Collections Exclusively Available at {data.length} Stores</u>}/>
</div>
<div className="block md:hidden">
<Heading heading={<p className="text-[20px]">Celeste Collections <br /> <span className="text-[18px]"> Exclusively Available at {data.length} Stores</span></p>}/>
</div>
            <div className="flex flex-wrap justify-around items-start w-full">

                <div className="my-4  w-[88%] flex flex-wrap justify-around items-center border-[1px] border-[#CBC9C9;] rounded-[17px]  shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] py-5 px-4 md:px-6 md:max-h-[900px] max-h-[500px] overflow-y-scroll">

                    {data.map((data, i) => {
                        return <StorePlate key={i} data={data}/>
                    })}
                </div>
                {/* <div className=" md:min-h-[950px] h-[650px] max-h-[500px] py-5 px-4 MapWrapper   md:my-0 my-10 md:w-[40%] w-full">
                    {<Maps center={[...Position]} remin="800px" style="md:h-full md:min-h-[800px] min-h-[500px]" />}
                </div> */}

            </div>
            <FAQ data={faq} />
        <SuggestArtical />
</>
}