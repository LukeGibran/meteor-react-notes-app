import React from 'react';

const Alert = (props) => {
  return (
    <div
      className={`bg-${props.color}-100 border-l-4 border-${props.color}-500 text-${props.color}-700 p-4 mb-3`}
      role="alert"
    >
      <p className="font-bold">Notice</p>

      <p>{props.message}</p>
    </div>
  );
};

export default Alert;
