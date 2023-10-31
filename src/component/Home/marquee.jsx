import img1 from '../../assets/images/marquee/1.png'
import img2 from '../../assets/images/marquee/2.png'
import img3 from '../../assets/images/marquee/3.png'
import img4 from '../../assets/images/marquee/4.png'
import img5 from '../../assets/images/marquee/5.png'
// import img6 from '../../assets/images/marquee/6.png'
export default function Marquee() {
    const items=[{img:img2,name:"Easy Exchange"},{img:img3,name:"Karatmeter"},{img:img1,name:"Trust of TATA"},{img:img4,name:'Quick Checkout'},{img:img5,name:'Online Shopping'}]
    return <>
     <marquee className="my-4 w-full flex justify-around  "  >
       
      {items.map((data,i)=>{
        return  <span className="ml-12 text-[18px] font-[100]"><img src={data.img} alt={data.name} className='w-[20px] inline' /> {data.name}</span>
      })}
    </marquee>
    </>
}