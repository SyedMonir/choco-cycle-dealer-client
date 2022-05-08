import React from 'react';

const Blogs = () => {
  return (
    <>
      <figure className="relative">
        <img
          className="w-full h-60 shadow-md object-cover opacity-90"
          src="https://i.ibb.co/ZdL0w12/add-cycle.jpg"
          alt="blogs"
        />
        <div
          style={{ boxShadow: '0 0 20px #eee' }}
          className="absolute top-[25%] left-[5%] p-4 bg-black bg-opacity-30"
        >
          <h1 className="text-white text-4xl">My Recent Blogs</h1>
          <span className="inline-block h-1 w-16 rounded bg-white mt-6 mb-4"></span>
        </div>
      </figure>

      {/* Blogs */}
      <section className="text-gray-300 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-800">
            {/* 1 */}
            <article className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">
                  JavaScript
                </span>
                <span className="mt-1 text-gray-500 text-sm">3 May 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-white title-font mb-2">
                  Difference between JAVASCRIPT and NODE-JS!
                </h2>
                <p className="leading-relaxed">
                  1. Javascript is a simple programming language that is used
                  for writing scripts its runs in the browser and Nodejs is a
                  running environment for JavaScript. <br /> 2. Javascript only
                  can run in the browsers but We can run it outside the browser
                  with NodeJS. <br />
                  3. Javascript is basically used on the client-side and Nodejs
                  is mostly used on the server-side.
                </p>
              </div>
            </article>

            {/* 2 */}
            <article className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">
                  Nodejs and Mongodb
                </span>
                <span className="mt-1 text-gray-500 text-sm">4 May 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-white title-font mb-2">
                  When should you use NODE-JS and when should you use MONGODB?
                </h2>
                <p className="leading-relaxed">
                  MongoDB and NodeJS are two different technologies. <br />{' '}
                  MongoDB is NoSQL database which is document oriented and its's
                  a database system to store documents in a database and to
                  perform operations like create, read, update and delete and
                  NodeJS helps us to to connect our client site to database by
                  it's server site. <br /> NodeJS is a JavaScript runtime
                  environment. It's actually helps JavaScript to run outside of
                  server. It's used in server side development.
                </p>
              </div>
            </article>

            {/* 3 */}
            <article className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">
                  Databases
                </span>
                <span className="mt-1 text-gray-500 text-sm">5 May 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-white title-font mb-2">
                  Differences between SQL and NO-SQL databases!
                </h2>
                <p className="leading-relaxed">
                  SQL databases are called as Relational Databases and NoSQL
                  database are called as non-relational database. <br />
                  SQL databases are best for complex queries and NoSQL databases
                  are not so good for complex queries. <br />
                  SQL databases are table-based and NoSQL databases are
                  document, key-value etc. based.
                </p>
              </div>
            </article>

            {/* 4 */}
            <article className="py-8 flex border-t-2 border-gray-800 flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-white">
                  Security
                </span>
                <span className="mt-1 text-gray-500 text-sm">6 May 2022</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-white title-font mb-2">
                  What is the purpose of JWT and how does it work?
                </h2>
                <p className="leading-relaxed">
                  JSON Web Token (JWT) is for securely transmitting information
                  between client and server. <br /> The main purpose of using
                  JWT isn't to hide data but to ensure the authenticity of the
                  data. JWT is a token based authentication mechanism.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
