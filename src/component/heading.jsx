export default function Heading({heading,subHeading}) {
    return <>
    <div className="flex justify-center items-center flex-col my-9">
        <div className="text-[#47143D] text-[32px] font-[700]">{heading}</div>
        <div className="text-[#000] text-[20px] font-[300]">{subHeading}</div>
    </div>
    </>
}