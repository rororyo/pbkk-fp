import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Homepage!</h1>
      <p>This is the homepage content.</p>
      <Link to="/items/1" className="text-blue-500">
        Go to Item Detail
      </Link>
    </div>
  );
};

export default HomePage;
