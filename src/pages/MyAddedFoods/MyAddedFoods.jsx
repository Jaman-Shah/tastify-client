import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import PrivateRoute from "../../routers/PrivateRoute";

const MyAddedFoods = () => {
  const { user } = useContext(AuthContext);
  const [addedFoods, setAddedFoods] = useState([]);

  const darkValue = false;

  const loadAddedFoods = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/foods/${user.email}`
      );
      setAddedFoods(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadAddedFoods();
  }, []);

  const handleFoodDelete = (_id) => {
    console.log(_id);
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

        fetch(`http://localhost:5005/foods/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              console.log(data);
              loadAddedFoods();
              toast.success("Delete success");
            }
          });
      }
    });
  };

  console.log(addedFoods);
  return (
    <PrivateRoute>
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
                  Price
                </th>
                <th className=" px-4 py-2 text-white">Update</th>
                <th className=" px-4 py-2 text-white">Delete</th>
              </tr>
            </thead>
            <tbody>
              {addedFoods && addedFoods.length > 0 ? (
                addedFoods.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-green-200" : "bg-green-50"}
                  >
                    <td
                      className={`border-r-2 ${
                        darkValue ? "text-black" : ""
                      } border-black px-4 py-2 text-center`}
                    >
                      {item.name}
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
                      {item.price}
                    </td>
                    <td className=" text-center">
                      <Link
                        to={`/update/${item._id}`}
                        className="border-2 border-gray-500 md:p-2  text-black bg-transparent  hover:bg-green-400 hover:border-green-500 transition duration-500  rounded"
                      >
                        Update
                      </Link>
                    </td>
                    <td className=" text-center">
                      <button
                        onClick={() => handleFoodDelete(item._id)}
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

export default MyAddedFoods;
