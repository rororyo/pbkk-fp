import React from 'react';
import { useParams } from 'react-router-dom';

const DetailItemPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Tidak perlu mendefinisikan tipe baru

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Item Detail</h1>
      <p>Displaying details for item with ID: {id}</p>
    </div>
  );
};

export default DetailItemPage;
