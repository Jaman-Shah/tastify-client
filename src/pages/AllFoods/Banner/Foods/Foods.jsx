import React from "react";
import FoodsCard from "../../FoodsCard/FoodsCard";

const Foods = () => {
  return (
    <div>
      <div className="my-14">
        <div className=" grid mx-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-10">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((elem) => {
            return <FoodsCard />;
          })}
        </div>
        <div className="text-center mt-2">
          <button className="p-2 border bg-green-400">See All</button>
        </div>
      </div>
    </div>
  );
};

export default Foods;
