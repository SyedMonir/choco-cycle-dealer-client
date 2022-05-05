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
          delay: 3000,
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
            <div className="flex justify-center p-4">
              <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <img
                    className="rounded-t-lg hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out"
                    src={cycle?.image}
                    alt=""
                  />
                </a>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">
                    Card title
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BestSellers;
