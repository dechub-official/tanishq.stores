import gplay from '../assets/images/footer/google-play.png'
import astore from '../assets/images/footer/app-store.png'
import cruve from '../assets/images/footer/top-bottom-border-curve.webp'
import qr from '../assets/images/getapp_qr.webp'
import footrLogo from '../assets/images/footer-logo.png'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import ReactGA from 'react-ga4'
import { AmericanExpressIcon, ChatIcon, DcardIcon, DinersClubIcon, FaceBookIcon, InstagramIcon, MailWithPenIcon, MasterCardIcon, PayPalIcon, VisaCardIcon, WhatsAppIcon, XIcon, YoutubeIcon } from '../shared/svg/Icon'
const VisitOutside = (url) => {
    ReactGA.event({
        footerSection: url,
        // value: Clicks.getDir + 1,
        action: "footer_click",
    });
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;

}
export default function Footer() {

    const data = [{
        head: <h1 className="text-white text-[12px] md:text-[16px] mb-2 font-[700]">Useful Links</h1>, links: <> <p className="text-white font-light text-[12px] md:text-[16px] my-2" onClick={() => VisitOutside("https://www.tanishq.co.in/delivery-information.html?lang=en_IN")}>Delivery Information </p>
            <p className="text-white font-light text-[12px] md:text-[16px] my-2" onClick={() => VisitOutside("https://www.tanishq.co.in/international-shipping.html?lang=en_IN")}>International Shipping </p>
            <p className="text-white font-light text-[12px] md:text-[16px] my-2" onClick={() => VisitOutside("https://www.tanishq.co.in/payment-options.html?lang=en_IN")}>Payment Options </p>
            <p className="text-white font-light text-[12px] md:text-[16px] my-2" onClick={() => VisitOutside("https://www.tanishq.co.in/order/track?lang=en_IN")}>Track Your Order</p>
            <p className="text-white font-light text-[12px] md:text-[16px] my-2" onClick={() => VisitOutside("https://www.tanishq.co.in/returns.html?lang=en_IN")}>Returns</p>
            <p className="text-white font-light text-[12px] md:text-[16px] my-2" onClick={() => VisitOutside("https://stores.tanishq.co.in/")}>Find a Store</p></>
    }, {
        head: <h1 className="text-white text-[12px] md:text-[16px] mb-2 font-[700]">Information</h1>, links: <> <p className="text-white font-light text-[12px] md:text-[16px] my-2" onClick={() => VisitOutside("https://careers.titan.co.in/Recruiting/candidates/candidates_home.aspx")}>Careers</p>
            <p className="text-white font-light text-[12px] md:text-[16px] my-2" onClick={() => VisitOutside("https://www.tanishq.co.in/blog-home.html?lang=en_IN")}>Blog </p>
            <p className="text-white font-light text-[12px] md:text-[16px] my-2" onClick={() => VisitOutside("https://www.tanishq.co.in/offers-terms-and-conditions.html?lang=en_IN")}>Offers & Contest Details </p>
            <p className="text-white font-light text-[12px] md:text-[16px] my-2" onClick={() => VisitOutside("https://www.tanishq.co.in/help-faqs.html?lang=en_IN")}>Help & FAQS </p>
            <p className="text-white font-light text-[12px] md:text-[16px] my-2" onClick={() => VisitOutside("https://www.tanishq.co.in/returns.html?lang=en_IN")}>Returns</p>
            <p className="text-white font-light text-[12px] md:text-[16px] my-2" onClick={() => VisitOutside("https://www.tanishq.co.in/about-tanishq?lang=en_IN")}> About Tanishq</p></>

    }, {
        head: <h1 className="text-white text-[12px] md:text-[16px] mb-2 font-[700]">Contact Us</h1>,
        links: <>  <a href='mailto:ecomsupport@titan.co.in'><p className="text-white font-light text-[12px] md:text-[16px] my-2"> Write to Us</p></a>
            <a href='tel:18002660123' ><p className="text-white font-light text-[12px] md:text-[16px] my-2">1800-266-0123 </p></a>
            <p className="text-white font-light text-[12px] md:text-[16px] my-2">Chat with US </p></>
    }]
    let [open, setOpen] = useState([...Array(5).fill("0")])
    const handleChange = (index) => {
        if (open[index] == "0") {
            open[index] = "fit"
            setOpen([...open])
        }
        else {
            open[index] = "0"
            setOpen([...open])
        }

    }
    const loc = useLocation()
    if (loc.pathname == "/app-moduleeb61394" || localStorage.getItem("nav-hide")) {
        localStorage.setItem("nav-hide", true)
        return
    }
    return <>

        <div className="rounded-lg bg-[#300708] overflow-hidden relative md:px-20 px-4 mx-2 py-5  md:mx-5">
            <div className='w-full justify-center md:flex hidden'>
            <img src={cruve}  className='mx-auto z-10 top-0 w-40  absolute' alt="" />
            <img src={cruve}  className='mx-auto z-10 bottom-0 rotate-180 w-40  absolute' alt="" />
            </div>
           
            <div className="grid  grid-cols-1 gap-y-2  ">
                <div className='mb-5 md:block hidden'>
                    <img src={footrLogo} width={250} className='ml-[5%] ' alt="" />
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-y-5  ">
                    <div className="us-link md:col-span-1 md:block hidden text-left">

                        <h1 className="text-white text-[16px] md:text-[24px] mb-5 font-normal">Download the Tanishq App Now</h1>
                        <div className="flex justify-center my-2">
                            <img src={qr} alt="tanishq app qr" className='w-[200px]' />
                        </div>
                       



                    </div>

                    <div className='grid md:grid-cols-3 md:col-span-2 col-span-2  grid-cols-2 md:gap-x-10 gap-x-5 gap-y-1 mx-0'>
                        <div className="us-link md:text-start   text-left  ">
                            <h1 className="text-white font-fraunces text-[16px] md:text-[24px] font-normal">Useful Links</h1>
                            <p className="text-white font-light text-[12px] md:text-[16px] my-2  transition-all duration-150 cursor-pointer" onClick={() => VisitOutside("https://www.tanishq.co.in/delivery-information.html?lang=en_IN")}>Delivery Information </p>
                            <p className="text-white font-light text-[12px] md:text-[16px] my-2  transition-all duration-150 cursor-pointer" onClick={() => VisitOutside("https://www.tanishq.co.in/international-shipping.html?lang=en_IN")}>International Shipping </p>
                            <p className="text-white font-light text-[12px] md:text-[16px] my-2  transition-all duration-150 cursor-pointer" onClick={() => VisitOutside("https://www.tanishq.co.in/payment-options.html?lang=en_IN")}>Payment Options </p>
                            <p className="text-white font-light text-[12px] md:text-[16px] my-2  transition-all duration-150 cursor-pointer" onClick={() => VisitOutside("https://www.tanishq.co.in/order/track?lang=en_IN")}>Track Your Order</p>
                            <p className="text-white font-light text-[12px] md:text-[16px] my-2  transition-all duration-150 cursor-pointer" onClick={() => VisitOutside("https://www.tanishq.co.in/returns.html?lang=en_IN")}>Returns</p>
                            <p className="text-white font-light text-[12px] md:text-[16px] my-2  transition-all duration-150 cursor-pointer" onClick={() => VisitOutside("https://stores.tanishq.co.in/")}>Find a Store</p>
                        </div>
                        <div className="us-link md:text-start text-left ">
                            <h1 className="text-white font-fraunces text-[16px] md:text-[24px] font-normal">Information</h1>
                            <p className="text-white font-light text-[12px] md:text-[16px] my-2  transition-all duration-150 cursor-pointer" onClick={() => VisitOutside("https://careers.titan.co.in/Recruiting/candidates/candidates_home.aspx")}>Careers</p>
                            <p className="text-white font-light text-[12px] md:text-[16px] my-2  transition-all duration-150 cursor-pointer" onClick={() => VisitOutside("https://www.tanishq.co.in/blog-home.html?lang=en_IN")}>Blog </p>
                            <p className="text-white font-light text-[12px] md:text-[16px] my-2  transition-all duration-150 cursor-pointer" onClick={() => VisitOutside("https://www.tanishq.co.in/offers-terms-and-conditions.html?lang=en_IN")}>Offers & Contest Details </p>
                            <p className="text-white font-light text-[12px] md:text-[16px] my-2  transition-all duration-150 cursor-pointer" onClick={() => VisitOutside("https://www.tanishq.co.in/help-faqs.html?lang=en_IN")}>Help & FAQS </p>
                            <p className="text-white font-light text-[12px] md:text-[16px] my-2  transition-all duration-150 cursor-pointer" onClick={() => VisitOutside("https://www.tanishq.co.in/returns.html?lang=en_IN")}>Returns</p>
                            <p className="text-white font-light text-[12px] md:text-[16px] my-2  transition-all duration-150 cursor-pointer" onClick={() => VisitOutside("https://www.tanishq.co.in/about-tanishq?lang=en_IN")}> About Tanishq</p>
                        </div>


                        <div className="us-link md:text-start text-left ">
                            <h1 className="text-white font-fraunces text-[16px] md:text-[24px] font-normal">Contact Us</h1>
                            <table>

                                <tr >
                                    <a href='tel:18002660123' >

                                        <td>

                                            <p className="text-white font-light  flex justify-center items-center text-[12px] md:text-[16px] my-2  transition-all duration-150 cursor-pointer"  >
                                                1800-266-0123 </p>

                                        </td>
                                    </a>
                                    <a href='tel:8147349242' className='mt-2' >
                                        {/* <h1 className="text-white font-fraunces text-[16px] md:text-[24px] font-normal">Chat With Us
                                        </h1> */}
                                        <p></p>
                                        <td>

                                            <p className="text-white font-light  flex justify-center items-center text-[12px] md:text-[16px] my-2  transition-all duration-150 cursor-pointer"  >
                                                +91 8147349242 </p>

                                        </td>
                                    </a>
                                </tr>

                            </table>
                            <div className='border-t col-span-3 py-2 mt-2 border-white w-fit '>
                            <div className=' flex justify-center py-3 w-fit gap-x-10 items-center'>
                              <span className='cursor-pointer'><WhatsAppIcon/></span> 
                              <span className='cursor-pointer'>  <MailWithPenIcon/> </span>
                              <span className='cursor-pointer'> <ChatIcon/> </span>

                            </div>

                        </div>




                        </div>

                      
                    </div>
                    <div className="flex md:justify-center md:w-full  justify-start col-span-1 gap-x-5 md:border-0 pt-5 border-t   border-[#ffffff52]">
                            <img src={gplay} onClick={() => VisitOutside("https://play.google.com/store/apps/details?id=com.titancompany.tanishqapp&pli=1")} alt="" className='md:w-[140px] w-[48%] h-fit cursor-pointer' />
                            <img src={astore} onClick={() => VisitOutside("https://apps.apple.com/in/app/tanishq-a-tata-product/id1494086207")} alt="" className='md:w-[140px] w-[48%] h-fit cursor-pointer' />
                        </div>

                        <div className='col-span-2'>
                        <div className='border-t col-span-3 py-2 border-[#ffffff52] w-full '>
                            <div className=' flex justify-center  py-2 w-fit gap-x-10 items-center'>
                                <h1 className="text-white font-fraunces text-[16px] md:text-[24px] font-normal">Social</h1>
                                <InstagramIcon />
                                <XIcon />
                                <FaceBookIcon />
                                <YoutubeIcon />
                            </div>

                        </div>
                        <div className='border-t col-span-3 py-2 border-[#ffffff52] w-full '>
                            <div className=' flex md:justify-center justify-between w-full py-3 md:w-fit md:gap-x-10  items-center'>
                                <VisaCardIcon />
                                <MasterCardIcon />
                                <DcardIcon />
                                <PayPalIcon />
                                <DinersClubIcon />
                                <AmericanExpressIcon />

                            </div>

                        </div>
                        <div className='md:border-t border-0  col-span-3 py-2 border-[#ffffff52] w-full '>
                            <div className=' flex justify-center flex-wrap py-3 w-fit md:gap-x-10 gap-y-5 items-center'>
                              
                                <div>
                                    <p className='md:text-[14px] text-[11px] whitespace-nowrap text-left text-white font-[500]'>© 2025 Titan Company Limited. All Rights Reserved.
                                    </p>
                                </div>
                                <div className="bank flex gap-x-10 items-center  justify-between ">
                                    <p className='text-white cursor-pointer whitespace-nowrap font-light text-[13px] md:text-[14px]' onClick={() => VisitOutside("https://www.tanishq.co.in/terms-and-conditions.html?lang=en_IN")}>Terms & Conditions</p>
                                    <p className='text-white cursor-pointer whitespace-nowrap font-light text-[13px] md:text-[14px]' onClick={() => VisitOutside("https://www.tanishq.co.in/privacy-policy.html?lang=en_IN")}> Privacy Policy </p>
                                    
                                    <p className='text-white cursor-pointer whitespace-nowrap font-light text-[13px] md:text-[14px]' onClick={() => VisitOutside("https://www.tanishq.co.in/disclaimer.html?lang=en_IN")}> Disclaimer </p>
                                </div>

                            </div>

                        </div>
                        </div>
                </div>

            </div>


        </div>



    </>
}
