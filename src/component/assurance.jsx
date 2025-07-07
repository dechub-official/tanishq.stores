import union from "../assets/images/footer/Union.png";
import mobunion from "../assets/images/footer/mob-union.png";
import gr1 from "../assets/images/footer/exchange.png";
import gr2 from "../assets/images/footer/purity.png";
import gr3 from "../assets/images/footer/replacements.png";
import gr4 from "../assets/images/footer/maintance.png";
export default function Assurance() {
  return (
    <>
      <div className="box relative m-5">
        <img src={union} className="md:!block hidden" alt="" />
        <img src={mobunion} className="block md:hidden" alt="" />
        <div className="absolute w-full top-[15%]">
          <h1 className="text-center text-[#832729] md:text-[40px]  text-[20px]  font-[400] font-fraunces">
            The Tanishq Assurance
          </h1>
          <p className="text-center text-[#56544E]">
            Crafted by experts, cherished by you.
          </p>
          <div className="grid md:mx-28 mx-5 mt-10 md:grid-cols-4 gap-y-10 grid-cols-2 gap-x-10 h-full justify-around">
            <div className="col-span-1 h-full">
              <div className="flex justify-between h-full items-center flex-col">
                <img src={gr1} alt="" className="w-[80px] md:w-[150px]" />
                <p className="text-[#300708] fraunces text-center mt-5 text-[18px] md:text-[20px] font-[600]">
                  Tanishq <br />
                  Exchange
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex justify-between h-full items-center flex-col">
                <img src={gr2} alt="" className="w-[80px] md:w-[150px]" />
                <p className="text-[#300708] fraunces text-center mt-5 text-[18px] md:text-[20px] font-[600]">
                  Purity <br />
                  Guarantee
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex justify-between h-full items-center flex-col">
                <img src={gr3} alt="" className="w-[100px] md:w-[160px]" />
                <p className="text-[#300708] fraunces text-center mt-5 text-[18px] md:text-[20px] font-[600]">
                  Easy
                  <br />
                  Replacement
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex justify-between h-full items-center flex-col">
                <img src={gr4} alt="" className="w-[80px] md:w-[130px]" />
                <p className="text-[#300708] fraunces text-center mt-5 text-[18px] md:text-[20px] font-[600]">
                  Lifetime
                  <br />
                  Maintenance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
