
import DiwaliBannerImg from '../assets/images/Banner/diwali-offer.png'
import DiwaliMobileBanner from '../assets/images/Banner/diwali-mobile-offer.png'


export default function DiwaliOffer() {

    const Navigate = () => {
       
        const newWindow = window.open("https://www.tanishq.co.in/shop/diwali-jewellery", '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;

    }
    return <>
        <div className="flex flex-col w-[88%] mx-auto  justify-center af-bl">

            <div className=" flex flex-col mt-8  my-6 relative">
                {/* <img src={BannerImg} className="md:block hidden" alt="" /> */}
                <img src={DiwaliBannerImg} className="md:block hidden rounded-xl" alt="" />
                {/* <img src={MobileBanner} className="md:hidden block" alt="" /> */}
                <img src={DiwaliMobileBanner} className="md:hidden block" alt="" />
                <div className="md:w-fit w-full top-[57%] md:top-[30%] md:right-[20%] fraunces md:transform-none absolute flex md:items-start flex-col items-center justify-start">
                    <p className=" md:text-[30px] text-[22px]  text-white  fraunces  text-center font-[500] ">Dhanteras Picks for you</p>
                    <button onClick={Navigate} class="btn border-0 md:mt-3 mt-4 gap-1 w-fit rounded-pill flex justify-center items-center p-2">
                        <span class="pr-1 text-[15px] md:text-[15px] font-[600]">Explore Collection</span>
                        <i class="bi bi-chevron-right ic-btn p-2 rounded-circle"></i>
                    </button>
                </div>

            </div>

        </div>

    </>
}