import { Link } from 'react-router-dom'
import bullent from '../../assets/images/bullent.png'
export default function SuggestArtical() {
    return <>
    <div className="md:p-6 p-2 md:px-[20%] flex-wrap flex justify-around items-center bg-[#F5F5F5] w-full">
        <div className="lg:max-w-[40%] flex justify-center flex-col items-center w-full my-2 md:my-0">
            <h1 className="md:text-[28px] text-[18px]  font-[700]  text-[#47143D]">Suggested Articles</h1>
            <p className="font-[400] text-[15px] whitespace-nowrap text-left">Read more help and support articles, blogs here</p>
        </div>
        <div>
        <div className='flex justify-start items-start my-2'>
            <img src={bullent} alt="" className='mr-2 max-w-[8px] mt-[2px]' />
           <Link to="https://blog.tanishq.co.in/stories-from-tanishq-exchange-a-journey-of-trust-loyalty-and-cherished-memories/"> <p className='underline text-[15px] font-[400] cursor-pointer'>Stories from Tanishq Exchange: A Journey of Trust, Loyalty, and Cherished Memories</p></Link>

        </div>
        <div className='flex justify-start items-start my-2'>
            <img src={bullent} alt="" className='mr-2 max-w-[8px] mt-[2px]' />
          <Link to="https://blog.tanishq.co.in/the-heart-of-rivaah-what-tanishqs-wedding-brand-stands-for/"> <p className='underline text-[15px] font-[400] cursor-pointer'>The Heart of Rivaah: What Tanishq’s wedding brand stands for</p></Link> 

        </div>
        <div className='flex justify-start items-start my-2'>
            <img src={bullent} alt="" className='mr-2 max-w-[8px] mt-[2px]' />
           <Link to=" https://blog.tanishq.co.in/mixing-and-matching-earring-styles-for-every-occasion/"> <p className='underline text-[15px] font-[400] cursor-pointer'>Mixing and Matching Earring Styles for Every Occasion</p></Link>

        </div>
       
        </div>

    </div>
    </>
}