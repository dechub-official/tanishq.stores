import bullent from '../../assets/images/bullent.png'
export default function SuggestArtical() {
    return <>
    <div className="md:p-6 p-2 md:px-[20%] flex-wrap flex justify-around items-center bg-[#F5F5F5] w-full">
        <div className="md:max-w-[40%] flex justify-center flex-col items-center w-full my-2 md:my-0">
            <h1 className="md:text-[28px] text-[18px]  font-[700]  text-[#47143D]">Suggested Articles</h1>
            <p className="font-[400] text-[15px] text-left">Read more help and support articles, blogs here</p>
        </div>
        <div>
        <div className='flex justify-start items-center my-2'>
            <img src={bullent} alt="" className='mr-5 w-[12px]' />
            <p className='underline text-[15px] font-[400] cursor-pointer'>Why should you shop from Tanishq?</p>

        </div>
        <div className='flex justify-start items-center my-2'>
            <img src={bullent} alt="" className='mr-5 w-[12px]' />
            <p className='underline text-[15px] font-[400] cursor-pointer'>Can I exchange from Tanishq?</p>

        </div>
        <div className='flex justify-start items-center my-2'>
            <img src={bullent} alt="" className='mr-5 w-[12px]' />
            <p className='underline text-[15px] font-[400] cursor-pointer'>Can I redeem my encircle or Neu coins in store and online?</p>

        </div>
       
        </div>

    </div>
    </>
}