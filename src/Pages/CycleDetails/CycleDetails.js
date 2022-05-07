import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Spinner from '../SharedComponent/Spinner/Spinner';

const CycleDetails = () => {
  const { cycleId } = useParams();
  const [cycle, setCycle] = useState({});
  const [spinner, setSpinner] = useState(false);
  useEffect(() => {
    setSpinner(true);
    fetch(`https://choco-cycle-dealer.herokuapp.com/cycle/${cycleId}`)
      .then((response) => response.json())
      .then((data) => {
        setCycle(data);
        console.log(data);
        setSpinner(false);
      });
  }, [cycleId]);
  return (
    <>
      {spinner ? (
        <Spinner />
      ) : (
        <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  {cycleId}
                </h2>
                <h2 className="text-base title-font my-2 text-gray-300 tracking-widest">
                  Supplier: {''}
                </h2>
                <h1 className="text-white text-3xl title-font font-medium mb-4">
                  Animated Night Hill Illustrations
                </h1>
                <ul
                  className="nav nav-tabs flex justify-between flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
                  id="tabs-tab3"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <Link
                      to="#tabs-home3"
                      className=" nav-link flex-grow w-full block text-lg leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-300 focus:border-transparent active"
                      id="tabs-home-tab3"
                      data-bs-toggle="pill"
                      data-bs-target="#tabs-home3"
                      role="tab"
                      aria-controls="tabs-home3"
                      aria-selected="true"
                    >
                      Description
                    </Link>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link
                      to="#tabs-profile3"
                      className="nav-link flex-grow w-full block text-lg leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-300 focus:border-transparent"
                      id="tabs-profile-tab3"
                      data-bs-toggle="pill"
                      data-bs-target="#tabs-profile3"
                      role="tab"
                      aria-controls="tabs-profile3"
                      aria-selected="false"
                    >
                      Reviews
                    </Link>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link
                      to="#tabs-messages3"
                      className="nav-link flex-grow text-lg  w-full block  leading-tight border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-300 focus:border-transparent"
                      id="tabs-messages-tab3"
                      data-bs-toggle="pill"
                      data-bs-target="#tabs-messages3"
                      role="tab"
                      aria-controls="tabs-messages3"
                      aria-selected="false"
                    >
                      Details
                    </Link>
                  </li>
                </ul>
                <div className="tab-content" id="tabs-tabContent3">
                  <div
                    className="tab-pane fade show active"
                    id="tabs-home3"
                    role="tabpanel"
                    aria-labelledby="tabs-home-tab3"
                  >
                    <p className="leading-relaxed mb-4">
                      Fam locavore kickstarter distillery. Mixtape chillwave
                      tumeric sriracha taximy chia microdosing tilde DIY. XOXO
                      fam iligo juiceramps cornhole raw denim forage brooklyn.
                      Everyday carry +1 seitan poutine tumeric. Gastropub blue
                      bottle austin listicle pour-over, neutra jean.
                    </p>
                    <div className="flex border-t border-gray-800 py-2">
                      <span className="text-gray-500">Color</span>
                      <span className="ml-auto text-white">Blue</span>
                    </div>
                    <div className="flex border-t border-gray-800 py-2">
                      <span className="text-gray-500">Size</span>
                      <span className="ml-auto text-white">Medium</span>
                    </div>
                    <div className="flex border-t border-b mb-6 border-gray-800 py-2">
                      <span className="text-gray-500">Quantity</span>
                      <span className="ml-auto text-white">4</span>
                    </div>
                    <div className="flex">
                      <span className="title-font font-medium text-2xl text-white">
                        $58.00
                      </span>
                      <button className="flex ml-auto text-white bg-[#1f4037] border-0 py-2 px-6 focus:outline-none hover:text-gray-300 rounded">
                        Shipped
                      </button>
                      <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                        <MdFavorite />
                      </button>
                    </div>
                  </div>

                  {/* 2 */}
                  <div
                    className="tab-pane fade"
                    id="tabs-profile3"
                    role="tabpanel"
                    aria-labelledby="tabs-profile-tab3"
                  >
                    Tab 2 content button version
                  </div>
                  {/* 3 */}
                  <div
                    className="tab-pane fade"
                    id="tabs-messages3"
                    role="tabpanel"
                    aria-labelledby="tabs-profile-tab3"
                  >
                    Tab 3 content button version
                  </div>
                </div>
              </div>
              <img
                alt=""
                className="lg:w-1/2 w-full lg:h-4/5 h-64 object-cover object-center rounded"
                src={cycle?.image}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CycleDetails;
