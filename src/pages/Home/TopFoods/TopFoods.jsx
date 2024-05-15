import React, { useEffect, useState } from "react";
import TopFoodsCard from "../../../components/TopFoodsCard";
import axios from "axios";
import { Link } from "react-router-dom";

const TopFoods = () => {
  const [topSixFoods, setTopSixFoods] = useState([]);

  const loadTopFoods = async () => {
    const response = await axios.get(
      "https://tastify-server-ten.vercel.app/topsoldfoods",
      {
        withCredentials: true,
      }
    );
    setTopSixFoods(response.data);
  };

  useEffect(() => {
    loadTopFoods();
  }, []);

  return (
    <div className="mt-4">
      <div className="text-center ">
        <h1 className="font-extrabold text-3xl">
          Our Top <span className="text-green-500">Foods</span>
        </h1>
        <p>See Our Top Foods For Grab </p>
      </div>
      <div className="my-14">
        <div className=" grid mx-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-between gap-10">
          {TopFoods &&
            topSixFoods.map((food) => {
              return <TopFoodsCard key={food._id} food={food} />;
            })}
        </div>
        <div className="text-center mt-10">
          <Link to="/allfoods" className="p-2 border bg-green-400">
            See All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopFoods;
