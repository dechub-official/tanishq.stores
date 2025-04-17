import { useEffect, useState } from "react";
import { get, post } from "../services/apiHandler";
import img from '../assets/images/popupImage.png'
import axios from "axios";
import nextArrow from '../assets/images/next-arrow.png'
import bgGradient from '../assets/images/gradient.png'
export default function VisitorInfoCard(props) {
    const [progress, setProgress] = useState(false)
    const [success, setSuccess] = useState({ success: false, visible: false })
    const [phase, setPhase] = useState(1)
    const [mno, setmno] = useState({ tel: "", name: "", email: "" })
    const [error, setError] = useState({})
    useEffect(() => {
        console.log(props.data);
    }, [])

    const isvalidDetails = (isStrick) => {
        var phoneno = /^\d{10}$/;
        let email = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/gm
        if (mno.name == "") {
            setError({ name: "Please enter your name!" })
            return false
        }
        if ((mno.tel == "")) {
            setError({ tel: "Please enter your phone number!" })
            return false
        }
        if (mno.tel && !mno.tel.match(phoneno)) {
            setError({ tel: "Please enter valid phone number!" })
            return false

        }
        if (phase == 2 && !isStrick) {
            if ((mno.email == "")) {
                setError({ email: "Please enter your email!" })
                return false
            }
            if (mno.email && !mno.email.match(email)) {
                setError({ email: "Please enter valid email!" })
                return false

            }
        }
        return true
    }
    const handleSubmit = (isStrick) => {

        if (isvalidDetails(isStrick)) {
            if (phase == 2 && isStrick)
                sendForm()
            else if (phase == 1)
                setPhase(2)
            else
                sendForm()
        }

    }



    const sendForm = async () => {


        if (progress) return
        setProgress(true)


        setSuccess({ ...success, visible: false })
        const splitName = mno.name.split(" ")
        let fname = ''
        let lname = ''

        if (splitName.length >= 2) {
            fname = splitName[0]
            lname = splitName.slice(1, splitName.length).toString()
        }
        else {

            fname = splitName.toString()
            lname = ''
        }




        try {

            const payload = {
                Phone: mno.tel,
                FirstName: fname,
                LastName: lname,
                EmailId: mno.email
            }
            let data = await post(`/bookAnAppointment`, payload)
            console.log(data);
            props.onClose()
            if (data.data?.message == "SUCCESS") {

                setSuccess({ success: true, visible: true })
                setProgress(false)
                setmno("")
                // document.getElementById("tel1")?.value=""
                // document.getElementById("tel2").?value=""
            }
        }
        catch {
            props.onClose()
            setProgress(false)
            setSuccess({ success: true, visible: true })

        }





    }

    return <>   {<div style={{ backgroundImage: `url(${bgGradient})` }} className="box bg-cover md:min-w-[450px]  my-4 px-0 md:px-0 md:py-0 overflow-hidden  rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        {props.notClose && <div className="relative">
            <div className=" absolute right-3 top-2 overflow-hidden  cursor-pointer font-[600] text-[white] " onClick={() => { handleSubmit(true); props.onClose() }}>X</div>
        </div>}
        <div className="flex w-full justify-center  items-center">
            <img src={img} className=' w-full md:h-[300px] h-[200px] object-top object-cover' alt="" />

        </div>


        <div className="flex justify-center items-center  flex-col">
            {/* <h2 className=' text-center text-red-900 text-[15px] md:text-[18px] mx-2  font-medium md:w-[90%]'>Subscribe for exclusive offers on your favorite jewellery designs, gold rate updates, and festive benefits from Tanishq!</h2> */}
            {phase == 1 ? <>
                <div className=" w-[88%]  my-2">

                    <input type="text" value={mno.name} onChange={(e) => setmno({ ...mno, name: e.target.value })} placeholder='Enter Your Name' className='appearance-none bg-transparent  px-4 h-[50px] border-[#832729] bg-[#F2F2F2] w-full rounded-[7px] border-2 py-2' />
                    <p className="text-red-800 text-left w-full h-3 text-[15px] font-[700]">{error.name}</p>
                </div>
                <div className=" w-[88%]  my-2">
                    <input type="tel" min={"10"} value={mno.tel} id="tel1" onChange={(e) => setmno({ ...mno, tel: e.target.value })} placeholder='Enter Mobile Number' className='appearance-none bg-transparent w-full  px-4 h-[50px] bg-[#F2F2F2] rounded-[7px] border-2 border-[#832729] py-2' />
                    <p className="text-red-800 text-left w-full h-3 text-[15px] font-[700]">{error.tel}</p>
                </div>
            </> :
                <>
                    <div className="h-[110px] flex items-center justify-center flex-col w-[88%] my-2">
                        <input type="email" value={mno.email} onChange={(e) => setmno({ ...mno, email: e.target.value })} placeholder='Enter Your Email' className='appearance-none bg-transparent  px-4  h-[50px] border-[#832729] bg-[#F2F2F2] w-full rounded-[7px] border-2 py-2' />
                        <p className="text-red-800 text-left w-full h-3 text-[15px] font-[700]">{error.email}</p>
                    </div>
                </>
            }

            <div className="mx-auto w-full">
                <div className="md:w-[88%] mx-auto mt-3 mb-3 w-[40%]">
                    <button type="button" onClick={() => {
                        handleSubmit()
                    }} className={" w-full  mx-auto bg-white hover:bg-transparent flex justify-center  md:px-5 mb-8   py-2 text-[#832729] font-[600] md:text-[18px] text-[10px] rounded-[6px] items-center  transition-all border-[#832729] border-2 duration-500 gap-3 cursor-pointer  hover:shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] "}>Submit

                        {progress ? <svg version="1.1" id="L9" height={"25px"} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 100 100" enable-background="new 0 0 0 0" >
                            <path fill="#832729" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                                <animateTransform
                                    attributeName="transform"
                                    attributeType="XML"
                                    type="rotate"
                                    dur="1s"
                                    from="0 50 50"
                                    to="360 50 50"
                                    repeatCount="indefinite" />
                            </path>
                        </svg> : <img className="w-4" src={nextArrow} alt="" />

                        }
                    </button>
                </div>
            </div>
        </div>





    </div>}</>
}