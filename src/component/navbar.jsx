import { NavLink, useLocation, useNavigate } from 'react-router-dom'

import qr from '../assets/images/getapp_qr.webp'

import offer_img from '../assets/images/navbar/offer.png'
import playStore from '../assets/images/navbar/playStore.png'
import appStore from '../assets/images/navbar/appStore.png'

import { useState } from 'react'
import QrCodeExpander from './qrCodeExpander'


import { CloseIcon, LogoIcon } from '../shared/svg/Icon'
import MobileLinks from './Navbar/mobileLinks'
import DesktopNavLinks from './Navbar/desktopNavLinks'


export default function NavBar() {

  const loc = useLocation()
  const nav = useNavigate()


  const [qrExpand, setQrExpand] = useState(false)
  if (loc.pathname == "/app-moduleeb61394" || localStorage.getItem("nav-hide")) {
    localStorage.setItem("nav-hide", true)
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
    {/* font-fraunces sticky */}
    <div className="af-bl font-fraunces bg-white sticky shadow-sm top-[-2px] max-w-[100%] z-50 " >
      {/* <SubHome/> */}

      {/* bg-[#F2E9E9] */}
      <div className="w-full flex justify-between md:px-20 px-2  py-5 ">

        <div className="w-[40%] max-w-[8rem] justify-between   items-center flex">
          <div className="lg:hidden block">

            <div id="menuToggle" className='top-0'>

              <input id="menu-checkbox" type="checkbox" onChange={stopScorl} />
              <span></span>
              <span></span>
              <span></span>

              <ul id="menu" className='bg-white'>
                <div onClick={() => document.getElementById('menu-checkbox').click()} className="absolute right-0 top-0 p-2">
                  <CloseIcon />
                </div>
                <img src={offer_img} className='min-w-full mx-auto' alt="" />

                <MobileLinks />

                <p className="mt-20 text-center text-[#413F3A]">Enjoy the best experience on our Tanishq App</p>
                <div className='flex justify-around mt-5'>
                  <NavLink to="https://play.google.com/store/apps/details?id=com.titancompany.tanishqapp&pli=1"><img src={playStore} className='w-[150px] mx-1' alt="" /></NavLink>
                  <NavLink to="https://apps.apple.com/in/app/tanishq-a-tata-product/id1494086207"><img src={appStore} className='  w-[150px] mx-1' alt="" /></NavLink>
                </div>

              </ul>
            </div>


          </div>
          <div className=" cursor-pointer "  onClick={()=>{VisitOutside("https://tanishq.co.in/#home")}}>
            <LogoIcon width={60} height={60} />
            {/* <img src={logo} className=' w-[80px]' alt="" onClick={() => VisitOutside("https://www.tanishq.co.in/")} /> */}
          </div>
        </div>
        <DesktopNavLinks />

      </div>
    </div>




    {qrExpand && <QrCodeExpander img={qr} onClose={() => setQrExpand(false)} />}
  </>
}
