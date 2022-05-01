import React from 'react';
import useInventory from '../../../hooks/useInventory';

const FeaturedInventory = () => {
  const [inventory] = useInventory();
  return <>{inventory.length}</>;
};

export default FeaturedInventory;
