// component/FestiveBanner.js

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../fastiveBanner.css';// Make sure you have this CSS file

const FestiveBanner = ({ messages = [], offerLink, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = (e) => {
        e.stopPropagation();
        setIsVisible(false);
        if (onClose) onClose();
    };

    const handleBannerClick = () => {
        if (offerLink) document.location = offerLink;
    };

    if (!isVisible || !messages || messages.length === 0) {
        return null;
    }

    return (
        <div className="plp-banner-section fixed " onClick={handleBannerClick}>
            {/* <button className="banner-close-btn" onClick={handleClose}>
                <img src="https://staticimg.tanishq.co.in/plp-topbar/sos/close.svg" alt="Close" />
            </button> */}
            <div className="countdown-container">
                <div className="position-relative">
                    <img className="cracker-img-left" src="https://staticimg.tanishq.co.in/plp-topbar/dt-24/cracker.gif" alt="" />
                    <img className="diya-img" src="https://staticimg.tanishq.co.in/plp-topbar/dt-24/diya-left.svg" alt="Diya" />
                </div>
                <Swiper
                    modules={[Autoplay]}
                    direction={'vertical'}
                    className="vertical-swiper"
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                >
                    {messages.map((msg, index) => (
                        <SwiperSlide key={index}>
                            <p className="countdown-text">{msg}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="position-relative">
                    <img className="cracker-img-right" src="https://staticimg.tanishq.co.in/plp-topbar/dt-24/cracker.gif" alt="" />
                    <img className="diya-img" src="https://staticimg.tanishq.co.in/plp-topbar/dt-24/diya-right.svg" alt="Diya" />
                </div>
            </div>
        </div>
    );
};

export default FestiveBanner;