// src/components/ProgressBar.js

import React from 'react';

const Progress = ({ per}) => {
  return (
    <div className="w-full h-4 bg-gray-200 rounded-lg overflow-hidden">
      <div
        className="bg-teal-500 text-white text-center rounded-lg text-sm"
        style={{ width: `${per}%` }}
      >
        {per}%
      </div>
    </div>
  );
};

export default Progress;
