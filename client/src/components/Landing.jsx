import photos from "../data/photos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

const Landing = () => {
  const [activeImageNum, setCurrent] = useState(0);
  const length = photos.length;

  const nextSlide = () => {
    setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
  };
  const prevSlide = () => {
    setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
  };

  if (!Array.isArray(photos) || photos.length <= 0) {
    return null;
  }

  return (
    <section
      id="Inicio"
      className="flex flex-col md:flex-row w-screen h-screen md:w-2/3 px-7 mx-auto items-center justify-evenly "
    >
      <div className="w-full md:w-1/2 p-3 flex flex-col gap-8">
        <h2 className="mb-6 text-4xl font-bold text-black">About us</h2>
        <p className="font-semibold text-lg text-red-600 py-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
          cumque. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Nostrum, cumque. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Nostrum, cumque.
        </p>
        <div className="btn-container">
          <button>Reserve a table</button>
          <a
            href="/menu"
            className="text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3"
          >
            See Menu
          </a>
        </div>
      </div>
      <div className=" w-full md:w-1/2 p-3 flex justify-center items-center">
        {/* SLIDER SECTION */}
        <section className="z-0 relative h-[400px] flex justify-center items-center">
          <div className="absolute left-3 top-1/2 text-base cursor-pointer select-none">
            <ArrowBackIosIcon onClick={prevSlide} />
          </div>
          <div className="absolute right-3 top-1/2 text-base cursor-pointer select-none">
            <ArrowForwardIosIcon onClick={nextSlide} />
          </div>
          <div className="slider-container mt-16">
            {photos.map((currentSlide, ind) => {
              return (
                <div
                  className={
                    ind === activeImageNum
                      ? "flex flex-col items-center gap-2"
                      : "opacity-0 duration-75"
                  }
                  key={ind}
                >
                  {ind === activeImageNum && (
                    <>
                      <h2>{currentSlide.desc}</h2>
                      <img
                        src={currentSlide.url}
                        className="w-72 h-48 rounded-lg"
                      />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Landing;
