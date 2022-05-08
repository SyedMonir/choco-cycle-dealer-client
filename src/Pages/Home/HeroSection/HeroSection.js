import React from 'react';

const HeroSection = () => {
  return (
    <>
      <div
        className="p-12 text-center relative overflow-hidden bg-no-repeat bg-cover h-96 lg:h-screen bg-opacity-75"
        style={{
          backgroundImage: "url('https://i.ibb.co/59zpfSd/home-1.png')",
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed "
          // style={{ backgroundColor: 'rgba(2, 56, 53, 0.7)' }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-white animate__animated animate__backInUp ">
              <h2 className=" font-semibold text-4xl mb-4">
                Welcome to the Biggest Cycle Warehouse in Bangladesh.
              </h2>
              <h4 className="font-semibold text-xl mb-6">
                We are providing The Next Generation Bikes
              </h4>
              <a
                className="inline-block px-7 py-3 mb-1 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                href="#facility"
                role="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Learn more about choco-cycle
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
