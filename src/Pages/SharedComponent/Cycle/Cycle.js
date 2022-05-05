import React from 'react';

const Cycle = ({ cycle }) => {
  return (
    <div className="flex justify-center m-5">
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <img
          className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg hover:scale-110 hover:shadow-xl transition duration-300 ease-in-out"
          src={cycle?.image}
          alt={''}
        />
        <div className="p-6 flex flex-col justify-center">
          <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
          <p className="text-gray-700 text-base mb-4 text-justify">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div className="flex justify-between">
            <p className="text-gray-900 text-xl font-bold">Price: $ {'100'}</p>
            <p className="text-gray-900 text-lg font-medium">Stock: {'100'}</p>
          </div>
          <div className="flex justify-between items-center my-5">
            <p className="text-gray-600 text-xs">
              Seller: <span className="underline cursor-pointer">{'Demo'}</span>
            </p>
            <button className="bg-[#1f4037] text-white hover:text-gray-300 uppercase py-1 px-4 rounded">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cycle;
