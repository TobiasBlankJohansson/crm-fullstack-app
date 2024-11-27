import { useState } from "react";
import data from "../data/carouselItems.json";

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const renderSlides = () => {
    return data.map((slide, index) => {
      const isActive = index === currentSlide;
      const position =
        index === (currentSlide + 1) % data.length
          ? "translate-x-24 rotate-y-45 opacity-50 z-0"
          : index === (currentSlide - 1 + data.length) % data.length
          ? "-translate-x-24 rotate-y--45 opacity-50 z-0"
          : "translate-x-0 rotate-y-0 opacity-100 z-10";

      return (
        <div
          key={slide.id}
          className={`absolute transition-transform duration-500 ease-in-out transform bg-gray-100 w-[44rem] h-[28rem] rounded-lg shadow-2xl flex items-center justify-center ${position}`}
        >
          {isActive && (
            <div className="p-12 flex items-center">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-64 h-64 mr-12 rounded-lg object-cover"
              />

              <div className="text-left">
                <h2 className="text-4xl font-bold mb-6">{slide.title}</h2>
                <p className="text-gray-600 text-base leading-relaxed">{slide.description}</p>
              </div>
            </div>
          )}
        </div>
      );
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative flex justify-center items-center h-screen w-full">
      <button
        onClick={prevSlide}
        className="absolute left-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 z-10"
      >
        &#8592;
      </button>

      <div className="relative flex items-center justify-center w-[60%] h-[auto]">
        {renderSlides()}
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 z-10"
      >
        &#8594;
      </button>
    </div>
  );
}
