import img from '../assets/images/successImage.png'
export default function SuccessPopup({isSuccess,close}) {
    return <>
    <div className="fixed z-20 shadow rounded-[10px] bg-[#F2F2F2] md:min-w-[500px] md:max-w-[500px] max-h-[250px] max-w-[300px] min-w-[300px] md:min-h-[300px]">
        <div className="relative">
            <div className=" absolute right-2 top-1 cursor-pointer font-[700] text-[#832729] " onClick={close}>X</div>
        </div>
<div className="flex w-full justify-center  items-center">
<img src={img} className=' w-full' alt="" />

</div>
{isSuccess?<div className="flex flex-col justify-center mt-[10px] items-center">
    <h3 className="text-[#832729] font-[500] text-[30px]">Thank you</h3>
    <h3 className=" font-[500] my-2 text-[20px]">Your subscription is success</h3>
</div>:<div className="flex flex-col justify-center mt-[10px] items-center">
    <h3 className="text-[#832729] font-[500] text-[25px]">Sorry</h3>
    <h3 className=" font-[500] my-2 text-[20px]">The number entered Incorrect</h3>
</div>}
    </div>
    </>
}