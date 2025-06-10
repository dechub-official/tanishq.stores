// components/CollectionLayout.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";


import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import BookAnAppointment from "../component/bookAnAppointment";
import Marquee from "../component/Home/marquee";
import Heading from "../component/heading";
import StoreList from "../helper/getStoreList";
import Assurance from "../component/assurance";
import SuggestArtical from "../component/Home/suggestedArticles";
import FAQ from "../component/Faq";
import CollectionFilter from "../component/Collection/collectionFilters";


const faqData = [{
    question: "How do I redeem Encircle Points?",
    answer: <> <span className='text-[rgba(119,7,10,0.70)]'>Offline Redemption:</span>  While making purchases at Tanishq, Goldplus, Zoya, MIA, World of Titan, Fastrack, Helios & Titan Eye plus outlets across India, provide registered mobile number to the cashier before final billing to redeem points. Available points can be redeemed at the will of the customer at the store. OTP is must to redeem points at the store as well as online. Points will be credited only when the membership number is provided while billing or check out. <br />
        <span className='text-[rgba(119,7,10,0.70)]'>Online Redemption:</span> Encircle redemption is applicable only for  <span className='text-[rgba(119,7,10,0.70)]'>login/sign</span>login/sign users. After the OTP verification, the user can redeem available encircle points.</>
}, {
    question: "Do I need to pay shipping / delivery charges?",
    answer: <>There are no shipping/delivery charges within India. For information on shipping charges for international orders please see the Shipping and Handling Charges section under
        <br />
        <span className='text-[rgba(119,7,10,0.70)]'>Shipping Policy</span> section</>
},
{
    question: "Can I send gifts to my loved ones?",
    answer: <>Yes, you can send any of the products available on <span className='text-[rgba(119,7,10,0.70)]'>www.tanishq.co.in</span> as gifts to your loved ones along with a personalized message.</>
},
{
    question: "What happens if my order is lost in transit?",
    answer: <>In the unlikely event that an order gets lost during transit, we wait for 15 days to track your lost order and if we are still unsuccessful, then we process your refund through the payment mode that you had opted for at the time of placing the order.</>
},
{
    question: "Questions on Cash On Delivery (COD)",
    answer: <>1. What is cash on delivery payment option?
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
        In the case of COD, the amount can be refunded either through cheque or online transfer as NEFT (National Electronic Fund Transfer). The mode of refund depends on the customer's choice: A) If the customer provides a cancelled cheque with the returned product then the refund can be made within 7-15 working days & amount will be refunded directly into customer's account through online transfer as NEFT. B) If customer doesn't provide any cancelled cheque then amount will be refunded through cheque on customer's name only, which will be sent by courier at the address provided by customer at time of registering/placing the order. It may take up to 30 working days.
        <br />
        9. What are the other terms and conditions for Cash On Delivery?
        Once the order is placed successfully, there will be a confirmation call from our support center for validation of order. If the confirmation call is unanswered we reserve the rights to cancel the order. The order amount should be paid in full at the receipt of the product. The package can be opened only after making the payment. Please note that partial order can't be delivered.
        <br />
        10. How do I cancel my order if I have ordered through Cash on delivery?
        You need to call the customer care on 1800-266-0123 or email us at ecommsupport@titan.co.in to cancel your order, but note that the order can be cancelled only before shipping.
        <br />
        11. What are the acceptable currencies for a COD order?
        Our delivery partners will only accept Indian Rupees. Denominations of Rs 500 and Rs 1,000 which are deemed illegal as on 9th November 2016 will not be accepted</>
}];
export default function CollectionLayout({
    desktopBanner,
    mobileBanner,
    storeLink,
    title,
    stores = [],

    gaPageTitle = "Soulmate Collection Page",
    appointmentEnabled = false,
}) {
    const [BookAnAppointmentModal, setBookAnAppointmentModal] = useState(true);
    const [individualStoreData, setIndividualStoreData] = useState(null);
    const [selectedCities, setSelectedCities] = useState([]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: gaPageTitle });
    }, []);

    return (
        <>
            {/* Desktop Banner */}
            <div className="md:flex hidden flex-col overflow-hidden w-full items-center justify-center">
                <Swiper
                    slidesPerView={'auto'}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    navigation
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <a href={storeLink} target="_blank" rel="noreferrer">
                            <img src={desktopBanner} className="w-full" alt="Desktop Banner" />
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* Mobile Banner */}
            <div className="flex md:hidden flex-col overflow-hidden w-full items-center justify-center">
                <Swiper
                    slidesPerView={'auto'}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    navigation
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <a href={storeLink} target="_blank" rel="noreferrer">
                            <img src={mobileBanner} className="w-full" alt="Mobile Banner" />
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>

            {appointmentEnabled && individualStoreData && BookAnAppointmentModal.visible && BookAnAppointmentModal.mode === "popup" && (
                <div className="absolute bg-green-500 top-0 min-h-[100vh]">
                    <div className="fixed left-0 w-full top-0 z-[90] min-h-full">
                        <BookAnAppointment
                            cities={stores}
                            activeStore={individualStoreData.activeStore}
                            setIndividualStoreData={setIndividualStoreData}
                            page={"city"}
                            openingTime={individualStoreData.storeOpeningTime}
                            isOpen={BookAnAppointmentModal}
                            storeCode={individualStoreData.storeCode}
                            storeName={individualStoreData.storeName}
                            setisOpen={() => setBookAnAppointmentModal({ visible: false })}
                            closingTime={individualStoreData.storeClosingTime}
                        />
                    </div>
                </div>
            )}

            <Marquee />

            <div className="md:block hidden">
                <Heading heading={<u className="text-[20px] break-keep">{title} Available at {stores.length} Stores</u>} />
            </div>
            <div className="block md:hidden">
                <Heading heading={<p className="text-[20px]">{title} <br /><span className="text-[18px]">Available at {stores.length} Stores</span></p>} />
            </div>
            <div className="w-[80%] mx-auto">
                <CollectionFilter
                    selectedCities={selectedCities}
                    setSelectedCities={setSelectedCities}

                />
            </div>

            <div className="flex flex-wrap justify-around items-start w-full">
                <StoreList
                    data={stores}
                    BookAnAppointmentModal={BookAnAppointmentModal}
                    individualStoreData={individualStoreData}
                    setIndividualStoreData={setIndividualStoreData}
                    setBookAnAppointmentModal={setBookAnAppointmentModal}
                />
            </div>

            <Assurance />
            <FAQ data={faqData} />
            <SuggestArtical />
        </>
    );
}
