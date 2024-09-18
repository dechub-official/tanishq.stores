import AIBook from '../../assets/images/AISummary/AIText.png'
import AIStar from '../../assets/images/AISummary/aiStar.png'
import AILook from '../../assets/images/AISummary/AIlook.png'
import AIshuffle from '../../assets/images/AISummary/shuffle.png'
export default function AISummary() {
    return <>
        <div className="w-full relative my-5 bg-white md:shadow-sequreShadow rounded-2xl pb-5">
            <div className="header w-full flex-wrap flex items-center gap-3  md:bg-liteLimeBg md:px-10 md:py-5">
                <div className='flex gap-x-3'>
                <img src={AIBook} className='w-[30px]' alt="" />
                <div className="box px-3 py-3 gap-x-2 flex bg-tanishqAIBg rounded-xl">
                    <img src={AILook} className='w-[15px]' alt="" />
                    <p className='text-white md:text-[14px] text-[12px]  font-normal uppercase'>Introducing tanishq ai</p>

                </div>
                </div>
                <div>
                    <p className='text-[#832729] text-[18px] font-bold '>
                        Review Summary -
                        <span className='text-[#2B2A26] font-normal'> What our customers say across the nation!</span>
                    </p>
                </div>


            </div>
            <div className=' md:px-10 '>
            <div className='flex my-8 flex-wrap gap-y-3  gap-x-5'>
                <div className="box border-[#832729] border-2 px-3 py-2 items-center flex gap-x-2 rounded-2xl">
                    <img src={AIStar} alt="" className='w-[20px]' />
                    <span className='text-[#2B2A26] text-[14px]'>DESIGN</span>

                </div>
                <div className="box border-[#832729] border-2 px-3 py-2 items-center flex gap-x-2 rounded-2xl">
                    <img src={AIStar} alt="" className='w-[20px]' />
                    <span className='text-[#2B2A26] uppercase  text-[14px]'>personalized experiences</span>

                </div>

            </div>
            <div className="aiText">
                <p className='md:text-[#300708] text-[#56544E] text-[15px] md:text-[18px]'>Many customers shared their joy of choosing Tanishq for their wedding jewellery, praising the elegant designs that perfectly complements their special day. During festive seasons, they appreciate the wide range of traditional and contemporary pieces. For milestones, customers often turn to Tanishq, valuing the timeless elegance and quality of the jewellery.</p>
            </div>
            <div className='mt-5'>
                <p className='text-[#56544E] font-normal md:text-[18px] text-[14px]'>Smartly summarized from over lakhs of customer reviews at stores. <span className='text-[#56544E] font-bold underline'>Book An Appointment</span> at your nearest store. </p>
            </div>
            </div>
            <div className="absolute md:bottom-10 bottom-0 right-8">
                <img src={AIshuffle} className='w-[30px] cursor-pointer' alt="" />
            </div>
        </div>
    </>
}