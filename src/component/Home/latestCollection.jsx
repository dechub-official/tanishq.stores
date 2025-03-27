import {  useNavigate } from "react-router-dom";
import { gtmEventHandler } from "../../utils/gtmDataLayer";


export default function LatestCollection({ img, link,name }) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    gtmEventHandler({'event':'collection_click',
      'collectionName':name})
  
    navigate(link);
  };

  return (
    <div onClick={handleNavigation} className="cursor-pointer">
      <div className="md:max-w-[350px] md:min-w-[100px] min-h-[210px] md:min-h-[530px] md:max-h-[530px]">
        <img
          src={img}
          alt=""
          className="rounded-[25px] md:min-h-[530px] min-h-[210px] md:max-h-[530px] h-full"
        />
      </div>
    </div>
  );
}
