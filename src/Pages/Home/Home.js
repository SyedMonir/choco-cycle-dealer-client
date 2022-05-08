import React from 'react';
import FeaturedInventory from './FeaturedInventory/FeaturedInventory';
import Facility from './Facility/Facility';
import HeroSection from './HeroSection/HeroSection';
import BestSellers from './BestSellers/BestSellers';
import ServiceAndRepair from './ServiceAndRepair/ServiceAndRepair';

const Home = () => {
  return (
    <>
      <HeroSection />
      <Facility />
      <FeaturedInventory />
      <ServiceAndRepair />
      <BestSellers />
    </>
  );
};

export default Home;
