import arrow from '../assets/images/arrow.png'
import opendEnvelop from '../assets/images/review.png'
import closedEnvelop from '../assets/images/closedReview.png'
import { useFullReview } from '../hooks/useStores'
import { useEffect, useState } from 'react'

export default function ReviewSlider() {
    const [activeSlide, setActiveSlide] = useState(0)
    const { data: reviewData, isLoading } = useFullReview();

    const handleArrow = (slide) => {
        if (slide == 0) {
            if (activeSlide > 0)
                setActiveSlide(activeSlide - 1)
        }
        else {
            if (activeSlide < (reviewData?.data?.length || 0) - 1)
                setActiveSlide(activeSlide + 1)
        }
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <>
        <div className="flex md:flex-nowrap flex-wrap storeCard my-10 justify-center gap-x-10 mx-auto container  items-center">
            <div className="left md:w-[unset] w-full mx-10">
                <div className='flex  w-full flex-col'>
                    <p className="text-[#7B7874] text-center md:text-left md:order-1 md:translate-y-0 translate-y-[50%] order-2 text-[14px] md:text-[18px]">Client Testimonials</p>
                    <p className="mt-2 text-[#000000] md:order-2 md:w-full w-[240px]  mx-auto leading-8 text-center order-1 text-[24px]"><span className='md:hidden '>What customers say
                        about Tanishq</span><span className='md:inline hidden'>What our customers say</span></p>
                </div>
                <div className="flex mt-5 justify-between md:translate-y-0 translate-y-[-40%] md:justify-start gap-x-5">
                    <img src={arrow} onClick={() => handleArrow(0)} className='w-[40px] cursor-pointer' alt="" />
                    <img src={arrow} onClick={() => handleArrow(1)} className='rotate-180 cursor-pointer w-[40px]' alt="" />
                </div>
            </div>
            <div className='relative flex  justify-center items-center'>
                <img src={opendEnvelop} className='md:w-[400px]  w-[300px] relative z-10' alt="" />
                <img src={closedEnvelop} className='w-[350px] md:block hidden  z-[3] bottom-12 absolute -right-4' alt="" />
                <img src={closedEnvelop} className='w-[350px] md:block hidden  z-[1] bottom-8 absolute -right-8' alt="" />
                <img src={closedEnvelop} className='w-[350px] md:block hidden  z-[0] bottom-4 absolute -right-12' alt="" />

                <article className='absolute review-slider z-10 max-w-[300px] top-[28%] text-[15px]'><div></div><div></div><div></div><div></div><div></div>
                    <p >"{reviewData?.data?.[activeSlide]?.review}"</p>
                </article>
                <p className='text-[15px] storeCard text-white absolute  z-10 ml-2 bottom-[12%]'>{reviewData?.data?.[activeSlide]?.name}</p>

            </div>
        </div>

    </>
}