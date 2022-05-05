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
import useInventory from '../../../hooks/useInventory';

const BestSellers = () => {
  const [inventory] = useInventory();
  return (
    <section className="text-center py-12 text-gray-500">
      <p className="text-xs">CHECK IT OUT.</p>
      <h2 className="text-3xl text-[#1f4037]">Best Sellers</h2>
      <span className="inline-block h-1 w-14 rounded bg-[#1f4037] mt-6 mb-4"></span>
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
        {inventory.map((cycle) => (
          <SwiperSlide key={cycle._id}>
            <img src={cycle.image} alt="cycle-2" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BestSellers;
