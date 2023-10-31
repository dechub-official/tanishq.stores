import { useNavigate } from "react-router-dom"

export default function PopularCity({img,name}) {
    const nav=useNavigate()
    return <>
    {/* border-radius: 14px;
background: #ECECEC; */}
    <div onClick={()=>nav(`/store-locator/jewellery-stores/city/${name}`)} className=" relative cursor-pointer md:w-[100px] w-[80px] md:h-[unset] duration-150 s hover:scale-[1.1] h-[90px] md:m-2  m-1  md:mx-0 md-m-0 flex justify-center flex-col items-center rounded-[10px] bg-[#ECECEC] px-3 py-5 pb-2">
        <img src={img} className="md:w-full align-bottom block  " />
        <p className="text-[#832729] absolute bottom-2  text-[12px] font-[500]">{name}</p>
    </div>
    </>
}