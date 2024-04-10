import { useState } from "react";
import Button from "./button";
import ReactGA from 'react-ga4'
import { useNavigate } from "react-router-dom";
import map from '../assets/images/detailed/buttons/map.png'
import calender from '../assets/images/detailed/buttons/calender.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
export default function StorePlate({data}) {
    const Navigate = useNavigate()
    const [Clicks, setClicks] = useState({ Bookan: 0, getDir: 0 })
    const BookAppointment = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;

    }
    const handleAppPopup = () => {
        console.log(window.location)
       window.location.href=window.location.origin+window.location.pathname+"#bookAnAppointment"

    }
    return <>
     <div className="box bg-[#F2F2F2] md:min-w-[500px] min-w-[90%] sm:min-w-[310px] max-w-[310px] md:max-w-[500px] min-h-[370px] md:max-h-[370px]  my-4 px-2  md:px-8 p-4 rounded-[22px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                                <h2 className='text-[#832729] py-2 md:text-[18px] text-[15px] font-[700]'>{`Tanishq Jewellery - ${data.storeName}`}</h2>
                                <p className='pb-4 font-[700] text-[#832729]  border-b-[#832729] border-b-[3px] cursor-pointer' onClick={() => Navigate(`/store-locator/jewellery-stores/${data.storeState.toLowerCase().replace(" ", "-")}/${data.storeCity.toLowerCase().replace(" ", "-")}/${data.storeName.toLowerCase().split("- ")[1] ? data.storeName.toLowerCase().split("- ")[1].replace(/ /g, "-").replace(",", "-") : data.storeName.toLowerCase().replace(" ", "-").replace(",", "-")}-${data.storeCode}`)}>View Store Page{">>>"}</p>
                                <p className='my-2 text-[15px] max-w-[300px] min-h-[60px]  font-[500]'>{data.storeAddress}</p>
                                <p className='my-2 text-[15px] max-w-[300px] font-[500]'>Phone: {data.storePhoneNoOne}</p>
                                <p className='my-2 py-2 pb-0  mb-2 text-[15px] max-w-[300px] font-[500]'>{`Working Hours: ${data.storeOpeningTime?.replace(/.\d{2}\s/, ' ')} - ${data.storeClosingTime?.replace(/.\d{2}\s/, ' ')}`}</p>
                               <p className="border-b-[#832729] mb-2 border-b-[3px]"></p>
                               {/* <p  className='my-2 inline  w-full text-[15px]  font-[500]'><svg width="17" height="18" viewBox="0 0 17 18" fill="none" className="mr-1 inline-block mb-1" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5367 9.22035C15.4683 9.0803 15.4683 8.91968 15.5367 8.77967L16.1712 7.48167C16.5245 6.75896 16.2446 5.89756 15.534 5.52054L14.2578 4.84338C14.1201 4.77035 14.0257 4.64037 13.9987 4.48689L13.7491 3.06383C13.6101 2.27151 12.8772 1.73909 12.0809 1.85176L10.6504 2.05411C10.496 2.07591 10.3433 2.02627 10.2313 1.91792L9.19293 0.913411C8.61475 0.354075 7.709 0.354042 7.13085 0.913411L6.09246 1.91802C5.98042 2.0264 5.82774 2.07594 5.67337 2.05421L4.24287 1.85186C3.44626 1.73912 2.71361 2.27161 2.57463 3.06393L2.32503 4.48693C2.29808 4.64043 2.20369 4.77038 2.06603 4.84345L0.789796 5.52061C0.0792124 5.89759 -0.200688 6.75906 0.152577 7.48177L0.787038 8.77973C0.855485 8.91978 0.855485 9.0804 0.787038 9.22042L0.152543 10.5184C-0.200722 11.2411 0.0791791 12.1025 0.789762 12.4795L2.06599 13.1567C2.20369 13.2297 2.29808 13.3597 2.32503 13.5132L2.57463 14.9362C2.70115 15.6575 3.31963 16.1633 4.03045 16.1633C4.10046 16.1633 4.1715 16.1584 4.2429 16.1483L5.6734 15.9459C5.82767 15.924 5.98045 15.9737 6.09249 16.0821L7.13085 17.0866C7.41999 17.3663 7.79087 17.5061 8.16187 17.5061C8.53278 17.5061 8.90389 17.3662 9.19289 17.0866L10.2313 16.0821C10.3433 15.9737 10.496 15.9242 10.6504 15.9459L12.0809 16.1483C12.8776 16.261 13.6101 15.7285 13.7491 14.9362L13.9987 13.5132C14.0257 13.3597 14.1201 13.2297 14.2578 13.1567L15.534 12.4795C16.2446 12.1025 16.5245 11.2411 16.1712 10.5183L15.5367 9.22035ZM15.0741 11.6127L13.7979 12.2899C13.391 12.5058 13.1119 12.8899 13.0323 13.3436L12.7827 14.7666C12.7357 15.0347 12.4879 15.2148 12.2183 15.1767L10.7878 14.9744C10.3316 14.9097 9.88019 15.0566 9.54908 15.3768L8.51068 16.3813C8.31511 16.5705 8.00867 16.5705 7.81303 16.3813L6.77466 15.3768C6.49483 15.1061 6.12901 14.9594 5.7471 14.9594C5.67712 14.9594 5.60658 14.9643 5.53594 14.9743L4.10544 15.1767C3.83611 15.2148 3.58807 15.0347 3.54102 14.7666L3.29139 13.3435C3.21178 12.8898 2.93274 12.5057 2.52582 12.2899L1.24958 11.6127C1.00916 11.4851 0.914462 11.1937 1.03398 10.9492L1.66847 9.6512C1.87076 9.23733 1.87076 8.76265 1.66847 8.34878L1.03398 7.05079C0.914462 6.80627 1.00916 6.51484 1.24958 6.38729L2.52582 5.71013C2.93271 5.49419 3.21178 5.11016 3.29136 4.65642L3.54096 3.23339C3.588 2.96532 3.83581 2.78523 4.10537 2.82331L5.53588 3.02566C5.99191 3.09022 6.44349 2.94345 6.7746 2.62318L7.81299 1.61868C8.00857 1.42949 8.31501 1.42949 8.51065 1.61868L9.54902 2.62318C9.88012 2.94349 10.3316 3.09022 10.7877 3.02566L12.2182 2.82331C12.4876 2.7852 12.7356 2.96532 12.7827 3.23339L13.0323 4.65645C13.1119 5.11019 13.3909 5.49426 13.7978 5.71013L15.0741 6.38729C15.3145 6.51484 15.4092 6.80627 15.2897 7.05079L14.6552 8.34875C14.4529 8.76259 14.4529 9.23733 14.6552 9.65117L15.2897 10.9491C15.4092 11.1937 15.3145 11.4852 15.0741 11.6127Z" fill="#444444"/>
<path d="M11.7476 5.41566C11.556 5.22408 11.2453 5.22408 11.0538 5.41566L4.57826 11.8912C4.38667 12.0828 4.38667 12.3934 4.57826 12.585C4.67405 12.6808 4.79961 12.7287 4.92514 12.7287C5.05067 12.7287 5.17627 12.6808 5.27203 12.585L11.7475 6.1095C11.9392 5.91788 11.9392 5.60728 11.7476 5.41566Z" fill="#444444"/>
<path d="M6.20022 4.58411C5.20834 4.58411 4.40137 5.39108 4.40137 6.38296C4.40137 7.37484 5.20834 8.18181 6.20022 8.18181C7.1921 8.18181 7.99907 7.37484 7.99907 6.38296C7.99907 5.39108 7.1921 4.58411 6.20022 4.58411ZM6.20022 7.2006C5.74937 7.2006 5.38258 6.83381 5.38258 6.38293C5.38258 5.93207 5.74937 5.56529 6.20022 5.56529C6.65107 5.56529 7.01789 5.93207 7.01789 6.38293C7.01786 6.83381 6.65107 7.2006 6.20022 7.2006Z" fill="#444444"/>
<path d="M10.1236 9.81726C9.13168 9.81726 8.32471 10.6242 8.32471 11.6161C8.32471 12.608 9.13168 13.415 10.1236 13.415C11.1154 13.415 11.9224 12.608 11.9224 11.6161C11.9224 10.6242 11.1154 9.81726 10.1236 9.81726ZM10.1236 12.4338C9.67271 12.4338 9.30589 12.067 9.30589 11.6161C9.30589 11.1653 9.67268 10.7985 10.1236 10.7985C10.5744 10.7985 10.9412 11.1653 10.9412 11.6161C10.9412 12.067 10.5744 12.4338 10.1236 12.4338Z" fill="#444444"/>
</svg>
<span className="text-[#832729] md:text-[15px] text-[13px]">Upto <strong>20% </strong>off *</span> <span className="md:text-[15px] text-[13px] max-w-[300px] font-[500]">on Diamond Jewellery value</span>
</p>  */}
 <div className="w-full bg-[#F2F2F2] text-center text-white flex  items-center   "  >


{/* <Swiper
    slidesPerView={1}
    spaceBetween={30}

    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        infinite: true
    }}

    loop={true}
    loopFillGroupWithBlank={true}
    modules={[Autoplay]}
    breakpoints={{


    }}
    direction='vertical'
    className="mySwiper !bg-[#a37f29] text-[white] font-[600] max-h-[30px]  !my-auto"
>


    <SwiperSlide className='!bg-[#a37f29] !items-start text-[white] font-[600]' >   <p className='bg-[#a37f29] text-[white] font-[600] text-[13.5px] px-2 md:text-[14px]   md:w-auto'> Exchange gold bought from any jeweller. </p></SwiperSlide>
    <SwiperSlide className='!bg-[#a37f29] !items-start text-[white] font-[600]' >   <p className='bg-[#a37f29] text-[white] font-[600] text-left text-[13.5px] px-2 md:text-[14px]   md:w-auto'>Get 100%* value. Trusted by over 2.6 Million Indians. </p></SwiperSlide>
  

</Swiper> */}
</div>
                                <div className="flex mb-2 mt-3  ">

                                    <div className="flex w-[100%] ">
                                        <div className="w-[50%] flex ">
                                            <Button name="Get Directions" iconstyle={"min-w-[15px] max-w-[15px] mr-1 w-[12px]"} style={'text-white bg-[#832729] font-500 text-[10px]  px-2'} onclick={() => {
                                                ReactGA.event({
                                                    category: data.storeLocationLink,
                                                    value: Clicks.getDir + 1,
                                                    action: "Get Directions",
                                                });
                                                setClicks({ ...Clicks, getDir: Clicks.getDir + 1 })
                                                BookAppointment(data.storeLocationLink)
                                            }}
                                                icon={map}
                                            />
                                        </div>
                                        <div className="w-[60%] flex ">
                                            <Button name="Book an Appointment" iconstyle={"min-w-[14px] max-w-[14px]  mr-1"} style={'whitespace-nowrap text-white bg-[#832729] font-500 text-[10px] px-1'} onclick={() => {
                                                ReactGA.event({
                                                    category: "Book An Appointment",
                                                    value: Clicks.Bookan + 1,
                                                    action: "Book An Appointment",
                                                });
                                                setClicks({ ...Clicks, Bookan: Clicks.Bookan + 1 })
                                                if(localStorage.getItem("nav-hide")){
                                                    handleAppPopup()
                                                  }
                                                  else
                                                BookAppointment("https://www.tanishq.co.in/book-an-appointment")
                                            }}
                                                icon={calender} />
                                        </div>

                                    </div>
                                </div>
                            </div>
    </>
}