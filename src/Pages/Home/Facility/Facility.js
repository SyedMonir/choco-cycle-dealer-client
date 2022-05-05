import React, { useEffect } from 'react';
import AOS from 'aos';

const Facility = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="text-center py-12 text-gray-300 bg-[#1f4037]">
      <p className="text-xs">YOUR RIDE START HERE.</p>
      <h2 className="text-3xl text-[#88f5c2]">Our Facilities and Features</h2>
      <span className="inline-block h-1 w-16 rounded bg-[#88f5c2] mt-6 mb-4"></span>

      <section className="body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div
              data-aos="zoom-in-right"
              data-aos-delay="80"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="lg:w-1/3 lg:mb-0 mb-6 p-4"
            >
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-24 h-24 mb-8 p-2 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="https://i.ibb.co/VJJ7f7w/unicycle.png"
                />

                <h2 className="text-white font-medium title-font tracking-wider text-sm">
                  Complete Overhaul
                </h2>
                <span className="inline-block h-1 w-10 rounded bg-[#88f5c2] mt-6 mb-4"></span>
                <p className="leading-relaxed text-justify">
                  An overhaul is a comprehensive service during which the
                  complete bike is disassembled, bearings cleaned or replaced,
                  drivetrain cleaned and cables and housing replaced. After
                  reassembly, every system is tuned to perfection.
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="80"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="lg:w-1/3 lg:mb-0 mb-6 p-4"
            >
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-24 h-24 mb-8 p-2 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="https://i.ibb.co/t8NSPXf/helmet.png"
                />
                <h2 className="text-white font-medium title-font tracking-wider text-sm">
                  Custom Parts & Accessories
                </h2>
                <span className="inline-block h-1 w-10 rounded bg-[#88f5c2] mt-6 mb-4"></span>
                <p className="leading-relaxed text-justify">
                  Custom Junkies offers bike parts and components for classic
                  (steel) road bikes, single speed and track bikes, fixed gear
                  and MTB. Our goal is to offer not only a fine selection of
                  bike parts for every budget, but especially those parts that
                  are not available (anymore) elsewhere. We are constantly
                  working on expanding our product range and are always looking
                  for new products to present to you.
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in-left"
              data-aos-delay="80"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="lg:w-1/3 lg:mb-0 mb-6 p-4"
            >
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-24 h-24 mb-8 p-2 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src="https://i.ibb.co/w7Hnttm/bicycle.png"
                />
                <h2 className="text-white font-medium title-font tracking-wider text-sm">
                  Bike Fitting & Delivery
                </h2>
                <span className="inline-block h-1 w-10 rounded bg-[#88f5c2] mt-6 mb-4"></span>
                <p className="leading-relaxed text-justify">
                  A Complete Fit will measure your body height, upper body, leg
                  & arm length, shoulder width and foot size on our 2D Body
                  Analyzer. Based on those metrics, our unique algorithm, your
                  preferences and our experience of having completed more than
                  1,5 million of those measurements, we then provide you with a
                  full bike diagram of your suggested bike set up no matter if
                  it's a mountain bike, commute or road bike
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Facility;
