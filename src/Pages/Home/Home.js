import React from 'react';
import FeaturedInventory from './FeaturedInventory/FeaturedInventory';
import Facility from './Facility/Facility';
import HeroSection from './HeroSection/HeroSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Facility />
      <FeaturedInventory />
    </>
  );
};

export default Home;
