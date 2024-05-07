import { useNavigate } from "react-router-dom"

export default function PopularCity({img,name}) {
    const nav=useNavigate()
    return <>
    {/* border-radius: 14px;
background: #ECECEC; */}
    <div onClick={()=>nav(`/store-locator/jewellery-stores/city/${name}`)} className=" overflow-hidden relative cursor-pointer md:w-[100px] w-[80px] md:h-[unset] duration-150 s hover:scale-[1.1] min-h-[80px] md:m-2  m-1  md:mx-0 md-m-0 flex justify-center flex-col items-center rounded-[10px] shadow-[rgba(0,0,0,0.24)_0px_3px_8px] bg-[white] px-2 py-5 pb-2">
       
        <img src={img} className="md:w-full align-bottom block mt-2 " />
        <p className="text-[#832729] absolute bottom-2  text-[15px] font-[600]">{name}</p>
        <p className="text-[#514e4e] w-full absolute top-0 origin-top-left  bg-gradient-to-r from-red-200 via-[#ece4e5] to-rose-50 py-1 px-1 text-[13px] font-normal">127 stores</p>
    </div>
    </>
}