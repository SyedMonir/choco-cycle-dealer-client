import React from 'react';
import { useNavigate } from 'react-router-dom';
import useInventory from '../../../hooks/useInventory';
import Cycle from '../../SharedComponent/Cycle/Cycle';
import Spinner from '../../SharedComponent/Spinner/Spinner';

const FeaturedInventory = () => {
  const navigate = useNavigate();
  const [inventory, spinner] = useInventory();
  if (inventory.length > 6) {
    inventory.length = 6;
  }
  // console.log(inventory);
  return (
    <section className="relative">
      <section className="text-center my-8 ">
        <p className="text-xs">YOUR RIDE START HERE.</p>
        <h2 className="text-3xl text-[#1f4037]">Our Feature Inventories</h2>
        <span className="inline-block h-1 w-16 rounded bg-[#1f4037] mt-6 mb-4"></span>
        {spinner ? (
          <Spinner />
        ) : (
          <>
            <section className="container grid grid-cols-1 sm:gap-4 lg:grid-cols-2 p-5 mx-auto">
              {inventory.map((cycle) => (
                <Cycle key={cycle._id} cycle={cycle}></Cycle>
              ))}
            </section>
            <button
              onClick={() => navigate(`/manage-inventory`)}
              className="bg-[#1f4037] text-white hover:text-gray-300 uppercase py-1 px-5 rounded"
            >
              Manage Inventory
            </button>
          </>
        )}
      </section>
    </section>
  );
};

export default FeaturedInventory;
