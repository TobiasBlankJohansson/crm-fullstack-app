import { SetStateAction, useState } from "react";
import data from "../../data/carouselItems.json";

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const renderSlides = () => {
    return data.map((slide, index) => {
      const isActive = index === currentSlide;
      const position =
        index === (currentSlide + 1) % data.length 
          ? "translate-x-24 rotate-y-45 opacity-50 z-0 scale-90"
          : index === (currentSlide - 1 + data.length) % data.length
          ? "-translate-x-24 rotate-y--45 opacity-50 z-0 scale-90"
          : "translate-x-0 rotate-y-0 opacity-100 z-10 scale-100";

      return (
        <div
          key={slide.id}
          className={`absolute transition-transform duration-500 ease-in-out transform bg-gray-100 w-[40rem] h-[26rem] rounded-lg shadow-2xl flex items-center justify-center ${position}`}
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
                <p className="text-stone-600 text-base leading-relaxed">{slide.description}</p>
              </div>
            </div>
          )}
        </div>
      );
    });
  };

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full">   
      <div className="relative flex items-center justify-center w-[60%] h-[auto] mb-20  z-10">
        {renderSlides()}
      </div>

      <div className="absolute bottom-20 flex space-x-4 z-10">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-colors duration-300 ${
              index === currentSlide
                ? "bg-gray-800" 
                : "bg-gray-400 hover:bg-gray-600" 
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
