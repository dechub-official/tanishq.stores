export default function AppPopUp({closeAppPopUp}) {
    return <>
    <div className="fixed left-0   z-[500] bottom-5">
        
    <div className="box relative md:px-5 px-3 py-7 md:max-w-[190px] max-w-[160px] rounded-lg bg-[#700606] shadow-lg flex flex-col justify-center">
   <div onClick={()=>closeAppPopUp()} className="absolute top-2 cursor-pointer right-3 text-white font-[600]">X</div>
    <p className="text-center mt-1 mb-5 md:text-[16px] text-[15px] text-white font-[600]">Stay connected with the Tanishq app this 
Akshaya Tritiya</p>

<button onClick={()=>window.location.href="https://tanishqapp.page.link/8rX4"} className="bg-white py-2 hover:translate-y-[-3px] md:mx-0 mx-2 duration-100 hover:shadow-lg rounded-full text-black md:text-[15px] text-[12px] font-[500] text-center ">Download App <span className="font-[600] text-[#700606]"> {">"}</span></button>
    </div>
    </div>
    </>
}