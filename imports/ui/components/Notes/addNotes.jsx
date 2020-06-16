import React, { useState, useContext } from 'react';
import { Meteor } from 'meteor/meteor';

// Context
import AlertContext from '../../context/alert/alertContext';

//import CKEditor from '@ckeditor/ckeditor5-react';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const addNotes = ({ toggleDisplay }) => {
  const alertContext = useContext(AlertContext);

  const { setAlert, removeAlert } = alertContext;

  const [noteDetails, setDetails] = useState({
    name: '',
    description: '',
  });

  const setName = (e) => {
    setDetails({ ...noteDetails, name: e.target.value });
  };

  const setDescription = (e) => {
    setDetails({ ...noteDetails, description: e.target.value });
  };

  const { name, description } = noteDetails;

  const submit = (e) => {
    e.preventDefault();

    Meteor.call('notes.insert', { name, description });
    setDetails({
      name: '',
      description: '',
    });

    setAlert('green', 'You have successfully added a new note!');
    removeAlert();
    toggleDisplay();
  };
  return (
    <div className="w-full flex content-center items-center justify-center">
      <span className="lg:w-1/3"></span>
      <form
        className="lg:w-2/3 lg:ml-auto md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        onSubmit={submit}
      >
        <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font">
          Add Notes 📒
        </h2>

        <p className="leading-relaxed mb-5 text-gray-600">
          Add a name for your note! and also description 📄
        </p>

        <input
          className="bg-white rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2 mb-4"
          placeholder="Name"
          type="text"
          name="name"
          required
          onChange={setName}
          value={name}
        />

        <textarea
          className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-blue-500 text-base px-4 py-2 mb-4 resize-none"
          placeholder="Description"
          onChange={setDescription}
          value={description}
        ></textarea>

        {/*	       <CKEditor
          editor={ClassicEditor}
          onInit={(editor) => {
            // You can store the "editor" and use when it is needed.

            editor.config.height = 300;
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log(editor.config);

            setDescription(data);
          }}
		/> */}

        <button
          type="submit"
          className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg mb-2 mt-4"
        >
          Add Note
        </button>

        <a
          onClick={toggleDisplay}
          href="#!"
          className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
        >
          Cancel
        </a>

        <p className="text-xs text-gray-500 mt-3">
          Be sure to fill both of them 📝
        </p>
      </form>
      <span className="lg:w-1/3"></span>
    </div>
  );
};

export default addNotes;
