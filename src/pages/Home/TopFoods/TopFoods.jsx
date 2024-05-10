import React from "react";
import TopFoodsCard from "../../../components/TopFoodsCard";

const TopFoods = () => {
  return (
    <div>
      <div className="text-center ">
        <h1 className="font-extrabold text-3xl">
          Our Top <span className="text-green-500">Foods</span>
        </h1>
        <p>See Our Top Foods For Grab </p>
      </div>
      <div className="my-14">
        <div className=" grid mx-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-10">
          {[1, 2, 3, 4, 5, 6].map((elem) => {
            return <TopFoodsCard />;
          })}
        </div>
        <div className="text-center mt-2">
          <button className="p-2 border bg-green-400">See All</button>
        </div>
      </div>
    </div>
  );
};

export default TopFoods;
