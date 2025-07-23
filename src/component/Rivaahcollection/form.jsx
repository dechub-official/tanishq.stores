import { useState } from "react";
import { ChevronDown } from "lucide-react";


import gold from "../../assets/images/rivaahcollection/gold.png";
import diamond from "../../assets/images/rivaahcollection/diamond.png";

export default function CustomJewelleryForm() {
  const [preferred, setPreferred] = useState("Gold");
  const [weddingDate, setWeddingDate] = useState("");
  const [interest, setInterest] = useState("");

  
function handelsubmit(e) {
    if (!preferred || !weddingDate || !interest) {
  
    console.log("Form submitted with values:", {
      preferred,
      weddingDate,
      interest,
    });
}
}
  return (
    <div className="max-w-xl ">
      {/* Row 1 */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-[18px] text-normal text-[#644117] ibm-plex">I am looking for</span>
        <div className="relative w-56">
          <select 
        
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="appearance-none w-full bg-white text-[#969288] fraunces text-[17px] font-normal border border-[rgba(204,173,135,0.7)] rounded-full py-2 px-4 pr-10 focus:outline-none">
            <option Earrings>Earrings</option>
            <option value="Necklace">Necklace </option>
            <option value="Best Selling">Best Selling</option>
            <option value="Recommendations">Recommendations</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b4b3b] w-4 h-4 pointer-events-none" />
        </div>
        <span className="text-[18px] text-normal text-[#644117] ibm-plex">jewellery,</span>
      </div>

      {/* Row 2 */}
      <div className="flex items-center gap-2 flex-wrap mt-6">
        <span className="text-[18px] text-normal text-[#644117] ibm-plex">for</span>
        <div className="relative w-48">
          <input
            type="date"
            value={weddingDate}
            onChange={(e) => setWeddingDate(e.target.value)}
            className="appearance-none w-full bg-white text-[#969288] fraunces text-[17px] font-normal border border-[rgba(204,173,135,0.7)] rounded-full py-2 px-4 focus:outline-none"
          />
        </div>
        <span className="text-[18px] text-normal text-[#644117] ibm-plex">within</span>
        <div className="relative w-[150px]">
          <input
            type="time"
          value={preferred}
            onChange={(e) => setPreferred(e.target.value)}
           className="appearance-none w-full bg-white text-[#969288] fraunces text-[17px] font-normal border border-[rgba(204,173,135,0.7)] rounded-full py-2 px-4  focus:outline-none"
          
          />
          
        </div>
      </div>

      <button onClick={(e)=>handelsubmit(e)} style={{filter: "drop-shadow(4px 4px 8.9px rgba(60, 0, 0, 0.25))"}} className={` text-[12px] mt-[60px] text-[rgb(255_255_255/52%)] rounded-full bg-[linear-gradient(90.18deg,rgba(131,39,41,0.6)0.17%,rgba(99,21,23,0.6)99.86%)] border-0 gap-1 md:flex rounded-pill hidden justify-center items-center py-[10px] pl-7 pr-3`}>
                            <span className="pr-1 text-[16px] text-white font-fraunces max-md:text-[11px] font-[500]">Meet the Stylist</span>
                            <i className="bi bi-chevron-right  p-1 rounded-circle bg-[#A76767] rounded-full w-10 h-10 flex items-center justify-center"
                                style={{ boxShadow: ' inset -1px -1px 4px #A76767, inset 16px 16px 15.9px 4px rgba(99, 21, 23, 0.31)', }}></i>
                        </button>      
    </div>
  );
}
