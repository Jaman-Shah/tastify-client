import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Search from "./Search/Search";
import Foods from "./Banner/Foods/Foods";
import axios from "axios";

const AllFoods = () => {
  const [input, setInput] = useState("");
  const [foods, setFoods] = useState([]);

  const loadFoods = async () => {
    try {
      const { data } = await axios.get("http://localhost:5005/foods");

      setFoods(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleChangeInput = (value) => {
    setInput(value);
    if (!value) {
      loadFoods();
    } else {
      const result = foods.filter(
        (food) => value && food && food.name.toLowerCase().includes(value)
      );
      setFoods(result);
    }
  };

  useEffect(() => {
    loadFoods();
  }, []);

  console.log(foods);

  return (
    <div className="p-4">
      <Banner />
      <Search
        input={input}
        setInput={setInput}
        handleChangeInput={handleChangeInput}
      />
      <Foods foods={foods} />
    </div>
  );
};

export default AllFoods;
