export default function Button({name,icon,style,iconstyle,onclick}) {
    return <>
    <button type="button" onClick={()=>onclick()} className={style+"  md:px-5 px-2 py-2 text-white bg-[#832729] font-500 md:text-[17px] text-[10px] rounded-[6px] items-center flex hover:shadow-none transition-all duration-500 cursor-pointer  shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] "}>{icon&&<img src={icon} alt="" className={iconstyle+" mr-2 w-[15px] md:w-[20px]"}/>}{name}</button>
    </>
}