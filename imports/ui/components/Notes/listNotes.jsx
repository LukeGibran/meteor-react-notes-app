import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const listNotes = ({ name, description }) => {
  return (
    <Fragment>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  className="heroicon-ui"
                  d="M13 16v5a1 1 0 0 1-1 1H9l-3-6a2 2 0 0 1-2-2 2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2 0-1.1.9-2 2-2h7.59l4-4H20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2.41l-4-4H13zm0-2h1.41l4 4H20V4h-1.59l-4 4H13v6zm-2 0V8H6v2H4v2h2v2h5zm0 2H8.24l2 4H11v-4z"
                />
              </svg>
            </div>

            <h2 className="text-gray-900 text-lg title-font font-medium">
              {name}
            </h2>
          </div>

          <div className="flex-grow">
            <p className="leading-relaxed text-base">{description}</p>

            <a className="mt-3 text-indigo-500 inline-flex items-center">
              Learn More
              <div className="ml-2 text-indigo">
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    className="heroicon-ui"
                    d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

listNotes.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default listNotes;
