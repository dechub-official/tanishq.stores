import { SwiperSlide } from "swiper/react";
import Button from "../component/button";
import 'swiper/css';
import 'swiper/css/pagination';

export default function TanishqService({img,name,subheading,link,disablelink}) {
    return <>
    <div className="flex flex-col z-10 relative justify-center items-center max-w-[350px] min-h-[150px] md:min-h-[250px]" onClick={()=>{if(!disablelink)window.location.href="http://www.tanishq.co.in/shop/kakatiya"}}>
        <img src={img} alt={name} className="max-w-[600px] max-h-[150px] md:min-h-[250px] h-[150px] rounded-t-[20px] hover:shadow-none transition-all duration-500 cursor-pointer shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
" />

        {/* <p className="text-[18px] my-2 text-[#832729] font-[600] text-center">{heading}</p> */}
        {/* <p className="text-[15px] mb-2 text-[#832729] font-[400] text-center">{subheading}</p> */}
        <div className="absolute bottom-2 py-2 text-[14px] text-white w-full bg-[rgba(131,39,41,0.80)]">
        {name}
        </div>
        <div className="mb-2"></div>
    </div>
    
      
      
        
    </>
}