import { useEffect, useState } from "react";
import FoodsCard from "../../FoodsCard/FoodsCard";
import axios from "axios";

const Foods = () => {
  const [input, setInput] = useState("");
  const [foods, setFoods] = useState([]);

  const loadFoods = async () => {
    try {
      const { data } = await axios.get(
        "https://tastify-server-ten.vercel.app/foods"
      );
      setFoods(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    const value = e.target.input.value;
    console.log(value);
    const response = axios
      .get(`https://tastify-server-ten.vercel.app/foods/search?name=${value}`)
      .then((res) => {
        setFoods(res.data);
      });
  };

  useEffect(() => {
    loadFoods();
  }, []);
  return (
    <div>
      <div className="h-12  my-4 text-center ">
        <form onSubmit={handleInputSubmit}>
          <div className="flex justify-center h-full ">
            <input
              type="text"
              name="input"
              placeholder="Search Here..."
              className="h-ful p-2 border border-green-500"
            />
            <button className="bg-green-500 p-2">Search</button>
          </div>
        </form>
      </div>
      <div className="my-14">
        <div className=" grid mx-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-10">
          {foods &&
            foods.map((food) => {
              return <FoodsCard key={food._id} food={food} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Foods;
