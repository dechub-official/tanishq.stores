import BannerImg from '../../assets/images/Banner/storeBanner.png'
import MobileBanner from '../../assets/images/Banner/mobile-banner.png'
// import DiwaliBannerImg from '../../assets/images/Banner/diwaliStoreBanner.png'
// import DiwaliMobileBanner from '../../assets/images/Banner/diwalimobileBanner.png'


export default function Banner({name}) {
    return <>
     <div className="flex justify-center af-bl">
                    <div className="w-[88%]  flex flex-col mt-8  my-6 relative">
                        <img src={BannerImg} className="md:block hidden" alt="" />
                        {/* <img src={OfferBannerImg} className="md:block hidden" alt="" /> */}
                        <img src={MobileBanner} className="md:hidden block" alt="" />
                        {/* <img src={MobileOfferBanner} className="md:hidden block" alt="" /> */}
                        <div className="md:w-[50%] top-[30%] md:top-[60%] md:left-[3%] md:transform-none w-full  absolute flex justify-center">
                            <p className=" text-[18px]   text-[rgba(119,7,10,0.70)] italic  font-serif  text-center font-[200] max-w-[250px]">Welcome to {name}</p>
                        </div>
                    </div>
                </div>
    </>
}