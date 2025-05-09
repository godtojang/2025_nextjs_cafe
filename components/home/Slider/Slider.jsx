"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Scrollbar, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar]}
      loop={true}
      navigation
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div className="h-[75vh]">
          <Image className="object-cover" src={"/main_1.jpg"} alt={""} fill quality={100} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[75vh] relative">
          <Image className="object-cover" src={"/main_2.jpg"} alt={""} fill quality={100} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-[75vh] relative">
          <Image className="object-cover" src={"/main_3.jpg"} alt={""} fill quality={100} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
