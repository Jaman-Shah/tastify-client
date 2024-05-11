import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const MyOrderedFoods = () => {
  const { user } = useContext(AuthContext);
  const [orderedFoods, setOrderedFoods] = useState([]);

  const darkValue = false;

  const loadOrderedFoods = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/orders/${user.email}`
      );
      setOrderedFoods(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadOrderedFoods();
  }, []);

  console.log(orderedFoods);
  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto ">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          All <span className="text-orange-500">Art </span>& Craft{" "}
          <span className="text-blue-400">Items</span>
        </h1>

        <div className="divider px-4 md:p-0"></div>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#607D8B] ">
              <th className="border-r-2 border-black px-4 py-2 text-white">
                Food Name
              </th>
              <th className="border-r-2 border-black px-4 py-2 text-white">
                Quantity
              </th>
              <th className="border-r-2 border-black px-4 py-2 text-white">
                Buying time
              </th>
              <th className=" px-4 py-2 text-white">Delete</th>
            </tr>
          </thead>
          <tbody>
            {orderedFoods && orderedFoods.length > 0 ? (
              orderedFoods.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-green-200" : "bg-green-50"}
                >
                  <td
                    className={`border-r-2 ${
                      darkValue ? "text-black" : ""
                    } border-black px-4 py-2 text-center`}
                  >
                    {item.foodName}
                  </td>
                  <td
                    className={`border-r-2 ${
                      darkValue ? "text-black" : ""
                    } border-black px-4 py-2 text-center`}
                  >
                    {item.quantity}
                  </td>
                  <td
                    className={`border-r-2 ${
                      darkValue ? "text-black" : ""
                    } border-black px-4 py-2 text-center`}
                  >
                    {new Date(item.buyingDate).toLocaleString()}
                  </td>
                  <td className=" text-center">
                    <Link
                      to={`/craftdetails/${item._id}`}
                      className="border-2 border-gray-500 md:p-2  text-black bg-transparent  hover:bg-green-400 hover:border-green-500 transition duration-500  rounded"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  <h1>Loading......</h1>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrderedFoods;
