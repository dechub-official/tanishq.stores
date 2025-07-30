import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import artist from '../../assets/images/rivaahcollection/brideSliderImages/brideSlider1.png'

export default function BridalSlider() {


    const images = [
        artist, artist, artist
    ];

    const handleSlideChange = (swiper) => {

    };

    return (
        <div className="slider-wrapper">
            <div className="content">
                <div className="swiper-container">
                    <Swiper
                        effect="cards"
                        grabCursor={true}
                        initialSlide={1}
                        speed={500}
                        loop={true}
                        onSlideChange={handleSlideChange}
                        cardsEffect={{
                            perSlideOffset: 18,
                            perSlideRotate: 5,
                            rotate: true,
                            slideShadows: true,
                        }}
                        pagination={{
                            el: ".experienceCarouselPagination",
                            clickable: true,
                        }}
                        modules={[EffectCards, Pagination]}
                        className="movie-swiper"
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    className="slide-image"
                                />


                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div>
                <h2 className='fraunces text-center font-normal text-black text-2xl translate-y-[-10%]'>Wedding</h2>
                <p className='ibm-plex text-center font-normal text-[#1F242D] text-sm'>Shine on your special day with jewelry that tells your love story. Our Bridal Collection is crafted to make you feel radiant, symbolizing the eternal bond you share.</p>
            </div>
            <div class="swiper-pagination pagination-dots  experienceCarouselPagination"></div>


            <style jsx>{`
                

                /* ROUNDED TEXT STYLES */
                .text-center {
                    text-align: center;
                }

                .mt-6 {
                    margin-top: 2rem;
                }

                .rounded-text-container {
                    display: inline-block;
                    margin-bottom: 1rem;
                }

                .rounded-text {
                    display: inline-block;
                    padding: 8px 24px;
                    background: transparent;
                    border: 1.5px solid #e74c3c;
                    border-radius: 25px;
                    color: #e74c3c;
                    font-size: 14px;
                    font-weight: 500;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    letter-spacing: 0.5px;
                    margin: 0;
                }

                /* PAGINATION DOTS */
                .pagination-dots {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;
                    margin-top: 16px;
                }

                .dot {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: #d1d5db;
                    transition: all 0.3s ease;
                    cursor: pointer;
                }

                .dot.active {
                    background-color: #e74c3c;
                    transform: scale(1.2);
                }

                .dot:hover {
                    background-color: #ef4444;
                    transform: scale(1.1);
                }

                /* RESPONSIVE */
                @media (max-width: 768px) {
                    .swiper-container {
                        width: 240px;
                        height: 360px;
                        padding: 40px 0;
                    }

                    .rounded-text {
                        font-size: 13px;
                        padding: 6px 20px;
                    }

                    .slider-wrapper {
                        padding: 15px;
                    }
                }

                @media (max-width: 480px) {
                    .swiper-container {
                        width: 200px;
                        height: 320px;
                        padding: 30px 0;
                    }

                    .rounded-text {
                        font-size: 12px;
                        padding: 6px 18px;
                    }
                }
            `}</style>
        </div >
    );
}