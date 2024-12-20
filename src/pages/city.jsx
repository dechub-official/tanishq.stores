import { useEffect, useState } from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import SearchBox from "../component/search";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MobBookAnAppoinmentButton from "../assets/images/MobBookAnAppoinmentButton.png"
import { Helmet } from "react-helmet";

import FAQ from "../component/Faq";
import SuggestArtical from "../component/Home/suggestedArticles";
import { get, post } from "../services/apiHandler";

import ReactGA from "react-ga4";
import Banner from "../component/Home/Banner";
import VisitorInfoCard from "../component/visitorInfoCard";
import StorePlate from "../component/storePlate";
import Subscription from "../component/Subscription";
import Assurance from "../component/assurance";
import ReviewSlider from "../component/reviewSlider";
import BookAnAppointment from "../component/bookAnAppointment";

export default function CityPage() {
  let { id } = useParams();
  const nav = useNavigate();
  const [individualStoreData, setIndividualStoreData] = useState(null)

  const [data, setData] = useState([]);
  const [Position, setPosition] = useState([]);
  const [BookAnAppointmentModal, setBookAnAppointmentModal] = useState(true);

  //(loc);

  const faq = [
    {
      question: "How do I redeem Encircle Points?",
      answer: (
        <>
          {" "}
          <span className="text-[rgba(119,7,10,0.70)]">
            Offline Redemption:
          </span>{" "}
          While making purchases at Tanishq, Goldplus, Zoya, MIA, World of
          Titan, Fastrack, Helios & Titan Eye plus outlets across India, provide
          registered mobile number to the cashier before final billing to redeem
          points. Available points can be redeemed at the will of the customer
          at the store. OTP is must to redeem points at the store as well as
          online. Points will be credited only when the membership number is
          provided while billing or check out. <br />
          <span className="text-[rgba(119,7,10,0.70)]">
            Online Redemption:
          </span>{" "}
          Encircle redemption is applicable only for{" "}
          <span className="text-[rgba(119,7,10,0.70)]">login/sign</span>
          login/sign users. After the OTP verification, the user can redeem
          available encircle points.
        </>
      ),
    },
    {
      question: "Do I need to pay shipping / delivery charges?",
      answer: (
        <>
          There are no shipping/delivery charges within India. For information
          on shipping charges for international orders please see the Shipping
          and Handling Charges section under
          <br />
          <span className="text-[rgba(119,7,10,0.70)]">
            Shipping Policy
          </span>{" "}
          section
        </>
      ),
    },
    {
      question: "Can I send gifts to my loved ones?",
      answer: (
        <>
          Yes, you can send any of the products available on{" "}
          <span className="text-[rgba(119,7,10,0.70)]">www.tanishq.co.in</span>{" "}
          as gifts to your loved ones along with a personalized message.
        </>
      ),
    },
    {
      question: "What happens if my order is lost in transit?",
      answer: (
        <>
          In the unlikely event that an order gets lost during transit, we wait
          for 15 days to track your lost order and if we are still unsuccessful,
          then we process your refund through the payment mode that you had
          opted for at the time of placing the order.
        </>
      ),
    },
    {
      question: "Questions on Cash On Delivery (COD)",
      answer: (
        <>
          1. What is cash on delivery payment option? Cash on Delivery is a mode
          of payment provided by Titan where you can pay in cash upon the
          receipt of your product. We do not take any advance payment for COD
          orders.
          <br />
          2. Is Cash on Delivery available for an international shipping
          address? No, cash on delivery service is available only for addresses
          within India.
          <br />
          3. Is there any extra charge to be incurred due to Cash on Delivery?
          We do not charge any extra amount for COD service.
          <br />
          4. Which products are eligible for Cash on Delivery? All the products
          featuring on www.tanishq.co.in are available for COD, except gift
          cards/gift vouchers and helmets.
          <br />
          5. Is there any limit on the cart value for me to order as COD?
          Currently, orders of cart value between INR 1000 to INR 10,000 for
          selected pin-code addresses within India are eligible for COD service.
          <br />
          6. Can I place as many orders as I wish by way of COD? No, you can
          place a maximum of 3 COD orders in a day.
          <br />
          7. Which pin codes are eligible for Cash on Delivery? Currently, we
          are serving selected pin codes for COD. Please check if we do COD to
          your pin code in the product page, shopping cart page, checkout
          payment page. If there is no courier service available in your area,
          we do apologize for the inconvenience caused.
          <br />
          8. How will I receive my refund? In the case of COD, the amount can be
          refunded either through cheque or online transfer as NEFT (National
          Electronic Fund Transfer). The mode of refund depends on the
          customer’s choice: A) If the customer provides a cancelled cheque with
          the returned product then the refund can be made within 7-15 working
          days & amount will be refunded directly into customer's account
          through online transfer as NEFT. B) If customer doesn't provide any
          cancelled cheque then amount will be refunded through cheque on
          customer’s name only, which will be sent by courier at the address
          provided by customer at time of registering/placing the order. It may
          take up to 30 working days.
          <br />
          9. What are the other terms and conditions for Cash on Delivery? Once
          the order is placed successfully, there will be a confirmation call
          from our support center for validation of order. If the confirmation
          call is unanswered we reserve the rights to cancel the order. The
          order amount should be paid in full at the receipt of the product. The
          package can be opened only after making the payment. Please note that
          partial order can’t be delivered.
          <br />
          10. How do I cancel my order if I have ordered through Cash on
          delivery? You need to call the customer care on 1800-266-0123 or email
          us at ecommsupport@titan.co.in to cancel your order, but note that the
          order can be cancelled only before shipping.
          <br />
          11. What are the acceptable currencies for a COD order? Our delivery
          partners will only accept Indian Rupees. Denominations of Rs 500 and
          Rs 1,000 which are deemed illegal as on 9th November 2016 will not be
          accepted
        </>
      ),
    },
  ];
  useEffect(() => {
    console.log("page View");
    ReactGA.send({
      hitType: "storeLocator",
      page: window.location.pathname,
      title: "City Page",
    });
  }, [id]);
  const loadData = async () => {
    if (id != "nearbysearch") {
      try {
        setPosition([]);
        const data = await get(
          `/details?storeCode=&city=${id.replace("-", " ")}`
        );
        // const data=await axios.get(`http://10.54.4.78:8129/stores/tanishq/search?value=${e.target.value}`)
        if (!data.data.result) nav("/pagenotfound");
        setData(data.data.result);
        //(data.data.result);
        let location = data.data.result.map((pos) => {
          if (pos.storeLatitude && !isNaN(pos.storeLatitude))
            return {
              lat: Number(pos.storeLatitude),
              lng: Number(pos.storeLongitude),
              name: `Tanishq Jewellery - ${pos.storeName}`,
            };
          else {
            return {
              name: `Tanishq Jewellery - ${pos.storeName}`,
            };
          }
        });

        location = location.filter((a, b) => (a.lat ? true : false));
        setPosition([...location]);
      } catch (error) {
        //(error);
      }
    }

  };
  useEffect(() => {
    loadData();
  }, [id]);

  const [visitCardShow, setvisitCardShow] = useState(false);

  useEffect(() => {
    const interval = setTimeout(() => {
      setvisitCardShow(true);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <Helmet>
        <title>Jewellery Shops in {id} </title>
        <meta
          name="description"
          content={`Tanishq stores in ${id} are the one of the well known jewellery stores for all gold and diamond jewelleries. Visit our stores for the latest jewellery collections.`}
        ></meta>
      </Helmet>
      {/* {visitCardShow&&<div id="default-modal"  class=" overflow-x-hidden   flex  overflow-y-auto fixed px-2 w-full h-full bg-[#0b090900]  top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center">
           <div className="md:w-full flex justify-center items-center ">
                <VisitorInfoCard notClose={true} data={data} storeCity={id} onClose={()=>setvisitCardShow(false)}/>
              </div>
                </div>} */}
      <div className="flex justify-center items-center">
        {/* {success.visible&&  <SuccessPopup isSuccess={success.success} close={()=>setSuccess({...success,visible:false})}/>
      
      } */}
      </div>

      <div className="flex flex-col items-center mb-8 af-bl">
        {/* <Heading heading={"Welcome to Tanishq!"} subHeading={"400+ stores, 8L+ Designs, Backed by the trust of TATA  | India’s favourite jewellery store"}/> */}
      </div>

      <SearchBox />
      <div className="flex flex-col items-center justify-center af-bl">
        <Banner name={id || "NearBy Search"} />
        {/* shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-[1px] border-[#CBC9C9;]*/}
        <div className="flex flex-wrap  justify-around items-start w-full">
          <div className="flex justify-center w-full">
            <h2 className="underline md:text-[35px] text-[21px] w-fit pb-2 leading-10  text-center text-[#832729] font-[600] font-fraunces mb-2">
              Tanishq Stores in {id || "NearBy Search"}
            </h2>
          </div>
          <div className="block md:hidden">
          {individualStoreData && BookAnAppointmentModal.visible && BookAnAppointmentModal.mode == "popup" && <BookAnAppointment cities={data} activeStore={individualStoreData.activeStore} setIndividualStoreData={setIndividualStoreData} page={"city"} openingTime={individualStoreData.storeOpeningTime} isOpen={BookAnAppointmentModal} storeCode={individualStoreData.storeCode} storeName={individualStoreData.storeName} setisOpen={() => setBookAnAppointmentModal({ visible: false })} closingTime={individualStoreData.storeClosingTime} />}

          </div>
         
          {/* <img src={MobBookAnAppoinmentButton}  setBookAnAppointmentModal={setBookAnAppointmentModal} className="block my-8 w-[90%] mx-auto md:hidden" alt="" /> */}
          <div class="row my-5 grid-rows-1 w-[90%] md:w-[unset] grid md:grid-cols-2 gap-4">
            {/* <div className="my-4 lg:max-w-[1700px] md:w-[88%] flex flex-wrap justify-around  items-center  rounded-[17px]   py-5 px-4 md:px-6  ">  */}

            {data.map((storeData, i) => {
              return (
                <>
                  {i == 1 && <Subscription />}
                  {
                   individualStoreData?.activeStore==i&& BookAnAppointmentModal.visible && BookAnAppointmentModal.mode == "card" ?
                    <BookAnAppointment
                    key={i}
                      cities={data}
                      activeStore={individualStoreData.activeStore}
                      setIndividualStoreData={setIndividualStoreData}
                      page={"city"}
                      openingTime={individualStoreData.storeOpeningTime}
                      isOpen={BookAnAppointmentModal.visible}
                      storeCode={individualStoreData.storeCode}
                      storeName={individualStoreData.storeName}
                      setisOpen={() => setBookAnAppointmentModal({ visible: false })}
                      closingTime={individualStoreData.storeClosingTime}
                    />: <StorePlate key={i} index={i} data={storeData} setIndividualStoreData={setIndividualStoreData} setBookAnAppointmentModal={setBookAnAppointmentModal} />
                  }
                 
                </>
              );
            })}
            {data.length <= 1 && <Subscription />}
          </div>
        </div>
      </div>
      {/* <ReviewSlider /> */}
      <Assurance />
      <FAQ data={faq} />
      <SuggestArtical />
    </>
  );
}
