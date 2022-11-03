import {useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css"
import "swiper/css/navigation";
import "swiper/css/pagination";

function Hero() {
    return(
      <>
            <Swiper
                // spaceBetween={20}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper my-1"
                
            >
                <SwiperSlide>
                    <img
                        className="object-fill h-80 m-auto rounded-[40px]"
                        src="https://cdn01.pharmeasy.in/dam/banner/banner/6fa5c8350d2-STAR25.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill h-80 m-auto rounded-[40px]"
                        src="https://cdn01.pharmeasy.in/dam/banner/banner/ec3cb25301f-VITAL200.jpg"
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill h-80 m-auto rounded-[40px]"
                        src="https://cdn01.pharmeasy.in/dam/banner/banner/0bac91892cd-devices.jpg"
                        alt="image slide 3"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-fill h-80 m-auto rounded-[40px]"
                        src="https://cdn01.pharmeasy.in/dam/banner/banner/0cf5d7f710b-MintopSRM.jpg"
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Hero
