import React, { useEffect } from 'react';
import SearchNotes from './SearchNotes';
import ListNotes from './listNotes';

import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NotesCollection } from '../../../api/Notes';

// Layouts
import Spinner from '../layouts/Spinner/spinner.jsx';

const Notes = (props) => {
  const { allNotes, isLoading } = useTracker(() => {
    const subscription = Meteor.subscribe('notes');
    const allNotes = NotesCollection.find({ owner: Meteor.userId() }).fetch();
    return {
      allNotes,
      isLoading: !subscription.ready(),
    };
  });

  return (
    <section className="text-gray-700 body-font">
      {/* Main Note Content */}
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            All Notes
          </h2>

          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Your collection of Notes 📚
            <button
              className="ml-2 text-sm bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded-full"
              onClick={props.toggleDisplay}
            >
              new +
            </button>
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
          {isLoading ? (
            <Spinner />
          ) : (
            allNotes.map((note, i) => (
              <ListNotes
                key={i}
                name={note.name}
                description={note.description}
              />
            ))
          )}
          {/* End of ListNote component */}
        </div>
      </div>
    </section>
  );
};

export default Notes;
