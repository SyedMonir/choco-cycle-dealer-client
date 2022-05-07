import React from 'react';
import useInventory from '../../hooks/useInventory';
import Cycle from '../SharedComponent/Cycle/Cycle';
import Spinner from '../SharedComponent/Spinner/Spinner';

const Inventory = () => {
  const [inventory, spinner] = useInventory();
  return (
    <section className="relative">
      <section className="text-center my-8 ">
        <p className="text-xs">YOUR RIDE START HERE.</p>
        <h2 className="text-3xl text-[#1f4037]">Our Inventories</h2>
        {spinner ? (
          <Spinner />
        ) : (
          <section className="container grid grid-cols-1 sm:gap-4 lg:grid-cols-2 p-5 mx-auto">
            {inventory?.map((cycle) => (
              <Cycle key={cycle._id} cycle={cycle}></Cycle>
            ))}
          </section>
        )}
      </section>
    </section>
  );
};

export default Inventory;
