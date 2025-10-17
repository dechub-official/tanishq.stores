import AIBook from "../../assets/images/AISummary/AIText.png";
import AIStar from "../../assets/images/AISummary/aiStar.png";
import AILook from "../../assets/images/AISummary/AIlook.png";
import AIshuffle from "../../assets/images/AISummary/loader.svg";
import { useReviews, useIncreaseLikeCount, useIncreaseDislikeCount, useLikeDislikeCount } from "../../hooks/useStores";
import { useEffect, useState } from "react";

export default function AISummary({ cardRef }) {
  const [SummarizedData, setSummarized] = useState();


  // Use Tanstack Query hooks
  const { data: reviewsData, refetch: getreviewsData } = useReviews();
  const { data: likeData, refetch: getLikeDislike } = useLikeDislikeCount();
  const like = likeData?.result || 0;
  const [text, setText] = useState()

  const { mutateAsync: increaseLike } = useIncreaseLikeCount();
  const { mutateAsync: increaseDislike } = useIncreaseDislikeCount();
  const BookAppointment = () => {
    window.scrollTo({
      top: cardRef?.current?.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    console.log(reviewsData)
    if (reviewsData) {
      const highlight = reviewsData?.reviewHighlight.split(",");
      setSummarized({ ...reviewsData, reviewHighlight: highlight });
    }
  }, [reviewsData]);

  useEffect(() => {


    setText(`${((+likeData?.result.likeCount)) || 0} people found this helpful`)

  }, [likeData]);


  const updateToInitial = () => {
    setTimeout(() => {
      setText(`${(+like.likeCount) || 0} people found this helpful`)
    }, 5000)
  }
  const handleLike = async () => {
    if (localStorage.getItem("isLiked")) {
      return;
    }
    localStorage.setItem("isLiked", true);
    localStorage.removeItem("isDisLiked");
    setText('Thanks for your feedback')
    await increaseLike();
    await getLikeDislike()
    updateToInitial()
  };

  const handleDisLike = async () => {
    if (localStorage.getItem("isDisLiked")) {

      return;
    }
    localStorage.setItem("isDisLiked", true);
    localStorage.removeItem("isLiked");
    setText('Thanks for your feedback')
    await increaseDislike();
    await getLikeDislike()
    updateToInitial()
  };



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
                    className="text-[#56544E] cursor-pointer font-light md:text-[17px] text-[14px] underline"
                  >
                    click book an appointment
                  </span>{" "}
                  at your nearest store.{" "}
                </p>
              </div>
            </div>
            <div className="absolute md:bottom-10 bottom-3 right-8">
              <img
                src={AIshuffle}
                onClick={getreviewsData}
                className="w-[18px] cursor-pointer"
                alt=""
              />
            </div>
          </div>
          <p className="text-[14px] md:ml-10 ml-2 mt-5 flex flex-wrap gap-x-2 items-center text-[#56544E]">
            <p> Is this review snippet helpful?</p>
            <div className="flex gap-x-2 md:mt-0 mt-2">
              <div className="flex flex-wrap items-center gap-x-2">

                {" "}
                {/* <img
                src={thumb}
                onClick={()=>handleLike()}
                className="w-[20px]   cursor-pointer"
                alt=""
              />{" "} */}
                {!localStorage.getItem("isLiked") ? <svg width="17" className="cursor-pointer" onClick={() => handleLike()} height="16" viewBox="0 0 17 16" fill={"red"} xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.7165 14.7337H9.18319C8.80986 14.7337 7.99652 14.6203 7.56319 14.187L5.54319 12.627L6.15652 11.8337L8.22319 13.4337C8.38986 13.5937 8.80986 13.727 9.18319 13.727H11.7165C12.3165 13.727 12.9632 13.247 13.0965 12.707L14.7099 7.80699C14.8165 7.51365 14.7965 7.24699 14.6565 7.05365C14.5099 6.84699 14.2432 6.72699 13.9165 6.72699H11.2499C10.9032 6.72699 10.5832 6.58032 10.3632 6.32699C10.1365 6.06699 10.0365 5.72032 10.0899 5.36032L10.4232 3.22032C10.5032 2.84699 10.2499 2.42699 9.88986 2.30699C9.56319 2.18699 9.14319 2.36032 8.99652 2.57365L6.26319 6.64032L5.43652 6.08699L8.16986 2.02032C8.58986 1.39365 9.50986 1.09365 10.2299 1.36699C11.0632 1.64032 11.5965 2.56032 11.4099 3.41365L11.0832 5.51365C11.0765 5.56032 11.0765 5.62699 11.1232 5.68032C11.1565 5.71365 11.2032 5.73365 11.2565 5.73365H13.9232C14.5765 5.73365 15.1432 6.00699 15.4765 6.48032C15.8032 6.94032 15.8699 7.54699 15.6565 8.13365L14.0632 12.987C13.8165 13.9537 12.7899 14.7337 11.7165 14.7337Z" fill={"#954648"} />
                  <path d="M4.4502 14.0003H3.78353C2.5502 14.0003 1.9502 13.4203 1.9502 12.2336V5.70026C1.9502 4.51359 2.5502 3.93359 3.78353 3.93359H4.4502C5.68353 3.93359 6.28353 4.51359 6.28353 5.70026V12.2336C6.28353 13.4203 5.68353 14.0003 4.4502 14.0003ZM3.78353 4.93359C3.05686 4.93359 2.9502 5.10693 2.9502 5.70026V12.2336C2.9502 12.8269 3.05686 13.0003 3.78353 13.0003H4.4502C5.17686 13.0003 5.28353 12.8269 5.28353 12.2336V5.70026C5.28353 5.10693 5.17686 4.93359 4.4502 4.93359H3.78353Z" fill={"#954648"} />
                </svg> :
                  <svg width="14" height="14" className="cursor-pointer" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.32064 13.7334H9.85398C10.9273 13.7334 11.954 12.9534 12.2006 11.9867L13.794 7.13341C14.0073 6.54674 13.9406 5.94007 13.614 5.48007C13.2806 5.00674 12.714 4.73341 12.0606 4.73341H9.39398C9.34064 4.73341 9.29398 4.71341 9.26064 4.68008C9.21398 4.62674 9.21398 4.56008 9.22064 4.51341L9.54731 2.41341C9.73397 1.56007 9.20064 0.640075 8.36731 0.366741C7.64731 0.093408 6.72731 0.393408 6.30731 1.02007L3.57324 5.08674L3.68064 11.6267L5.70064 13.1867C6.13398 13.6201 6.94731 13.7334 7.32064 13.7334Z" fill="#954648" />
                    <path d="M2.58691 13H1.92025C0.686914 13 0.0869141 12.42 0.0869141 11.2334V4.70002C0.0869141 3.51335 0.686914 2.93335 1.92025 2.93335H2.58691C3.82025 2.93335 4.42025 3.51335 4.42025 4.70002V11.2334C4.42025 12.42 3.82025 13 2.58691 13Z" fill="#832729" />
                  </svg>}
                {!localStorage.getItem("isDisLiked") ? <svg width="17" className="rotate-180 cursor-pointer" onClick={() => handleDisLike()} height="16" viewBox="0 0 17 16" fill={"red"} xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.7165 14.7337H9.18319C8.80986 14.7337 7.99652 14.6203 7.56319 14.187L5.54319 12.627L6.15652 11.8337L8.22319 13.4337C8.38986 13.5937 8.80986 13.727 9.18319 13.727H11.7165C12.3165 13.727 12.9632 13.247 13.0965 12.707L14.7099 7.80699C14.8165 7.51365 14.7965 7.24699 14.6565 7.05365C14.5099 6.84699 14.2432 6.72699 13.9165 6.72699H11.2499C10.9032 6.72699 10.5832 6.58032 10.3632 6.32699C10.1365 6.06699 10.0365 5.72032 10.0899 5.36032L10.4232 3.22032C10.5032 2.84699 10.2499 2.42699 9.88986 2.30699C9.56319 2.18699 9.14319 2.36032 8.99652 2.57365L6.26319 6.64032L5.43652 6.08699L8.16986 2.02032C8.58986 1.39365 9.50986 1.09365 10.2299 1.36699C11.0632 1.64032 11.5965 2.56032 11.4099 3.41365L11.0832 5.51365C11.0765 5.56032 11.0765 5.62699 11.1232 5.68032C11.1565 5.71365 11.2032 5.73365 11.2565 5.73365H13.9232C14.5765 5.73365 15.1432 6.00699 15.4765 6.48032C15.8032 6.94032 15.8699 7.54699 15.6565 8.13365L14.0632 12.987C13.8165 13.9537 12.7899 14.7337 11.7165 14.7337Z" fill={"#954648"} />
                  <path d="M4.4502 14.0003H3.78353C2.5502 14.0003 1.9502 13.4203 1.9502 12.2336V5.70026C1.9502 4.51359 2.5502 3.93359 3.78353 3.93359H4.4502C5.68353 3.93359 6.28353 4.51359 6.28353 5.70026V12.2336C6.28353 13.4203 5.68353 14.0003 4.4502 14.0003ZM3.78353 4.93359C3.05686 4.93359 2.9502 5.10693 2.9502 5.70026V12.2336C2.9502 12.8269 3.05686 13.0003 3.78353 13.0003H4.4502C5.17686 13.0003 5.28353 12.8269 5.28353 12.2336V5.70026C5.28353 5.10693 5.17686 4.93359 4.4502 4.93359H3.78353Z" fill={"#954648"} />
                </svg> :
                  <svg width="14" height="14" className="rotate-180 cursor-pointer" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.32064 13.7334H9.85398C10.9273 13.7334 11.954 12.9534 12.2006 11.9867L13.794 7.13341C14.0073 6.54674 13.9406 5.94007 13.614 5.48007C13.2806 5.00674 12.714 4.73341 12.0606 4.73341H9.39398C9.34064 4.73341 9.29398 4.71341 9.26064 4.68008C9.21398 4.62674 9.21398 4.56008 9.22064 4.51341L9.54731 2.41341C9.73397 1.56007 9.20064 0.640075 8.36731 0.366741C7.64731 0.093408 6.72731 0.393408 6.30731 1.02007L3.57324 5.08674L3.68064 11.6267L5.70064 13.1867C6.13398 13.6201 6.94731 13.7334 7.32064 13.7334Z" fill="#954648" />
                    <path d="M2.58691 13H1.92025C0.686914 13 0.0869141 12.42 0.0869141 11.2334V4.70002C0.0869141 3.51335 0.686914 2.93335 1.92025 2.93335H2.58691C3.82025 2.93335 4.42025 3.51335 4.42025 4.70002V11.2334C4.42025 12.42 3.82025 13 2.58691 13Z" fill="#832729" />
                  </svg>}

              </div>
              <span className="text-[#56544ebf]">
                <span className="text-[#56544e5a]">|</span>  1L + people found this helpful
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
