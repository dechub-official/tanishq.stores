import { useState } from "react"

export default function BookAnAppointment() {
    const [step, setStep] = useState(1)
    return <>
        <div className="box mb-2 font-fraunces shadow-md h-fit max-h-[170px] p-4 rounded-md w-full bg-[#FFFCF7]">
           
            {step == 1 && <> <h1 className="text-[#832729] text-[20px] font-fraunces font-bold">Heading to Our Store?</h1><p className="text-black font-fraunces text-[16px]">Let us make it smoother and tailored for you. Book an appointment to skip the wait.</p>
                <div className="my-3 flex justify-around">
                    <div className="relative ">
                        <input type="text" className="px-4 border border-[#444444] py-3 placeholder:text-[#969288] rounded-full placeholder:text-center " placeholder="Choose Day" />
                    </div>
                    <div className="relative">
                        <input type="text" className="px-4 border border-[#444444] py-3 placeholder:text-[#969288] rounded-full placeholder:text-center " placeholder="Choose Time" />
                    </div>
                    <button
                        class="btn border-0 gap-1 rounded-pill flex justify-center items-center p-2"
                        onClick={() => setStep(2)}
                    >
                        <span class="pr-1 text-[15px] font-fraunces md:text-[14px] font-[500]">Procced</span>
                        <i class="bi bi-chevron-right ic-btn p-1 rounded-circle"></i>
                    </button>

                </div></>}

            {step == 2 && <>
                <h1 className="text-[#832729] text-[20px] font-fraunces font-bold">You're Almost There!</h1>
                <div className="my-3 flex  gap-x-1">
                    <div className="relative ">
                        <input type="text" className="px-4 border w-[90%] border-[#444444] py-3 placeholder:text-[#969288] rounded-full placeholder:text-center " placeholder="Name*" />
                    </div>
                    <div className="relative">
                        <input type="text" className="px-4 border w-[90%] border-[#444444] py-3 placeholder:text-[#969288] rounded-full placeholder:text-center " placeholder="Phone Number*" />
                    </div>


                </div>
                <div className="my-3 flex gap-x-3">
     
                    <div className="relative w-full">
                        <input type="text" className="px-4 border  border-[#444444] w-[98%] py-3 placeholder:text-[#969288] rounded-full placeholder:text-center " placeholder="Type Your Email ID*" />
                    </div>
                    <button
                        class="btn border-0 gap-1 rounded-pill flex justify-center items-center p-2"
                        onClick={() => setStep(3)}
                    >
                        <span class="pr-1 text-[15px] font-fraunces md:text-[14px] whitespace-nowrap font-[500]">Book Now</span>
                        <i class="bi bi-chevron-right ic-btn p-1 rounded-circle"></i>
                    </button>

                </div>
            </>}
        </div>
    </>
}