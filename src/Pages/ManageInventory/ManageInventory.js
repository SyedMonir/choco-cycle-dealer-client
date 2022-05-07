import React from 'react';
import useInventory from '../../hooks/useInventory';
import Spinner from '../SharedComponent/Spinner/Spinner';
import { RiDeleteBinFill } from 'react-icons/ri';
import Swal from 'sweetalert2';

const ManageInventory = () => {
  const [inventory, spinner] = useInventory();

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
      <div className="text-center my-8">
        <h1 className=" text-4xl">Manage Inventory</h1>
        <span className="inline-block h-1 w-16 rounded bg-[#1f4037] mt-6 mb-4"></span>
      </div>

      <div className="flex flex-col container mx-auto text-center">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-x-auto">
              {spinner ? (
                <Spinner />
              ) : (
                <table className="min-w-full">
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

                  <tbody>
                    {inventory?.map((cycle) => (
                      <tr
                        key={cycle._id}
                        className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 text-gray-900 text-xs"
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
    </>
  );
};

export default ManageInventory;
