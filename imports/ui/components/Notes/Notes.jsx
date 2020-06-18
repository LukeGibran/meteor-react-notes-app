import React, { useEffect, useState } from 'react';
import SearchNotes from './SearchNotes';
import ListNotes from './listNotes';

import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NotesCollection } from '../../../api/Notes';

// Layouts
import Spinner from '../layouts/Spinner/spinner.jsx';
import NoResult from '../layouts/NoResult';

const Notes = (props) => {
  // Set the state for all the Notes
  const [notes, setNotes] = useState({
    allNotes: [],
    tobeDisplayed: [],
    searchResults: [],
    searchText: '',
  });

  // State for pagination
  const [pagination, setPagination] = useState({
    perPage: 6,
    page: 1,
    numOfPage: 0,
  });

  // Get all the notes from the database
  const { notes_data, isLoading } = useTracker(() => {
    const subscription = Meteor.subscribe('notes');
    const notes_data = NotesCollection.find(
      { owner: Meteor.userId() },
      { sort: { createdAt: -1 } }
    ).fetch();

    return {
      notes_data,
      isLoading: !subscription.ready(),
    };
  });

  // Deconstruct data from state
  const { allNotes, tobeDisplayed, searchResults, searchText } = notes;
  const { perPage, page, numOfPage } = pagination;

  // Wait and update the state
  useEffect(() => {
    // Set the number of notes to be displayed
    const tobeDisplayed = notes_data.slice(0, perPage);

    // See how many of pages
    const numOfPage = Math.ceil(notes_data.length / perPage);

    // Set the notes(state) data
    setNotes({
      allNotes: [...notes_data],
      tobeDisplayed,
      searchResults: [...notes_data],
    });

    // Set the pagination(state) data
    setPagination({ ...pagination, numOfPage });
  }, [isLoading]);

  // Listen for 'Next' button
  const toggleNext = () => {
    if (page < numOfPage) {
      const pageNext = page + 1;
      setPagination({ ...pagination, page: pageNext });
    }
  };

  // Listen for 'Prev' button
  const togglePrev = () => {
    if (page > 1) {
      const pagePrev = page - 1;
      setPagination({ ...pagination, page: pagePrev });
    }
  };

  // Compute on what page is on
  const whatPage = () => {
    const startPoint = (page - 1) * perPage;
    const endPoint = perPage * page;
    const newDisplay = searchResults.slice(startPoint, endPoint);

    // Check if the display is first time being rendered
    if (allNotes != false)
      setNotes({ ...notes, tobeDisplayed: [...newDisplay] });
  };

  useEffect(() => {
    whatPage();
  }, [page]);

  // Search
  const search = (e) => {
    const result = allNotes.filter((note) =>
      note.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setNotes({
      ...notes,
      searchText: e.target.value,
      searchResults: [...result],
      tobeDisplayed: result.slice(0, perPage),
    });

    if (!e.target.value) {
      const numOfPage = Math.ceil(notes_data.length / perPage);
      return setPagination({ ...pagination, numOfPage });
    }
    const numOfPage = Math.ceil(result.length / perPage);
    setPagination({ ...pagination, numOfPage, page: 1 });
  };
  return (
    <section className="text-gray-700 body-font">
      {/* Main Note Content */}
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-lg text-indigo-500 tracking-widest font-medium title-font mb-1">
            {searchText ? (
              <span>
                Result for{' '}
                <strong className="underline text-green-500">
                  {searchText}
                </strong>{' '}
                ({searchResults.length})
              </span>
            ) : (
              'All Notes'
            )}
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
                <SearchNotes search={search} />
                {/* END of Search component */}
              </div>
            </div>
          </h1>
        </div>

        <div className="flex flex-wrap " style={{ height: '450px' }}>
          {/* ListNotes component */}
          {!isLoading && searchResults == false && <NoResult />}
          {isLoading ? (
            <Spinner />
          ) : (
            tobeDisplayed.map((note, i) => (
              <ListNotes
                key={i}
                name={note.name}
                description={note.description}
              />
            ))
          )}
          {/* End of ListNote component */}
        </div>
        {/* Pagination */}
        {!isLoading && (
          <div className="flex justify-end w-full mt-3">
            <div className="inline-flex ">
              <button
                className={`bg-gray-300 ${
                  page > 1 && 'hover:bg-gray-400 '
                }text-gray-800 font-bold py-2 px-4 rounded-l ${
                  page == 1 && 'cursor-not-allowed'
                }`}
                onClick={togglePrev}
              >
                Prev
              </button>

              <button className="bg-white text-black-800 font-bold py-2 px-4 rounded-l cursor-not-allowed">
                {page}
              </button>

              <button
                className={`bg-gray-300 ${
                  page < numOfPage && 'hover:bg-gray-400'
                } text-gray-800 font-bold py-2 px-4 rounded-r ${
                  page === numOfPage && 'cursor-not-allowed'
                }`}
                onClick={toggleNext}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {/* End of pagination */}
      </div>
    </section>
  );
};

export default Notes;
