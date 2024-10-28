import img1 from '../../assets/images/marquee/1.png'
import img2 from '../../assets/images/marquee/2.png'
import img3 from '../../assets/images/marquee/3.png'
import img4 from '../../assets/images/marquee/4.png'
import img5 from '../../assets/images/marquee/5.png'
// import img6 from '../../assets/images/marquee/6.png'
import karatmeter from '../../assets/images/karatmeter.png'
import trust from '../../assets/images/trust.png'
import checkout from '../../assets/images/checkout.png'
import mobile from '../../assets/images/mobile.png'
import exchange from '../../assets/images/exchange.png'

const data = [
  {
    img: exchange,
    title: "Easy Exchange",
    desc: 'Upgrade your gold to stunning new Tanishq jewellery with 100% exchange value.'
  },
  {
    img: karatmeter,
    title: "karatmeter",
    desc: 'Our state-of-the-art Karatmeter ensures precise gold purity measurement, giving you confidence in every purchase.'
  },
  {
    img: trust,
    title: "Trust of TATA",
    desc: 'With Tanishq, you’re choosing exquisite jewellery backed by the trust of TATA.'
  },
  {
    img: checkout,
    title: "Quick Checkout",
    desc: 'Experience hassle-free shopping online or in-store for a fast and seamless experience!'
  },
  {
    img: mobile,
    title: "Online Shopping",
    desc: "Discover the ease of shopping at Tanishq—browse, compare, and shop your favourite pieces."
    
  },
]


export default function Marquee() {
    const items=[{img:img2,name:"Easy Exchange"},{img:img3,name:"Karatmeter"},{img:img1,name:"Trust of TATA"},{img:img4,name:'Quick Checkout'},{img:img5,name:'Online Shopping'}]
    return <>
     <marquee className="my-8 w-full flex justify-around  "  >
       
      {/* {items.map((data,i)=>{
        return  <span className="ml-12 text-[18px] font-[100]"><img src={data.img} alt={data.name} className='w-[20px] inline' /> {data.name}</span>
      })} */}
      <div className="flex flex-nowrap gap-4"> 
        {
          data.map((item,i) => (
            <div key={i} className="w-[335px] flex bg-gradient-to-r from-[#F2E7E9] to-[#D9BDBE] rounded-xl p-[1px] overflow-hidden">
              <div className="flex px-5 py-2 bg-white rounded-xl items-center w-full">
                <img src={item.img} alt="" className='w-[42px] h-[42px] inline' />
                <div className="w-[calc(100%-42px)] pl-4">
                  <p className="text-[18px] lg:text-[22px] font-semibold text-[#202020] mb-0">{item.title}</p>
                  <p className="text-[12px] text-[#202020] mb-0 whitespace-normal">{item.desc}</p>
                </div>
              </div>
            </div>
          ))
        } 
      </div>
    </marquee>
    </>
}