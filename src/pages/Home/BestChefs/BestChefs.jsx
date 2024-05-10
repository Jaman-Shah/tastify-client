import React from "react";
import BestChefsCard from "../../../components/BestChefsCard";

const BestChefs = () => {
  return (
    <div>
      <div className="text-center ">
        <h1 className="text-3xl font-bold">
          Our Best <span className="text-green-400">Chefs</span>
        </h1>
        <p>this is the most</p>
      </div>
      <div className=" my-10">
        <div className="grid grid-cols-1   md:grid-cols-3 lg:grid-cols-3 gap-8 h-full px-32">
          {[1, 2, 3].map((elem) => {
            return <BestChefsCard />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BestChefs;
