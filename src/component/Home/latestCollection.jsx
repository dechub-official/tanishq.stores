
import { Link } from "react-router-dom";

export default function LatestCollection({img,link}) {
   const BookAppointment = () => {
        const newWindow = window.open(link, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;

   }
    return <>
  <div onClick={BookAppointment}> <div className="md:max-w-[350px] cursor-pointer md:min-w-[100px] min-h-[210px]  md:min-h-[530px] md:max-h-[530px]">
    <img src={img} alt="" className="rounded-[25px]  md:min-h-[530px] min-h-[210px] md:max-h-[530px] h-full" />
    </div>
  </div> 
    </>
}
