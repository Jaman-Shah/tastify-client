import React, { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image:
      "https://st2.depositphotos.com/3935465/7267/i/450/depositphotos_72670861-stock-photo-fresh-green-salad.jpg",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/1197494143/photo/men-eating-vegan-creamy-roasted-pumpkin-soup.jpg?s=612x612&w=0&k=20&c=NK_z9zwAsRZZLeFWgcO-b4gsHnYg4kVFdvK6IYDOMXY=",
  },
  {
    id: 3,
    image:
      "https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg",
  },
  {
    id: 4,
    image:
      "https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg",
  },
];

const RightSlider = () => {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <div className="overflow-hidden  rounded-2xl h-[350px] relative bg-black">
      <img
        src={slides[current].image}
        alt={`Slide ${current + 1}`}
        className="w-full h-full object-cover"
      />

      <div className="absolute p-4  top-10 h-full w-full justify-between items-center flex text-white px-0 md:px-10 text-3xl">
        <div className="absolute  top-2 md:top-10  p-2  md:pr-52">
          <div className=" p-4 bg-gradient-to-tr from-white rounded-3xl font-semibold md:font-extrabold text-3xl  flex flex-col gap-2 md:gap-5 lg:mb-6 ">
            <h1 className="text-3xl md:text-4xl">
              <span className="text-red-500">Welcome</span> To{" "}
              <span className="text-orange-500">Tastify</span>
            </h1>

            <p className="text-xl font-normal text-black">
              At our marketplace, we don't just offer food – we deliver an
              experience. From delectable delicacies to mouthwatering meals
            </p>
          </div>

          <div className="text-center md:text-start mt-4">
            <Link
              to="allfoods"
              className="border text-xl p-2 rounded-full  hover:bg-green-600 hover:border-none transition duration-500"
            >
              All Foods
            </Link>
          </div>
        </div>
        <div className="absolute mt-56 md:mt-0 md:bottom-[150px] right-2 md:right-[150px] flex md:flex-col gap-2 ">
          <button
            onClick={previousSlide}
            className="border rounded-full border-white text-gray-400 p-2 md:p-4 hover:border-none hover:bg-green-500 transition duration-500"
          >
            <BsFillArrowLeftCircleFill className="text-orange-600 text-sm" />
          </button>
          <button
            onClick={nextSlide}
            className="border rounded-full border-white text-gray-400 p-2 md:p-4 hover:border-none hover:bg-green-500 transition duration-500"
          >
            <BsFillArrowRightCircleFill className="text-orange-600 text-sm" />
          </button>
        </div>
      </div>

      <div className="absolute  hidden border rounded-full  bottom-0 right-12 py-4 md:flex justify-center gap-3 w-1/3">
        {slides.map((s, i) => (
          <div
            onClick={() => {
              setCurrent(i);
            }}
            key={"circle" + i}
            className={`rounded-full w-5 h-5 cursor-pointer  ${
              i === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default RightSlider;
