import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoRoute = () => {
  const navigate = useNavigate();
  return (
    <>
      <figure className="w-full h-full pt-8 pb-4 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] ">
        <img src="https://i.ibb.co/tKcswZh/no-route.jpg" alt="404" />
        <div className="my-4 sm:my-8 w-1/3 mx-auto">
          <button
            onClick={() => navigate(`/`)}
            className="btn-grad px-4 text-sm py-3 sm:text-base flex mx-auto w-full justify-center tracking-widest "
          >
            Go To Home
          </button>
        </div>
      </figure>
    </>
  );
};

export default NoRoute;
