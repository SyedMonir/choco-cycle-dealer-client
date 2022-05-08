import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const ServiceAndRepair = () => {
  return (
    <>
      <div
        className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover w-full h-[40rem] lg:h-screen "
        style={{
          backgroundImage: "url('https://i.ibb.co/PQ1Ck2J/home-2.jpg')",
          backgroundAttachment: 'fixed',
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 bottom-0  w-full h-full overflow-hidden bg-fixed "
          // style={{ backgroundColor: 'rgba(2, 56, 53, 0.7)' }}
        >
          <div className="flex justify-center items-center h-full text-left text-white">
            <>
              <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 mb-md-0 p-6">
                <div className="my-4">
                  <p className="text-xs text-gray-200">YOUR RIDE START HERE.</p>
                  <h1 className="text-white text-4xl">
                    Bike Services & Repair
                  </h1>
                  <span className="inline-block h-1 w-28 rounded bg-white mt-6 mb-4"></span>
                </div>
                <div className="flex flex-wrap">
                  <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-4">
                    <div className="flex">
                      <div className="shrink-0 mt-1">
                        <BsFillPatchCheckFill />
                      </div>
                      <div className="grow ml-4">
                        <p className="font-bold mb-1">Support 24/7</p>
                        <p className="text-gray-400">
                          We provide 24 hours a day and 7 days a week support
                          aby kind of related to cycle.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-4">
                    <div className="flex">
                      <div className="shrink-0 mt-1">
                        <BsFillPatchCheckFill />
                      </div>
                      <div className="grow ml-4">
                        <p className="font-bold mb-1">Adjust and install</p>
                        <p className="text-gray-400">
                          A silent and smooth-running transmission can make all
                          the difference to your ride and fixing your bike's
                          gears is something that even the most mechanically
                          inexperienced can handle.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-4">
                    <div className="flex">
                      <div className="shrink-0 mt-1">
                        <BsFillPatchCheckFill />
                      </div>
                      <div className="grow ml-4">
                        <p className="font-bold mb-1">Personal Bike Fit</p>
                        <p className="text-gray-400">
                          Performance Bike fit studio, Performance parts
                          upgrades Premium servicing workshop,Specialist private
                          strength training studio.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-4">
                    <div className="flex">
                      <div className="shrink-0 mt-1">
                        <BsFillPatchCheckFill />
                      </div>
                      <div className="grow ml-4">
                        <p className="font-bold mb-1">Free Delivery</p>
                        <p className="text-gray-400">
                          Free Delivery all over the country but only in Friday.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAndRepair;
