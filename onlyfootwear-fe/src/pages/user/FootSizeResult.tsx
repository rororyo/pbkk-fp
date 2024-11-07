import React from 'react';
import { useLocation } from 'react-router-dom';

const FootSizeResult: React.FC = () => {
  const location = useLocation();
  const footSize = location.state?.footSize;

  // Log untuk memeriksa apakah data diterima
  console.log('Received foot size data:', footSize);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Foot Size Calculation Result</h1>
      {footSize ? (
        <p className="text-lg">Your foot size is: {footSize.size} cm</p>
      ) : (
        <p className="text-lg">No foot size data available.</p>
      )}
    </div>
  );
};

export default FootSizeResult;
