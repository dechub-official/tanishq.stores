import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useBbridalBookingstep1, useBbridalBookingstep2 } from "../../hooks/useStores";
import axios from "axios";

import gold from "../../assets/images/rivaahcollection/gold.png";
import diamond from "../../assets/images/rivaahcollection/diamond.png";
import logo from "../../assets/images/rivaahcollection/Logo.png";

export default function CustomJewelleryForm({ step, setStep }) {

  const { mutate: bridalbookingstep1 } = useBbridalBookingstep1();
  const { mutate: bridalbookingstep2 } = useBbridalBookingstep2();


  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [chooseItem, setChooseItem] = useState("");

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [id, setId] = useState("");

  const handelsubmit = async (e) => {
    setLoading(true);
    const payload = {
      chooseItem,
      date,
      time,
    };
    bridalbookingstep1(payload, {
      onSuccess: (data) => {
        setId(data.result);
       
        setStep(2)
        setLoading(false);
      },
      onError: (error) => {
        console.error('Failed to book appointment:', error);
      }
    });
  }

  const handelsubmit2 = async (e) => {
    setLoading(true);

    const payload = {
      id,
      name,
      contact: phone,
      email,
    };
 bridalbookingstep2(payload, {
      onSuccess: () => {
        setLoading(false);
        setStep(3);
      },
      onError: (error) => {
        console.error('Failed to book appointment:', error);

      }
    });
  }

  return (
    <>
      {step === 1 ?
        <div className="w-[100%] h-[100%] flex flex-col justify-between items-start">

          <div className="flex justify-between items-center w-full">
            <div><h3 className="fraunces leading-[40px] text-[#767469] text-[35px] font-normal">Connect with <br></br><span className="fraunces text-[#070202]">A Bridal Stylist</span></h3></div>
            <div> <img className="w-[100px]" src={logo} alt="tanishq logo" /></div>
          </div>

          <div>
            {/* Row 1 */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[18px] text-normal text-[#644117] ibm-plex">I am looking for</span>
              <div className="relative w-60">
                <select

                  value={chooseItem}
                  onChange={(e) => setChooseItem(e.target.value)}
                  className="appearance-none w-full bg-white text-[#969288] fraunces text-[17px] font-normal border border-[rgba(204,173,135,0.7)] rounded-full py-2 px-4 pr-10 focus:outline-none">
                  <option value="Recommendations" selected>Recommendations</option>
                  <option value="Earrings">Earrings</option>
                  <option value="Necklace">Necklace </option>
                  <option value="Best Selling">Best Selling</option>

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
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="appearance-none w-full bg-white text-[#969288] fraunces text-[17px] font-normal border border-[rgba(204,173,135,0.7)] rounded-full py-2 px-4 focus:outline-none"
                />
              </div>
              <span className="text-[18px] text-normal text-[#644117] ibm-plex">within</span>
              <div className="relative w-[150px]">
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="appearance-none w-full bg-white text-[#969288] fraunces text-[17px] font-normal border border-[rgba(204,173,135,0.7)] rounded-full py-2 px-4  focus:outline-none"

                />

              </div>
            </div>
          </div>

          <button onClick={handelsubmit} disabled={loading} style={{ filter: "drop-shadow(4px 4px 8.9px rgba(60, 0, 0, 0.25))" }} className={` text-[12px] mt-[10px] text-[rgb(255_255_255/52%)] rounded-full bg-[linear-gradient(90.18deg,rgba(131,39,41,0.6)0.17%,rgba(99,21,23,0.6)99.86%)] border-0 gap-1 md:flex rounded-pill hidden justify-center items-center py-[10px] pl-7 pr-3`}>
            <span className="pr-1 text-[16px] text-white font-fraunces max-md:text-[11px] font-[500]">{!loading ? "Meet the Stylist" : "Submmiting..."}</span>
            <i className="bi bi-chevron-right  p-1 rounded-circle bg-[#A76767] rounded-full w-10 h-10 flex items-center justify-center"
              style={{ boxShadow: ' inset -1px -1px 4px #A76767, inset 16px 16px 15.9px 4px rgba(99, 21, 23, 0.31)', }}></i>
          </button>

        </div>
        :
        <div className="w-[100%] h-[100%] flex flex-col justify-between items-start">

          <div className="flex justify-between items-center w-full">
            <div><h3 className="fraunces leading-[40px] text-[#767469] text-[35px] font-normal">You’re <br></br><span className="fraunces text-[#070202]">Almost There</span></h3></div>
            <div> <img className="w-[100px]" src={logo} alt="tanishq logo" /></div>
          </div>

          <div>
            {/* Row 1 */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[18px] text-normal text-[#644117] ibm-plex">My name is</span>
              <div className="relative w-[270px]">
                <input
                  type="text"
                  placeholder="Type Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none w-full bg-white text-[#969288] fraunces text-[17px] font-normal border border-[rgba(204,173,135,0.7)] rounded-full py-2 px-4 focus:outline-none"
                />

              </div>

            </div>

            {/* Row 2 */}
            <div className="flex items-center gap-2 flex-wrap mt-3">
              <span className="text-[18px] text-normal text-[#644117] ibm-plex">Conatct Number</span>
              <div className="relative w-[260px]">
                <input
                  type="tel"
                  placeholder="Share Your Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="appearance-none w-full bg-white text-[#969288] fraunces text-[17px] font-normal !border !border-solid !border-[rgba(204,173,135,0.7)] rounded-full !py-2 !px-4 focus:outline-none" />
              </div>

            </div>


            {/* Row 3 */}
            <div className="flex items-center gap-2 flex-wrap mt-3">
              <span className="text-[18px] text-normal text-[#644117] ibm-plex">E-mail</span>
              <div className="relative w-[150px]">
                <input
                  type="mail"
                  placeholder="Share e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none w-full bg-white text-[#969288] fraunces text-[17px] font-normal border border-[rgba(204,173,135,0.7)] rounded-full py-2 px-4  focus:outline-none"

                />

              </div>
            </div>
          </div>

          <button onClick={handelsubmit2} disabled={loading} style={{ filter: "drop-shadow(4px 4px 8.9px rgba(60, 0, 0, 0.25))" }} className={` text-[12px] mt-[10px] text-[rgb(255_255_255/52%)] rounded-full bg-[linear-gradient(90.18deg,rgba(131,39,41,0.6)0.17%,rgba(99,21,23,0.6)99.86%)] border-0 gap-1 md:flex rounded-pill hidden justify-center items-center py-[10px] pl-7 pr-3`}>
            <span className="pr-1 text-[16px] text-white font-fraunces max-md:text-[11px] font-[500]">{!loading ? "Book Now" : "Submmiting..."}</span>
            <i className="bi bi-chevron-right  p-1 rounded-circle bg-[#A76767] rounded-full w-10 h-10 flex items-center justify-center"
              style={{ boxShadow: ' inset -1px -1px 4px #A76767, inset 16px 16px 15.9px 4px rgba(99, 21, 23, 0.31)', }}></i>
          </button>

        </div>
      }
    </>
  );
}
