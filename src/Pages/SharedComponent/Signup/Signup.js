import React from 'react';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import '../Login/Login.css';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import Spinner from '../Spinner/Spinner';
import { toast } from 'react-toastify';

const Signup = () => {
  const navigate = useNavigate();

  // React hook form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // From Firebase Hook

  // Email And Password
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  // Google
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  // Update Profile
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  // Submit
  const onSubmit = async (data) => {
    // console.log(data);

    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };

  // Error
  if (error) {
    console.log(error);
    const customError = error?.message.split('Error');
    toast.error(customError[1] || error.message);
  }
  if (googleError) {
    console.log(googleError);
    toast.error(googleError);
  }
  if (updateError) {
    console.log(updateError);
    toast.error(updateError);
  }

  // User
  if (user?.user?.uid) {
    // console.log(user?.user);
    toast.success('User Sign up Successfully');
  }
  if (googleUser) {
    // console.log(googleUser?.user);
    toast.success('User Sign up Successfully');
  }
  return (
    <>
      <section className="h-full gradient-form bg-gray-200 ">
        <div className="container py-12 px-6 h-full mx-auto">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="gradient-color sm:mb-0 mb-4 lg:w-6/12 flex items-center lg:rounded-l-lg rounded-t-lg">
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                      <h4 className="text-xl font-semibold mb-6">
                        We are more than just a company
                      </h4>
                      <blockquote className="text-sm text-white">
                        “When the spirits are low, when the day appears dark,
                        when work becomes monotonous, when hope hardly seems
                        worth having, just mount a bicycle and go out for a spin
                        down the road, without thought on anything but the ride
                        you are taking.” <br />
                        <span className="text-xs text-gray-100">
                          Sir Arthur Conan Doyle (1859 - 1930), author of
                          Sherlock Holmes.
                        </span>
                      </blockquote>
                    </div>
                  </div>
                  <div className="lg:w-6/12 px-4 md:px-0 h-full">
                    <div className="md:p-12 md:mx-6 pb-4">
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="https://i.ibb.co/LNNVLvF/logo.png"
                          alt="logo"
                        />
                        <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                          We are The Choco-Cycle Team
                        </h4>
                      </div>

                      {loading || updating || googleLoading ? (
                        <Spinner />
                      ) : (
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <p className="mb-4">
                            Please{' '}
                            <span className="font-extrabold">register</span> to
                            your account
                          </p>
                          <div className="mb-4">
                            <input
                              type="text"
                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="name"
                              placeholder="Your name"
                              {...register('name', { required: true })}
                            />
                            <span className="text-red-600 text-sm">
                              {errors.name?.type === 'required' &&
                                'Name is required'}
                            </span>
                          </div>
                          <div className="mb-4">
                            <input
                              type="email"
                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="email"
                              placeholder="Your email"
                              {...register('email', { required: true })}
                            />
                            <span className="text-red-600 text-sm">
                              {errors.email && 'Email is required'}
                            </span>
                          </div>
                          <div className="mb-4">
                            <input
                              type="password"
                              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="password"
                              placeholder="Password"
                              {...register('password', { required: true })}
                            />
                            <span className="text-red-600 text-sm">
                              {errors.password && 'Password is required'}
                            </span>
                          </div>

                          <div className="text-center pt-1 mb-4 pb-1">
                            <button
                              className="gradient-color inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                              type="submit"
                              data-mdb-ripple="true"
                              data-mdb-ripple-color="light"
                            >
                              Register
                            </button>
                          </div>
                          <div className="flex items-center justify-center mb-4">
                            <p className="mb-0 mr-2">
                              Already have an account?
                              <button
                                onClick={() => navigate(`/login`)}
                                type="button"
                                className="hover:underline text-red-600 font-medium text-sm leading-tight cursor-pointer ml-1"
                              >
                                Login
                              </button>
                            </p>
                          </div>
                        </form>
                      )}
                      {/* Social login */}
                      <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                        <p className="text-center font-semibold mx-4 mb-0">
                          OR
                        </p>
                      </div>

                      <button
                        onClick={() => signInWithGoogle()}
                        className="px-7 py-3 text-black font-medium text-sm leading-snug uppercase rounded w-full flex justify-center items-center mb-3 "
                        style={{
                          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                        }}
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        {/* <!-- Google --> */}
                        <FcGoogle className="mr-4" size={30} />
                        Continue with Google
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <ToastContainer /> */}
    </>
  );
};

export default Signup;
