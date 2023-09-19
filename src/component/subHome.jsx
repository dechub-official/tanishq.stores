import SubHomeexp from '../assets/images/subhomeExpender.png'
export default function SubHome() {
    return <>
        <div className="w-full text-center text-white bg-[#47143D] flex justify-center items-center text-[15px] px-2 md:text-[22px] font-[600] py-4 ">
            <p className='w-[60%] md:w-auto'>Wishlist your favorite designs before you walk in to the store!</p><img src={SubHomeexp} className='cursor-pointer ml-4 mr-2 w-[30px]' />
        </div>
    </>
}