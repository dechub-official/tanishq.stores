export default function ButtonCur({name,icon,style,iconstyle,onclick}) {
    return <>
    <button type="button" onClick={()=>onclick()} className={style+"whitespace-nowrap  px-3 py-2 text-[#070202] bg-[#F2E7E9] rounded-full font-[600]  md:text-[15px] text-[10px]  border-2 border-[#832729] items-center flex hover:shadow-none transition-all duration-500 cursor-pointer  shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] "}>{name} <span className="ml-2 font-[600]"><svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 1.5L4.5 4.5L1.5 7.5" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span></button>
    </>
}