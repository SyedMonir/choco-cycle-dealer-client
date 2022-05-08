import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import Spinner from '../SharedComponent/Spinner/Spinner';

const AddCycle = () => {
  const [user, loading, error] = useAuthState(auth);
  if (user?.uid) {
    // console.log(user);
  }
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return toast.error(error);
  }

  // Add Cycle
  const handleAddCycle = (event) => {
    event.preventDefault();
    const name = event.target?.name?.value;
    const email = user?.email;
    const image = event.target?.image?.value;
    const description = event.target?.description?.value;
    const price = event.target?.price?.value;
    const quantity = event.target?.quantity?.value;
    const supplierName = user?.displayName;

    const item = {
      name,
      email,
      image,
      description,
      price,
      quantity,
      supplierName,
    };

    // console.log(item);

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Add it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch('https://choco-cycle-dealer.herokuapp.com/cycle', {
          method: 'POST',
          body: JSON.stringify(item),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
          .then((response) => response.json())
          .then((json) => console.log(json));
        Swal.fire('Added!', `Your product has been added!`, 'success');
      }
    });
    event.target.reset();
  };
  return (
    <>
      <figure className="relative">
        <img
          className="w-full h-60 shadow-md opacity-80 max-w-full object-cover bg-top "
          src="https://i.ibb.co/ncyqskr/add-cycle.jpg"
          alt="add-cycle"
        />
        <div
          style={{ boxShadow: '0 0 20px #eee' }}
          className="absolute top-[25%] left-[5%] p-4 bg-black bg-opacity-30"
        >
          <h1 className="text-white text-4xl capitalize">Add new cycle!</h1>
          <span className="inline-block h-1 w-16 rounded bg-white mt-6 mb-4"></span>
        </div>
      </figure>

      <div className="bg-gradient-to-r p-6 from-[#0f2027] via-[#203a43] to-[#2c5364]">
        <div className="block mx-auto p-6 rounded-lg shadow-lg bg-white max-w-md">
          <h2 className="text-center mt-4 mb-5 uppercase text-lg">
            Add To Inventory
          </h2>
          <form onSubmit={handleAddCycle}>
            <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="name"
                name="name"
                required
                placeholder="Cycle Name"
              />
            </div>
            {/* <div className="form-group mb-6">
              <input
                type="email"
                value={user?.email}
                disabled={true}
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="email"
                name="email"
                required
                placeholder="Email address"
              />
            </div> */}
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="image"
                name="image"
                required
                placeholder="Image"
              />
            </div>
            <small className="block mb-4 text-center text-gray-500">
              https://i.ibb.co/m4qczcS/cycle-1.jpg
            </small>
            <div className="form-group mb-6">
              <textarea
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="description"
                name="description"
                rows="3"
                required
                placeholder="Description"
              ></textarea>
            </div>
            <div className="form-group mb-6">
              <input
                type="number"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="price"
                name="price"
                required
                placeholder="Price"
              />
            </div>
            <div className="form-group mb-6">
              <input
                type="number"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="quantity"
                name="quantity"
                required
                placeholder="Quantity"
              />
            </div>
            {/* <div className="form-group mb-6">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="supplierName"
                value={user?.displayName}
                name="supplierName"
                required
                placeholder="Supplier Name"
              />
            </div> */}
            <div className=" shadow-lg">
              <button
                type="submit"
                className="btn-grad px-4 py-3 text-sm sm:text-base flex mx-auto w-full justify-center tracking-widest "
              >
                Add To Inventory
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddCycle;
