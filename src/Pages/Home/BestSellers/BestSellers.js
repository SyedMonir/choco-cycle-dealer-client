import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './BestSellers.css';

// import required modules
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper';

const BestSellers = () => {
  return (
    <section className="text-center py-12 text-gray-500">
      <p className="text-xs">CHECK IT OUT.</p>
      <h2 className="text-3xl text-[#1f4037]">Best Sellers</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={{
          clickable: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/F37TLNV/cycle-1.jpg" alt="cycle-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/fpcDTRz/cycle-2.jpg" alt="cycle-2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/fpcDTRz/cycle-2.jpg" alt="cycle-3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/F37TLNV/cycle-1.jpg" alt="cycle-1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/fpcDTRz/cycle-2.jpg" alt="cycle-2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/fpcDTRz/cycle-2.jpg" alt="cycle-3" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default BestSellers;
