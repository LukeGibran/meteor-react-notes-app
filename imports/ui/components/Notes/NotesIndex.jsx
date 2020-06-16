import React, { Fragment, useState } from 'react';
import AddNotes from '../Notes/addNotes';

// Components
import Notes from './Notes';

const NotesIndex = (props) => {
  const [displayMain, toggleDisplay] = useState(true);

  const toggle = () => {
    toggleDisplay(!displayMain);
  };

  return (
    <Fragment>
      {displayMain ? (
        <Notes toggleDisplay={toggle} />
      ) : (
        <AddNotes toggleDisplay={toggle} />
      )}
    </Fragment>
  );
};

export default NotesIndex;
