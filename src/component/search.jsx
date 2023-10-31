import axios from 'axios'
import locationIcon from '../assets/images/Location.png'
import searchIcon from '../assets/images/Search.png'
import currentLocationIcon from '../assets/images/search/currentPointer.png'
import qr from '../assets/images/getapp_qr.png'
import { get } from '../services/apiHandler'
import { useRef, useState } from 'react'
import jsonp from 'jsonp';
import { useNavigate } from 'react-router-dom'
import { googleget } from '../services/GoogleApiHandler'
export default function SearchBox() {
    const searchRef = useRef([])
    const searchResultRef = useRef()
    const navigate = useNavigate()

    const [search, setsearch] = useState()
    const [active, setActive] = useState(false)
    const [searchResult, setsearchResult] = useState([])

    const searchVal = async (e) => {
        setsearch(e.target.value)
        clearTimeout(closeActive)
        if (searchRef.current.value == '') {
            [...document.getElementsByClassName("af-bl")].forEach(element => {
                element.style.filter = "blur(0px)";
            });
            setsearchResult([])
        }
        else {
            try {
                [...document.getElementsByClassName("af-bl")].forEach(element => {
                    element.style.filter = "blur(5px)";
                });
                const data = await get(`/search?value=${e.target.value}`)
                // const data=await axios.get(`http://10.54.4.78:8129/stores/tanishq/search?value=${e.target.value}`)

                setsearchResult(data.data.result.splice(0, 10));

            }
            catch (error) {
                //(error);

            }
        }
    }

    // //();
// NearBy search |_
    // const getCurrentLocation = () => {
    //   setActive(true);
    //   [...document.getElementsByClassName("af-bl")].forEach(element => {
    //     element.style.filter = "blur(5px)";
    // });
    //   setTimeout(() => {
    //     [...document.getElementsByClassName("af-bl")].forEach(element => {
    //         element.style.filter = "blur(5px)";
    //     });
       
    // }, 310);
    //     const successCallback = async (position) => {
    //         [...document.getElementsByClassName("af-bl")].forEach(element => {
    //             element.style.filter = "blur(5px)";
    //         });
    //         //(position.coords);
    //       const data= await googleget("/nearbysearch/json?keyword=tanishq jewellery%26location="+position.coords.latitude+","+position.coords.longitude+"%26rankby=distance")
        
    //       if(data.response)
    //       navigate("/store-locator/jewellery-stores/city/nearbysearch",{state:{data}}); 
            
    //     };

    //     const errorCallback = (error) => {
    //         //(error);
    //         [...document.getElementsByClassName("af-bl")].forEach(element => {
    //             element.style.filter = "blur(0px)";
    //         });
    //     };
    //     navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    //     [...document.getElementsByClassName("af-bl")].forEach(element => {
    //         element.style.filter = "blur(5px)";
    //     });
    // }
    const VisitOutside=(url)=>{
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
    
    }
    const Gonavigate = (path) => {

        [...document.getElementsByClassName("af-bl")].forEach(element => {
            element.style.filter = "blur(0px)";
        });
        setsearch("")
        setsearchResult([])
        setActive(false)
        navigate(path);

    }
    function closeActive() {
        setTimeout(() => {
            [...document.getElementsByClassName("af-bl")].forEach(element => {
                element.style.filter = "blur(0px)";
            });
            setActive(false)
        }, 300);

    }
    return <>
        <div className=" relative flex flex-col w-full">
            <div className="flex justify-center">
                <input type="text" placeholder='Where do you want to shop?' value={search} className="md:w-[30%] w-[90%] left-[34%] search-box p-4 px-12  border-[1px] border-black rounded-[15px]" ref={searchRef} onBlur={closeActive} onChange={searchVal} onFocus={() => setActive(true)} /></div>
            <div className="absolute top-[10px] md:left-[35.5%] left-[8%] float-right">
                <img src={locationIcon} alt="location" width={100} className='w-[35px]' />

            </div>
            <div className="absolute top-[10px] md:left-[62%] left-[80%] float-right   flex flex-row-reverse ">
                <img src={searchIcon} alt="search" width={100} className='w-[35px]' />

            </div>
            {<div className={active ? "absolute top-[90%] py-2 bg-white z-10 md:left-[38%] left-[10%] md:w-[25%] w-[80%] rounded-[5px]  shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px] border-gray-600   float-right" : "absolute hidden  md:left-[38%] left-[10%] md:w-[25%] w-[80%]  top-[90%] py-2 opacity-0"}>
                {searchResult.length > 0 ? <>{searchResult.map((data, i) => {
                    return <p ref={searchResultRef[i]} className='flex py-2 px-5 items-start hover:bg-[#83272961] hover:text-white cursor-pointer transition-all ' onClick={() => { Gonavigate(data.asset == "city" ? `/store-locator/jewellery-stores/city/${data.city.replace(" ","-")}` : `/store-locator/jewellery-stores/${data.storeState.toLowerCase().replace(" ","-")}/${data.storeCity.toLowerCase().replace(" ","-")}/${data.storeName.toLowerCase().split("- ")[1]?data.storeName.toLowerCase().split("- ")[1].replace(/ /g,"-").replace(",","-"):data.storeName.toLowerCase().replace(" ","-").replace(",","-")}-${data.storeCode}`) }}><img src={locationIcon} width={100} className='w-[24px]  mr-2 ' alt="" />{data.asset == "city" ? data.city : data.value}</p>
                })}<p className='flex items-center pb-2 flex-wrap justify-center px-1 text-[#832729f4] font-[600] text-[11px]  border-t-2 border-[#83272961]  cursor-pointer transition-all '>
                <p  className='underline cursor-pointer mt-1' onClick={()=>VisitOutside("https://www.tanishq.co.in")}>Explore collections online at www.tanishq.co.in</p> &nbsp; | &nbsp; <span className='flex mt-2'><img src={qr} className=' md:pt-0 pt-2' width={20} alt="" />&nbsp;  <span  className='underline md:pt-0 pt-2'>Get the app</span></span>
                 </p> </>: ""
                // <p className='flex py-2 px-5 cursor-pointer' onClick={() => getCurrentLocation()}><img src={currentLocationIcon} width={100} className='w-[24px] mr-2' alt="" />Nearby store</p>
                }
                    
            </div>}
        </div>
    </>
}