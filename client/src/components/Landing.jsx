import photos from "../data/photos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import { Link } from "react-scroll";

const Landing = () => {
  const [activeImageNum, setCurrent] = useState(0);
  const length = photos.length;

  const nextSlide = () => {
    setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
  };
  const prevSlide = () => {
    setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
  };

  return (
    <section
      id="Inicio"
      className="flex flex-col md:flex-row w-screen h-screen md:w-2/3 px-7 mx-auto items-center justify-evenly "
    >
      <div className="w-full md:w-1/2 p-3 flex flex-col gap-8">
        <h2 className="hidden md:mb-6 text-4xl font-bold text-black">About us</h2>
        <p className="font-semibold text-lg text-red-600 py-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
          cumque. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Nostrum, cumque. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Nostrum, cumque.
        </p>
        <div className="btn-container">
          <Link to={"Reservation"} smooth={true} offset={-250} duration={500}>
            <button 
            class="bg-darkbeige hover:bg-beige  font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              Reserve a table
            </button>
          </Link>
          <Link to={"Menu"} smooth={true} offset={-250} duration={500}>
          <span
            href="/menu"
            className="text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3 cursor-pointer"
          >
            See Menu
          </span>
          </Link>
        </div>
      </div>
      <div className=" w-full md:w-1/2 p-3 flex justify-center items-center flex-col">
      <h1 className="hidden md:text-2xl bg-[#969287] rounded-full p-5 font-light text-white">Nuestros platos estrella</h1> 

        {/* SLIDER SECTION */}
        <section className=" h-full flex justify-center items-center ">
          <div className=" text-base cursor-pointer select-none ">
            <ArrowBackIosIcon onClick={prevSlide} />
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
          <div className="  text-base cursor-pointer select-none ">
            <ArrowForwardIosIcon onClick={nextSlide} />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Landing;
