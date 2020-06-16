import React from 'react';
import './spinner.css';

const spinner = () => {
  return (
    <div className="w-full ">
      <div className="self-center lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default spinner;
