export default function PopularCity({img,name}) {
    return <>
    {/* border-radius: 14px;
background: #ECECEC; */}
    <div className="w-[100px] m-2 md-m-0 flex justify-center flex-col items-center rounded-[10px] bg-[#ECECEC] px-3 py-5">
        <img src={img} className="w-[70px] h-[50px]" />
        <p className="text-[#832729] mt-2 text-[12px] font-[500]">{name}</p>
    </div>
    </>
}