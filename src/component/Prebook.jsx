import category_img from "../assets/images/prebook-thumbnail.png";
import category_img2 from "../assets/images/prebook-thumbnail-2.png";
import category_img3 from "../assets/images/prebook-thumbnail-3.png";
import category_img4 from "../assets/images/prebook-thumbnail-4.png";
import category_img5 from "../assets/images/prebook-thumbnail-5.png";
import frame_left from "../assets/images/line-frame-left.png";
import frame_right from "../assets/images/line-frame-right.png";
import top_line from "../assets/images/title-top-line.png";
import bottom_line from "../assets/images/title-bottom-line.png";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";

const imgList = [
  { url: category_img },
  { url: category_img2 },
  { url: category_img3 },
  { url: category_img4 },
  { url: category_img5 },
];

export default function Prebook() {
  return (
    <div className=" my-10 bg-[#FFFCF7]">
      <div className="relative w-[80%] mx-auto pt-12 pb-20">
        <div className="lg:px-12 px-8 py-2 text-lg lg:text-xl font-bold text-white bg-gradient-to-r from-[#BD7F2A] to-[#E2B579] inline-block absolute top-0 start-0 rounded-bl-[2rem] rounded-br-2xl">
          New
        </div>

        <div className="mt-10 lg:mt-7 relative pb-8">
          <img src={top_line} alt="image" className="mx-auto" />
          <h2 className="text-[20px] text-center md:text-[32px] lg:text-[52px] font-[600] font-fraunces gradient__title mb-0 leading-[1.2]">
            Introducing Pre-Book
          </h2>
          <p className="text-center text-[#56544E] text-lg md:text-xl lg:text-2xl xl:text-[30px] mb-4">
            This Diwali, let the celebrations arrive right on time!
          </p>
          <img src={bottom_line} alt="image" className="mx-auto" />

          <div className="flex flex-row gap-5 flex-nowrap justify-between 2xl:px-[10%] mt-5 lg:mt-10 relative">
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                infinite: true,
              }}
              loop={true}
              loopFillGroupWithBlank={true}
              modules={[Autoplay]}
              breakpoints={{
                1280: { slidesPerView: 5, autoplay: true },
                1024: { slidesPerView: 4, autoplay: true },
                768: { slidesPerView: 4, autoplay: true },
                0: { slidesPerView: 4, slidesPerGroup: 1 },
              }}
              className="mySwiper"
            >
              {imgList.map((item, index) => {
                return (
                  <SwiperSlide>
                    <Link to="#" className="pb-5 pt-2">
                      <img
                        src={item.url}
                        alt="image"
                        className="lg:!w-[164px] lg:!h-[164px] sm:!w-[120px] sm:!h-[120px] !w-[70px] !h-[70px] object-contain rounded-full border-2 border-[#D89946] shadow-[6px_8px_24px_-5px_#490a0c33] bg-gradient-to-b from-[#F0DBBC] to-[#FFFCF7]"
                      />
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={34}
              height={34}
              fill="none"
              className="absolute -bottom-7 md:right-[5%] right-0 opacity-0 lg:opacity-100"
            >
              <path
                fill="url(#a)"
                fillOpacity={0.8}
                d="M27.165 0a25.239 25.239 0 0 0 6.786 27.165 31.305 31.305 0 0 0-27.165 6.786l.414-2.13A28.638 28.638 0 0 0 0 6.786 31.305 31.305 0 0 0 27.165 0Z"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1={30.558}
                  x2={3.393}
                  y1={13.583}
                  y2={20.368}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D84658" />
                  <stop offset={1} stopColor="#954648" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={34}
              height={34}
              fill="none"
              className="absolute -bottom-7 left-[4%] rotate-[-20deg] hidden lg:inline-block"
            >
              <path
                fill="url(#a)"
                fillOpacity={0.8}
                d="M27.165 0a25.239 25.239 0 0 0 6.786 27.165 31.305 31.305 0 0 0-27.165 6.786l.414-2.13A28.638 28.638 0 0 0 0 6.786 31.305 31.305 0 0 0 27.165 0Z"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1={30.558}
                  x2={3.393}
                  y1={13.583}
                  y2={20.368}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#D84658" />
                  <stop offset={1} stopColor="#954648" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="text-center mt-8">
            <a
              href="#"
              class="inline-flex pl-8 items-center gap-3 explore__btn font-fraunces small font-semibold rounded-full px-4 border-0 text-lg lg:text-xl text-white"
            >
              <span className="fraunces">Shop Now</span>
              <span class="icon inline-flex rounded-full justify-center items-center">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 5L13 10L8 15"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>

          <p className="mt-8 xl:text-[32px] lg:mt-12 text-center font-semibold tracking-[-1px] text-[#954648] text-lg lg:text-2xl font-fraunces px-6">
            Pre-book your favourite jewellery now, and let us deliver it on
            Dhanteras
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={35}
            height={35}
            fill="none"
            className="absolute lg:top-[15%] top-[20%] lg:left-[10%] left-0"
          >
            <path
              fill="url(#a)"
              fillOpacity={0.8}
              d="M0 15.757A22.096 22.096 0 0 0 18.779 0a27.407 27.407 0 0 0 15.757 18.778l-1.836.491a25.071 25.071 0 0 0-16.943 15.266A27.407 27.407 0 0 0 0 15.757Z"
            />
            <defs>
              <linearGradient
                id="a"
                x1={9.389}
                x2={25.146}
                y1={7.878}
                y2={26.657}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D84658" />
                <stop offset={1} stopColor="#954648" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={35}
            height={35}
            fill="none"
            className="absolute lg:top-0 -top-[5%] lg:right-[20%] right-0 scale-75"
          >
            <path
              fill="url(#a)"
              fillOpacity={0.8}
              d="M0 15.757A22.096 22.096 0 0 0 18.779 0a27.407 27.407 0 0 0 15.757 18.778l-1.836.491a25.071 25.071 0 0 0-16.943 15.266A27.407 27.407 0 0 0 0 15.757Z"
            />
            <defs>
              <linearGradient
                id="a"
                x1={9.389}
                x2={25.146}
                y1={7.878}
                y2={26.657}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D84658" />
                <stop offset={1} stopColor="#954648" />
              </linearGradient>
            </defs>
          </svg>

          <img
            src={frame_left}
            alt="frame icon"
            className="absolute -bottom-6 left-0"
          />
          <img
            src={frame_right}
            alt="frame icon"
            className="absolute -bottom-6 right-0"
          />
        </div>
        {/* container */}
      </div>
    </div>
  );
}
