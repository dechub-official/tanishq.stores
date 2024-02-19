
export default function QrCodeExpander(props) {
   
    return <>  
    <div className="fixed w-full z-50  bg-[#00000011] h-full top-0 flex justify-center items-center ">

     <div  className="box bg-[#F2F2F2] mx-auto  min-w-[400px] max-w-[400px] max-h-[400px] my-4 rounded-[22px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        <div className="relative">
            <div className=" absolute right-3 top-1 overflow-hidden  cursor-pointer font-[800] text-[#803335] " onClick={() =>props.onClose()}>X</div>
        </div>
        <img src={props.img} className="rounded-[22px]" alt="qrCode" />
   </div>
   </div>
   

    </>
}