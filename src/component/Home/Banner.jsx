import BannerImg from '../../assets/images/Banner/storeBanner.png'
import MobileBanner from '../../assets/images/Banner/mobile-banner.png'
import AISummary from './AISummary'

// import DiwaliBannerImg from '../../assets/images/Banner/storeBanner_festival.png'
// import DiwaliMobileBanner from '../../assets/images/Banner/mobile-banner_festival.png'


export default function Banner({ name, cardRef }) {
    return <>
        <div className="flex flex-col w-[88%] mx-auto  justify-center af-bl">

            <div className=" flex flex-col mt-8  my-6 relative">
                <img src={BannerImg} className="md:block hidden" alt="" />
                {/* <img src={DiwaliBannerImg} className="md:block hidden" alt="" /> */}
                <img src={MobileBanner} className="md:hidden block" alt="" />
                {/* <img src={DiwaliMobileBanner} className="md:hidden block" alt="" /> */}
                <div className="md:w-[50%] top-[30%] md:top-[60%] md:left-[3%] md:transform-none w-full  absolute flex justify-center">
                    <p className=" text-[18px]   text-[rgba(119,7,10,0.70)] italic  font-serif  text-center font-[200] max-w-[250px]">Welcome to {name}</p>
                </div>

                <div className="md:w-[50%] top-[40%] md:top-[70%] md:left-[3%] md:transform-none w-full  absolute flex justify-center">
                    <p className=" text-[18px]   text-black italic  font-fraunces  text-center font-normal max-w-[390px]">Exchange festival is live, <br /> Get upto 2KT <sup> *</sup> extra on old gold value</p>
                </div>

            </div>
            <AISummary cardRef={cardRef} />
            {/* <Envelope/> */}
        </div>

    </>
}