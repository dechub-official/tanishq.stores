import img1 from '../../assets/images/marquee/1.png'
import img2 from '../../assets/images/marquee/2.png'
import img3 from '../../assets/images/marquee/3.png'
import img4 from '../../assets/images/marquee/4.png'
import img5 from '../../assets/images/marquee/5.png'
// import img6 from '../../assets/images/marquee/6.png'
export default function Marquee() {
    const items=["Easy Exchange",{img:img1,name:"Karatmeter"},{img:img2,name:"Trust of TATA"},{img:img3,name:'Quick checkout'},{img:img4,name:'Online shopping'}]
    return <>
     <marquee className="my-4 w-full flex justify-around  "  >
       
      {items.map((data,i)=>{
        return  <span className="ml-12 text-[18px] font-[100]"><img src={data.img} alt={data.name} className='w-[20px] inline' /> {data.name}</span>
      })}
    </marquee>
    </>
}