import AIBook from "../../assets/images/AISummary/AIText.png";
import AIStar from "../../assets/images/AISummary/aiStar.png";
import AILook from "../../assets/images/AISummary/AIlook.png";
import AIshuffle from "../../assets/images/AISummary/loader.svg";
import thumb from "../../assets/images/like-thumb.png";
import { get } from "../../services/apiHandler";
import { useEffect, useState } from "react";

export default function AISummary() {
  const [SummarizedData, setSummarized] = useState();
  const [like, setLike] = useState(1000);
  const BookAppointment = () => {
    const newWindow = window.open(
      "https://www.tanishq.co.in/book-an-appointment",
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };
  const getAISummaryDetails = async () => {
    try {
      setSummarized();
      const data = await get("/reviews");
      const likes = await get("/getLikeCount");
      console.log(data);
      const likeCount = likes.data.result;
      setLike(likeCount)
      const highlight = data.data?.reviewHighlight.split(",");
      setSummarized({ ...data.data, reviewHighlight: highlight });
    } catch (error) {}
  };
  const handleLike = async (id) => {
    if (localStorage.getItem("isLiked")) {
      return;
    }
    setLike(like + 1);
    localStorage.setItem("isLiked", true);
    await get("/increaseLikeCount")
   
    
    
  };
  useEffect(() => {
    if (SummarizedData) return;
    getAISummaryDetails();
  }, [SummarizedData]);
  return (
    <>
      {SummarizedData ? (
        <div className="my-5 md:mb-10">
          <div className="w-full relative p-4 bg-white sequreShadow rounded-2xl pb-7 md:pb-5">
            <div className="header w-full flex-wrap flex items-center gap-3 md:px-10 md:py-5">
              <div className="flex gap-x-3">
                <img src={AIBook} className="w-[30px]" alt="" />
                <div className="box px-3 py-3 gap-x-2 flex tanishqAIBg items-center rounded-xl">
                  <img src={AILook} className="w-[15px]" alt="" />
                  <p className="text-white md:text-[11px] text-[12px]  font-[700] uppercase">
                    Introducing Echoes
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[black] font-fraunces text-[18px] font-[500] ">
                  Powered by Tanishq AI -
                  <span className="text-[#56544E] font-normal">
                    {" "}
                    Customer voices across India, summarised!
                  </span>
                </p>
              </div>
            </div>
            <div className=" md:px-10 ">
              <div className="flex my-8 flex-wrap gap-y-3  gap-x-5">
                {SummarizedData?.reviewHighlight?.map((ele, i) => {
                  return (
                    <div
                      key={i}
                      className="box border-[#832729] border-2 px-3 py-2 items-center flex gap-x-2 rounded-2xl"
                    >
                      <img src={AIStar} alt="" className="w-[20px]" />
                      <span className="text-[#2B2A26] text-[14px]">{ele}</span>
                    </div>
                  );
                })}

                {/* <div className="box border-[#832729] border-2 px-3 py-2 items-center flex gap-x-2 rounded-2xl">
                    <img src={AIStar} alt="" className='w-[20px]' />
                    <span className='text-[#2B2A26] uppercase  text-[14px]'>personalized experiences</span>

                </div> */}
              </div>
              <div className="aiText">
                <p className="md:text-[#300708] text-[#56544E] text-[15px] md:text-[18px]">
                  {SummarizedData.reviewText}
                </p>
              </div>
              <div className="my-5">
                <p className="text-[#56544E] font-light md:text-[17px] text-[14px]">
                Smartly summarized from millions of customer reviews. &nbsp;
                  <span
                    onClick={BookAppointment}
                    className="text-[#56544E] cursor-pointer font-bold underline"
                  >
                    Book An Appointment
                  </span>{" "}
                  at your nearest store.{" "}
                </p>
              </div>
            </div>
            <div className="absolute md:bottom-10 bottom-3 right-8">
              <img
                src={AIshuffle}
                onClick={getAISummaryDetails}
                className="w-[18px] cursor-pointer"
                alt=""
              />
            </div>
          </div>
          <p className="text-[14px] md:ml-10 ml-2 mt-5 flex flex-wrap gap-x-2 items-center text-[#56544E]">
           <p> Is this review snippet helpful?</p>
           <div className="flex gap-x-2 md:mt-0 mt-2">
            <div className="flex flex-wrap gap-x-2">
           
              {" "}
              <img
                src={thumb}
                onClick={()=>handleLike()}
                className="w-[20px]   cursor-pointer"
                alt=""
              />{" "}
             
            </div>
            <span className="text-[#56544ebf]">
              {like} people found this helpful
            </span>
            </div>
          </p>
        </div>
      ) : (
        <div className="w-full relative my-5 bg-gray-100  animate-pulse rounded-2xl  pb-5">
          <div className="header w-full flex-wrap flex items-center gap-3 bg-gray-300 md:px-10 md:py-5 px-3 py-2 rounded-md">
            <div className="flex gap-x-3">
              <div className="w-[30px] h-[30px] bg-gray-200 rounded-full"></div>
              <div className="box px-3 py-3 gap-x-2 flex bg-gray-200 rounded-xl">
                <div className="w-[15px] h-[15px] bg-gray-300 rounded-full"></div>
                <p className="bg-gray-300 text-transparent md:w-36 w-24 h-4 rounded-sm"></p>
              </div>
            </div>
            <div className="flex-1">
              <p className="bg-gray-200 h-6 w-72 rounded-md"></p>
              <p className="bg-gray-200 h-4 w-48 mt-2 rounded-md"></p>
            </div>
          </div>
          <div className="md:px-10 px-3 mt-5">
            <div className="flex my-8 flex-wrap gap-y-3 gap-x-5">
              {Array(3)
                .fill("")
                .map((_, i) => (
                  <div
                    key={i}
                    className="w-40 h-10 bg-gray-200 border-2 border-transparent px-3 py-2 items-center flex gap-x-2 rounded-2xl"
                  >
                    <div className="w-[20px] h-[20px] bg-gray-300 rounded-full"></div>
                    <span className="bg-gray-300 text-transparent w-20 h-4 rounded-sm"></span>
                  </div>
                ))}
            </div>
            <div className="aiText">
              <p className="bg-gray-200 h-4 w-72 rounded-md"></p>
              <p className="bg-gray-200 h-4 w-48 mt-2 rounded-md"></p>
            </div>
            <div className="mt-5">
              <p className="bg-gray-200 h-4 w-60 rounded-md"></p>
            </div>
          </div>
          <div className="absolute md:bottom-10 bottom-0 right-8">
            <div className="w-[30px] h-[30px] bg-gray-200 rounded-full"></div>
          </div>
        </div>
      )}
    </>
  );
}
