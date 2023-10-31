
import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import { Helmet } from 'react-helmet'
import pageNotFound_image from '../assets/images/404/404.webp'
import Button from '../component/button'
import { useNavigate } from 'react-router-dom'
export default function Page_Not_Found() {
    useEffect(()=>{
      ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Page Not Found" })
    },[])
    const nav=useNavigate()
    return <>
    <Helmet> <meta
      name="description"
      content="Tanishq store locator will guide you to the nearest stores. Check out all contact details, directions through Store Locator. Visit now."
    /></Helmet>
      <div className="h-[80vh] w-full flex flex-col justify-center items-center">

    <img src={pageNotFound_image} className='w-[50%] md:w-[20%] my-4 min-w-[200px]' alt="Page_Not_Found" />
    <Button name={"Back To Home"} style={"ml-2"} onclick={()=>nav("/")}/>


      </div>
        {/* Dream your next jewellery */}
    </>
}