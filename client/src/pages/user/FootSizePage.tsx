import React from 'react';
import FootSizeMeasurement from '../../components/MeasureFootsize';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const FootSizePage: React.FC = () => {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <FootSizeMeasurement />
      </div>
      <Footer />
    </div>
  );
};

export default FootSizePage;
