import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import Spinner from '../SharedComponent/Spinner/Spinner';
import { RiDeleteBinFill } from 'react-icons/ri';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { FaUserSecret } from 'react-icons/fa';

const MyCycles = () => {
  const [user, loading, error] = useAuthState(auth);
  const [myCycle, setMyCycle] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getMyCycle = async () => {
      const email = user?.email;
      const url = `https://choco-cycle-dealer.herokuapp.com/my-cycles?email=${email}`;
      try {
        const { data } = await axios.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        setMyCycle(data);
      } catch (error) {
        console.log(error);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate('/login');
        }
      }
    };
    getMyCycle();
  }, [user?.email]);

  if (user?.uid) {
    // console.log(user);
  }
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return toast.error(error);
  }

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
          className="w-full h-60 shadow-md opacity-80 max-w-full object-cover bg-top "
          src="https://i.ibb.co/8NjVy5r/my-cycles.jpg"
          alt="my-cycles"
        />
        <div
          style={{ boxShadow: '0 0 20px #eee' }}
          className="absolute top-[25%] left-[5%] p-4 bg-black bg-opacity-30"
        >
          <h1 className="text-white text-4xl capitalize">
            {user?.displayName ? user?.displayName : 'Unknown'} cycle's!
          </h1>
          <span className="inline-block h-1 w-16 rounded bg-white mt-6 mb-4"></span>
        </div>

        <div
          style={{ boxShadow: '0 0 20px #eee' }}
          className="text-white hidden sm:flex items-center flex-col absolute top-[3.2%] right-[5%] p-4 bg-black bg-opacity-30"
        >
          {user?.photoURL ? (
            <img
              src={user?.photoURL}
              className="rounded-full w-36 "
              alt={user?.displayName.slice(0, 5)}
            />
          ) : (
            <FaUserSecret color="white" size={145} />
          )}
          <h3>{user?.displayName ? user?.displayName : 'Unknown'}</h3>
          <h4>{user?.email}</h4>
        </div>
      </figure>

      {/* My Cycles  */}
      <div className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] ">
        <div className="flex flex-col container mx-auto text-center pt-4">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
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
                    {myCycle?.map((cycle) => (
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCycles;
