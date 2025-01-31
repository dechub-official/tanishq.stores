

// import DiwaliMobileBanner from '../assets/images/Banner/diwali-mobile-offer.png'


export default function OffeBanner({url,image}) {

    const Navigate = () => {
       
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;

    }
    return <>
        <div className="flex flex-col w-[82%] mx-auto  justify-center af-bl">

            <div className=" flex flex-col mt-8  my-6 relative">
               
                <img src={image} onClick={Navigate} className=" cursor-pointer rounded-xl" alt="" />
              
                {/* <img src={DiwaliMobileBanner} className="md:hidden rounded-xl block" alt="" /> */}
                {/* <div className="md:w-fit w-full top-[45%] md:top-[30%] md:right-[20%] fraunces md:transform-none absolute flex md:items-start flex-col items-center justify-start">
                    <p className=" md:text-[30px] text-[22px]  text-white  fraunces  text-center font-[500] ">Dhanteras Picks for you</p>
                    <button onClick={Navigate} class="btn border-0 md:mt-3 mt-4 gap-1 w-fit rounded-pill flex justify-center items-center p-2">
                        <span class="pr-1 text-[15px] md:text-[15px] font-[600]">Explore Collection</span>
                        <i class="bi bi-chevron-right ic-btn p-2 rounded-circle"></i>
                    </button>
                </div> */}

            </div>

        </div>

    </>
}