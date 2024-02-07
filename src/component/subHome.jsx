import { useNavigate } from 'react-router-dom'
// import SubHomeexp from '../assets/images/subhomeExpender.png'
export default function SubHome() {
    // const nav=useNavigate()
    return <>
        <div className="w-full text-center text-white bg-[#832729] flex justify-center items-center text-[13.5px] px-2 md:text-[14px] font-[500]  py-1 "  >
            <p className=' md:w-auto'> It's raining diamonds on Tanishq. Shop now and get up to 20% off.  <u className='font-[600] break-keep flex-nowrap whitespace-nowrap  cursor-pointer' onClick={()=>{window.location.href="https://www.tanishq.co.in/festival-of-diamond"}}> Buy now</u></p>
        </div>
    </>
}