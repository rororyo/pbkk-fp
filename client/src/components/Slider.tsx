import React, { useState } from 'react';

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <img src={images[currentSlide]} alt="slide" className="w-full h-64 object-cover rounded-lg" />
      <button onClick={prevSlide} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2">
        &lt;
      </button>
      <button onClick={nextSlide} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2">
        &gt;
      </button>
    </div>
  );
};

export default Slider;
