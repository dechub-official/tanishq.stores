import axios from 'axios'
import locationIcon from '../assets/images/Location.png'
import searchIcon from '../assets/images/Search.png'
import currentLocationIcon from '../assets/images/search/currentPointer.png'
import qr from '../assets/images/getapp_qr.webp'
import { useSearchStores } from '../hooks/useStores'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
import { gtmEventHandler } from '../utils/gtmDataLayer'

export default function SearchBox() {
    const searchRef = useRef([])
    const searchResultRef = useRef()
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const [active, setActive] = useState(false)
    
    // Use Tanstack Query hook for search
    const { data: searchData, isLoading } = useSearchStores(search);

    const searchVal = async (e) => {
        setSearch(e.target.value)
        clearTimeout(closeActive)
        if (searchRef.current.value == '') {
            [...document.getElementsByClassName("af-bl")].forEach(element => {
                element.style.filter = "blur(0px)";
            });
        }
        else {
            [...document.getElementsByClassName("af-bl")].forEach(element => {
                element.style.filter = "blur(5px)";
            });
        }
    }

    const VisitOutside = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
    }

    const Gonavigate = (path) => {
        navigate(path)
    }

    function closeActive() {
        setTimeout(() => {
            [...document.getElementsByClassName("af-bl")].forEach(element => {
                element.style.filter = "blur(0px)";
            });
            setActive(false)
        }, 300);
    }

    const goToStore = (data) => {
        const url = data.asset == "city" ? `/store-locator/jewellery-stores/city/${data.city.replace(" ", "-")}` : `/store-locator/jewellery-stores/${data.storeState.toLowerCase().replace(" ", "-")}/${data.storeCity.toLowerCase().replace(" ", "-")}/${data.storeName.toLowerCase().split("- ")[1] ? data.storeName.toLowerCase().split("- ")[1].replace(/ /g, "-").replace(",", "-") : data.storeName.toLowerCase().replace(" ", "-").replace(",", "-")}-${data.storeCode}`
        console.log("calleing dataLayer");
       
        gtmEventHandler({
            'event': 'store_search',
            'search_term': url
        })
        Gonavigate(data.asset == "city" ? `/store-locator/jewellery-stores/city/${data.city.replace(" ", "-")}` : `/store-locator/jewellery-stores/${data.storeState.toLowerCase().replace(" ", "-")}/${data.storeCity.toLowerCase().replace(" ", "-")}/${data.storeName.toLowerCase().split("- ")[1] ? data.storeName.toLowerCase().split("- ")[1].replace(/ /g, "-").replace(",", "-") : data.storeName.toLowerCase().replace(" ", "-").replace(",", "-")}-${data.storeCode}`);
    }

    return <>
        <div className=" sticky top-0 flex flex-col z-[500] w-full">
            <div className="flex justify-center">
                <input type="text" value={search} className="md:w-[30%] w-[90%] left-[34%] search-box p-4 px-12  border-[1px] border-black rounded-[15px]" ref={searchRef} onBlur={closeActive} onChange={searchVal} onFocus={() => setActive(true)} />
            </div>
            <div onClick={() => { searchRef.current.select(); setActive(true) }} className="absolute  top-[18px] md:left-[38%] left-[19%] float-right">
                {!active && !search && <>Search By<Typewriter
                    words={[' City', ' Pin Code', ' Area',]}
                    loop={Infinity}
                    cursor
                    style={{ color: 'red' }}
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onLoopDone={() => { }}
                /></>}
            </div>
            <div className="absolute top-[10px] md:left-[35.5%] left-[8%] float-right">
                <img src={locationIcon} alt="location" width={100} className='w-[35px]' />
            </div>
            <div className="absolute top-[10px] md:left-[61%] left-[80%] float-right   flex flex-row-reverse ">
                <img src={searchIcon} alt="search" width={100} className='w-[35px]' />
            </div>
            {<div className={active && searchData?.result?.length > 0 ? "absolute top-[90%] py-2 bg-white z-10 md:left-[38%] left-[10%] md:w-[25%] w-[80%] rounded-[5px]  shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px] border-gray-600 max-h-[400px] overflow-y-auto   float-right" : "absolute hidden  md:left-[38%] left-[10%] md:w-[25%] w-[80%]  top-[90%] py-2 opacity-0"}>
                {searchData?.result?.length > 0 ? <>{searchData?.result?.slice(0, 10).map((data, i) => {
                    return <p ref={searchResultRef[i]} className='flex py-2 px-5 items-start hover:bg-[#83272961] hover:text-white cursor-pointer transition-all '
                        onClick={() => { goToStore(data) }}
                    ><img src={locationIcon} width={100} className='w-[24px]  mr-2 ' alt="" />{data.asset == "city" ? data.city : data.value}</p>
                })}<p className='flex items-center pb-2 flex-wrap justify-center px-1 text-[#832729f4] font-[600] text-[11px]  border-t-2 border-[#83272961]  cursor-pointer transition-all '>
                        <p className='underline cursor-pointer mt-1' onClick={() => VisitOutside("https://www.tanishq.co.in")}>Explore collections online at www.tanishq.co.in</p> &nbsp; | &nbsp; <span className='flex mt-2'><img src={qr} className=' md:pt-0 pt-2' width={20} alt="" />&nbsp;  <span className='underline md:pt-0 pt-2'>Get the app</span></span>
                    </p> </> : ""}
            </div>}
        </div>
    </>
}
