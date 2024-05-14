import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import PrivateRoute from "../../routers/PrivateRoute";
import { Helmet } from "react-helmet-async";

const MyOrderedFoods = () => {
  const { user } = useContext(AuthContext);
  const [orderedFoods, setOrderedFoods] = useState([]);

  const darkValue = false;

  const loadOrderedFoods = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/orders/${user.email}`,
        {
          withCredentials: true,
        }
      );
      setOrderedFoods(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadOrderedFoods();
  }, []);

  const handleOrderDelete = (_id, id, quantity) => {
    const body = { quantity, foodId: id };
    Swal.fire({
      title: "Are you sure?",
      text: "Do you Want to delete this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm ",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });

        fetch(`http://localhost:5005/orders/${_id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(body),
        })
          .then((res) => res.json())
          .then((data) => {
            if (
              data.deleteResult.acknowledged &&
              data.updateResult.acknowledged
            ) {
              loadOrderedFoods();
              toast.success("Delete success");
            }
          });
      }
    });
  };

  console.log(orderedFoods);
  return (
    <PrivateRoute>
      <div className="py-8">
        <Helmet>
          <title>My Ordered Food | Tastify</title>
        </Helmet>
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
                      <button
                        title={item._id}
                        onClick={() =>
                          handleOrderDelete(item._id, item.id, item.quantity)
                        }
                        className="border-2 border-gray-500 md:p-2  text-black bg-transparent  hover:bg-green-400 hover:border-green-500 transition duration-500  rounded"
                      >
                        Delete
                      </button>
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
    </PrivateRoute>
  );
};

export default MyOrderedFoods;
