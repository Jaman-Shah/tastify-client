import React, { useEffect, useState } from "react";
import FoodsCard from "../../FoodsCard/FoodsCard";
import axios from "axios";

const Foods = () => {
  const [foods, setFoods] = useState([]);

  const loadFoods = async () => {
    try {
      const { data } = await axios.get("http://localhost:5005/foods");
      setFoods(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadFoods();
  }, []);

  console.log(foods);

  return (
    <div>
      <div className="my-14">
        <div className=" grid mx-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-10">
          {foods &&
            foods.map((food) => {
              return <FoodsCard key={food._id} food={food} />;
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
