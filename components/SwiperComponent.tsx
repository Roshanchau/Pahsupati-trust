import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

const SwiperComponent = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div className="mt-20 sm:mt-[6rem] transition duration">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        autoplay={{
          delay: 5000,
        }}
      >
       
        <SwiperSlide className="opacity-70">
          <img
            className="h-full w-full bg-contain opacity-90"
            src="/images/p3.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full bg-cover opacity-90"
            src="/images/p2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-full w-full bg-cover opacity-90"
            src="/images/pashupatinath.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
