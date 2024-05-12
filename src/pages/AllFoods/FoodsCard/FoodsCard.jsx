import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FoodsCard = ({ food }) => {
  const {
    _id,
    category,
    creator_email,
    creator_name,
    description,
    image,
    origin,
    name,
    price,
    quantity,
  } = food;

  return (
    <div>
      <div className="relative bg-gray-300 border rounded-3xl p-6">
        <div className="">
          <h1 className="text-4xl font-extrabold text-orange-500">$ {price}</h1>
          <p className="text-2xl my-2 font-extrabold text-center border-b-2 border-black mb-2">
            {name}
          </p>
          <p className="text-center">{category}</p>
          <p className="text-2xl">
            Available: <span className="ml-2">{quantity}</span>{" "}
          </p>

          <div className="flex justify-center">
            <Link
              to={`/food/${_id}`}
              className="p-2 bg-green-400 rounded-lg flex items-center gap-2 mt-4"
            >
              <p>View details</p>
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
        <div
          className="bg-cover absolute -top-10 -right-5 bg-center border-2 border-orange-500 h-[100px] w-[100px] rounded-full "
          style={{
            backgroundImage: `url('${image}')`,
          }}
        >
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FoodsCard;
