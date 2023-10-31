import { Link } from 'react-router-dom'
import bullent from '../../assets/images/bullent.png'
export default function SuggestArtical() {
    return <>
    <div className="md:p-6 p-2 md:px-[20%] flex-wrap flex justify-around items-center bg-[#F5F5F5] w-full">
        <div className="md:max-w-[40%] flex justify-center flex-col items-center w-full my-2 md:my-0">
            <h1 className="md:text-[28px] text-[18px]  font-[700]  text-[#47143D]">Suggested Articles</h1>
            <p className="font-[400] text-[15px] text-left">Read more help and support articles, blogs here</p>
        </div>
        <div>
        <div className='flex justify-start items-start my-2'>
            <img src={bullent} alt="" className='mr-5 w-[12px]' />
           <Link to="https://www.tanishq.co.in/blog/beginner-guide-to-gold-jewellery-exchange-what-you-need-to-know.html?lang=en_IN"> <p className='underline text-[15px] font-[400] cursor-pointer'>A Beginner's Guide to Gold Jewellery Exchange</p></Link>

        </div>
        <div className='flex justify-start items-start my-2'>
            <img src={bullent} alt="" className='mr-5 w-[12px]' />
          <Link to="https://www.tanishq.co.in/blog/why-are-women-mostly-inclined-to-buy-earrings.html?lang=en_IN"> <p className='underline text-[15px] font-[400] cursor-pointer'>Why Are Women Mostly Inclined to Buy Earrings</p></Link> 

        </div>
        <div className='flex justify-start items-start my-2'>
            <img src={bullent} alt="" className='mr-5 w-[12px]' />
           <Link to="https://www.tanishq.co.in/blog/top-five-factors-for-choosing-a-gold-exchange-near-me-blog.html?lang=en_IN"> <p className='underline text-[15px] font-[400] cursor-pointer'>5 Factors To Consider When Selecting A Gold Exchange Near Me</p></Link>

        </div>
       
        </div>

    </div>
    </>
}