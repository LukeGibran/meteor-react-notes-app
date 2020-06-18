import React from 'react';
// CSS
import './style.css';

const NoResult = () => {
  return (
    <div className="w-full flex justify-center">
      <img
        className="object-cover no-result"
        src="empty_result.png"
        alt="no result found"
      />
    </div>
  );
};

export default NoResult;
