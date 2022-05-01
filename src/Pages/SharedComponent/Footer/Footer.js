import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              className="flex title-font font-medium  items-center md:justify-start justify-center text-white hover:text-gray-500 focus:text-gray-900 mt-2 lg:mt-0 mr-1 "
              to="/"
            >
              <img
                src="https://i.ibb.co/LNNVLvF/logo.png"
                style={{ height: '50px', width: 'auto' }}
                alt=""
                loading="lazy"
              />
              <span className="ml-3 text-xl">Choco Cycle Dealer</span>
            </Link>
            <p className="mt-2 text-sm text-gray-500">
              Welcome to the Biggest Cycle Warehouse in Bangladesh.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                USEFUL LINKS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white">
                    Legal & Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                MY ACCOUNT
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white">
                    My Sell History
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                COMPANY
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white">
                    Contact US
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        {/* Second Footer */}
        <div className="bg-gray-800 bg-opacity-75">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2022 Choco-Cycle —
              <a
                href="https://www.linkedin.com/in/syed-monirul/"
                rel="noopener noreferrer"
                className="text-gray-500 ml-1"
                target="_blank"
              >
                @Syed_Monir
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a
                href="https://github.com/SyedMonir"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-gray-400"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/syed-monirul/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 text-gray-400"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.facebook.com/SyedMoonir/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 ml-3"
              >
                <FaFacebookF />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
