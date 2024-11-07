import React, { useState, useEffect } from 'react';
import poster1 from '../assets/1.png';
import poster2 from '../assets/2.png';
import poster3 from '../assets/3.png';

const HeroSection: React.FC = () => {
  // Array of image URLs
  const images = [
    poster1,
    poster2,
    poster3,
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  // Function to handle manual navigation
  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <section
      className="bg-cover bg-center transition-all duration-500"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        height: '512px'  // Memaksa tinggi 512 piksel
      }}
    >
      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={goToPrevSlide}
      >
        &#10094; {/* Left Arrow */}
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={goToNextSlide}
      >
        &#10095; {/* Right Arrow */}
      </button>
    </section>
  );
};

export default HeroSection;
