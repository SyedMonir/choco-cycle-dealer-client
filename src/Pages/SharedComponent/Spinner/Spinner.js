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

// position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     z-index: 99;
//     background: rgba(255, 255, 255, 0.9);
//     display: -moz-flex;
//     display: -ms-flex;
//     display: -o-flex;
//     display: flex;
//     justify-content: center;
//     -ms-align-items: center;
//     align-items: center;
//     opacity: 0;
//     animation: react-confirm-alert-fadeIn 0.5s 0.2s forwards;
