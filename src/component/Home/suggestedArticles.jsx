import bullent from '../../assets/images/bullent.png'
export default function SuggestArtical() {
    return <>
    <div className="p-6 px-[20%] flex justify-around items-center bg-[#F5F5F5] w-full">
        <div className="max-w-[40%]">
            <h1 className="text-[28px] font-[700]  text-[#47143D]">Suggested Articles</h1>
            <p className="font-[400] text-[20px] text-left">Read more help and support articles, blogs here</p>
        </div>
        <div>
        <div className='flex justify-start items-center my-2'>
            <img src={bullent} alt="" className='mr-5 w-[20px]' />
            <p className='underline text-[15px] font-[400] cursor-pointer'>Why should you shop from Tanishq?</p>

        </div>
        <div className='flex justify-start items-center my-2'>
            <img src={bullent} alt="" className='mr-5 w-[20px]' />
            <p className='underline text-[15px] font-[400] cursor-pointer'>Why should you shop from Tanishq?</p>

        </div>
        <div className='flex justify-start items-center my-2'>
            <img src={bullent} alt="" className='mr-5 w-[20px]' />
            <p className='underline text-[15px] font-[400] cursor-pointer'>Why should you shop from Tanishq?</p>

        </div>
       
        </div>

    </div>
    </>
}