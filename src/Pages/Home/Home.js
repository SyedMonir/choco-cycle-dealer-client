import React from 'react';
import FeaturedInventory from './FeaturedInventory/FeaturedInventory';
import Facility from './Facility/Facility';
import HeroSection from './HeroSection/HeroSection';
import BestSellers from './BestSellers/BestSellers';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Facility />
      <FeaturedInventory />

      <BestSellers />
    </>
  );
};

export default Home;
