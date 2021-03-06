import React from 'react';
import useInventory from '../../hooks/useInventory';
import Spinner from '../SharedComponent/Spinner/Spinner';
import { RiDeleteBinFill } from 'react-icons/ri';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ManageInventory = () => {
  const [inventory, spinner] = useInventory();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://choco-cycle-dealer.herokuapp.com/cycle/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  };
  return (
    <>
      <figure className="relative">
        <img
          className="w-full h-60 shadow-md object-cover opacity-75"
          src="https://i.ibb.co/B6L6h4K/manage-inventory.jpg"
          alt="manage-inventory"
        />
        <div
          style={{ boxShadow: '0 0 20px #eee' }}
          className="absolute top-[25%] left-[5%] p-4 bg-black bg-opacity-30"
        >
          <h1 className="text-white text-4xl">Manage Inventory</h1>
          <span className="inline-block h-1 w-16 rounded bg-white mt-6 mb-4"></span>
        </div>
      </figure>

      <div className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] ">
        <div className="container py-4 flex mx-auto justify-around  ">
          <div className="my-4 sm:my-8 shadow-lg w-1/3">
            <button
              onClick={() => navigate(`/inventory`)}
              className="btn-grad px-4 py-3 text-sm sm:text-base flex mx-auto w-full justify-center tracking-widest "
            >
              Full Inventory
            </button>
          </div>
          <div className="my-4 sm:my-8 shadow-lg w-1/3">
            <button
              onClick={() => navigate(`/add-cycle`)}
              className="btn-grad px-4 text-sm py-3 sm:text-base flex mx-auto w-full justify-center tracking-widest "
            >
              Add New Cycle
            </button>
          </div>
        </div>

        <div className="flex flex-col container mx-auto text-center ">
          <div className="overflow-x-auto sm:-mx-0 lg:-mx-0">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
                {spinner ? (
                  <Spinner />
                ) : (
                  <table className="min-w-full mb-8 mx-4 sm:mx-0">
                    <thead className="bg-gray-800 text-white border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium px-6 py-4 "
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium px-6 py-4 "
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium px-6 py-4 "
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium px-6 py-4 "
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium px-6 py-4 "
                        >
                          Seller
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium px-6 py-4 "
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium px-6 py-4 "
                        >
                          Delete
                        </th>
                      </tr>
                    </thead>

                    <tbody className="">
                      {inventory?.map((cycle) => (
                        <tr
                          key={cycle._id}
                          className="bg-gray-200 border-b border-gray-300 transition duration-300 ease-in-out hover:bg-white text-gray-900 text-xs"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                            {1}
                          </td>
                          <td className="text-sm  px-6 py-4 whitespace-nowrap">
                            {cycle?.name ? cycle?.name : 'No Product Name'}
                          </td>
                          <td className="text-sm  px-6 py-4 whitespace-nowrap">
                            {cycle?.price ? cycle?.price : '-'}
                          </td>
                          <td className="text-sm  px-6 py-4 whitespace-nowrap">
                            {cycle?.email ? (
                              cycle?.email
                            ) : (
                              <span className="text-red-600">
                                Missing Email!
                              </span>
                            )}
                          </td>
                          <td className="text-sm  px-6 py-4 whitespace-nowrap">
                            {cycle?.supplierName
                              ? cycle?.supplierName
                              : 'Anonymous'}
                          </td>
                          <td className="text-sm  px-6 py-4 whitespace-nowrap">
                            {cycle?.quantity ? cycle?.quantity : '-'}
                          </td>
                          <td className=" cursor-pointer text-red-500 hover:text-red-600 px-6 flex justify-center py-4 whitespace-nowrap">
                            <button onClick={() => handleDelete(cycle._id)}>
                              <RiDeleteBinFill size={25} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageInventory;
