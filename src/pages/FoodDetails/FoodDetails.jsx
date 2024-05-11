import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        <div className="absolute  -top-[200px] -left-[150px] rotate-[10deg] h-[2000px] w-1/2 bg-orange-600 transform "></div>
        <div
          style={{
            backgroundImage: `url('${image}')`,
          }}
          className="absolute bg-center bg-cover top-1/2 left-[485px] transform -translate-x-1/2 -translate-y-1/2 h-[200px] w-[200px] rounded-full bg-white"
        ></div>

        <div></div>
      </div>
    </div>
  );
};

export default FoodDetails;
