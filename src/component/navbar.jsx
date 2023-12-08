import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import gplay from '../assets/images/googleplay.png'
import astore from '../assets/images/appstore.png'
import qr from '../assets/images/getapp_qr.png'
import blog_img from '../assets/images/navbar/blogs.png'
import cart_img from '../assets/images/navbar/cart.png'
import diamonds_img from '../assets/images/navbar/diamonds.png'
import profile_img from '../assets/images/navbar/profile.png'
import shop_img from '../assets/images/navbar/shop.png'
import store_img from '../assets/images/navbar/stores.png'
import wishlist_img from '../assets/images/navbar/wishlist.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import CountdownTimer from './countdown'
import { useState } from 'react'
export default function NavBar() {
  const nav = useNavigate()
  // const[beginDate,setbeginDate]=useState({time:'2023-11-09T22:19:00',text:"begins"})
  const [beginDate, setbeginDate] = useState({ time: '2023-11-10T12:35:00', text: "begins" })

  const updatTimer = () => {
    const currentDate = new Date();

    // Extract the individual components of the date
    // const year = currentDate.getFullYear();
    // const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
    // const day = currentDate.getDate();
    // const hours = currentDate.getHours();
    // const minutes = currentDate.getMinutes();
    // if(day==10&&month==11&&year==2023&&hours>=12&&minutes>=35){
    setbeginDate({ time: '2023-11-11T01:57:00', text: "ends" })

    // }
  }
  const stopScorl = (e) => {

    if (e.target.checked) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden"
      // document.getElementById("menuToggle").style.top = "-30px"
      document.getElementById("menuToggle").style.rigth = "0px"
    }
    else {
      document.getElementsByTagName("body")[0].style.overflow = "scroll"
      document.getElementById("menuToggle").style.top = "20px"
    }
  }
  const VisitOutside = (url) => {
    const newWindow = window.open(url, 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;

  }
  return <>

    {/* Sticky Header */}
    <div className="sticky top-0 max-w-[100%] overflow-hidden z-50">

       {/* --------------------------------- */}
    {/* Offer slider strip */}
        {/* --------------------------------------- */}


    {/* <div className="w-full text-center text-black bg-[linear-gradient(90deg,rgba(75,37,37,1)0%,rgba(200,8,123,1)66%,rgba(184,106,106,1)100%)] flex justify-center items-center text-[13.5px] px-2 md:text-[14px] font-[500]  py-1 "  >
    <Swiper
    style={{backgroundColor:"linear-gradient(90deg,rgba(75,37,37,1)0%,rgba(200,8,123,1)66%,rgba(184,106,106,1)100%)",maxHeight:"35px"}}
      slidesPerView={2}
      spaceBetween={30}
     direction='vertical'
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        infinite: true
      }}
centeredSlides={true}
      loop={true}
      loopFillGroupWithBlank={true}
      modules={[Autoplay]}
      breakpoints={{

       
      }}

     
    >



      <SwiperSlide  style={{backgroundColor:"transparent",fontSize:"18px"}} >    <p className='text-white md:w-auto bg-transparent  text-[13.5px] px-2 md:text-[16px] font-[600]  py-1 '> festive offer ending on Nov 15th 11:59PM  </p></SwiperSlide>

     
      <SwiperSlide   style={{backgroundColor:"transparent",fontSize:"18px"}}>   <p className='text-white md:w-auto  bg-transparent  text-[13.5px] px-2 md:text-[16px] font-[600]  py-1 '>Next day delivery on select pincodes.* <u className='font-[600] cursor-pointer' onClick={() => { window.location.href = "https://www.tanishq.co.in/festive?lang=en_IN" }}> Buy now!</u></p> </SwiperSlide>
      
      <SwiperSlide  style={{backgroundColor:"transparent",fontSize:"18px"}} >    <p className='text-white md:w-auto bg-transparent  text-[13.5px] px-2 md:text-[16px] font-[600]  py-1 '> festive offer ending on Nov 15th 11:59PM  </p> </SwiperSlide>

      <SwiperSlide   style={{backgroundColor:"transparent", fontSize:"18px"}}>   <p className='text-white md:w-auto text-[13.5px] px-2 md:text-[16px] font-[600]  py-1'>Next day delivery on select pincodes.* <u className='font-[600] cursor-pointer' onClick={() => { window.location.href = "https://www.tanishq.co.in/festive?lang=en_IN" }}> Buy now!</u></p> </SwiperSlide>
     

     
    </Swiper>
    </div> */}

    {/* <div className="w-full text-center text-white bg-[#832729] flex justify-center items-center text-[13.5px] px-2 md:text-[14px] font-[500]  py-1 "  >
      <p className=' md:w-auto'> Diwali magic awaits - up to 20% off on making charges. <u className='font-[600] cursor-pointer' onClick={() => { window.location.href = "https://www.tanishq.co.in/festive?lang=en_IN" }}> Buy now!</u></p>
    </div> */}
    <div className="w-full flex justify-between bg-[#F2E9E9] p-2 ">

      <div className="w-[30%] justify-between flex">
        <div className="md:hidden block">







          <div id="menuToggle">

            <input type="checkbox" onChange={stopScorl} />
            <span></span>
            <span></span>
            <span></span>

            <ul id="menu" className='bg-[#FFF4F4]'>
              <li className='mx-6 flex gap-[7px] cursor-pointer border my-2 justify-left px-6   px-1 py-1 rounded-[9px] border-solid border-[#832729] items-center'><Link to={"https://www.tanishq.co.in/shop/diamond?lang=en_IN"}><p className='  hover:scale-[1.2] my-2 transition-all flex duration-150  text-[18px] text-[#832729] font-[400]  cursor-pointer af-bl'>
                <svg className='mx-2 mr-3' xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 29 23" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9407 22.9976L0.271403 7.12943H9.24186L13.9407 22.9976ZM14.4386 0.0263432L10.8302 6.04456H18.3138L14.4386 0.0263432ZM19.3947 6.00385L15.3803 0H22.8026L19.3947 6.00385ZM9.82951 6.06133L13.3459 0H5.80802L9.82951 6.06133ZM24.0038 0.713661L20.4543 6.04456H29L24.0038 0.713661ZM5.25342 0.713661L8.98462 6.04456H0L5.25342 0.713661ZM10.5564 7.08153H18.4932L14.6416 22.7605L10.5564 7.08153ZM15.3189 23L28.8254 7.12943H19.8549L15.3189 23Z" fill="#832729" />
                </svg>
                Diamonds</p></Link>
                {/* <div className='border-b-2 my-2 mx-2 rounded-[20px] bg-[#F2DFDF]  h-[5px]'></div> */}
              </li>
              <li className='mx-6 flex gap-[7px] cursor-pointer border my-2 justify-left px-6   px-1 py-1 rounded-[9px] border-solid border-[#832729] items-center'><Link to="https://www.tanishq.co.in/blog-home.html?lang=en_IN"><p className='  hover:scale-[1.2] my-2 transition-all flex duration-150  text-[15px] text-[#832729] font-[400]  cursor-pointer af-bl' >
                <img src={blog_img} className='w-[20px] mr-3 h-[20px] mx-3  ' alt="" />
                Blogs</p>
              </Link>
                {/* <div className='border-b-2 my-2 mx-2 rounded-[20px] bg-[#F2DFDF]  h-[5px]'></div> */}
              </li>
              <li className='mx-6 flex gap-[7px] cursor-pointer border my-2 justify-left px-6   px-1 py-1 rounded-[9px] border-solid border-[#832729] items-center'><Link to="/"><p className='  hover:scale-[1.2] my-2 transition-all flex duration-150  text-[15px] text-[#832729] font-[400]  cursor-pointer af-bl' >
                <img src={store_img} className='w-[20px] mr-3 h-[20px] mx-2 ' alt="" />
                Stores</p>
              </Link>
                <div className='border-b-2 my-2 mx-2 rounded-[20px] bg-[#F2DFDF]  h-[5px]'></div>
              </li>
              <li className='mx-6 flex gap-[7px] cursor-pointer border my-2 justify-left px-6   px-1 py-1 rounded-[9px] border-solid border-[#832729] items-center'><Link to="https://www.tanishq.co.in/myaccount?lang=en_IN#Wishlist"><p className=' hover:scale-[1.2] my-2 transition-all flex duration-150  text-[15px] text-[#832729] font-[400]  cursor-pointer af-bl'>
                <svg className='mx-2 mr-3' xmlns="http://www.w3.org/2000/svg" width="21" height="23" viewBox="0 0 27 23" fill="none">
                  <path d="M24.5866 2.30456C27.8045 5.38064 27.8045 10.3709 24.5866 13.447L15.368 22.2597C14.3358 23.2468 12.6642 23.2468 11.6321 22.2598L2.41341 13.447C-0.80447 10.3709 -0.80447 5.38068 2.41341 2.3046C5.45001 -0.598163 10.2665 -0.758777 13.5 1.82279C16.7335 -0.758777 21.55 -0.5982 24.5866 2.30456ZM12.9488 3.37525C10.3446 0.885805 6.12 0.885805 3.51578 3.37525C0.91504 5.86138 0.91504 9.89013 3.51578 12.3763L12.7346 21.1892C13.1565 21.5926 13.8435 21.5926 14.2655 21.189L23.4842 12.3763C26.0849 9.89013 26.0849 5.86138 23.4842 3.37521C20.88 0.885768 16.6554 0.885768 14.0511 3.37521C13.746 3.66687 13.2539 3.66691 12.9488 3.37525Z" fill="#832729" />
                </svg>
                WishList</p></Link>
                <div className='border-b-2 my-2 mx-2 rounded-[20px] bg-[#F2DFDF]  h-[5px]'></div>
              </li>

              <li className='mx-6'>{/*<div className="box flex flex-col items-center mx-6">
                <img src={qr} className='w-[150px] mx-1' alt="" />
                <p className='  hover:scale-[1.2] my-2 transition-all flex duration-150  text-[15px] text-[#832729] font-[400]  cursor-pointer af-bl' >GET THE APP</p>
              </div> */}
                <div className='border-b-2 my-2 mx-2 rounded-[20px] bg-[#F2DFDF]  h-[5px]'></div>
                <p className="text-neutral-700 my-2 text-base font-semibold font-['Nunito'] underline">Categories to Explore</p>
                <div className="flex my-5 items-center gap-[7px] " onClick={() => VisitOutside("https://www.tanishq.co.in/festive?lang=en_IN")}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                    <path d="M10.1639 9.89816C10.1174 9.76908 9.97506 9.70217 9.84601 9.74868C9.71694 9.7952 9.65002 9.93753 9.69653 10.0666C9.69768 10.0697 9.69889 10.0729 9.70017 10.076C9.92671 10.6672 9.94311 11.1193 9.74488 11.318C9.50443 11.558 8.90552 11.483 8.14243 11.1178C7.1208 10.5874 6.19218 9.89437 5.39285 9.06601C3.4471 7.12001 2.64426 5.21053 3.14082 4.71397C3.29927 4.58884 3.50522 4.54077 3.70271 4.58282C3.83951 4.59288 3.95859 4.4901 3.96865 4.35329C3.97837 4.22105 3.88252 4.10448 3.7509 4.08849C3.40552 4.02738 3.05117 4.12808 2.78957 4.36174C1.87942 5.27164 3.27073 7.64514 5.0416 9.41626C5.88062 10.2845 6.85554 11.0102 7.92806 11.5647C8.12228 11.6577 3.81815 7.25729 3.81815 7.25729L2.78957 5.62066C3.07265 3.52979 2.32715 4.87516 2.32715 5.76629C2.30588 5.63076 2.16748 6.76961 2.03194 6.79088C1.89641 6.81215 1.80375 6.93927 1.82502 7.0748C1.86402 7.32321 1.91619 7.57161 1.98002 7.81455C2.55204 9.98184 4.05864 11.7823 6.09111 12.7275L3.18627 13.8267C3.17295 13.8044 3.15619 13.7845 3.13659 13.7675C2.39834 13.1748 1.93513 12.3056 1.85483 11.3623L1.73957 9.96647C1.7305 9.83125 2.11528 7.40773 1.98002 7.41679L1.83047 7.10895C1.69372 7.11982 1.27006 9.78177 1.28092 9.91851L1.24276 10.0077L1.36001 11.403C1.44732 12.4113 1.91768 13.3478 2.67431 14.0199L2.4151 13.7675L1.58164 11.7303C1.61415 11.5969 1.49337 9.80723 1.36001 9.77472C1.22665 9.74221 0.524347 13.0241 0.491838 13.1575L0.00720166 15.1447C-0.0254634 15.2779 0.0560751 15.4124 0.189344 15.4451C0.238217 15.4571 0.289544 15.4539 0.336585 15.4361L9.52753 11.9584C9.54215 11.9513 9.55597 11.9426 9.56876 11.9326C9.76767 11.902 9.95208 11.8101 10.0961 11.6695C10.3423 11.4234 10.5541 10.9159 10.1639 9.89816Z" fill="#832729" />
                    <path d="M12.5083 9.25741C11.1654 8.7547 9.71403 8.61376 8.29955 8.84878L7.41201 8.99783C7.27728 9.02372 7.18906 9.15392 7.21496 9.28865C7.23999 9.41881 7.36279 9.5064 7.49398 9.48768L8.38128 9.33988C9.70968 9.11902 11.0728 9.25148 12.3339 9.72391C12.3619 9.73382 12.3914 9.73878 12.4211 9.73857C12.5583 9.73878 12.6697 9.62778 12.6699 9.49057C12.6701 9.3867 12.6056 9.29371 12.5083 9.25741Z" fill="#832729" />
                    <path d="M6.0332 2.2336C6.00587 2.09916 5.87475 2.01231 5.7403 2.03963C5.60585 2.06696 5.519 2.19808 5.54632 2.33253C5.54691 2.33551 5.5476 2.33846 5.54831 2.34141C5.86273 3.7461 5.73316 5.2138 5.17744 6.54167L4.81627 7.40835C4.76407 7.53464 4.82366 7.67936 4.94966 7.73227C4.97984 7.74497 5.01229 7.75146 5.04505 7.7514C5.14531 7.7514 5.23573 7.69116 5.27432 7.59863L5.63575 6.73294C6.23114 5.31055 6.37003 3.73834 6.0332 2.2336Z" fill="#832729" />
                    <path d="M5.46556 1.54134C5.73994 1.54134 5.96237 1.31892 5.96237 1.04454C5.96237 0.770158 5.73994 0.547729 5.46556 0.547729C5.19118 0.547729 4.96875 0.770158 4.96875 1.04454C4.96875 1.31892 5.19118 1.54134 5.46556 1.54134Z" fill="#832729" />
                    <path d="M14.988 6.08359C14.9588 5.99373 14.8811 5.92827 14.7876 5.91467L14.0585 5.8086L13.7333 5.1481C13.6609 5.02504 13.5024 4.98403 13.3793 5.0565C13.3415 5.07876 13.31 5.11028 13.2877 5.1481L12.9611 5.8086L12.232 5.91467C12.0962 5.93426 12.002 6.06024 12.0216 6.19602C12.0294 6.25008 12.0548 6.30004 12.0939 6.3382L12.6212 6.8524L12.497 7.57848C12.4732 7.71358 12.5634 7.84244 12.6985 7.86629C12.7529 7.87588 12.8089 7.86709 12.8577 7.84129L13.5098 7.4975L14.1618 7.8403C14.2833 7.90414 14.4335 7.85747 14.4973 7.73603C14.5227 7.68768 14.5315 7.63232 14.5223 7.57848L14.3981 6.8524L14.9257 6.3382C14.9932 6.27209 15.0174 6.17342 14.988 6.08359Z" fill="#832729" />
                    <path d="M10.4508 3.59414L10.4503 3.59502L10.2668 3.61428C9.2403 3.7235 8.30423 4.25124 7.67943 5.07301C7.59914 5.18426 7.62424 5.33953 7.73549 5.41982C7.84297 5.49739 7.99241 5.47691 8.07505 5.37328C8.5267 4.78107 9.16803 4.36197 9.89175 4.18609C9.76533 4.58702 9.81716 5.02292 10.0341 5.38302C10.334 5.8426 10.9496 5.97204 11.4092 5.67215C11.8688 5.37227 11.9982 4.75662 11.6983 4.29704C11.5712 4.11487 11.4036 3.96457 11.2087 3.85791C11.6714 3.80232 12.1251 4.01661 12.3761 4.40933C12.4481 4.52614 12.6011 4.56253 12.7179 4.49059C12.8347 4.41865 12.8711 4.26563 12.7991 4.14882C12.7968 4.14508 12.7944 4.14141 12.7919 4.13777C12.284 3.35745 11.2506 3.1175 10.4508 3.59414ZM11.2823 4.56792C11.4334 4.79698 11.3702 5.10512 11.1411 5.25617C10.9121 5.40723 10.6039 5.34404 10.4529 5.11499C10.452 5.11371 10.4512 5.11242 10.4503 5.11114C10.306 4.86978 10.2784 4.57607 10.3755 4.3121C10.3945 4.27331 10.4232 4.24007 10.4587 4.21552C10.6598 4.08428 11.1141 4.31015 11.2823 4.56792Z" fill="#832729" />

                  </svg>
                  <p className='w-[135px] h-5 text-red-900 text-[17px] font-medium  capitalize'>Festive delights</p>
                </div>
                <div className="flex my-5 items-center gap-[7px] " onClick={() => VisitOutside("https://www.tanishq.co.in/shop/special-coins?lang=en_IN")}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                    <path d="M0.1 8C0.1 3.91958 3.41988 0.6 7.50031 0.6C11.5804 0.6 14.9 3.91957 14.9 8C14.9 12.0801 11.5804 15.4 7.50031 15.4C3.41988 15.4 0.1 12.0801 0.1 8Z" fill="#832729" stroke="#832729" stroke-width="0.2" />
                    <path d="M0.683008 8.00015C0.683008 4.24131 3.7413 1.18301 7.50046 1.18301C11.2593 1.18301 14.3173 4.2413 14.3173 8.00015C14.3173 11.759 11.2593 14.8173 7.50046 14.8173C3.7413 14.8173 0.683008 11.759 0.683008 8.00015Z" fill="white" stroke="#832729" stroke-width="0.2" />
                    <path d="M1.46328 7.97547C1.46328 4.66042 4.16033 1.96365 7.47568 1.96365C10.7902 1.96365 13.4873 4.66041 13.4873 7.97547C13.4873 11.2905 10.7906 13.9877 7.47568 13.9877C4.16034 13.9877 1.46328 11.2905 1.46328 7.97547Z" fill="#832729" stroke="#832729" stroke-width="0.2" />
                    <path d="M7.40909 4.65976L7.34693 4.67356L7.33314 4.73573L7.22904 5.20524L7.1246 4.73567L7.11079 4.67356L7.04868 4.65976L6.57937 4.5555L7.04898 4.45122L7.11112 4.43742L7.12492 4.37527L7.22919 3.90574L7.33346 4.37527L7.34726 4.43741L7.4094 4.45122L7.87871 4.55547L7.40909 4.65976Z" fill="white" stroke="white" stroke-width="0.2" />
                    <path d="M11.3279 9.32668L11.2657 9.34048L11.2519 9.40264L11.1657 9.79123L11.0793 9.4026L11.0655 9.34047L11.0034 9.32668L10.6149 9.24045L11.0034 9.15407L11.0655 9.14027L11.0793 9.07816L11.1657 8.68976L11.2519 9.07843L11.2657 9.1406L11.3279 9.15439L11.7159 9.24054L11.3279 9.32668Z" fill="white" stroke="white" stroke-width="0.2" />
                    <path d="M5.81796 12.104L5.7558 12.1178L5.74202 12.1799L5.66985 12.5053L5.59755 12.1799L5.58374 12.1178L5.52162 12.104L5.19584 12.0316L5.52162 11.9592L5.58374 11.9454L5.59755 11.8833L5.66985 11.5579L5.74202 11.8832L5.7558 11.9454L5.81796 11.9592L6.14386 12.0316L5.81796 12.104Z" fill="white" stroke="white" stroke-width="0.2" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.17349 9.8605C7.17349 9.72889 7.28437 9.63019 7.43229 9.63019C7.56174 9.63019 7.68198 9.72889 7.68198 9.8605C7.68198 9.98382 7.56174 10.0908 7.43229 10.0908C7.28437 10.0908 7.17349 9.98382 7.17349 9.8605ZM9.29061 7.00661C9.35533 6.73523 9.16116 6.48848 8.85607 6.48848H8.024C7.8114 6.49671 7.52483 6.34045 7.52483 6.34045V7.58235C7.52483 8.84065 8.30141 9.37524 8.6619 9.42457C8.72662 9.44927 8.77287 9.43282 8.6897 9.37524C8.19964 9.09562 7.91308 8.42942 7.88535 7.86194V6.72702C7.98708 6.78455 8.18116 6.79278 8.18116 6.79278H8.92079C9.11496 6.79278 9.21668 6.85036 9.29061 7.00661ZM5.56478 7.00661C5.50005 6.73523 5.70352 6.48848 5.99931 6.48848H6.83143C7.05328 6.49671 7.33065 6.34045 7.33065 6.34045V7.58235C7.33065 8.84065 6.55402 9.37524 6.19348 9.42457C6.12876 9.44927 6.08256 9.43282 6.16578 9.37524C6.65574 9.09562 6.94236 8.42942 6.97003 7.86194V6.72702C6.8684 6.78455 6.67422 6.79278 6.67422 6.79278H5.94384C5.74972 6.79278 5.64803 6.85036 5.56478 7.00661Z" fill="white" />
                  </svg>
                  <p className='w-[135px] h-5 text-red-900 text-[17px] font-medium  capitalize'>exclusive coins</p>
                </div>
                <div className="flex my-5 items-center gap-[7px] " onClick={() => VisitOutside("https://www.tanishq.co.in/gifting-guide?lang=en_IN")}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                    <path d="M8.25643 6.76482C8.59994 6.51808 8.87985 6.19319 9.07304 5.81695C9.26624 5.44071 9.36719 5.02392 9.36755 4.60098C9.36755 3.32448 7.57081 1.26617 5.80736 0.522147C5.75414 0.499687 5.69529 0.494145 5.63881 0.506276C5.58232 0.518406 5.53094 0.54762 5.49162 0.589953C5.45231 0.632287 5.42698 0.68569 5.41905 0.742916C5.41113 0.800142 5.42101 0.85842 5.44734 0.909841C5.96212 1.91591 5.406 2.52979 4.81738 3.17938C4.42775 3.60954 4.02478 4.05418 4.02478 4.60098C4.02514 5.02394 4.1261 5.44075 4.31932 5.81699C4.51255 6.19323 4.7925 6.51812 5.13606 6.76482C0.93883 7.07932 0 8.68527 0 10.0559C0 12.5217 2.98685 15.5 6.69633 15.5C10.4058 15.5 13.3928 12.5217 13.3928 10.0559C13.3928 8.68527 12.4535 7.07932 8.25643 6.76482ZM12.0451 12.1988C9.91805 11.4316 8.14028 10.3638 6.89725 9.10128C6.87106 9.07468 6.83983 9.05355 6.80539 9.03913C6.77095 9.0247 6.73398 9.01727 6.69665 9.01727C6.65931 9.01727 6.62235 9.0247 6.58791 9.03913C6.55347 9.05355 6.52224 9.07468 6.49604 9.10128C5.25253 10.3635 3.47477 11.4315 1.34824 12.1986C1.18238 11.9683 1.03705 11.7238 0.913896 11.468C3.55536 10.5542 5.5836 9.17013 6.69649 7.52268C7.80922 9.17013 9.83761 10.5542 12.4792 11.468C12.356 11.7238 12.2108 11.9683 12.0451 12.1988ZM6.69633 6.26275C6.48224 5.8575 6.36475 5.40824 6.35303 4.95006C6.36479 4.49153 6.48245 4.04192 6.69681 3.63641C6.911 4.04192 7.02824 4.49159 7.0393 4.95006C7.02749 5.40813 6.91012 5.85746 6.69633 6.26275ZM4.58782 4.60146C4.58782 4.27184 4.902 3.92501 5.23467 3.55806C5.72017 3.02205 6.35287 2.32388 6.18702 1.34644C7.60266 2.18907 8.80451 3.75658 8.80451 4.60146C8.80388 5.08707 8.63591 5.55762 8.32889 5.93386C8.02186 6.3101 7.59455 6.56902 7.11893 6.66701C7.42128 6.14419 7.58725 5.55369 7.60153 4.9499C7.5778 4.22155 7.34112 3.51613 6.92074 2.92086C6.89454 2.88587 6.86054 2.85746 6.82144 2.8379C6.78235 2.81833 6.73924 2.80815 6.69552 2.80815C6.65181 2.80815 6.60869 2.81833 6.5696 2.8379C6.5305 2.85746 6.49651 2.88587 6.4703 2.92086C6.04976 3.51606 5.81295 4.22151 5.78919 4.9499C5.80376 5.55378 5.97006 6.14428 6.27276 6.66701C5.79726 6.56889 5.37009 6.30991 5.06319 5.93369C4.7563 5.55746 4.58841 5.08698 4.58782 4.60146Z" fill="#832729" />
                    <path d="M8.25643 6.76482C8.59994 6.51808 8.87985 6.19319 9.07304 5.81695C9.26624 5.44071 9.36719 5.02392 9.36755 4.60098C9.36755 3.32448 7.57081 1.26617 5.80736 0.522147C5.75414 0.499687 5.69529 0.494145 5.63881 0.506276C5.58232 0.518406 5.53094 0.54762 5.49162 0.589953C5.45231 0.632287 5.42698 0.68569 5.41905 0.742916C5.41113 0.800142 5.42101 0.85842 5.44734 0.909841C5.96212 1.91591 5.406 2.52979 4.81738 3.17938C4.42775 3.60954 4.02478 4.05418 4.02478 4.60098C4.02514 5.02394 4.1261 5.44075 4.31932 5.81699C4.51255 6.19323 4.7925 6.51812 5.13606 6.76482C0.93883 7.07932 0 8.68527 0 10.0559C0 12.5217 2.98685 15.5 6.69633 15.5C10.4058 15.5 13.3928 12.5217 13.3928 10.0559C13.3928 8.68527 12.4535 7.07932 8.25643 6.76482ZM12.0451 12.1988C9.91805 11.4316 8.14028 10.3638 6.89725 9.10128C6.87106 9.07468 6.83983 9.05355 6.80539 9.03913C6.77095 9.0247 6.73398 9.01727 6.69665 9.01727C6.65931 9.01727 6.62235 9.0247 6.58791 9.03913C6.55347 9.05355 6.52224 9.07468 6.49604 9.10128C5.25253 10.3635 3.47477 11.4315 1.34824 12.1986C1.18238 11.9683 1.03705 11.7238 0.913896 11.468C3.55536 10.5542 5.5836 9.17013 6.69649 7.52268C7.80922 9.17013 9.83761 10.5542 12.4792 11.468C12.356 11.7238 12.2108 11.9683 12.0451 12.1988ZM6.69633 6.26275C6.48224 5.8575 6.36475 5.40824 6.35303 4.95006C6.36479 4.49153 6.48245 4.04192 6.69681 3.63641C6.911 4.04192 7.02824 4.49159 7.0393 4.95006C7.02749 5.40813 6.91012 5.85746 6.69633 6.26275ZM4.58782 4.60146C4.58782 4.27184 4.902 3.92501 5.23467 3.55806C5.72017 3.02205 6.35287 2.32388 6.18702 1.34644C7.60266 2.18907 8.80451 3.75658 8.80451 4.60146C8.80388 5.08707 8.63591 5.55762 8.32889 5.93386C8.02186 6.3101 7.59455 6.56902 7.11893 6.66701C7.42128 6.14419 7.58725 5.55369 7.60153 4.9499C7.5778 4.22155 7.34112 3.51613 6.92074 2.92086C6.89454 2.88587 6.86054 2.85746 6.82144 2.8379C6.78235 2.81833 6.73924 2.80815 6.69552 2.80815C6.65181 2.80815 6.60869 2.81833 6.5696 2.8379C6.5305 2.85746 6.49651 2.88587 6.4703 2.92086C6.04976 3.51606 5.81295 4.22151 5.78919 4.9499C5.80376 5.55378 5.97006 6.14428 6.27276 6.66701C5.79726 6.56889 5.37009 6.30991 5.06319 5.93369C4.7563 5.55746 4.58841 5.08698 4.58782 4.60146Z" fill="black" fill-opacity="0.2" />
                    <path d="M6.94302 10.908C6.91879 10.8636 6.88306 10.8266 6.83958 10.8008C6.79611 10.775 6.74648 10.7614 6.69592 10.7614C6.64537 10.7614 6.59574 10.775 6.55226 10.8008C6.50878 10.8266 6.47306 10.8636 6.44883 10.908L5.63596 12.397C5.61339 12.4384 5.60156 12.4848 5.60156 12.5319C5.60156 12.5791 5.61339 12.6255 5.63596 12.6669L6.44883 14.1559C6.47306 14.2003 6.50878 14.2373 6.55226 14.2631C6.59574 14.2889 6.64537 14.3025 6.69592 14.3025C6.74648 14.3025 6.79611 14.2889 6.83958 14.2631C6.88306 14.2373 6.91879 14.2003 6.94302 14.1559L7.75573 12.6669C7.7783 12.6255 7.79012 12.5791 7.79012 12.5319C7.79012 12.4848 7.7783 12.4384 7.75573 12.397L6.94302 10.908ZM6.69592 13.4336L6.20383 12.5327L6.69592 11.6319L7.1877 12.5327L6.69592 13.4336Z" fill="white" />
                  </svg>
                  <p className='w-[135px] h-5 text-red-900 text-[17px] font-medium  capitalize'>diwali gifting</p>
                </div>
                <div className="flex my-5 items-center gap-[7px] " onClick={() => VisitOutside("https://www.tanishq.co.in/search?lang=en_IN&q=%20Pendants")}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                    <path d="M8.50429 9.67655C8.73329 9.51206 8.9199 9.29546 9.0487 9.04463C9.17749 8.79381 9.24479 8.51595 9.24503 8.23398C9.24503 7.38299 8.04721 6.01078 6.87158 5.51476C6.83609 5.49979 6.79686 5.4961 6.7592 5.50418C6.72155 5.51227 6.68729 5.53175 6.66108 5.55997C6.63488 5.58819 6.61798 5.62379 6.6127 5.66194C6.60742 5.70009 6.614 5.73895 6.63156 5.77323C6.97475 6.44394 6.604 6.85319 6.21159 7.28625C5.95184 7.57303 5.68318 7.86946 5.68318 8.23398C5.68342 8.51596 5.75073 8.79383 5.87955 9.04466C6.00837 9.29549 6.195 9.51208 6.42404 9.67655C3.62589 9.88621 3 10.9568 3 11.8706C3 13.5144 4.99123 15.5 7.46422 15.5C9.9372 15.5 11.9285 13.5144 11.9285 11.8706C11.9285 10.9568 11.3023 9.88621 8.50429 9.67655ZM11.03 13.2992C9.61203 12.7878 8.42686 12.0759 7.59817 11.2342C7.5807 11.2165 7.55989 11.2024 7.53693 11.1928C7.51397 11.1831 7.48932 11.1782 7.46443 11.1782C7.43954 11.1782 7.4149 11.1831 7.39194 11.1928C7.36898 11.2024 7.34816 11.2165 7.3307 11.2342C6.50168 12.0756 5.31651 12.7876 3.89883 13.2991C3.78826 13.1455 3.69136 12.9825 3.60926 12.812C5.37024 12.2028 6.7224 11.2801 7.46432 10.1818C8.20614 11.2801 9.55841 12.2028 11.3195 12.812C11.2374 12.9825 11.1405 13.1455 11.03 13.2992ZM7.46422 9.34183C7.32149 9.07167 7.24317 8.77216 7.23535 8.46671C7.24319 8.16102 7.32163 7.86128 7.46454 7.59094C7.60734 7.86128 7.68549 8.16106 7.69287 8.46671C7.685 8.77209 7.60675 9.07164 7.46422 9.34183ZM6.05855 8.23431C6.05855 8.01456 6.268 7.78334 6.48978 7.53871C6.81345 7.18137 7.23525 6.71592 7.12468 6.06429C8.06844 6.62605 8.86967 7.67105 8.86967 8.23431C8.86926 8.55805 8.75727 8.87175 8.55259 9.12257C8.34791 9.3734 8.06303 9.54601 7.74595 9.61134C7.94752 9.26279 8.05816 8.86913 8.06769 8.4666C8.05187 7.98103 7.89408 7.51075 7.61383 7.11391C7.59636 7.09058 7.57369 7.07164 7.54763 7.0586C7.52157 7.04556 7.49283 7.03876 7.46368 7.03876C7.43454 7.03876 7.40579 7.04556 7.37973 7.0586C7.35367 7.07164 7.33101 7.09058 7.31354 7.11391C7.03317 7.51071 6.8753 7.981 6.85946 8.4666C6.86917 8.86919 6.98004 9.26285 7.18184 9.61134C6.86484 9.54593 6.58006 9.37327 6.37546 9.12246C6.17086 8.87164 6.05894 8.55799 6.05855 8.23431Z" fill="#832729" />
                    <path d="M8.50429 9.67655C8.73329 9.51206 8.9199 9.29546 9.0487 9.04463C9.17749 8.79381 9.24479 8.51595 9.24503 8.23398C9.24503 7.38299 8.04721 6.01078 6.87158 5.51476C6.83609 5.49979 6.79686 5.4961 6.7592 5.50418C6.72155 5.51227 6.68729 5.53175 6.66108 5.55997C6.63488 5.58819 6.61798 5.62379 6.6127 5.66194C6.60742 5.70009 6.614 5.73895 6.63156 5.77323C6.97475 6.44394 6.604 6.85319 6.21159 7.28625C5.95184 7.57303 5.68318 7.86946 5.68318 8.23398C5.68342 8.51596 5.75073 8.79383 5.87955 9.04466C6.00837 9.29549 6.195 9.51208 6.42404 9.67655C3.62589 9.88621 3 10.9568 3 11.8706C3 13.5144 4.99123 15.5 7.46422 15.5C9.9372 15.5 11.9285 13.5144 11.9285 11.8706C11.9285 10.9568 11.3023 9.88621 8.50429 9.67655ZM11.03 13.2992C9.61203 12.7878 8.42686 12.0759 7.59817 11.2342C7.5807 11.2165 7.55989 11.2024 7.53693 11.1928C7.51397 11.1831 7.48932 11.1782 7.46443 11.1782C7.43954 11.1782 7.4149 11.1831 7.39194 11.1928C7.36898 11.2024 7.34816 11.2165 7.3307 11.2342C6.50168 12.0756 5.31651 12.7876 3.89883 13.2991C3.78826 13.1455 3.69136 12.9825 3.60926 12.812C5.37024 12.2028 6.7224 11.2801 7.46432 10.1818C8.20614 11.2801 9.55841 12.2028 11.3195 12.812C11.2374 12.9825 11.1405 13.1455 11.03 13.2992ZM7.46422 9.34183C7.32149 9.07167 7.24317 8.77216 7.23535 8.46671C7.24319 8.16102 7.32163 7.86128 7.46454 7.59094C7.60734 7.86128 7.68549 8.16106 7.69287 8.46671C7.685 8.77209 7.60675 9.07164 7.46422 9.34183ZM6.05855 8.23431C6.05855 8.01456 6.268 7.78334 6.48978 7.53871C6.81345 7.18137 7.23525 6.71592 7.12468 6.06429C8.06844 6.62605 8.86967 7.67105 8.86967 8.23431C8.86926 8.55805 8.75727 8.87175 8.55259 9.12257C8.34791 9.3734 8.06303 9.54601 7.74595 9.61134C7.94752 9.26279 8.05816 8.86913 8.06769 8.4666C8.05187 7.98103 7.89408 7.51075 7.61383 7.11391C7.59636 7.09058 7.57369 7.07164 7.54763 7.0586C7.52157 7.04556 7.49283 7.03876 7.46368 7.03876C7.43454 7.03876 7.40579 7.04556 7.37973 7.0586C7.35367 7.07164 7.33101 7.09058 7.31354 7.11391C7.03317 7.51071 6.8753 7.981 6.85946 8.4666C6.86917 8.86919 6.98004 9.26285 7.18184 9.61134C6.86484 9.54593 6.58006 9.37327 6.37546 9.12246C6.17086 8.87164 6.05894 8.55799 6.05855 8.23431Z" fill="black" fill-opacity="0.2" />
                    <path d="M7.62868 12.4387C7.61253 12.4091 7.58871 12.3844 7.55972 12.3672C7.53074 12.35 7.49765 12.3409 7.46395 12.3409C7.43024 12.3409 7.39716 12.35 7.36818 12.3672C7.33919 12.3844 7.31537 12.4091 7.29922 12.4387L6.75731 13.4314C6.74226 13.459 6.73438 13.4899 6.73438 13.5213C6.73438 13.5528 6.74226 13.5837 6.75731 13.6113L7.29922 14.604C7.31537 14.6336 7.33919 14.6583 7.36818 14.6755C7.39716 14.6927 7.43024 14.7017 7.46395 14.7017C7.49765 14.7017 7.53074 14.6927 7.55972 14.6755C7.58871 14.6583 7.61253 14.6336 7.62868 14.604L8.17048 13.6113C8.18553 13.5837 8.19342 13.5528 8.19342 13.5213C8.19342 13.4899 8.18553 13.459 8.17048 13.4314L7.62868 12.4387ZM7.46395 14.1224L7.13588 13.5219L7.46395 12.9213L7.7918 13.5219L7.46395 14.1224Z" fill="white" />
                    <circle cx="7.5" cy="8" r="7.3" stroke="#832729" stroke-width="0.4" />
                  </svg>
                  <p className='w-[135px] h-5 text-red-900 text-[17px] font-medium whitespace-nowrap capitalize'>Popular pendants</p>
                </div>
                <div className="flex my-5 items-center gap-[7px] " onClick={() => VisitOutside("https://www.tanishq.co.in/string-it?lang=en_IN")}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M14.4142 0C14.0906 0 13.8283 0.262324 13.8283 0.585937C13.8283 3.1386 12.1419 5.26374 9.72731 5.75388C9.41017 5.81827 9.20527 6.12753 9.26963 6.44467C9.33382 6.76087 9.64229 6.96688 9.96043 6.90234C11.3904 6.61207 12.6794 5.82349 13.59 4.68185C14.4994 3.54182 15.0001 2.0872 15.0001 0.585937C15.0001 0.262324 14.7378 0 14.4142 0Z" fill="#832729" />
                    <path d="M1.41009 4.68182C2.32069 5.82346 3.60973 6.61204 5.03971 6.90231C5.35825 6.96697 5.6664 6.76034 5.7305 6.44464C5.79489 6.1275 5.58999 5.81821 5.27282 5.75385C2.85826 5.26374 1.17188 3.1386 1.17188 0.585938C1.17188 0.262354 0.909551 0 0.585938 0C0.262324 0 0 0.262354 0 0.585938C0 2.0872 0.500772 3.54182 1.41009 4.68182Z" fill="#832729" />
                    <path d="M8.08594 7.38281V5.27344C8.08594 4.94982 7.82361 4.6875 7.5 4.6875C7.17639 4.6875 6.91406 4.94982 6.91406 5.27344V7.38281C6.91406 7.70643 7.17639 7.96875 7.5 7.96875C7.82361 7.96875 8.08594 7.70643 8.08594 7.38281Z" fill="#832729" />
                    <path d="M7.5 9.14062C5.88457 9.14062 4.57031 10.4549 4.57031 12.0703C4.57031 13.6857 5.88457 15 7.5 15C9.11543 15 10.4297 13.6857 10.4297 12.0703C10.4297 10.4549 9.11543 9.14062 7.5 9.14062ZM7.5 13.8281C6.53074 13.8281 5.74219 13.0396 5.74219 12.0703C5.74219 11.1011 6.53074 10.3125 7.5 10.3125C8.46926 10.3125 9.25781 11.1011 9.25781 12.0703C9.25781 13.0396 8.46926 13.8281 7.5 13.8281Z" fill="#832729" />
                    <path d="M7.5 12.6562C7.8236 12.6562 8.08594 12.3939 8.08594 12.0703C8.08594 11.7467 7.8236 11.4844 7.5 11.4844C7.1764 11.4844 6.91406 11.7467 6.91406 12.0703C6.91406 12.3939 7.1764 12.6562 7.5 12.6562Z" fill="#832729" />
                  </svg>
                  <p className='w-[135px] h-5 text-red-900 text-[17px] font-medium whitespace-nowrap capitalize'>everyday neckwear</p>
                </div>
                <div className="flex my-5 items-center gap-[7px] " onClick={() => VisitOutside("https://www.tanishq.co.in/shop/jewellery?lang=en_IN")}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
                    <path d="M11.0714 9.375C11.0714 12.4816 8.59303 15 5.53571 15C2.4784 15 0 12.4816 0 9.375C0 7.06462 1.37335 5.08387 3.33361 4.21812L3.55024 4.38937L4.50226 5.14175C2.62836 5.61525 1.23016 7.32638 1.23016 9.375C1.23016 11.7874 3.16163 13.75 5.53571 13.75C7.9098 13.75 9.84127 11.7874 9.84127 9.375C9.84127 7.32638 8.44307 5.61525 6.56917 5.14175L7.73782 4.21825C9.69808 5.084 11.0714 7.06462 11.0714 9.375ZM5.53571 4.375L8.61111 1.94438L7.38095 0H3.69048L2.46032 1.94438L4.30556 3.40275L5.53571 4.375Z" fill="#832729" />
                  </svg>
                  <p className='w-[135px] h-5 text-red-900 text-[17px] font-medium  capitalize'>all jewellery</p>
                </div>


              </li>
              <li><div className='flex flex-col items-center pb-5'>
                <p className='  hover:scale-[1.2] my-2 transition-all flex duration-150  text-[15px] text-[#832729] font-[400]  cursor-pointer af-bl' >  Download the App Now </p>
                <div className='w-full flex justify-between'>
                  <Link to="https://play.google.com/store/apps/details?id=com.titancompany.tanishqapp&pli=1"><img src={gplay} className='w-[120px] mx-1' alt="" /></Link>
                  <Link to="https://apps.apple.com/in/app/tanishq-a-tata-product/id1494086207"><img src={astore} className='  w-[120px] mx-1' alt="" /></Link>
                </div>
              </div></li>

            </ul>
          </div>


        </div>
        <div className=" cursor-pointer  md:w-[20%] w-[70px]"><img src={logo} className='w-full ' alt="" onClick={() => VisitOutside("https://www.tanishq.co.in/")} /></div>
      </div>
      <div className='list flex  justify-around items-end md:my-0 my-3 md:items-center w-[40%] md:w-[55%] cursor-pointer'>
        <p className=' block hover:scale-[1.2] transition-all duration-150  text-[15px] text-[#832729] font-[400]  cursor-pointer af-bl' onClick={() => VisitOutside("https://www.tanishq.co.in/homepage?lang=en_IN")}>
          <img src={shop_img} className='w-[19px] mx-auto ' alt="" />
          <span className='hidden md:block'> Shop Online</span></p>
        <p className='hidden md:block hover:scale-[1.2] transition-all duration-150  text-[15px] text-[#832729] font-[400]  cursor-pointer af-bl' onClick={() => VisitOutside("https://www.tanishq.co.in/shop/diamond?lang=en_IN")}>
          <img src={diamonds_img} onClick={() => VisitOutside("https://www.tanishq.co.in/shop/diamond?lang=en_IN")} className='w-[25px] mx-auto ' alt="" />
          Diamonds</p>
        <p className='hidden md:block hover:scale-[1.2] transition-all duration-150  text-[15px] text-[#832729] font-[400]  cursor-pointer af-bl' onClick={() => VisitOutside("https://www.tanishq.co.in/blog-home.html?lang=en_IN")}>
          <img src={blog_img} className='w-[19px] mx-auto ' onClick={() => VisitOutside("https://www.tanishq.co.in/blog-home.html?lang=en_IN")} alt="" />
          Blogs</p>
        <p className='hidden md:block hover:scale-[1.2] transition-all duration-150  text-[15px] text-[#832729] font-[400]  cursor-pointer af-bl' onClick={() => nav("/")}>
          <img src={store_img} className='w-[19px] mx-auto ' alt="" />
          Stores</p>

        <p className='hidden md:block hover:scale-[1.2] transition-all duration-150  text-[15px] text-[#832729] font-[400]  cursor-pointer af-bl' onClick={() => VisitOutside("https://www.tanishq.co.in/myaccount?lang=en_IN#Wishlist")}>
          <img src={wishlist_img} className='w-[19px] mx-auto ' alt="" />
          WishList</p>
        <p className='block hover:scale-[1.2] transition-all duration-150  text-[15px] text-[#832729] font-[400]  cursor-pointer af-bl' onClick={() => VisitOutside("https://www.tanishq.co.in/cart?lang=en_IN")}>
          <img src={cart_img} className='w-[19px] mx-auto ' alt="" />
          <span className='hidden md:block'>Cart</span> </p>
        <p className=' hover:scale-[1.2] transition-all duration-150  text-[15px] text-[#832729] font-[400]  cursor-pointer af-bl' onClick={() => VisitOutside("https://www.tanishq.co.in/myaccount?lang=en_IN#AccountOverview")}>
          <img src={profile_img} className='w-[19px] mx-auto ' alt="" />
          <span className='hidden md:block'>Account</span>  </p>
        <p className='hidden md:block  text-[15px] text-[#832729]  font-[400]  cursor-pointer af-bl' >
          <img src={qr} className='w-[19px]  transition-all duration-150  hover:scale-[2.8] mx-auto' alt="" />
          GET THE APP</p>
        {/* <div className=" hidden md:block hover:scale-[2.8] transition-all duration-150 box w-[30px] h-[30px] bg-[#D9D9D9] cursor-pointer af-bl"> <img src={qr} alt="" /></div> */}

        {/* <div className="w-[30px] cursor-pointer"><img src={profile}  onClick={()=>VisitOutside("https://www.tanishq.co.in/myaccount?lang=en_IN#AccountOverview")}  alt="" /></div> */}
      </div>

    </div>
    </div>
    {/* <div className="py-2 md:flex hidden justify-around mx-auto w-[80%]">
      <p onClick={()=>window.location.href="https://www.tanishq.co.in/shop/jewellery?lang=en_IN"} className='hover:text-[#832729] cursor-pointer nav-cat-txt py-2  text-[#696969]'>
        <span className='mb-5'>ALL JEWELLERY </span>
        <hr className='border-b-4 mt-2 opacity-0 duration-500 hover:block rounded-[13px] border-[#832729]'/>
      </p>
      <p onClick={()=>window.location.href="https://www.tanishq.co.in/shop/gold-1?lang=en_IN"}  className='hover:text-[#832729] cursor-pointer nav-cat-txt py-2  text-[#696969]'>
        <span className='mb-5'>GOLD </span>
        <hr className='border-b-4 mt-2 opacity-0 duration-500 hover:block rounded-[13px] border-[#832729]'/>
      </p>
      <p onClick={()=>window.location.href="https://www.tanishq.co.in/shop/diamond?lang=en_IN"}  className='hover:text-[#832729] cursor-pointer nav-cat-txt py-2  text-[#696969]'>
        <span className='mb-5'>DIAMOND </span>
        <hr className='border-b-4 mt-2 opacity-0 duration-500 hover:block rounded-[13px] border-[#832729]'/>
      </p>
      <p onClick={()=>window.location.href="https://www.tanishq.co.in/shop/earring?lang=en_IN"}  className='hover:text-[#832729] cursor-pointer nav-cat-txt py-2  text-[#696969]'>
        <span className='mb-5'>EARRINGS </span>
        <hr className='border-b-4 mt-2 opacity-0 duration-500 hover:block rounded-[13px] border-[#832729]'/>
      </p>
      <p onClick={()=>window.location.href="https://www.tanishq.co.in/shop/finger-rings?lang=en_IN"}  className='hover:text-[#832729] cursor-pointer nav-cat-txt py-2  text-[#696969]'>
        <span className='mb-5'>RINGS </span>
        <hr className='border-b-4 mt-2 opacity-0 duration-500 hover:block rounded-[13px] border-[#832729]'/>
      </p>
      <p onClick={()=>window.location.href="https://www.tanishq.co.in/mia?lang=en_IN"}  className='hover:text-[#832729] cursor-pointer nav-cat-txt py-2  text-[#696969]'>
        <span className='mb-5'>MIA </span>
        <hr className='border-b-4 mt-2 opacity-0 duration-500 hover:block rounded-[13px] border-[#832729]'/>
      </p>
      <p onClick={()=>window.location.href="https://www.tanishq.co.in/rivaah?lang=en_IN"}  className='hover:text-[#832729] cursor-pointer nav-cat-txt py-2  text-[#696969]'>
        <span className='mb-5'>RIVAAH </span>
        <hr className='border-b-4 mt-2 opacity-0 duration-500 hover:block rounded-[13px] border-[#832729]'/>
      </p>
      <p onClick={()=>window.location.href="https://www.tanishq.co.in/gifting-guide?lang=en_IN"}  className='hover:text-[#832729] cursor-pointer nav-cat-txt py-2  text-[#696969]'>
        <span className='mb-5'>GIFTING </span>
        <hr className='border-b-4 mt-2 opacity-0 duration-500 hover:block rounded-[13px] border-[#832729]'/>
      </p>
    
    </div> */}
    <div className="py-2 md:flex hidden md:mt-5 justify-around mx-auto w-[50%]">
      {/* <div className="flex gap-[7px] cursor-pointer border justify-center  px-2.5 py-1.5 rounded-[9px] border-solid border-[#832729] items-center" onClick={() => VisitOutside("https://www.tanishq.co.in/festive?lang=en_IN")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
          <path d="M8.81141 7.52829C8.77396 7.42436 8.65936 7.37049 8.55547 7.40794C8.45154 7.44539 8.39767 7.55999 8.43512 7.66389C8.43604 7.66644 8.43702 7.66896 8.43804 7.67149C8.62044 8.14748 8.63364 8.51147 8.47404 8.67147C8.28045 8.86467 7.79825 8.80427 7.18386 8.51027C6.36133 8.08318 5.61367 7.52524 4.9701 6.8583C3.40353 5.29153 2.75714 3.75415 3.15693 3.35436C3.2845 3.25361 3.45033 3.21491 3.60932 3.24876C3.71947 3.25686 3.81534 3.17411 3.82344 3.06396C3.83127 2.95749 3.7541 2.86364 3.64812 2.85077C3.37005 2.80157 3.08476 2.88264 2.87414 3.07076C2.14135 3.80335 3.26153 5.71432 4.68731 7.14029C5.36282 7.83933 6.14776 8.4236 7.01127 8.87007C7.16764 8.94494 3.70227 5.40206 3.70227 5.40206L2.87414 4.08436C3.10205 2.40094 2.50182 3.48414 2.50182 4.20161C2.4847 4.09248 2.37327 5.00941 2.26415 5.02653C2.15502 5.04365 2.08042 5.146 2.09755 5.25513C2.12895 5.45512 2.17095 5.65512 2.22235 5.85072C2.68289 7.59566 3.89589 9.04526 5.53229 9.80625L3.19353 10.6912C3.1828 10.6733 3.16931 10.6573 3.15353 10.6436C2.55914 10.1664 2.1862 9.46656 2.12155 8.70707L2.02875 7.58329C2.02145 7.47441 2.33124 5.52317 2.22235 5.53047L2.10193 5.28262C1.99183 5.29137 1.65073 7.43458 1.65948 7.54468L1.62876 7.61649L1.72315 8.73987C1.79345 9.55168 2.17215 10.3057 2.78134 10.8468L2.57264 10.6436L1.9016 9.0034C1.92777 8.89603 1.83053 7.45508 1.72315 7.4289C1.61578 7.40273 1.05034 10.0451 1.02417 10.1524L0.633972 11.7524C0.607673 11.8597 0.673321 11.968 0.78062 11.9943C0.819969 12.0039 0.861293 12.0014 0.899168 11.987L8.29905 9.18706C8.31082 9.18131 8.32195 9.17434 8.33224 9.16626C8.49239 9.14166 8.64087 9.06761 8.75684 8.95446C8.95501 8.75627 9.12561 8.34767 8.81141 7.52829Z" fill="#832729" />
          <path d="M10.6988 7.01242C9.6176 6.60768 8.44905 6.49421 7.31022 6.68343L6.59563 6.80343C6.48716 6.82428 6.41613 6.9291 6.43698 7.03757C6.45713 7.14237 6.55601 7.21289 6.66163 7.19782L7.37602 7.07882C8.44555 6.901 9.54306 7.00765 10.5584 7.38802C10.5809 7.39599 10.6047 7.39999 10.6286 7.39982C10.739 7.39999 10.8287 7.31062 10.8289 7.20014C10.829 7.11652 10.7771 7.04165 10.6988 7.01242Z" fill="#832729" />
          <path d="M5.48548 1.35736C5.46348 1.24911 5.35791 1.17919 5.24966 1.20119C5.14141 1.22319 5.07149 1.32876 5.09349 1.43701C5.09396 1.43941 5.09451 1.44179 5.09509 1.44416C5.34823 2.57512 5.24391 3.7568 4.79649 4.8259L4.5057 5.52369C4.46367 5.62537 4.51165 5.74189 4.6131 5.78449C4.6374 5.79471 4.66352 5.79994 4.68989 5.79989C4.77062 5.79989 4.84342 5.75139 4.87449 5.67689L5.16549 4.9799C5.64485 3.8347 5.75668 2.56887 5.48548 1.35736Z" fill="#832729" />
          <path d="M5.02866 0.799987C5.24957 0.799987 5.42865 0.620904 5.42865 0.399993C5.42865 0.179083 5.24957 0 5.02866 0C4.80775 0 4.62866 0.179083 4.62866 0.399993C4.62866 0.620904 4.80775 0.799987 5.02866 0.799987Z" fill="#832729" />
          <path d="M12.6951 4.45708C12.6715 4.38474 12.609 4.33204 12.5337 4.32109L11.9467 4.23569L11.6849 3.7039C11.6266 3.60482 11.4989 3.5718 11.3999 3.63015C11.3694 3.64807 11.344 3.67345 11.3261 3.7039L11.0631 4.23569L10.4761 4.32109C10.3668 4.33686 10.291 4.43828 10.3068 4.54761C10.313 4.59113 10.3335 4.63136 10.3649 4.66208L10.7895 5.07607L10.6895 5.66066C10.6703 5.76944 10.7429 5.87319 10.8517 5.89239C10.8955 5.90011 10.9406 5.89304 10.9799 5.87226L11.5049 5.59547L12.0299 5.87146C12.1277 5.92286 12.2486 5.88529 12.3 5.78751C12.3205 5.74859 12.3275 5.70401 12.3201 5.66066L12.2201 5.07607L12.6449 4.66208C12.6993 4.60886 12.7187 4.52941 12.6951 4.45708Z" fill="#832729" />
          <path d="M9.04257 2.45276L9.0422 2.45346L8.89446 2.46897C8.06797 2.5569 7.31432 2.9818 6.81127 3.64343C6.74663 3.733 6.76684 3.85801 6.85641 3.92265C6.94294 3.98511 7.06326 3.96862 7.12979 3.88519C7.49343 3.40838 8.00979 3.07096 8.59247 2.92935C8.49069 3.25215 8.53241 3.6031 8.70706 3.89303C8.94851 4.26305 9.44419 4.36726 9.81421 4.12582C10.1842 3.88437 10.2884 3.3887 10.047 3.01867C9.94462 2.87201 9.80968 2.75099 9.65277 2.66512C10.0253 2.62037 10.3906 2.7929 10.5927 3.10908C10.6506 3.20313 10.7738 3.23243 10.8679 3.17451C10.9619 3.11659 10.9912 2.99339 10.9333 2.89934C10.9314 2.89633 10.9295 2.89337 10.9275 2.89045C10.5186 2.26219 9.6865 2.069 9.04257 2.45276ZM9.71205 3.23677C9.83369 3.42119 9.78279 3.66928 9.59838 3.7909C9.41397 3.91252 9.16587 3.86164 9.04425 3.67723C9.04358 3.6762 9.04288 3.67516 9.04221 3.67413C8.92597 3.47981 8.90379 3.24333 8.98193 3.0308C8.99726 2.99957 9.02034 2.97281 9.04896 2.95305C9.21082 2.84738 9.5766 3.02923 9.71205 3.23677Z" fill="#832729" />
        </svg>
        <p className='   text-[#832729]'>Festive Delights</p>
      </div> */}
      <div className="flex gap-[7px] cursor-pointer border justify-center  px-2.5 py-1.5 rounded-[9px] border-solid border-[#832729] items-center" onClick={() => VisitOutside("https://www.tanishq.co.in/shop/special-coins?lang=en_IN")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M0.1 6C0.1 2.74671 2.74695 0.1 6.00025 0.1C9.25329 0.1 11.9 2.7467 11.9 6C11.9 9.25305 9.25329 11.9 6.00025 11.9C2.74695 11.9 0.1 9.25304 0.1 6Z" fill="#832729" stroke="#832729" stroke-width="0.2" />
          <path d="M0.566309 6.00014C0.566309 3.00412 3.00399 0.566431 6.00027 0.566431C8.99629 0.566431 11.4337 3.00411 11.4337 6.00014C11.4337 8.99617 8.99629 11.4339 6.00027 11.4339C3.00399 11.4339 0.566309 8.99616 0.566309 6.00014Z" fill="white" stroke="#832729" stroke-width="0.2" />
          <path d="M1.19082 5.9804C1.19082 3.33941 3.33951 1.19094 5.98074 1.19094C8.62135 1.19094 10.77 3.3394 10.77 5.9804C10.77 8.62141 8.62165 10.7702 5.98074 10.7702C3.33952 10.7702 1.19082 8.6214 1.19082 5.9804Z" fill="#832729" stroke="#832729" stroke-width="0.2" />
          <path d="M5.92318 3.30831L5.86102 3.32211L5.84723 3.38428L5.78345 3.67196L5.71945 3.38422L5.70564 3.32211L5.64352 3.30831L5.35598 3.24443L5.64376 3.18052L5.70591 3.16672L5.71971 3.10458L5.7836 2.81687L5.84749 3.10458L5.86129 3.16672L5.92343 3.18052L6.21097 3.2444L5.92318 3.30831Z" fill="white" stroke="white" stroke-width="0.2" />
          <path d="M9.05796 7.04182L8.99579 7.05561L8.982 7.11778L8.93253 7.34073L8.88297 7.11774L8.86916 7.05561L8.80702 7.04182L8.58415 6.99235L8.80706 6.94278L8.86916 6.92897L8.88297 6.86687L8.93251 6.64404L8.982 6.86708L8.99579 6.92924L9.05796 6.94304L9.28046 6.99243L9.05796 7.04182Z" fill="white" stroke="white" stroke-width="0.2" />
          <path d="M4.65047 9.26363L4.58831 9.27743L4.57453 9.33959L4.5363 9.51192L4.498 9.33955L4.4842 9.27743L4.42207 9.26363L4.24931 9.22523L4.42207 9.18684L4.4842 9.17304L4.498 9.11092L4.5363 8.93855L4.57453 9.11088L4.58831 9.17304L4.65047 9.18684L4.8233 9.22523L4.65047 9.26363Z" fill="white" stroke="white" stroke-width="0.2" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.73924 7.4884C5.73924 7.38311 5.82793 7.30415 5.94627 7.30415C6.04983 7.30415 6.14603 7.38311 6.14603 7.4884C6.14603 7.58706 6.04983 7.67261 5.94627 7.67261C5.82793 7.67261 5.73924 7.58706 5.73924 7.4884ZM7.43292 5.20529C7.4847 4.98818 7.32937 4.79079 7.08529 4.79079H6.41964C6.24956 4.79736 6.02031 4.67236 6.02031 4.67236V5.66588C6.02031 6.67252 6.64157 7.10019 6.92996 7.13965C6.98174 7.15942 7.01873 7.14626 6.9522 7.10019C6.56015 6.8765 6.3309 6.34354 6.30872 5.88955V4.98162C6.3901 5.02764 6.54537 5.03422 6.54537 5.03422H7.13707C7.29241 5.03422 7.37379 5.08029 7.43292 5.20529ZM4.45226 5.20529C4.40048 4.98818 4.56325 4.79079 4.79989 4.79079H5.46559C5.64306 4.79736 5.86496 4.67236 5.86496 4.67236V5.66588C5.86496 6.67252 5.24365 7.10019 4.95523 7.13965C4.90345 7.15942 4.86649 7.14626 4.93306 7.10019C5.32503 6.8765 5.55432 6.34354 5.57646 5.88955V4.98162C5.49516 5.02764 5.33982 5.03422 5.33982 5.03422H4.75551C4.60021 5.03422 4.51886 5.08029 4.45226 5.20529Z" fill="white" />
        </svg>
        <p className='   text-[#832729]'>Exclusive Coins</p>
      </div>
      {/* <div className="flex gap-[7px] cursor-pointer border justify-center  px-2.5 py-1.5 rounded-[9px] border-solid border-[#832729] items-center" onClick={() => VisitOutside("https://www.tanishq.co.in/gifting-guide?lang=en_IN")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M7.08146 5.01186C7.35627 4.81447 7.5802 4.55455 7.73475 4.25356C7.88931 3.95257 7.97007 3.61913 7.97036 3.28078C7.97036 2.25959 6.53297 0.612933 5.12221 0.0177179C5.07963 -0.000250597 5.03255 -0.00468362 4.98736 0.00502041C4.94218 0.0147244 4.90107 0.0380957 4.86962 0.0719625C4.83817 0.105829 4.8179 0.148552 4.81156 0.194333C4.80522 0.240114 4.81312 0.286736 4.83419 0.327873C5.24602 1.13273 4.80112 1.62383 4.33022 2.1435C4.01852 2.48763 3.69614 2.84335 3.69614 3.28078C3.69643 3.61915 3.7772 3.9526 3.93178 4.25359C4.08636 4.55459 4.31032 4.8145 4.58517 5.01186C1.22738 5.26346 0.476318 6.54822 0.476318 7.6447C0.476318 9.61734 2.8658 12 5.83338 12C8.80096 12 11.1906 9.61734 11.1906 7.6447C11.1906 6.54822 10.4391 5.26346 7.08146 5.01186ZM10.1124 9.35905C8.41076 8.7453 6.98855 7.89102 5.99412 6.88103C5.97316 6.85974 5.94818 6.84284 5.92063 6.8313C5.89308 6.81976 5.86351 6.81382 5.83364 6.81382C5.80377 6.81382 5.77419 6.81976 5.74664 6.8313C5.71909 6.84284 5.69411 6.85974 5.67315 6.88103C4.67834 7.89077 3.25613 8.74517 1.55491 9.35892C1.42223 9.17461 1.30595 8.97901 1.20744 8.77439C3.32061 8.0434 4.9432 6.93611 5.83351 5.61814C6.72369 6.93611 8.34641 8.0434 10.4597 8.77439C10.3611 8.979 10.2449 9.17463 10.1124 9.35905ZM5.83338 4.6102C5.66211 4.286 5.56812 3.92659 5.55874 3.56005C5.56815 3.19322 5.66228 2.83354 5.83377 2.50913C6.00512 2.83354 6.09891 3.19327 6.10776 3.56005C6.09831 3.92651 6.00442 4.28597 5.83338 4.6102ZM4.14657 3.28117C4.14657 3.01747 4.39791 2.74 4.66406 2.44645C5.05246 2.01764 5.55862 1.4591 5.42593 0.677151C6.55845 1.35126 7.51993 2.60526 7.51993 3.28117C7.51943 3.66965 7.38505 4.0461 7.13943 4.34709C6.89381 4.64808 6.55196 4.85522 6.17146 4.93361C6.41335 4.51535 6.54612 4.04295 6.55755 3.55992C6.53856 2.97724 6.34921 2.4129 6.01291 1.93669C5.99195 1.9087 5.96475 1.88597 5.93347 1.87032C5.9022 1.85467 5.86771 1.84652 5.83274 1.84652C5.79776 1.84652 5.76327 1.85467 5.732 1.87032C5.70072 1.88597 5.67352 1.9087 5.65256 1.93669C5.31613 2.41285 5.12668 2.97721 5.10767 3.55992C5.11933 4.04302 5.25237 4.51542 5.49453 4.93361C5.11412 4.85511 4.77239 4.64793 4.52687 4.34695C4.28136 4.04597 4.14705 3.66958 4.14657 3.28117Z" fill="#832729" />
          <path d="M7.08146 5.01186C7.35627 4.81447 7.5802 4.55455 7.73475 4.25356C7.88931 3.95257 7.97007 3.61913 7.97036 3.28078C7.97036 2.25959 6.53297 0.612933 5.12221 0.0177179C5.07963 -0.000250597 5.03255 -0.00468362 4.98736 0.00502041C4.94218 0.0147244 4.90107 0.0380957 4.86962 0.0719625C4.83817 0.105829 4.8179 0.148552 4.81156 0.194333C4.80522 0.240114 4.81312 0.286736 4.83419 0.327873C5.24602 1.13273 4.80112 1.62383 4.33022 2.1435C4.01852 2.48763 3.69614 2.84335 3.69614 3.28078C3.69643 3.61915 3.7772 3.9526 3.93178 4.25359C4.08636 4.55459 4.31032 4.8145 4.58517 5.01186C1.22738 5.26346 0.476318 6.54822 0.476318 7.6447C0.476318 9.61734 2.8658 12 5.83338 12C8.80096 12 11.1906 9.61734 11.1906 7.6447C11.1906 6.54822 10.4391 5.26346 7.08146 5.01186ZM10.1124 9.35905C8.41076 8.7453 6.98855 7.89102 5.99412 6.88103C5.97316 6.85974 5.94818 6.84284 5.92063 6.8313C5.89308 6.81976 5.86351 6.81382 5.83364 6.81382C5.80377 6.81382 5.77419 6.81976 5.74664 6.8313C5.71909 6.84284 5.69411 6.85974 5.67315 6.88103C4.67834 7.89077 3.25613 8.74517 1.55491 9.35892C1.42223 9.17461 1.30595 8.97901 1.20744 8.77439C3.32061 8.0434 4.9432 6.93611 5.83351 5.61814C6.72369 6.93611 8.34641 8.0434 10.4597 8.77439C10.3611 8.979 10.2449 9.17463 10.1124 9.35905ZM5.83338 4.6102C5.66211 4.286 5.56812 3.92659 5.55874 3.56005C5.56815 3.19322 5.66228 2.83354 5.83377 2.50913C6.00512 2.83354 6.09891 3.19327 6.10776 3.56005C6.09831 3.92651 6.00442 4.28597 5.83338 4.6102ZM4.14657 3.28117C4.14657 3.01747 4.39791 2.74 4.66406 2.44645C5.05246 2.01764 5.55862 1.4591 5.42593 0.677151C6.55845 1.35126 7.51993 2.60526 7.51993 3.28117C7.51943 3.66965 7.38505 4.0461 7.13943 4.34709C6.89381 4.64808 6.55196 4.85522 6.17146 4.93361C6.41335 4.51535 6.54612 4.04295 6.55755 3.55992C6.53856 2.97724 6.34921 2.4129 6.01291 1.93669C5.99195 1.9087 5.96475 1.88597 5.93347 1.87032C5.9022 1.85467 5.86771 1.84652 5.83274 1.84652C5.79776 1.84652 5.76327 1.85467 5.732 1.87032C5.70072 1.88597 5.67352 1.9087 5.65256 1.93669C5.31613 2.41285 5.12668 2.97721 5.10767 3.55992C5.11933 4.04302 5.25237 4.51542 5.49453 4.93361C5.11412 4.85511 4.77239 4.64793 4.52687 4.34695C4.28136 4.04597 4.14705 3.66958 4.14657 3.28117Z" fill="black" fill-opacity="0.2" />
          <path d="M6.03093 8.3264C6.01155 8.2909 5.98296 8.26128 5.94818 8.24064C5.9134 8.22 5.8737 8.20911 5.83325 8.20911C5.79281 8.20911 5.75311 8.22 5.71832 8.24064C5.68354 8.26128 5.65496 8.2909 5.63558 8.3264L4.98528 9.5176C4.96722 9.55073 4.95776 9.58785 4.95776 9.62558C4.95776 9.66331 4.96722 9.70043 4.98528 9.73355L5.63558 10.9248C5.65496 10.9603 5.68354 10.9899 5.71832 11.0105C5.75311 11.0312 5.79281 11.0421 5.83325 11.0421C5.8737 11.0421 5.9134 11.0312 5.94818 11.0105C5.98296 10.9899 6.01155 10.9603 6.03093 10.9248L6.6811 9.73355C6.69915 9.70043 6.70861 9.66331 6.70861 9.62558C6.70861 9.58785 6.69915 9.55073 6.6811 9.5176L6.03093 8.3264ZM5.83325 10.3469L5.43957 9.62622L5.83325 8.90553L6.22667 9.62622L5.83325 10.3469Z" fill="white" />
        </svg>
        <p className='   text-[#832729]'>Diwali Gifting</p>
      </div> */}
      <div className="flex gap-[7px] cursor-pointer border justify-center  px-2.5 py-1.5 rounded-[9px] border-solid border-[#832729] items-center" onClick={() => VisitOutside("https://www.tanishq.co.in/search?lang=en_IN&q=%20Pendants")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
          <path d="M7.47008 7.34124C7.65329 7.20964 7.80257 7.03637 7.90561 6.83571C8.00864 6.63505 8.06248 6.41276 8.06268 6.18719C8.06268 5.50639 7.10441 4.40862 6.16391 4.01181C6.13552 3.99983 6.10414 3.99688 6.07401 4.00335C6.04389 4.00982 6.01648 4.0254 5.99552 4.04798C5.97455 4.07055 5.96104 4.09903 5.95681 4.12956C5.95259 4.16008 5.95785 4.19116 5.9719 4.21858C6.24645 4.75515 5.94985 5.08255 5.63592 5.429C5.42812 5.65842 5.2132 5.89556 5.2132 6.18719C5.21339 6.41277 5.26723 6.63506 5.37029 6.83573C5.47334 7.03639 5.62265 7.20966 5.80588 7.34124C3.56736 7.50897 3.06665 8.36548 3.06665 9.09647C3.06665 10.4116 4.65964 12 6.63802 12C8.61641 12 10.2095 10.4116 10.2095 9.09647C10.2095 8.36548 9.70852 7.50897 7.47008 7.34124ZM9.49068 10.2394C8.35627 9.8302 7.40814 9.26068 6.74518 8.58735C6.73121 8.57316 6.71456 8.56189 6.69619 8.5542C6.67782 8.54651 6.65811 8.54255 6.6382 8.54255C6.61828 8.54255 6.59857 8.54651 6.5802 8.5542C6.56183 8.56189 6.54518 8.57316 6.53121 8.58735C5.868 9.26051 4.91986 9.83012 3.78571 10.2393C3.69726 10.1164 3.61974 9.98601 3.55406 9.84959C4.96284 9.36227 6.04457 8.62407 6.63811 7.74543C7.23157 8.62407 8.31338 9.36227 9.72224 9.84959C9.65654 9.986 9.57906 10.1164 9.49068 10.2394ZM6.63802 7.07347C6.52385 6.85733 6.46118 6.61773 6.45493 6.37337C6.46121 6.12881 6.52396 5.88903 6.63828 5.67275C6.75252 5.88902 6.81504 6.12885 6.82094 6.37337C6.81465 6.61767 6.75205 6.85731 6.63802 7.07347ZM5.51349 6.18744C5.51349 6.01165 5.68105 5.82667 5.85848 5.63097C6.11741 5.34509 6.45485 4.97273 6.36639 4.45143C7.1214 4.90084 7.76239 5.73684 7.76239 6.18744C7.76206 6.44644 7.67247 6.6974 7.50872 6.89806C7.34498 7.09872 7.11708 7.23681 6.86341 7.28907C7.02467 7.01023 7.11318 6.6953 7.1208 6.37328C7.10815 5.98483 6.98191 5.6086 6.75771 5.29113C6.74374 5.27246 6.7256 5.25731 6.70475 5.24688C6.6839 5.23644 6.66091 5.23101 6.6376 5.23101C6.61428 5.23101 6.59129 5.23644 6.57044 5.24688C6.54959 5.25731 6.53145 5.27246 6.51748 5.29113C6.29319 5.60857 6.16689 5.9848 6.15422 6.37328C6.16199 6.69535 6.25068 7.01028 6.41212 7.28907C6.15852 7.23674 5.9307 7.09862 5.76702 6.89797C5.60334 6.69731 5.5138 6.44639 5.51349 6.18744Z" fill="#832729" />
          <path d="M7.47008 7.34124C7.65329 7.20964 7.80257 7.03637 7.90561 6.83571C8.00864 6.63505 8.06248 6.41276 8.06268 6.18719C8.06268 5.50639 7.10441 4.40862 6.16391 4.01181C6.13552 3.99983 6.10414 3.99688 6.07401 4.00335C6.04389 4.00982 6.01648 4.0254 5.99552 4.04798C5.97455 4.07055 5.96104 4.09903 5.95681 4.12956C5.95259 4.16008 5.95785 4.19116 5.9719 4.21858C6.24645 4.75515 5.94985 5.08255 5.63592 5.429C5.42812 5.65842 5.2132 5.89556 5.2132 6.18719C5.21339 6.41277 5.26723 6.63506 5.37029 6.83573C5.47334 7.03639 5.62265 7.20966 5.80588 7.34124C3.56736 7.50897 3.06665 8.36548 3.06665 9.09647C3.06665 10.4116 4.65964 12 6.63802 12C8.61641 12 10.2095 10.4116 10.2095 9.09647C10.2095 8.36548 9.70852 7.50897 7.47008 7.34124ZM9.49068 10.2394C8.35627 9.8302 7.40814 9.26068 6.74518 8.58735C6.73121 8.57316 6.71456 8.56189 6.69619 8.5542C6.67782 8.54651 6.65811 8.54255 6.6382 8.54255C6.61828 8.54255 6.59857 8.54651 6.5802 8.5542C6.56183 8.56189 6.54518 8.57316 6.53121 8.58735C5.868 9.26051 4.91986 9.83012 3.78571 10.2393C3.69726 10.1164 3.61974 9.98601 3.55406 9.84959C4.96284 9.36227 6.04457 8.62407 6.63811 7.74543C7.23157 8.62407 8.31338 9.36227 9.72224 9.84959C9.65654 9.986 9.57906 10.1164 9.49068 10.2394ZM6.63802 7.07347C6.52385 6.85733 6.46118 6.61773 6.45493 6.37337C6.46121 6.12881 6.52396 5.88903 6.63828 5.67275C6.75252 5.88902 6.81504 6.12885 6.82094 6.37337C6.81465 6.61767 6.75205 6.85731 6.63802 7.07347ZM5.51349 6.18744C5.51349 6.01165 5.68105 5.82667 5.85848 5.63097C6.11741 5.34509 6.45485 4.97273 6.36639 4.45143C7.1214 4.90084 7.76239 5.73684 7.76239 6.18744C7.76206 6.44644 7.67247 6.6974 7.50872 6.89806C7.34498 7.09872 7.11708 7.23681 6.86341 7.28907C7.02467 7.01023 7.11318 6.6953 7.1208 6.37328C7.10815 5.98483 6.98191 5.6086 6.75771 5.29113C6.74374 5.27246 6.7256 5.25731 6.70475 5.24688C6.6839 5.23644 6.66091 5.23101 6.6376 5.23101C6.61428 5.23101 6.59129 5.23644 6.57044 5.24688C6.54959 5.25731 6.53145 5.27246 6.51748 5.29113C6.29319 5.60857 6.16689 5.9848 6.15422 6.37328C6.16199 6.69535 6.25068 7.01028 6.41212 7.28907C6.15852 7.23674 5.9307 7.09862 5.76702 6.89797C5.60334 6.69731 5.5138 6.44639 5.51349 6.18744Z" fill="black" fill-opacity="0.2" />
          <path d="M6.76964 9.55098C6.75672 9.52731 6.73767 9.50756 6.71448 9.4938C6.69129 9.48004 6.66482 9.47278 6.63786 9.47278C6.61089 9.47278 6.58443 9.48004 6.56124 9.4938C6.53805 9.50756 6.519 9.52731 6.50607 9.55098L6.07254 10.3451C6.06051 10.3672 6.0542 10.3919 6.0542 10.4171C6.0542 10.4422 6.06051 10.467 6.07254 10.4891L6.50607 11.2832C6.519 11.3069 6.53805 11.3266 6.56124 11.3404C6.58443 11.3541 6.61089 11.3614 6.63786 11.3614C6.66482 11.3614 6.69129 11.3541 6.71448 11.3404C6.73767 11.3266 6.75672 11.3069 6.76964 11.2832L7.20309 10.4891C7.21512 10.467 7.22143 10.4422 7.22143 10.4171C7.22143 10.3919 7.21512 10.3672 7.20309 10.3451L6.76964 9.55098ZM6.63786 10.898L6.37541 10.4175L6.63786 9.93706L6.90014 10.4175L6.63786 10.898Z" fill="white" />
          <circle cx="6.66675" cy="6" r="5.8" stroke="#832729" stroke-width="0.4" />
        </svg>
        <p className='   text-[#832729]'>Popular pendants</p>
      </div>
      <div className="flex gap-[7px] cursor-pointer border justify-center  px-2.5 py-1.5 rounded-[9px] border-solid border-[#832729] items-center" onClick={() => VisitOutside("https://www.tanishq.co.in/string-it?lang=en_IN")}>
        <svg xmlns="http://www.w3.org/2000/svg" className='text-[red] color-red fill-slate-100' width="13" height="12" viewBox="0 0 13 12" >
          <path d="M12.0316 0C11.7727 0 11.5629 0.209859 11.5629 0.46875C11.5629 2.51088 10.2137 4.21099 8.28209 4.6031C8.02838 4.65462 7.86446 4.90202 7.91595 5.15573C7.9673 5.40869 8.21408 5.57351 8.46859 5.52187C9.61257 5.28966 10.6438 4.65879 11.3723 3.74548C12.0997 2.83345 12.5004 1.66976 12.5004 0.46875C12.5004 0.209859 12.2905 0 12.0316 0Z" fill="#832729" />
          <path d="M1.62831 3.74545C2.3568 4.65877 3.38803 5.28963 4.53201 5.52185C4.78685 5.57358 5.03336 5.40827 5.08464 5.15571C5.13616 4.902 4.97224 4.65457 4.7185 4.60308C2.78685 4.21099 1.43774 2.51088 1.43774 0.46875C1.43774 0.209883 1.22788 0 0.968994 0C0.710104 0 0.500244 0.209883 0.500244 0.46875C0.500244 1.66976 0.900861 2.83345 1.62831 3.74545Z" fill="#832729" />
          <path d="M6.96899 5.90625V4.21875C6.96899 3.95986 6.75913 3.75 6.50024 3.75C6.24135 3.75 6.03149 3.95986 6.03149 4.21875V5.90625C6.03149 6.16514 6.24135 6.375 6.50024 6.375C6.75913 6.375 6.96899 6.16514 6.96899 5.90625Z" fill="#832729" />
          <path d="M6.50024 7.3125C5.2079 7.3125 4.15649 8.36391 4.15649 9.65625C4.15649 10.9486 5.2079 12 6.50024 12C7.79259 12 8.84399 10.9486 8.84399 9.65625C8.84399 8.36391 7.79259 7.3125 6.50024 7.3125ZM6.50024 11.0625C5.72484 11.0625 5.09399 10.4317 5.09399 9.65625C5.09399 8.88084 5.72484 8.25 6.50024 8.25C7.27565 8.25 7.90649 8.88084 7.90649 9.65625C7.90649 10.4317 7.27565 11.0625 6.50024 11.0625Z" fill="#832729" />
          <path d="M6.50024 10.125C6.75913 10.125 6.96899 9.91513 6.96899 9.65625C6.96899 9.39737 6.75913 9.1875 6.50024 9.1875C6.24136 9.1875 6.03149 9.39737 6.03149 9.65625C6.03149 9.91513 6.24136 10.125 6.50024 10.125Z" fill="#832729" />
        </svg>
        <p className='   text-[#832729]'>Everyday Neckwear</p>
      </div>
      <div className="flex gap-[7px] cursor-pointer border justify-center  px-2.5 py-1.5 rounded-[9px] border-solid border-[#832729] items-center" onClick={() => VisitOutside("https://www.tanishq.co.in/shop/jewellery?lang=en_IN")}>
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
          <path d="M11.3692 9.875C11.3692 12.9816 8.89076 15.5 5.83344 15.5C2.77613 15.5 0.297729 12.9816 0.297729 9.875C0.297729 7.56462 1.67108 5.58387 3.63134 4.71812L3.84797 4.88937L4.79999 5.64175C2.92609 6.11525 1.52789 7.82638 1.52789 9.875C1.52789 12.2874 3.45936 14.25 5.83344 14.25C8.20753 14.25 10.139 12.2874 10.139 9.875C10.139 7.82638 8.7408 6.11525 6.8669 5.64175L8.03555 4.71825C9.99581 5.584 11.3692 7.56462 11.3692 9.875ZM5.83344 4.875L8.90884 2.44438L7.67868 0.5H3.98821L2.75805 2.44438L4.60329 3.90275L5.83344 4.875Z" fill="#832729" />
        </svg>
        <p className='   text-[#832729]'>All Jewellery</p>
      </div>
    </div>

  </>
}