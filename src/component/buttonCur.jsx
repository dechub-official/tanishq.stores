export default function ButtonCur({name,icon,style,iconstyle,onclick}) {
    return <>
    <button type="button" onClick={()=>onclick()} className={style+"whitespace-nowrap  px-3 py-2 text-[#070202] bg-[#F2E7E9] rounded-full font-[600]  md:text-[15px] text-[10px]  border-2 border-[#832729] items-center flex hover:shadow-none transition-all duration-500 cursor-pointer  shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] "}>{name} <span className="ml-2 font-[600]">{">"}</span></button>
    </>
}