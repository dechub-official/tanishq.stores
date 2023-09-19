export default function Heading({heading,subHeading}) {
    return <>
    <div className="flex justify-center items-center flex-col md:my-9 my-4 md:mx-2 mx-1">
        <div className="text-[#47143D] text-[20px] text-center md:text-[32px] font-[700]">{heading}</div>
        <div className="text-[#000] text-center  text-[15px] md:text-[20px] font-[300]">{subHeading}</div>
    </div>
    </>
}