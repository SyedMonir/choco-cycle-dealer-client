import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cycle = ({ cycle }) => {
  // data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1000" data-aos-easing="ease-in-out"
  const navigate = useNavigate();
  return (
    <div className="flex justify-center m-5">
      <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <img
          className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out"
          src={cycle?.image}
          alt={cycle?.name}
        />
        <div className="p-6 flex flex-col justify-center">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {cycle?.name}
          </h5>
          <p className="text-gray-700 text-base mb-4 text-justify">
            {cycle?.description.slice(0, 105) + '..'}
          </p>
          <div className="flex justify-between">
            <p className="text-gray-900 text-xl font-bold">
              Price: $ {cycle?.price}
            </p>
            <p className="text-gray-900 text-lg font-medium">
              Stock: {cycle?.quantity}
            </p>
          </div>
          <div className="flex justify-between items-center my-5">
            <p className="text-gray-600 text-xs">
              Seller:{' '}
              <span className="underline cursor-pointer">
                {cycle?.supplierName}
              </span>
            </p>
            <button
              onClick={() => navigate(`/cycle/${cycle?._id}`)}
              className="btn-grad py-1 px-8"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cycle;
