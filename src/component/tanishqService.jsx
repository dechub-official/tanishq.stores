import { SwiperSlide } from "swiper/react";
import Button from "./button";
import 'swiper/css';
import 'swiper/css/pagination';
export default function TanishqService({img,heading,subheading,link}) {
    return <>
    <div className="flex flex-col justify-center items-center max-w-[250px]  min-h-[300px]">
        <img src={img} alt={heading} className="max-w-[600px] max-h-[300px] min-h-[300px] rounded-[20px] hover:shadow-none transition-all duration-500 cursor-pointer shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]
" />
        <p className="text-[18px] my-2 text-[#832729] font-[600] text-center">{heading}</p>
        <p className="text-[15px] mb-2 text-[#832729] font-[400] text-center">{subheading}</p>
        <Button iconstyle={"mr-[0px]"} name={"Find Store"} link={link}/>

    </div>
    
      
      
        
    </>
}