import locationIcon from '../assets/images/Location.png'
import search from '../assets/images/Search.png'
export default function SearchBox() {
    return <>
    <div className=" relative flex flex-col w-full">
       <div className="flex justify-center">
    <input type="text" className="w-[30%] left-[34%] p-4 px-12  border-[1px] border-black rounded-[15px]" /></div>
    <div className="absolute top-[10px] left-[36%] float-right">
        <img src={locationIcon} alt="location" width={100} className='w-[35px]' />
  
    </div>
    <div className="absolute top-[10px] left-[62%] float-right   flex flex-row-reverse ">
        <img src={search} alt="search" width={100} className='w-[35px]' />
  
    </div>
    </div>
    </>
}