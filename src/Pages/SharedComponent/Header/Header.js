import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaUserSecret } from 'react-icons/fa';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Spinner from '../Spinner/Spinner';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import './Header.css';
import Swal from 'sweetalert2';

const Header = () => {
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

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Sign-out!',
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(auth);
        Swal.fire('Sign out!', 'Sign out successfully!', 'success');
      }
    });
  };
  return (
    <>
      <nav className="sticky top-0 z-10 w-full flex flex-wrap items-center justify-between py-1 bg-[#17362e] text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-xl navbar navbar-expand-lg navbar-light">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          {/* Hamburger */}
          <button
            className=" navbar-toggler text-white border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <AiOutlineMenu />
          </button>
          <div
            className="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent"
          >
            {/* Logo  */}
            <Link
              className="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1 "
              to="/"
            >
              <img
                src="https://i.ibb.co/LNNVLvF/logo.png"
                style={{ height: '50px', width: 'auto' }}
                alt=""
                loading="lazy"
              />
            </Link>
            {/* <!-- Left Menu --> */}
            <ul className="navbar-nav tracking-wider flex flex-col pl-0 list-style-none uppercase mx-auto">
              <li className="nav-item p-2">
                <NavLink
                  className="nav-link text-white hover:text-gray-400 focus:text-gray-700 p-0"
                  to="/inventory"
                >
                  Inventory
                </NavLink>
              </li>
              {user?.uid && (
                <>
                  <li className="nav-item p-2">
                    <NavLink
                      className="nav-link text-white hover:text-gray-400 focus:text-gray-700 p-0"
                      to="/manage-inventory"
                    >
                      Manage-Inventory
                    </NavLink>
                  </li>
                  <li className="nav-item p-2">
                    <NavLink
                      className="nav-link text-white hover:text-gray-400 focus:text-gray-700 p-0"
                      to="/add-cycle"
                    >
                      Add-Cycle
                    </NavLink>
                  </li>
                  <li className="nav-item p-2">
                    <NavLink
                      className="nav-link text-white hover:text-gray-400 focus:text-gray-700 p-0"
                      to="/my-cycles"
                    >
                      My-Cycles
                    </NavLink>
                  </li>
                </>
              )}
              <li className="nav-item p-2">
                <NavLink
                  className="nav-link text-white hover:text-gray-400 focus:text-gray-700 p-0"
                  to="/blogs"
                >
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink
                  className="nav-link text-white hover:text-gray-400 focus:text-gray-700 p-0"
                  to="/404"
                >
                  404
                </NavLink>
              </li>
            </ul>
          </div>

          {user?.uid ? (
            <div className="dropdown relative ml-1">
              <Link
                className="dropdown-toggle flex items-center hidden-arrow"
                to="/"
                id="dropdownMenuButton2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user?.photoURL ? (
                  <img
                    src={user?.photoURL}
                    className="rounded-full h-9 w-9 "
                    alt={user?.displayName.slice(0, 5)}
                  />
                ) : (
                  <FaUserSecret color="white" size={25} />
                )}
              </Link>

              <ul
                className="dropdown-menu min-w-max absolute hidden bg-white  text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none left-auto  right-0"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <Link
                    className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 capitalize"
                    to="/my-cycles"
                  >
                    {user?.displayName ? user?.displayName : 'Unknown'}
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleDelete}
                    className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center relative">
              <ul className="navbar-nav uppercase tracking-wider flex pl-0 list-style-none mr-auto">
                <li className="nav-item p-2">
                  <NavLink
                    className="nav-link text-white hover:text-gray-400 focus:text-gray-700 p-0"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item p-2">
                  <NavLink
                    className="nav-link text-white hover:text-gray-400 focus:text-gray-700 p-0"
                    to="/signup"
                  >
                    Signup
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
