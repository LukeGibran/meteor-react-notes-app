import React from 'react';

// Components
import SearchNotes from './SearchNotes';
import ListNotes from './listNotes';

const Notes = (props) => {
  return (
    <section className="text-gray-700 body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            All Notes
          </h2>

          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Your collection of Notes 📚
            <div className="w-full flex justify-center ">
              <div className="flex items-center border-b border-b-2 border-blue-500 py-2 w-1/2 text-lg">
                {/* SEARCH Component*/}
                <SearchNotes />
                {/* END of Search component */}
              </div>
            </div>
          </h1>
        </div>

        <div className="flex flex-wrap ">
          {/* ListNotes component */}
          <ListNotes />
          {/* End of ListNote component */}
        </div>
      </div>
    </section>
  );
};

export default Notes;
