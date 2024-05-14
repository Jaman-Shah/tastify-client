import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TopFoodsCard = ({ food }) => {
  const { _id, price, category, name, image } = food;
  return (
    <div>
      <div className="relative bg-gray-300 border rounded-3xl p-6">
        <div className="">
          <h1 className="text-3xl font-extrabold text-orange-500">
            {" "}
            $ {price}
          </h1>
          <p>{category}</p>
          <p className="text-2xl">{name}</p>
          <div className="text-center">
            <Link
              to={`/food/${_id}`}
              className="p-2 bg-green-400 rounded-lg w-1/2 md:w-full flex items-center gap-2 mt-4"
            >
              <p>Details</p>
              <FaArrowRightLong className="ml-4" />
            </Link>
          </div>
        </div>
        <div
          className="bg-cover absolute -top-10 -right-5 bg-center border-2 border-orange-500 h-[100px] w-[100px] rounded-full "
          style={{
            backgroundImage: `url('${image}')`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default TopFoodsCard;
