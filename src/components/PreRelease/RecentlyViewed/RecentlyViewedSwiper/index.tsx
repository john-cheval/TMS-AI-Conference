"use client";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type SwiperCore from "swiper";
import PressReleaseCard from "@/components/shared/ui/Cards/PressReleaseCard";

type Props = {
  swiperData: any;
};

const RecentlyViewedSwiper = ({ swiperData }: Props) => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const handleMouseEnter = () => {
    swiperRef.current?.autoplay.stop();
  };

  // Function to start autoplay on mouse leave
  const handleMouseLeave = () => {
    swiperRef.current?.autoplay.start();
  };
  return (
    <div
      className="relative w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={3}
        loop
        // spaceBetween={28}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 11,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 28,
          },
        }}
      >
        {swiperData &&
          swiperData?.length > 0 &&
          swiperData?.map((item: any, index: number) => {
            return (
              <SwiperSlide key={index + 1}>
                <PressReleaseCard {...item} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default RecentlyViewedSwiper;
