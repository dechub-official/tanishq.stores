import gplay from '../assets/images/googleplay.png'
import astore from '../assets/images/appstore.png'
import b1 from '../assets/images/footer/1.png'
import b2 from '../assets/images/footer/2.png'
import b3 from '../assets/images/footer/3.png'
import b4 from '../assets/images/footer/4.png'
import b5 from '../assets/images/footer/5.png'
import b6 from '../assets/images/footer/6.png'
import b7 from '../assets/images/footer/7.png'
import b8 from '../assets/images/footer/8.png'
import b9 from '../assets/images/footer/9.png'
import { useState } from 'react'
const VisitOutside = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;

}
export default function Footer() {
    const data = [{
        head: <h1 className="text-[#832729] text-[18px] mb-2 font-[700]">Useful Links</h1>, links: <> <p className="text-[#414042] text-[16px] my-2" onClick={() => VisitOutside("https://www.tanishq.co.in/delivery-information.html?lang=en_IN")}>Delivery Information </p>
            <p className="text-[#414042] text-[16px] my-2" onClick={() => VisitOutside("https://www.tanishq.co.in/international-shipping.html?lang=en_IN")}>International Shipping </p>
            <p className="text-[#414042] text-[16px] my-2" onClick={() => VisitOutside("https://www.tanishq.co.in/payment-options.html?lang=en_IN")}>Payment Options </p>
            <p className="text-[#414042] text-[16px] my-2"  onClick={() => VisitOutside("https://www.tanishq.co.in/order/track?lang=en_IN")}>Track Your Order</p>
            <p className="text-[#414042] text-[16px] my-2" onClick={() => VisitOutside("https://www.tanishq.co.in/returns.html?lang=en_IN")}>Returns</p>
            <p className="text-[#414042] text-[16px] my-2"  onClick={() => VisitOutside("https://stores.tanishq.co.in/")}>Find a Store</p></>
    }, {
        head: <h1 className="text-[#832729] text-[18px] mb-2 font-[700]">Information</h1>, links: <> <p className="text-[#414042] text-[16px] my-2" onClick={() => VisitOutside("https://careers.titan.co.in/Recruiting/candidates/candidates_home.aspx")}>Careers</p>
            <p className="text-[#414042] text-[16px] my-2" onClick={() => VisitOutside("https://www.tanishq.co.in/blog-home.html?lang=en_IN")}>Blog </p>
            <p className="text-[#414042] text-[16px] my-2" onClick={() => VisitOutside("https://www.tanishq.co.in/offers-terms-and-conditions.html?lang=en_IN")}>Offers & Contest Details </p>
            <p className="text-[#414042] text-[16px] my-2" onClick={() => VisitOutside("https://www.tanishq.co.in/help-faqs.html?lang=en_IN")}>Help & FAQS </p>
            <p className="text-[#414042] text-[16px] my-2" onClick={() => VisitOutside("https://www.tanishq.co.in/returns.html?lang=en_IN")}>Returns</p>
            <p className="text-[#414042] text-[16px] my-2" onClick={() => VisitOutside("https://www.tanishq.co.in/about-tanishq?lang=en_IN")}> About Tanishq</p></>

    }, {
        head: <h1 className="text-[#832729] text-[18px] mb-2 font-[700]">Contact Us</h1>,
        links: <>  <a href='mailto:ecomsupport@titan.co.in'><p className="text-[#414042] text-[16px] my-2"> Write to Us</p></a> 
             <a href='tel:18002660123' ><p className="text-[#414042] text-[16px] my-2">1800-266-0123 </p></a>
            <p className="text-[#414042] text-[16px] my-2">Chat with US </p></>
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
    return <>
        <div className="w-full bg-[#F2E9E9] p-4 py-11 ">
            <div className="flex md:flex-row flex-col md:items-start items-center justify-around flex-wrap">


                <ul className="flex flex-col w-full md:hidden">
                    {data?.map((data, i) => {
                        return <li key={i} className={` my-2   border-b-[1px]  border-[#832729]`} x-data="accordion(1)">
                            <h2

                                className="flex flex-row  items-center justify-between w-full font-semibold p-3 cursor-pointer"
                                onClick={() => { handleChange(i) }}
                            >

                                <span className="ml-2">{data.head}</span>
                                {open[i] == "0" ? "+" : "-"}
                            </h2>
                            {open[i] == "fit" && <div
                                className={`rounded-[5px] overflow-hidden max-h-${open[i]} duration-500 transition-all`}
                                x-ref="tab">
                                <p className="p-3 text-gray-900">
                                    {data.links}
                                </p>
                            </div>}

                        </li>
                    })}


                </ul>


                <div className="us-link md:text-start text-center md:block hidden">
                    <h1 className="text-[#832729] text-[20px] font-[600]">Useful Links</h1>
                    <p className="text-[#414042] text-[18px] my-2 hover:text-[#832729] hover:scale-[1.01] transition-all duration-150 cursor-pointer" onClick={() => VisitOutside("https://www.tanishq.co.in/delivery-information.html?lang=en_IN")}>Delivery Information </p>
                    <p className="text-[#414042] text-[18px] my-2 hover:text-[#832729] hover:scale-[1.01] transition-all duration-150 cursor-pointer" onClick={() => VisitOutside("https://www.tanishq.co.in/international-shipping.html?lang=en_IN")}>International Shipping </p>
                    <p className="text-[#414042] text-[18px] my-2 hover:text-[#832729] hover:scale-[1.01] transition-all duration-150 cursor-pointer" onClick={() => VisitOutside("https://www.tanishq.co.in/payment-options.html?lang=en_IN")}>Payment Options </p>
                    <p className="text-[#414042] text-[18px] my-2 hover:text-[#832729] hover:scale-[1.01] transition-all duration-150 cursor-pointer" onClick={() => VisitOutside("https://www.tanishq.co.in/order/track?lang=en_IN")}>Track Your Order</p>
                    <p className="text-[#414042] text-[18px] my-2 hover:text-[#832729] hover:scale-[1.01] transition-all duration-150 cursor-pointer" onClick={() => VisitOutside("https://www.tanishq.co.in/returns.html?lang=en_IN")}>Returns</p>
                    <p className="text-[#414042] text-[18px] my-2 hover:text-[#832729] hover:scale-[1.01] transition-all duration-150 cursor-pointer" onClick={() => VisitOutside("https://stores.tanishq.co.in/")}>Find a Store</p>
                </div>
                <div className="us-link md:text-start text-center md:block hidden">
                    <h1 className="text-[#832729] text-[20px] font-[600]">Information</h1>
                    <p className="text-[#414042] text-[18px] my-2 hover:text-[#832729] hover:scale-[1.01] transition-all duration-150 cursor-pointer" onClick={() => VisitOutside("https://careers.titan.co.in/Recruiting/candidates/candidates_home.aspx")}>Careers</p>
                    <p className="text-[#414042] text-[18px] my-2 hover:text-[#832729] hover:scale-[1.01] transition-all duration-150 cursor-pointer" onClick={() => VisitOutside("https://www.tanishq.co.in/blog-home.html?lang=en_IN")}>Blog </p>
                    <p className="text-[#414042] text-[18px] my-2 hover:text-[#832729] hover:scale-[1.01] transition-all duration-150 cursor-pointer" onClick={() => VisitOutside("https://www.tanishq.co.in/offers-terms-and-conditions.html?lang=en_IN")}>Offers & Contest Details </p>
                    <p className="text-[#414042] text-[18px] my-2 hover:text-[#832729] hover:scale-[1.01] transition-all duration-150 cursor-pointer" onClick={() => VisitOutside("https://www.tanishq.co.in/help-faqs.html?lang=en_IN")}>Help & FAQS </p>
                    <p className="text-[#414042] text-[18px] my-2 hover:text-[#832729] hover:scale-[1.01] transition-all duration-150 cursor-pointer" onClick={() => VisitOutside("https://www.tanishq.co.in/returns.html?lang=en_IN")}>Returns</p>
                    <p className="text-[#414042] text-[18px] my-2 hover:text-[#832729] hover:scale-[1.01] transition-all duration-150 cursor-pointer" onClick={() => VisitOutside("https://www.tanishq.co.in/about-tanishq?lang=en_IN")}> About Tanishq</p>
                </div>
                <div className="us-link md:text-start text-center md:block hidden">
                    <h1 className="text-[#832729] text-[20px] font-[600]">Contact Us</h1>
                    <table>
                        <tr >
                        <a href='mailto:ecomsupport@titan.co.in'>
                            <td>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18" fill="none">
                                <path d="M20.7 0H2.3C0.973077 0 0 1.03846 0 2.25V15.75C0 16.9615 1.06154 18 2.3 18H20.7C21.9385 18 23 16.9615 23 15.75V2.25C23 1.03846 22.0269 0 20.7 0ZM20.7 15.75H2.3V4.5L11.5 10.125L20.7 4.5V15.75ZM11.5 7.875L2.3 2.25H20.7L11.5 7.875Z" fill="#414042" /></svg>
                        </td>
                            <td>
                               
                                    <p className="text-[#414042] ml-2 text-[18px] my-2 hover:text-[#832729] flex justify-center items-center hover:scale-[1.01] transition-all duration-150 cursor-pointer" >
                                        Write to Us
                                    </p>
                               
                            </td>
                            </a>
                        </tr>
                        <tr >
                        <a href='tel:18002660123' >
                            <td>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M15 11.4854V13.5941C15 14.3556 14.3585 15 13.6004 15C13.5421 15 13.4838 15 13.4838 15C11.3261 14.7657 9.22666 14.0042 7.41884 12.8326C5.72766 11.7782 4.26975 10.3138 3.22005 8.61506C1.9954 6.79916 1.23729 4.69038 1.00402 2.52301C0.945704 1.70293 1.52887 1.05858 2.28699 1C2.3453 1 2.3453 1 2.40362 1H4.50302C5.20281 1 5.78598 1.5272 5.90261 2.23013C6.01925 2.93305 6.13588 3.57741 6.36915 4.22176C6.5441 4.74895 6.42746 5.33473 6.07756 5.68619L5.20281 6.56485C6.1942 8.32218 7.65211 9.78661 9.40161 10.7824L10.2764 9.90376C10.6846 9.49372 11.2677 9.37657 11.7343 9.61088C12.3758 9.84519 13.0172 10.0209 13.717 10.0795C14.4751 10.1381 15 10.7824 15 11.4854Z" stroke="#414042" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                        </td>
                            <td>
                               
                            <p className="text-[#414042] ml-2 flex justify-center items-center text-[18px] my-2 hover:text-[#832729] hover:scale-[1.01] transition-all duration-150 cursor-pointer"  > 
                 1800-266-0123 </p>
                               
                            </td>
                            </a>
                        </tr>
                        <tr >
                       <a >
                            <td>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                            <path d="M16.9256 10.9533C16.9256 11.8645 16.107 12.6355 15.1395 12.6355H4.57209L1 16V2.68224C1 1.77103 1.8186 1 2.78605 1H15.214C16.1814 1 17 1.77103 17 2.68224V10.9533H16.9256Z" stroke="#414042" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        </td>
                            <td>
                               
                            <p className="text-[#414042] ml-2 flex justify-center items-center text-[18px] my-2 hover:text-[#832729] hover:scale-[1.01] transition-all duration-150 cursor-pointer"  > 
                            Chat with US </p>
                               
                            </td>
                           </a>
                        </tr>
                    </table>

                   
                    

                </div>
                <div className="us-link text-center">
                    <h1 className="text-[#832729] text-[20px] font-[600]">Download the Tanishq App Now</h1>
                    <div className="flex justify-around my-4">
                        <img src={gplay} onClick={()=>VisitOutside("https://play.google.com/store/apps/details?id=com.titancompany.tanishqapp&pli=1")} alt="" className='w-[126px] cursor-pointer' />
                        <img src={astore} onClick={()=>VisitOutside("https://apps.apple.com/in/app/tanishq-a-tata-product/id1494086207")} alt="" className='w-[126px] cursor-pointer' />
                    </div>
                    <div className="follow flex justify-around my-6 w-full items-center">
                        <p className='text-[#414042]'>Follow Us On</p>
                        <div className='w-[40%] flex justify-around'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="17" className='cursor-pointer duration-150 transition-all hover:scale-[1.01]' viewBox="0 0 9 17" fill="none" onClick={() => { VisitOutside("https://www.facebook.com/Tanishq/") }}>
                                <path d="M7.92118 0.0810547H6.99623C4.42541 0.0810547 2.33393 2.11508 2.33393 4.6152V6.52875H0.753667C0.590943 6.52875 0.458984 6.65708 0.458984 6.81533V9.10797C0.458984 9.26622 0.590943 9.39455 0.753667 9.39455H2.33381V16.4161C2.33381 16.5743 2.46577 16.7027 2.6285 16.7027H4.98596C5.14868 16.7027 5.28064 16.5743 5.28064 16.4161V9.39455H7.62549C7.78822 9.39455 7.92017 9.26622 7.92017 9.10797V6.81533C7.92017 6.65708 7.78822 6.52875 7.62549 6.52875H5.28064V4.6152C5.28064 3.69528 6.05024 2.94685 6.99611 2.94685H7.92106C8.08378 2.94685 8.21574 2.81852 8.21574 2.66027V0.367634C8.21586 0.209385 8.0839 0.0810547 7.92118 0.0810547Z" fill="#414042" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" className='cursor-pointer duration-150 transition-all hover:scale-[1.01]' viewBox="0 0 19 17" fill="none" onClick={() => { VisitOutside("https://twitter.com/TanishqJewelry") }}>
                                <path d="M0.772963 0.0098877L7.61821 9.16264L0.729736 16.6042H2.28006L8.31091 10.089L13.1837 16.6042H18.4595L11.2291 6.93663L17.6408 0.0098877H16.0905L10.5364 6.01027L6.04876 0.0098877H0.772963ZM3.05282 1.15186H5.47654L16.1793 15.4621H13.7555L3.05282 1.15186Z" fill="#414042" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className='cursor-pointer duration-150 transition-all hover:scale-[1.01]' width="20" height="21" viewBox="0 0 20 21" fill="none" onClick={() => { VisitOutside("https://www.instagram.com/tanishqjewellery/") }}>
                                <path d="M12.055 0.9729C14.5727 0.9729 16.1995 1.20015 16.9354 1.65465C18.0752 2.19571 18.8724 3.08667 19.3269 4.32752C19.6732 5.06338 19.8463 6.75512 19.8463 9.40275V12.5626C19.8463 15.1453 19.5866 16.801 19.0672 17.5296C18.6488 18.4747 17.7975 19.2177 16.5134 19.7588C15.6981 20.1051 14.0641 20.2782 11.6113 20.2782H8.3324C5.71363 20.2782 4.04714 20.0257 3.33293 19.5207C2.30851 19.0374 1.56544 18.2113 1.10373 17.0426C0.728586 16.3068 0.541016 14.6006 0.541016 11.9241V8.80757C0.541016 6.38358 0.7358 4.81809 1.12537 4.1111C1.57987 3.0001 2.37343 2.17407 3.50607 1.633C4.44392 1.19293 6.0527 0.9729 8.3324 0.9729H12.055ZM2.3049 8.02843V12.3353C2.3049 14.6223 2.49968 16.0759 2.88925 16.6963C3.19947 17.2879 3.61789 17.7136 4.14453 17.9733C4.75774 18.334 5.89038 18.5143 7.54244 18.5143H11.9359C14.129 18.5143 15.5178 18.352 16.1021 18.0274C16.8452 17.6955 17.3827 17.122 17.7145 16.3068C17.9742 15.7585 18.1041 14.1497 18.1041 11.4804V10.8961C18.1041 7.53426 17.9923 5.65495 17.7686 5.25816C17.6027 4.71709 17.3971 4.30949 17.1518 4.03535C16.8632 3.57364 16.2897 3.22374 15.4312 2.98567C14.8901 2.81975 14.028 2.73678 12.8449 2.73678H8.60293C6.19338 2.73678 4.68921 2.94239 4.09042 3.3536C3.54936 3.62053 3.14175 4.0101 2.86761 4.52231C2.49247 5.13552 2.3049 6.30423 2.3049 8.02843ZM15.3879 4.30588C15.8785 4.30588 16.2284 4.58363 16.4376 5.13913C16.4737 5.26177 16.4917 5.3772 16.4917 5.48541V5.5287C16.4917 6.12026 16.1635 6.48819 15.507 6.63248C15.4204 6.6469 15.341 6.65412 15.2689 6.65412C14.7711 6.65412 14.4176 6.35112 14.2084 5.74512C14.194 5.66577 14.1868 5.58641 14.1868 5.50705V5.35555C14.1868 4.77841 14.5691 4.42852 15.3338 4.30588H15.3879ZM10.0422 5.6802H10.3885C11.7159 5.6802 12.9315 6.27537 14.0353 7.46572C14.7928 8.46129 15.1715 9.50735 15.1715 10.6039C15.1715 12.2848 14.4284 13.6736 12.9423 14.7701C12.0838 15.304 11.2253 15.5709 10.3668 15.5709H9.99889C8.72197 15.5709 7.54605 15.0154 6.47113 13.9044C5.65592 12.9305 5.24831 11.8953 5.24831 10.7987V10.4308C5.24831 9.11057 5.83627 7.90218 7.01219 6.80562C7.98612 6.05534 8.99611 5.6802 10.0422 5.6802ZM6.97973 10.6256C6.97973 11.6788 7.43783 12.5518 8.35404 13.2443C8.93118 13.6411 9.54439 13.8395 10.1937 13.8395C11.247 13.8395 12.1199 13.3814 12.8124 12.4652C13.2092 11.8808 13.4076 11.2604 13.4076 10.6039C13.4076 9.57228 12.9495 8.70657 12.0333 8.00679C11.449 7.61001 10.8357 7.41161 10.1937 7.41161C9.15482 7.41161 8.2819 7.86972 7.5749 8.78593C7.17812 9.36307 6.97973 9.97628 6.97973 10.6256Z" fill="#414042" />
                            </svg>
                        </div>
                    </div>


                </div>

            </div>
            <div className="bank flex  justify-between md:mx-16 my-6 border-[#414042] border-t-2 pt-8 pb-2 flex-wrap-reverse ">
                <div className="bank flex justify-around items-center md:w-[70%] flex-wrap ">
                    <img src={b1} alt="" className='min-w-[50px] max-w-[50px] h-fit mr-5 my-4 md:my-0  ' />
                    <img src={b2} alt="" className='min-w-[40px] max-w-[40px] h-fit mr-5 my-4 md:my-0' />
                    <img src={b3} alt="" className='min-w-[70px] max-w-[70px] h-fit mr-5 my-4 md:my-0' />
                    <img src={b4} alt="" className='min-w-[40px] max-w-[40px] h-fit mr-5 my-4 md:my-0' />
                  
                    <img src={b5} alt="" className='min-w-[70px] max-w-[70px] h-fit mr-5 my-4 md:my-0' />
                    <img src={b6} alt="" className='min-w-[80px] max-w-[80px] h-fit mr-5 my-4 md:my-0' />
                    <img src={b7} alt="" className='min-w-[80px] max-w-[80px] h-fit mr-5 my-4 md:my-0' />
                    <img src={b8} alt="" className='min-w-[60px] max-w-[60px] h-fit mr-5 my-4 md:my-0' />
                    <img src={b9} alt="" className='min-w-[80px] max-w-[80px] h-fit mr-5 my-4 md:my-0' />
                    {/* <img src={b9} alt="" /> */}



                </div>
                <div>
                    <p className='text-[13px] text-center text-[#832729] font-[500]'>ⓒ 2023 Titan Company Limited. All Rights Reserved. <br /><span onClick={()=>VisitOutside("https://www.tanishq.co.in/terms-and-conditions.html?lang=en_IN")}>Terms & Conditions</span> |<span onClick={()=>VisitOutside("https://www.tanishq.co.in/privacy-policy.html?lang=en_IN")}> Privacy Policy </span> </p>
                </div>
            </div>
        </div>



    </>
}