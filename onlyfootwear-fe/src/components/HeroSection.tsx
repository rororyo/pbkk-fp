import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-cover bg-center h-96" style={{ backgroundImage: "url('/path-to-your-shoe-banner.jpg')" }}>
      <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Step Up Your Shoe Game</h2>
          <p className="text-lg mb-6">Find the latest collection of sneakers and sports shoes.</p>
          <button className="bg-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-blue-600">Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
