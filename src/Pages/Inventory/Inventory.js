import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventory from '../../hooks/useInventory';
import Cycle from '../SharedComponent/Cycle/Cycle';
import Spinner from '../SharedComponent/Spinner/Spinner';

const Inventory = () => {
  const [inventory, spinner] = useInventory();
  const navigate = useNavigate();
  return (
    <section className="relative bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364]">
      <section className="text-center pb-8 ">
        <figure className="relative">
          <img
            className="w-full h-60 shadow-md object-cover opacity-50"
            src="https://i.ibb.co/LN0J6j7/inventory.jpg"
            alt="inventory"
          />
          <div
            style={{ boxShadow: '0 0 20px #eee' }}
            className="absolute top-[25%] right-[5%] p-4 bg-black bg-opacity-30"
          >
            <p className="text-xs text-gray-200">YOUR RIDE START HERE.</p>
            <h1 className="text-white text-4xl">Our Inventories</h1>
            <span className="inline-block h-1 w-16 rounded bg-white mt-6 mb-4"></span>
          </div>
        </figure>

        {spinner ? (
          <Spinner />
        ) : (
          <>
            <section className="container grid grid-cols-1 sm:gap-4 lg:grid-cols-2 p-5 mx-auto">
              {inventory?.map((cycle) => (
                <Cycle key={cycle._id} cycle={cycle}></Cycle>
              ))}
            </section>
            <button
              onClick={() => navigate(`/manage-inventory`)}
              className="btn-grad mx-auto py-1 px-5 rounded"
            >
              Manage Inventory
            </button>
          </>
        )}
      </section>
    </section>
  );
};

export default Inventory;
