"use client";
import { useState, useEffect } from "react";
import "../app/carousel.css";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [direction, setDirection] = useState(null); // Estado para almacenar la dirección de desplazamiento

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    if (!touchStartX) return;

    const touchEndX = event.touches[0].clientX;
    const differenceX = touchStartX - touchEndX;

    if (differenceX > 5) {
      setDirection("next"); // Establecer la dirección como Next
      goToNextSlide();
    } else if (differenceX < -5) {
      setDirection("prev"); // Establecer la dirección como Prev
      goToPrevSlide();
    }

    setTouchStartX(null);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="carousel-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div
        className="carousel-wrapper"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition:
            (currentIndex === items.length - 1 && direction === "prev") ||
            (currentIndex === 0 && direction === "next")
              ? "none"
              : "transform 0.9s ease",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {items.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
