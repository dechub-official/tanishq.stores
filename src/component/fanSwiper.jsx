// MyCarousel.js
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore from 'swiper';
import './../fanSwiper.css'
import product1 from '../assets/images/diamonds/pr1.png'
import product2 from '../assets/images/diamonds/pr2.png'
import { EffectCreative, Navigation } from 'swiper/modules';
// Install Swiper modules
SwiperCore.use([Navigation, EffectCreative]);

const FanSwiper = () => {

    const getCreativeEffect = () => {
        const width = window.innerWidth;
       
        if (+width < 640) {
          
          return {
            perspective: true,
            limitProgress: 13,
            prev: {
              translate: ['-90%', '20%', -100],
              rotate: [0, 0, -10],
              origin: 'bottom',
            },
            next: {
              translate: ['90%', '20%', -100],
              rotate: [0, 0, 10],
              origin: 'bottom',
            },
          };
        } else {
          return {
            perspective: true,
            limitProgress: 13,
            prev: {
              translate: ['-25%', '20%', -100],
              rotate: [0, 0, -20],
              origin: 'bottom',
            },
            next: {
              translate: ['25%', '20%', -100],
              rotate: [0, 0, 20],
              origin: 'bottom',
            },
          };
        }
      };
    return (
        <div className="my-carousel bg-darker">
            <Swiper
                className="my-carousel__swiper md:!pb-[150px] !pb-[50px]"
                loop={true}
                grabCursor={true}
                centeredSlides={true}
                centeredSlidesBounds={true}
                breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 'auto',
                    },
                  }}
                navigation={{
                    nextEl: ".my-carousel__control--next",
                    prevEl: ".my-carousel__control--prev",
                }}
               
                effect="creative"
                creativeEffect={getCreativeEffect()}
            >

                {
                    [{ img: product1, link: '', heading: 'Finger Rings', subHeading: 'Select from 18800 Models' }, { img: product2, link: '', heading: 'Finger Rings', subHeading: 'Select from 18800 Models' }, { img: product1, link: '', heading: 'Finger Rings', subHeading: 'Select from 18800 Models' }, { img: product2, link: '', heading: 'Finger Rings', subHeading: 'Select from 18800 Models' }, { img: product1, link: '', heading: 'Finger Rings', subHeading: 'Select from 18800 Models' }, { img: product2, link: '', heading: 'Finger Rings', subHeading: 'Select from 18800 Models' }, { img: product1, link: '', heading: 'Finger Rings', subHeading: 'Select from 18800 Models' }, { img: product2, link: '', heading: 'Finger Rings', subHeading: 'Select from 18800 Models' }, { img: product1, link: '', heading: 'Finger Rings', subHeading: 'Select from 18800 Models' }, { img: product2, link: '', heading: 'Finger Rings', subHeading: 'Select from 18800 Models' }].map((data) => {
                        return <SwiperSlide><div className="swiper-card  text-white swiper-card--1">
                            <div>
                                <img src={data.img} className='drop-shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]' alt="" />
                                <p className='ibm-plex font-[400]  text-[20px]'> {data.heading}</p>
                                {/* <p className='ibm-plex font-[400] text-[14px]'> {data.subHeading}</p> */}
                            </div>
                        </div></SwiperSlide>
                    })
                }

                {/* <SwiperSlide><div className="swiper-card swiper-card--2"><div>Slide 2</div></div></SwiperSlide>
      <SwiperSlide><div className="swiper-card swiper-card--3"><div>Slide 3</div></div></SwiperSlide>
      <SwiperSlide><div className="swiper-card swiper-card--1"><div>Slide 1</div></div></SwiperSlide>
      <SwiperSlide><div className="swiper-card swiper-card--2"><div>Slide 2</div></div></SwiperSlide>
      <SwiperSlide><div className="swiper-card swiper-card--3"><div>Slide 3</div></div></SwiperSlide> */}
            </Swiper>

            {/* <div className="my-carousel__actions">
                <button className="btn btn--subtle my-carousel__control my-carousel__control--prev">Prev</button>
                <button className="btn btn--subtle my-carousel__control my-carousel__control--next">Next</button>
            </div> */}
        </div>
    );
};

export default FanSwiper;
