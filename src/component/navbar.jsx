import { useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import profile from '../assets/images/profile.png'
import { useEffect } from 'react'
export default function NavBar() {
    const nav=useNavigate()
    useEffect(()=>{
        const navbarToggle = document.querySelector("#navbar-toggle");
        const navbarMenu = document.querySelector("#navbar-menu");
        const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
        let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";
        
        const toggleNavbarVisibility = () => {
          isNavbarExpanded = !isNavbarExpanded;
          navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
        };
        
        navbarToggle.addEventListener("click", toggleNavbarVisibility);
        
        navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
        navbarMenu.addEventListener("click", toggleNavbarVisibility);
    },[])
    const VisitOutside=(url)=>{
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
    
    }
    return <>
    <div className="w-full flex justify-between bg-[#F2E9E9] p-2 ">
        <div className="w-[70px]"><img src={logo} alt="" onClick={()=>nav("/")} /></div>
        <div className='list md:flex hidden justify-around items-center w-[35%] cursor-pointer'>
            <p className='hidden md:block underline text-[18px] font-[400] cursor-pointer af-bl' onClick={()=>VisitOutside("https://www.tanishq.co.in/blog-home.html?lang=en_IN")}>Blogs</p>
            <p className=' hidden md:block underline text-[18px] font-[400] cursor-pointer af-bl' onClick={()=>VisitOutside("https://www.tanishq.co.in/")}>Shop from tanishq.co.in</p>
            <div className=" hidden md:block hover:scale-[2] transition-all duration-150 box w-[30px] h-[30px] bg-[#D9D9D9] cursor-pointer af-bl"></div>
            <p className='hidden md:block underline text-[18px] font-[400] cursor-pointer af-bl'>Get the app</p>
            <div className="w-[30px] cursor-pointer"><img src={profile}  onClick={()=>VisitOutside("https://www.tanishq.co.in/myaccount?lang=en_IN#AccountOverview")}  alt="" /></div>
        </div>
        <div className="md:hidden block">

        <button type="button" id="navbar-toggle" aria-controls="navbar-menu" aria-label="Toggle menu" aria-expanded="false">
      <span className="icon-bar  bg-[#832729]"></span>
      <span className="icon-bar bg-[#832729]"></span>
      <span className="icon-bar bg-[#832729]"></span>
    </button>
    <div id="navbar-menu" aria-labelledby="navbar-toggle">
      
      <ul class="navbar-links z-10">
      <div className="flex justify-between items-start w-full"> <div className="w-[70px]"><img src={logo} alt="" onClick={()=>nav("/")} /></div>
      <div className="w-[40px] mt-1 cursor-pointer" ><img src={profile}   onClick={()=>VisitOutside("https://www.tanishq.co.in/myaccount?lang=en_IN#AccountOverview")} alt="" /></div></div>
    <li className='navbar-item flex justify-center'><div className="  hover:scale-[2] transition-all duration-150 box w-[100px] h-[100px] bg-[#832729] cursor-pointer af-bl"></div></li>  
        <li class="navbar-item flex justify-center text-[#832729]" > <p className=' underline my-2 text-[18px] font-[400] cursor-pointer af-bl'>Get the app</p></li>
        <li class="navbar-item flex justify-center text-[#832729]"  onClick={()=>VisitOutside("https://www.tanishq.co.in/blog-home.html?lang=en_IN")}>  <p className=' underline my-2 text-[18px] font-[400] cursor-pointer af-bl' >Blogs</p>
          </li>
        <li class="navbar-item flex justify-center text-[#832729]"  onClick={()=>VisitOutside("https://www.tanishq.co.in/")}>  <p className='  underline my-2 text-[18px] font-[400] cursor-pointer af-bl'>Shop from tanishq.co.in</p></li>
      </ul>
    </div>
        </div>
    </div>

    </>
}