import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CycleDetails = () => {
  const { cycleId } = useParams();
  const navigate = useNavigate();
  const [cycle, setCycle] = useState({});
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    fetch(`https://choco-cycle-dealer.herokuapp.com/cycle/${cycleId}`)
      .then((response) => response.json())
      .then((data) => {
        setCycle(data);
      });
  }, [cycle, cycleId]);

  // Handle Shipped
  const handleShipped = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, shipped it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://choco-cycle-dealer.herokuapp.com/cycle/${cycleId}`, {
          method: 'PUT',
          body: JSON.stringify(updated),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        Swal.fire('Shipped!', `Your product has been shipped!`, 'success');
      }
    });

    const totalQuantity = parseInt(cycle?.quantity) - 1;

    const updated = { totalQuantity };
  };

  // Update Quantity
  const handleSubmit = (e) => {
    e.preventDefault();

    // For confirm
    Swal.fire({
      title: 'Are you sure?',
      text: `You want to add more items in your stock?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://choco-cycle-dealer.herokuapp.com/cycle/${cycleId}`, {
          method: 'PUT',
          body: JSON.stringify(updated),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
          });
        Swal.fire('Updated!', `Quantity increased ${totalQuantity}`, 'success');
      }
    });

    const onlyPositive = e.target?.Quantity?.value;
    if (onlyPositive <= 0) {
      console.log('True');
      e.target.reset();
      return Swal.fire(
        'Check Again!',
        "You can't add negative or zero quantity!",
        'question'
      );
    }
    const totalQuantity =
      parseInt(e.target?.Quantity?.value) + parseInt(cycle?.quantity);

    const updated = { totalQuantity };

    e.target.reset();
  };

  // Disable Button
  useEffect(() => {
    if (cycle?.quantity === 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [cycle?.quantity]);

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {cycleId}
              </h2>
              <h2 className="text-base title-font my-2 text-gray-300 tracking-widest">
                Supplier:{' '}
                {cycle?.supplierName ? cycle?.supplierName : 'Anonymous'}
              </h2>
              <h1 className="text-white text-3xl title-font font-medium mb-4">
                {cycle?.name ? cycle?.name : 'No Product Name'}
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
                    {cycle?.description ? cycle?.description : 'No Description'}
                  </p>
                  <div className="flex border-t border-gray-800 py-2">
                    <span className="text-gray-500">Color</span>
                    <span className="ml-auto text-white">Blue</span>
                  </div>
                  <div className="flex border-t border-b mb-6 border-gray-800 py-2">
                    <span className="text-gray-500">Quantity</span>
                    <span className="ml-auto text-white">
                      {cycle?.quantity === 0 ? 'Stock Out' : cycle?.quantity}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="title-font font-medium text-2xl text-white">
                      $ {cycle?.price}
                    </span>
                    {/* Shipped */}
                    <button
                      onClick={handleShipped}
                      disabled={disable}
                      className="flex ml-auto text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded"
                    >
                      Shipped
                    </button>
                    {/* Favorite */}
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
                  Reviews Coming Soon!
                </div>
                {/* 3 */}
                <div
                  className="tab-pane fade"
                  id="tabs-messages3"
                  role="tabpanel"
                  aria-labelledby="tabs-profile-tab3"
                >
                  Details Coming Soon!
                </div>
              </div>
            </div>
            <img
              alt={cycle?.name}
              className="lg:w-1/2 w-full lg:h-4/5 h-[40rem] object-cover object-center rounded"
              src={cycle?.image}
            />
          </div>
        </div>

        <div className="block p-6 rounded-lg shadow-lg bg-white mx-auto mb-4 max-w-md">
          <h3 className="text-center mb-4 text-green-600">Restock the item</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-6">
              <input
                type="number"
                name="Quantity"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                required
                id="Quantity"
                placeholder="Quantity"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Update
            </button>
          </form>
        </div>

        <div className="my-8 shadow-2xl ">
          <button
            onClick={() => navigate(`/manage-inventory`)}
            className="flex mx-auto w-1/2 justify-center tracking-widest text-white bg-gradient-to-r from-[#1f4037c4] via-[#3ab87d]  to-[#1f4037c4] bg-opacity-75  border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded"
          >
            Manage Inventory
          </button>
        </div>
      </section>
    </>
  );
};

export default CycleDetails;
