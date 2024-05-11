import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const FoodDetails = () => {
  const [food, setFood] = useState({});
  const { id } = useParams();
  console.log(id);

  // loading single food by id
  const loadFood = async () => {
    try {
      const response = await axios.get(`http://localhost:5005/food/${id}`);
      setFood(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadFood();
  }, []);
  //   destructuring the properties form the food
  const {
    _id,
    category,
    creator_email,
    creator_name,
    description,
    image,
    name,
    origin,
    price,
    quantity,
  } = food;
  console.log(food);
  return (
    <div className="container mx-auto my-10">
      <div className="h-[400px] w-full bg-green-400 relative overflow-hidden rounded-2xl">
        <div className="absolute -top-[200px] -left-[150px] transform rotate-[10deg] h-[2000px] w-1/2 bg-orange-600"></div>
        <div className="absolute  top-1/2 left-16  font-thin text-[100px]">
          {name}
        </div>
        <div
          style={{
            backgroundImage: `url('${image}')`,
          }}
          className="absolute bg-center bg-cover top-1/2 left-[485px] transform -translate-x-1/2 -translate-y-1/2 h-[250px] w-[250px] rounded-full bg-white"
        ></div>

        <div className="text-end p-24">
          <h1 className="font-light text-[50px]">{price} $</h1>

          <p className=" text-red-400 text-2xl font-bold">
            {quantity} {`piece${quantity > 1 ? "s" : ""} left`}
          </p>
          <p className=" text-white">From: {origin}</p>
          <p className="border-b-2 border-black">Category: {category}</p>

          <p title={description}>
            Details: {String(description).substring(1, 25)}...
          </p>

          <p className="mb-4">Made By: {creator_name}</p>
          <Link to={`/purchase/${_id}`} className="border p-2">
            Purchase
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
