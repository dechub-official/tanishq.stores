import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import gplay from '../assets/images/googleplay.png'
import astore from '../assets/images/appstore.png'
import qr from '../assets/images/getapp_qr.webp'
import blog_img from '../assets/images/navbar/blogs.png'
import cart_img from '../assets/images/navbar/cart.png'
import diamonds_img from '../assets/images/navbar/diamonds.png'
import profile_img from '../assets/images/navbar/profile.png'
import shop_img from '../assets/images/navbar/shop.png'
import store_img from '../assets/images/navbar/stores.png'
import wishlist_img from '../assets/images/navbar/wishlist.png'


import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState } from 'react'
import QrCodeExpander from './qrCodeExpander'
import SubHome from './subHome'
import QrExpander from './qrExpander'


export default function NavBar() {
  const nav = useNavigate()
  // const[beginDate,setbeginDate]=useState({time:'2023-11-09T22:19:00',text:"begins"})
  const loc=useLocation()


const [qrExpand,setQrExpand]=useState(false)
if(loc.pathname=="/app-moduleeb61394"|| localStorage.getItem("nav-hide")){
  localStorage.setItem("nav-hide",true)
  return
}
  const stopScorl = (e) => {

    if (e.target.checked) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden"
      // document.getElementById("menuToggle").style.top = "-30px"
      document.getElementById("menuToggle").style.rigth = "0px"
    }
    else {
      document.getElementsByTagName("body")[0].style.overflow = "scroll"
      // document.getElementById("menuToggle").style.top = "20px"
    }
  }
  const VisitOutside = (url) => {
    const newWindow = window.open(url, 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;

  }
  return <>

    {/* Sticky Header */}
    <div className="sticky top-[-2px] max-w-[100%] z-50 " >
{/* <SubHome/> */}

      
      <div className="w-full flex justify-between bg-[#F2E9E9] p-2 ">

        <div className="w-[40%] max-w-[8rem] justify-between  items-center flex">
          <div className="lg:hidden block">

            <div id="menuToggle" className='top-0'>

              <input type="checkbox" onChange={stopScorl} />
              <span></span>
              <span></span>
              <span></span>

              <ul id="menu" className='bg-[#FFF4F4]'>
                <li className='mx-6 flex gap-[7px] cursor-pointer min-w-[180px] max-w-[180px] md:min-w-[200px] border self-center my-2 justify-left px-6   px-1 py-1 rounded-[9px] border-solid border-[#832729] items-center'><Link to={"https://www.tanishq.co.in/shop/diamond?lang=en_IN"}><p className='  hover:scale-[1.2] my-2 transition-all flex duration-150  text-[18px] text-[#832729] font-[400]  cursor-pointer af-bl'>
                  <svg className='mx-2 mr-3' xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 29 23" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9407 22.9976L0.271403 7.12943H9.24186L13.9407 22.9976ZM14.4386 0.0263432L10.8302 6.04456H18.3138L14.4386 0.0263432ZM19.3947 6.00385L15.3803 0H22.8026L19.3947 6.00385ZM9.82951 6.06133L13.3459 0H5.80802L9.82951 6.06133ZM24.0038 0.713661L20.4543 6.04456H29L24.0038 0.713661ZM5.25342 0.713661L8.98462 6.04456H0L5.25342 0.713661ZM10.5564 7.08153H18.4932L14.6416 22.7605L10.5564 7.08153ZM15.3189 23L28.8254 7.12943H19.8549L15.3189 23Z" fill="#832729" />
                  </svg>
                  Diamonds</p></Link>
                  {/* <div className='border-b-2 my-2 mx-2 rounded-[20px] bg-[#F2DFDF]  h-[5px]'></div> */}
                </li>
                <li className='mx-6 flex gap-[7px] cursor-pointer min-w-[180px] max-w-[180px] md:min-w-[200px] border self-center my-2 justify-left px-6   px-1 py-1 rounded-[9px] border-solid border-[#832729] items-center'><Link to="https://blog.tanishq.co.in/"><p className='  hover:scale-[1.2] my-2 transition-all flex duration-150  text-[15px] text-[#832729] font-[400]  cursor-pointer af-bl' >
                  <img src={blog_img} className='w-[20px] mr-3 h-[20px] mx-3  ' alt="" />
                  Blogs</p>
                </Link>
                  {/* <div className='border-b-2 my-2 mx-2 rounded-[20px] bg-[#F2DFDF]  h-[5px]'></div> */}
                </li>
                <li className='mx-6 flex gap-[7px] cursor-pointer min-w-[180px] max-w-[180px] md:min-w-[200px] border self-center my-2 justify-left px-6   px-1 py-1 rounded-[9px] border-solid border-[#832729] items-center'><Link to="/"><p className='  hover:scale-[1.2] my-2 transition-all flex duration-150  text-[15px] text-[#832729] font-[400]  cursor-pointer af-bl' >
                  <img src={store_img} className='w-[20px] mr-3 h-[20px] mx-2 ' alt="" />
                  Stores</p>
                </Link>
                  <div className='border-b-2 my-2 mx-2 rounded-[20px] bg-[#F2DFDF]  h-[5px]'></div>
                </li>
                <li className='mx-6 flex gap-[7px] cursor-pointer min-w-[180px] max-w-[180px] md:min-w-[200px] border self-center my-2 justify-left px-6   px-1 py-1 rounded-[9px] border-solid border-[#832729] items-center'><Link to="https://www.tanishq.co.in/myaccount?lang=en_IN#Wishlist"><p className=' hover:scale-[1.2] my-2 transition-all flex duration-150  text-[15px] text-[#832729] font-[400]  cursor-pointer af-bl'>
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
                 
                  <div className="flex my-5 items-center gap-[7px] " onClick={() => VisitOutside("https://www.tanishq.co.in/shop/diamond?lang=en_IN")}>
                    <svg className='' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none">
                      <g clip-path="url(#clip0_759_7)">
                        <path d="M8.19384 7.00928H8.04687H4.93847L2.4585 10.4199L8.14746 16L8.38184 15.77L13.8359 10.4199L11.3564 7.00928H8.19384ZM10.8067 7.67968L10.3487 9.71434L8.72806 7.67968H10.8067ZM8.1245 7.87353L9.88768 10.0859H6.39893L8.1245 7.87353ZM7.52343 7.67968L5.94334 9.70606V9.70656L5.48825 7.67972H7.52343V7.67968ZM4.97462 8.09862L5.4214 10.0859H3.52931L4.97462 8.09862ZM5.60156 10.6797L7.16603 14.0991L3.67968 10.6797H5.60156ZM8.14746 14.8179L6.2539 10.6797H10.0405L8.14746 14.8179ZM9.1284 14.0991L10.6929 10.6797H12.6142L9.1284 14.0991ZM10.8731 10.0859L11.3203 8.09862L12.7652 10.0859H10.8731Z" fill="#832729" />
                        <path d="M15.6631 5.68455C14.8535 5.68455 14.5738 5.48142 14.416 5.3242C14.2593 5.16648 14.0557 4.8867 14.0557 4.07714C14.0557 4.04639 14.0528 3.95898 13.9561 3.95898C13.8599 3.95898 13.8565 4.04639 13.8565 4.07714C13.8565 4.8867 13.6528 5.16648 13.4956 5.3242C13.3379 5.48142 13.0576 5.68455 12.249 5.68455C12.2178 5.68455 12.1309 5.68795 12.1309 5.78464C12.1309 5.88083 12.2178 5.88427 12.249 5.88427C13.0576 5.88427 13.3379 6.08789 13.4956 6.24511C13.6528 6.40233 13.8565 6.68261 13.8565 7.49217C13.8565 7.52342 13.8599 7.60986 13.9561 7.60986C14.0528 7.60986 14.0557 7.52342 14.0557 7.49217C14.0557 6.68261 14.2593 6.40233 14.416 6.24511C14.5738 6.08739 14.8535 5.88427 15.6631 5.88427C15.6944 5.88427 15.7813 5.88133 15.7813 5.78417C15.7813 5.68845 15.6944 5.68455 15.6631 5.68455Z" fill="#832729" />
                        <path d="M3.6216 2.6455C4.73438 2.6455 5.11916 2.92578 5.33547 3.14159C5.55178 3.35791 5.83107 3.74316 5.83107 4.85594C5.83107 4.89841 5.83694 5.01756 5.96875 5.01756C6.10157 5.01756 6.10547 4.89841 6.10547 4.85594C6.10547 3.74316 6.38525 3.35787 6.60157 3.14159C6.81738 2.92528 7.20216 2.6455 8.31544 2.6455C8.35791 2.6455 8.47757 2.64159 8.47757 2.50878C8.47757 2.37694 8.35794 2.37109 8.31544 2.37109C7.20216 2.37109 6.81738 2.09178 6.60157 1.87597C6.38525 1.65916 6.10547 1.27491 6.10547 0.162094C6.10547 0.119625 6.10157 0 5.96875 0C5.83691 0 5.83107 0.119625 5.83107 0.162125C5.83107 1.27491 5.55175 1.65919 5.33547 1.876C5.11916 2.09181 4.73441 2.37112 3.6216 2.37112C3.57913 2.37112 3.45947 2.3765 3.45947 2.50881C3.45947 2.64062 3.5791 2.6455 3.6216 2.6455Z" fill="#832729" />
                        <path d="M3.57666 6.12501C3.57666 6.03663 3.49656 6.0332 3.46825 6.0332C2.72363 6.0332 2.46581 5.8462 2.32128 5.70166C2.17675 5.55663 1.98925 5.29932 1.98925 4.5547C1.98925 4.52638 1.98631 4.44629 1.89744 4.44629C1.80953 4.44629 1.80563 4.52638 1.80563 4.5547C1.80563 5.29932 1.61863 5.55666 1.47409 5.70166C1.32906 5.8462 1.07125 6.0332 0.327125 6.0332C0.298344 6.03323 0.21875 6.03663 0.21875 6.12501C0.21875 6.21338 0.298344 6.21682 0.327156 6.21682C1.07131 6.21682 1.32913 6.40432 1.47413 6.54885C1.61866 6.69338 1.80566 6.9512 1.80566 7.69632C1.80566 7.72463 1.80956 7.80423 1.89747 7.80423C1.98634 7.80423 1.98928 7.72463 1.98928 7.69632C1.98928 6.9512 2.17678 6.69338 2.32131 6.54885C2.46584 6.40382 2.72366 6.21682 3.46828 6.21682C3.49659 6.21682 3.57666 6.21388 3.57666 6.12501Z" fill="#832729" />
                      </g>
                      <defs>
                        <clipPath id="clip0_759_7">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className='w-[135px] h-5 text-red-900 text-[17px] font-medium  capitalize'>All Diamonds</p>
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
                  <div className="flex my-5 items-center gap-[7px] " onClick={() => VisitOutside("https://www.tanishq.co.in/shop/diamond-earrings?lang=en_IN")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 13 13" fill="none">
                      <g clip-path="url(#clip0_759_28)">
                        <path d="M3.1292 5.95021C3.50165 5.73131 3.75237 5.32661 3.75237 4.86424C3.75237 4.24078 3.29671 3.72199 2.701 3.62268C2.68037 2.91742 2.82411 2.52637 3.23758 1.7643C3.56546 1.16001 3.31813 0.407528 2.6964 0.116685C2.09941 -0.162571 1.32468 0.0722539 1.10772 0.705764C0.866049 1.41129 1.17974 2.02466 0.654969 2.45267C0.562263 2.52826 0.5484 2.66472 0.623995 2.75743C0.699589 2.85013 0.836049 2.864 0.928755 2.7884C1.6332 2.21389 1.30925 1.45434 1.51756 0.84615C1.64799 0.465388 2.14276 0.335995 2.51285 0.509115C2.90821 0.694013 3.06573 1.17271 2.85682 1.55769C2.41668 2.36884 2.24692 2.83738 2.26785 3.62587C1.40025 3.7835 0.963249 4.76455 1.4143 5.51324C1.47603 5.61569 1.60913 5.6487 1.71161 5.58699C1.81407 5.52526 1.8471 5.39216 1.78537 5.28968C1.47086 4.76767 1.81038 4.04735 2.4935 4.03844C2.94877 4.03252 3.31919 4.40894 3.31919 4.86424C3.31919 5.31437 2.95185 5.7054 2.45581 5.68934C2.35105 5.68614 2.2597 5.75819 2.23774 5.85986C2.20939 5.99177 2.13808 7.96678 1.4333 10.6178H0.295083C0.850155 9.74913 1.31721 8.83688 1.68538 7.90042C1.72916 7.78909 1.67438 7.66335 1.56305 7.61957C1.45174 7.57584 1.32598 7.63056 1.2822 7.7419C0.564618 9.56713 -0.273581 10.6514 -0.311622 10.7668C-0.326758 10.813 -0.326405 10.8623 -0.308725 10.9099C-0.30109 10.9303 -0.351179 10.8317 0.526063 12.5315C0.675357 12.8207 0.970424 13.0004 1.29603 13.0004H3.69058C4.01619 13.0004 4.31123 12.8207 4.46058 12.5314L5.28502 10.9337C5.3213 10.8634 5.31635 10.7789 5.27211 10.7133C4.28765 9.25343 3.56251 7.66414 3.1292 5.95021ZM0.911048 12.3327L0.249623 11.051H1.37081L1.71622 11.7314C1.75442 11.8066 1.83055 11.85 1.90953 11.85C2.06977 11.85 2.1759 11.6799 2.1025 11.5353L1.85663 11.051H3.13001L2.36034 12.5672H1.29603C1.13323 12.5672 0.985695 12.4773 0.911048 12.3327ZM4.07565 12.3327C4.001 12.4773 3.85344 12.5672 3.69061 12.5672H2.84621L3.61585 11.051H4.06108C4.1807 11.051 4.27768 10.954 4.27768 10.8344C4.27768 10.7147 4.1807 10.6178 4.06108 10.6178H3.55339C3.36984 9.92739 3.21673 9.24396 3.0881 8.52624C3.06701 8.40852 2.95451 8.33027 2.83668 8.35126C2.71893 8.37235 2.6406 8.48493 2.66169 8.60268C2.78572 9.29464 2.93239 9.95618 3.10516 10.6177H1.88151C2.25994 9.16869 2.52079 7.67242 2.64994 6.11312C2.67371 6.11014 2.69729 6.10654 2.72066 6.10227C3.15914 7.81405 3.88003 9.3985 4.84153 10.8486L4.07565 12.3327Z" fill="#832729" />
                        <path d="M8.18979 7.84757C8.23317 7.73607 8.17793 7.61055 8.06644 7.56718C7.95494 7.5238 7.82942 7.57906 7.78604 7.69053C7.04873 9.5864 6.22003 10.6311 6.174 10.7617C6.1551 10.8155 6.15751 10.8761 6.18443 10.9301C6.1958 10.9528 6.42339 11.3939 7.01014 12.5307C7.15947 12.82 7.45453 12.9996 7.78011 12.9996H10.1747C10.5003 12.9996 10.7953 12.8199 10.9447 12.5307L11.7691 10.9329C11.8054 10.8626 11.8004 10.7781 11.7562 10.7125C10.7048 9.15355 10.0028 7.52672 9.59373 5.8712C9.63177 5.70087 9.46106 5.55604 9.29823 5.62468C8.75729 5.85306 8.15156 5.45497 8.15156 4.86351C8.15156 4.40816 8.52201 4.03771 8.97736 4.03771C9.50387 4.03771 9.89958 4.52721 9.78304 5.04594C9.75683 5.16267 9.83021 5.27852 9.9469 5.30476C10.0638 5.33094 10.1795 5.25759 10.2057 5.1409C10.3664 4.42513 9.8859 3.7388 9.18497 3.62194C9.16434 2.91668 9.30809 2.52563 9.72155 1.76357C10.1459 0.981468 9.59771 -1.43051e-05 8.6514 -1.43051e-05C8.17866 -1.43051e-05 7.74381 0.26083 7.59167 0.705029C7.34999 1.41056 7.66369 2.02392 7.13891 2.45193C7.04621 2.52753 7.03235 2.66399 7.10794 2.75669C7.18354 2.84937 7.31999 2.86326 7.4127 2.78767C8.11715 2.21315 7.79319 1.45361 8.00151 0.845414C8.13193 0.464653 8.62673 0.335233 8.9968 0.50838C9.39216 0.693277 9.54968 1.17197 9.34077 1.55696C8.90063 2.36813 8.73087 2.83667 8.7518 3.62514C8.16488 3.73179 7.71833 4.2463 7.71833 4.86351C7.71833 5.46277 8.13932 5.96526 8.701 6.09159C8.56806 7.68598 8.29758 9.18653 7.91728 10.617H6.77906C7.3445 9.73226 7.81843 8.80244 8.18979 7.84757ZM7.3951 12.332L6.73368 11.0502H7.85487L8.16475 11.6606C8.2189 11.7673 8.34927 11.8099 8.45592 11.7557C8.56259 11.7016 8.60515 11.5712 8.55103 11.4645L8.34071 11.0502H9.61412L8.84445 12.5664H7.78014C7.61728 12.5664 7.46975 12.4766 7.3951 12.332ZM9.13399 6.1125C9.15771 6.10955 9.18129 6.10597 9.20474 6.10169C9.64323 7.81348 10.3641 9.39785 11.3256 10.8478L10.5597 12.332C10.4851 12.4766 10.3375 12.5664 10.1747 12.5664H9.33029L10.0999 11.0502H10.422C10.5416 11.0502 10.6386 10.9532 10.6386 10.8336C10.6386 10.714 10.5416 10.617 10.422 10.617H10.0375C9.84773 9.90324 9.6902 9.19584 9.55883 8.4504C9.54031 8.34529 9.44893 8.27135 9.34578 8.27135C9.21067 8.27135 9.10889 8.39325 9.13221 8.52559C9.2607 9.25486 9.41295 9.94193 9.58924 10.617H8.36559C8.74397 9.16809 9.00487 7.67171 9.13399 6.1125Z" fill="#832729" />
                      </g>
                      <defs>
                        <clipPath id="clip0_759_28">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className='w-[135px] h-5 text-red-900 text-[17px] font-medium whitespace-nowrap capitalize'>Diamond Earrings</p>
                  </div>
                  <div className="flex my-5 items-center gap-[7px] " onClick={() => VisitOutside("https://www.tanishq.co.in/shop/jewellery?lang=en_IN")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
                      <path d="M11.0714 9.375C11.0714 12.4816 8.59303 15 5.53571 15C2.4784 15 0 12.4816 0 9.375C0 7.06462 1.37335 5.08387 3.33361 4.21812L3.55024 4.38937L4.50226 5.14175C2.62836 5.61525 1.23016 7.32638 1.23016 9.375C1.23016 11.7874 3.16163 13.75 5.53571 13.75C7.9098 13.75 9.84127 11.7874 9.84127 9.375C9.84127 7.32638 8.44307 5.61525 6.56917 5.14175L7.73782 4.21825C9.69808 5.084 11.0714 7.06462 11.0714 9.375ZM5.53571 4.375L8.61111 1.94438L7.38095 0H3.69048L2.46032 1.94438L4.30556 3.40275L5.53571 4.375Z" fill="#832729" />
                    </svg>
                    <p className='w-[135px] h-5 text-red-900 text-[17px] font-medium  capitalize'>All jewellery</p>
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
          <div className=" cursor-pointer "><img src={logo} className=' w-[80px]' alt="" onClick={() => VisitOutside("https://www.tanishq.co.in/")} /></div>
        </div>
        <div className='list flex  justify-around items-center md:my-0 my-3 md:items-center w-[40%] max-w-[12rem] md:max-w-[55%]  md:w-[55%] cursor-pointer'>
          <p className=' block hover:scale-[1.2] transition-all duration-150  text-[15px] text-[#832729] font-[400]  cursor-pointer af-bl' onClick={() => VisitOutside("https://www.tanishq.co.in/homepage?lang=en_IN")}>
            <img src={shop_img} className='w-[19px] mx-auto ' alt="" />
            <span className='hidden lg:block'> Shop Online</span></p>
          <p className='hidden lg:block hover:scale-[1.2] transition-all duration-150  text-[15px] text-[#832729] font-[400]  cursor-pointer af-bl' onClick={() => VisitOutside("https://www.tanishq.co.in/shop/diamond?lang=en_IN")}>
            <img src={diamonds_img} onClick={() => VisitOutside("https://www.tanishq.co.in/shop/diamond?lang=en_IN")} className='w-[25px] mx-auto ' alt="" />
            Diamonds</p>
          <p className='hidden lg:block hover:scale-[1.2] transition-all duration-150  text-[15px] text-[#832729] font-[400]  cursor-pointer af-bl' onClick={() => VisitOutside("https://blog.tanishq.co.in/")}>
            <img src={blog_img} className='w-[19px] mx-auto ' onClick={() => VisitOutside("https://blog.tanishq.co.in/")} alt="" />
            Blogs</p>
          <p className='hidden lg:block hover:scale-[1.2] transition-all duration-150  text-[15px] text-[#832729] font-[400]  cursor-pointer af-bl' onClick={() => nav("/")}>
            <img src={store_img} className='w-[19px] mx-auto ' alt="" />
            Stores</p>

          <p className='hidden lg:block hover:scale-[1.2] transition-all duration-150  text-[15px] text-[#832729] font-[400]  cursor-pointer af-bl' onClick={() => VisitOutside("https://www.tanishq.co.in/myaccount?lang=en_IN#Wishlist")}>
            <img src={wishlist_img} className='w-[19px] mx-auto ' alt="" />
            WishList</p>
          <p className='block hover:scale-[1.2] transition-all duration-150  text-[15px] text-[#832729] font-[400]  cursor-pointer af-bl' onClick={() => VisitOutside("https://www.tanishq.co.in/cart?lang=en_IN")}>
            <img src={cart_img} className='w-[19px] mx-auto ' alt="" />
            <span className='hidden lg:block'>Cart</span> </p>
          <p className=' hover:scale-[1.2] transition-all duration-150  text-[15px] text-[#832729] font-[400]  cursor-pointer af-bl' onClick={() => VisitOutside("https://www.tanishq.co.in/myaccount?lang=en_IN#AccountOverview")}>
            <img src={profile_img} className='w-[19px] mx-auto ' alt="" />
            <span className='hidden lg:block'>Account</span>  </p>
        
            {/* <img src={qr} className='w-[30px]  transition-all duration-150  hover:scale-[2.8] mx-auto' alt="" /> */}
          <div className='md:flex hidden items-center flex-col justify-center '>
            <QrExpander/>
            GET THE APP
            </div>
          {/* <div className=" hidden lg:block hover:scale-[2.8] transition-all duration-150 box w-[30px] h-[30px] bg-[#D9D9D9] cursor-pointer af-bl"> <img src={qr} alt="" /></div> */}

          {/* <div className="w-[30px] cursor-pointer"><img src={profile}  onClick={()=>VisitOutside("https://www.tanishq.co.in/myaccount?lang=en_IN#AccountOverview")}  alt="" /></div> */}
        </div>

      </div>
    </div>
   
   
    

   {qrExpand&& <QrCodeExpander img={qr} onClose={()=>setQrExpand(false)}/>}
  </>
}
