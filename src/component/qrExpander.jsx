import { Link, useLocation, useNavigate } from 'react-router-dom'
import qr from '../assets/images/getapp_qr.webp'
import { useRef, useState } from 'react'



export default function QrExpander() {
 
  const loc=useLocation()
  const inputtarget=useRef()

if(loc.pathname=="/app-moduleeb61394"|| localStorage.getItem("nav-hide")){
  localStorage.setItem("nav-hide",true)
  return
}
  const stopScorl = (e) => {

    if (e.target.checked) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden"
      // document.getElementById("menuToggle").style.top = "-30px"
      document.getElementById("menuToggle").style.left = "0px"
    }
    else {
      document.getElementsByTagName("body")[0].style.overflow = "scroll"
      // document.getElementById("menuToggle").style.top = "20px"
    }
  }
  const handleInputClick=()=>{
    inputtarget.current.click()
  }

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "https://play.google.com/store/apps/details?id=com.titancompany.tanishqapp&pli=1";
    }

    if (/android/i.test(userAgent)) {
        return "https://play.google.com/store/apps/details?id=com.titancompany.tanishqapp&pli=1";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "https://apps.apple.com/in/app/tanishq-a-tata-product/id1494086207";
    }

    return "https://play.google.com/store/apps/details?id=com.titancompany.tanishqapp&pli=1";
}
  const VisitOutside = () => {
   const url= getMobileOperatingSystem()
    const newWindow = window.open(url, 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;

  }
  return <>

<div id="menuToggle" className='top-0 cursor-default'>

<input type="checkbox" ref={inputtarget} onChange={stopScorl} />
<img src={qr} onClick={handleInputClick} className='max-w-[30px] max-h-[30px] cursor-pointer logo-qr mx-1' alt="" />

<ul id="menu-qr" className='bg-[white] font-fraunces'>
  <div className='text-black text-[20px] whitespace-nowrap justify-between font-fraunces flex'> <p className='flex'>Scan to download  <p className='text-[#954648] font-fraunces ml-2 w-fit whitespace-nowrap'>Tanishq App</p></p>
  <svg width="24" height="25" className='cursor-pointer' onClick={handleInputClick} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12.5" r="12" fill="#F6F6F6"/>
<path d="M15.3636 9.5L9 15.8636M9 9.5L15.3636 15.8636" stroke="#300708" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  </div>

  <img src={qr} className='w-[300px] mx-auto my-10' alt="" />
  
<hr />
<p className='ibm-plex  font-[500] my-5 text-[#636363]'>Or <u onClick={VisitOutside} className='text-[#832729] cursor-pointer font-bold'>click here to download</u></p>
</ul>
</div>
   
    


  </>
}
