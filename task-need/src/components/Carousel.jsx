import React, { useEffect, useState } from 'react';
import one from '../assets/one.png';
import two from '../assets/two.png';
import three from '../assets/three.png';

const images = [one, two, three, three]; // 4 slides

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="carousel w-full">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-item w-full transition-opacity duration-700 ${
              index === currentIndex ? 'block' : 'hidden'
            }`}
          >
            <img src={img} className="w-full" alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="absolute inset-y-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2 z-10">
        <button onClick={prevSlide} className="btn btn-circle">❮</button>
        <button onClick={nextSlide} className="btn btn-circle">❯</button>
      </div>
    </div>
  );
};

export default Carousel;