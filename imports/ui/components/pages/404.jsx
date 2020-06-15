import React from 'react';

const Notfound = (props) => {
  const goHome = () => {
    props.history.push('/');
  };
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="404.png"
        />

        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            You seem to be lost 🤷
          </h1>

          <p className="mb-8 leading-relaxed">
            The page you are searching is not available. Click the button to go
            back home ✈️
          </p>

          <div className="flex justify-center">
            <button
              onClick={goHome}
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Go back Home 🏡
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notfound;
