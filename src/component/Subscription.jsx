import { useState } from "react";
import { useUpdateStoreUserDetails } from "../hooks/useStores";
import img from "../assets/images/successimage.jpg";
import "../assets/css/storeCard.css";
import { get } from "../services/apiHandler";

export default function Subscription(props) {
  const [progress, setProgress] = useState(false);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState({ success: false, visible: false, id: null });
  const [mno, setmno] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  // Use Tanstack Query hook
  const { mutate: updateUserDetails } = useUpdateStoreUserDetails();

  const getUpdates = async () => {
    const nameRegex = /^[A-Za-z\s]+$/; // Allows only letters and spaces
    const phoneRegex = /^\d{10}$/;

    if (progress) return;

    if (!name || name.trim() === '') {
      setError({ ...error, name: "Please enter your name" });
      setProgress(false);
      return;
    }

    if (!nameRegex.test(name)) {
      setError({ ...error, name: "Name should only contain alphabets and spaces" });
      setProgress(false);
      return;
    }
   
    if (mno && mno.match(phoneRegex)) {
      setProgress(true);
      setSuccess({ ...success, visible: false });
      setError({});

      updateUserDetails(
        { mobileNo: mno, name },
        {
          onSuccess: (data) => {
            if (data?.message === "SUCCESS") {
              setSuccess({ success: true, visible: true, id: data.result });
              setProgress(false);
              setmno("");
            }
          },
          onError: (error) => {
            console.error('Failed to update user details:', error);
            setProgress(false);
          }
        }
      );
    } else {
      setError({ mobile: "Please enter valid mobile number" });
      setProgress(false);
    }
  };

  const Subscribe = async () => {
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (progress) return;
  
   
    if (email && email.match(emailRegex)) {
      setProgress(true);
      setSuccess({ ...success, visible: false });
      setError({})
      const data = await get(`/storeUserEmail?email=${email}&id=${success.id}`);
      console.log(data);
      
      if (data.data?.message == "SUCCESS") {
        setSuccess({ success: true, visible: true,final:true });
        setProgress(false);
        setmno("");
       
        // document.getElementById("tel1")?.value=""
        // document.getElementById("tel2").?value=""
      }
    } else {
      setError({ email: "Please enter valid email" })
      // setSuccess({ success: false, visible: true })
      setProgress(false);
    }
  };
  return (
    <>
      {" "}
      <div className="col storeCard md:max-w-[550px]">
        {!success.success && (
          <div
            className="card border round  min-h-[247px]  shadow-sm subscription-block"
            id="subscription-block"
          >
            <div className="flex items-center mb-1 p-3 stag">
              <i className="bi bi-bell me-2"></i>
            </div>
            <div className="px-3 mb-2">
              <p className="text-center text-[15px]">
                Subscribe for exclusive offers on your favorite jewellery
                designs, gold rate updates, & festive benefits from Tanishq!
              </p>
            </div>
            <form id="subscription-form">
              <div className="input-group mb-2 px-3 flex flex-col md:gap-4 md:flex-row">
                <div className="w-full md:w-1/2">
                  <div className="w-full flex items-center  border p-1 px-3 mt-4  rounded-lg">
                    <i className="bi bi-person me-2"></i>
                    <input
                      type="text"
                      className="border-0 outline-0  !py-1 w-full !bg-white"
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                    />

                  </div>
                  <p className="text-red-500  max-w-1/2 font-bold">{error.name}</p>
                </div>

                <div className="w-full md:w-1/2">
                <div className="w-full flex items-center  border p-1 px-3 mt-4 rounded-lg ">
                  <i className="bi bi-telephone me-2"></i>
                  <input
                    type="tel"
                    value={mno}
                    onChange={(e) => setmno(e.target.value)}
                    className="border-0  outline-0  !py-1 w-full  !bg-transparent"
                    placeholder="Enter Mobile Number"
                  />
                 
                </div>
                <p className="text-red-500 absolute font-bold">{error.mobile}</p>
                </div>
              </div>
              <div className="flex mt-9 px-3">
                <button
                  type="button"
                  onClick={() => {
                    getUpdates();
                  }}
                  className="btn border-0 gap-1 rounded-pill flex justify-content-between items-center p-2"
                >
                  <span className="p-1">GET IN TOUCH</span>
                  {progress ? <svg version="1.1" id="L9" height={"25px"} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 100 100" enable-background="new 0 0 0 0" >
                    <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                      <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        dur="1s"
                        from="0 50 50"
                        to="360 50 50"
                        repeatCount="indefinite" />
                    </path>
                  </svg> : <i className="bi bi-chevron-right ic-btn p-2 rounded-circle"></i>}

                </button>
              </div>
            </form>
          </div>
        )}

        {success.success && (
          <div
            className="card border min-h-[247px] round shadow-sm  success-message"
            id="success-message"
          >
            <div className="flex items-center mb-1 p-3 stag">
              <i className="bi bi-bell me-2"></i>
            </div>
           { !success.final?<><div className="px-3">
              <p>Yay! Thank You for Your Interest</p>
            </div>
            <div className="w-full md:w-1/2">
            <div className="input-group mb-2 mt-4 rounded-lg  px-3">
              <div className="border flex items-center p-1 px-3 rounded">
                <i className="bi bi-envelope me-2"></i>
                <input
                  type="email"
                  className="border-0  !py-1 w-full outline-0 bg-transparent"
                  placeholder="Share your e-mail id (optional)"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <p className="text-red-500 pl-4 absolute font-bold">{error.email}</p>
            </div>
            <div className="flex px-3 mt-10">
              <button onClick={()=>Subscribe()} className="btn border-0 gap-1 rounded-pill flex justify-content-between items-center p-2">
                <span className="p-1">SUBMIT DETAILS</span>
                {progress ? <svg version="1.1" id="L9" height={"25px"} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 100 100" enable-background="new 0 0 0 0" >
                    <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                      <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        dur="1s"
                        from="0 50 50"
                        to="360 50 50"
                        repeatCount="indefinite" />
                    </path>
                  </svg> : <i className="bi bi-chevron-right ic-btn p-2 rounded-circle"></i>}
              </button>
            </div></> :<div className="min-h-[130px] flex justify-center items-center">
            <p className="text-center ">Yay! Thank You for Your Interest</p>
            </div>}
          </div>
        )}
      </div>
    </>
  );
}
