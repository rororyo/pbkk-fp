import React, { useState, useEffect } from 'react';
import small1 from '/assets/small/1.png';
import small2 from '/assets/small/2.png';
import small3 from '/assets/small/3.png';
import small4 from '/assets/small/4.png';
import small5 from '/assets/small/5.png';
import small6 from '/assets/small/6.png';
import desktop1 from '/assets/desktop/1.png';
import desktop2 from '/assets/desktop/2.png';
import desktop3 from '/assets/desktop/3.png';
import desktop4 from '/assets/desktop/4.png';
import desktop5 from '/assets/desktop/5.png';
import desktop6 from '/assets/desktop/6.png';

const HeroSection: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update the state based on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Select the appropriate image array based on screen size
  const images = isDesktop
    ? [desktop1, desktop2, desktop3, desktop4, desktop5, desktop6]
    : [small1, small2, small3, small4, small5, small6];

  // Automatically change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  return (
    <section
      className="transition-all duration-500"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
        width: '100%', // Full width
        height: isDesktop ? '512px' : '100vw', // 512px height for desktop, full width for small screens
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
    </section>
  );
};

export default HeroSection;
