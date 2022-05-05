import React from 'react';
import { PacmanLoader } from 'react-spinners';

const Spinner = () => {
  return (
    <div className="absolute top-2/4 left-[45%] z-50">
      <PacmanLoader color={'black'} size={25} />
    </div>
  );
};

export default Spinner;
