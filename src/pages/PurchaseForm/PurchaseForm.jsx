import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
// import toast from "react-hot-toast";

const PurchaseForm = () => {
  const { user } = useContext(AuthContext);

  const { id } = useParams();
  console.log(id);
  const [formData, setFormData] = useState({
    id: "",
    foodName: "",
    inDbQuantity: 0,
    price: 0,
    quantity: 0,
    buyerName: user.displayName,
    buyerEmail: user.email,
    buyingDate: Date.now(),
  });

  // loading single food by id
  const loadFood = async () => {
    try {
      const response = await axios.get(
        `https://tastify-server-ten.vercel.app/food/${id}`
      );
      const { _id, name, quantity, price, creator_email } = response.data;
      setFormData({
        ...formData,
        id: _id || "",
        foodName: name || "",
        quantity: 1,
        inDbQuantity: quantity || 0,
        price: price || "",
        creator_email: creator_email || "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadFood();
  }, []);
  //   destructuring the properties form the food

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue =
      name === "quantity" || name === "price" ? parseInt(value) || "" : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  // conditionally handling if user want to purchase extra

  useEffect(() => {
    if (formData.inDbQuantity !== "" && formData.quantity !== "") {
      if (parseInt(formData.inDbQuantity) < parseInt(formData.quantity)) {
        toast.error("Exceeds available quantity!");
        setFormData((prevFormData) => ({
          ...prevFormData,
          quantity: prevFormData.inDbQuantity,
        }));
      }
    }
  }, [formData.inDbQuantity, formData.quantity]);

  const handlePurchase = async (inDbQuantity, creator_email) => {
    try {
      // removing inDbQuantity from formData
      if (user.email === creator_email) {
        return toast.error("You added this, You cannot buy this");
      }
      if (inDbQuantity === 0) {
        return toast.error("Item is not available");
      } else {
        const { inDbQuantity, ...formDataWithoutInDbQuantity } = formData;
        const response = await axios.post(
          "https://tastify-server-ten.vercel.app/orders",
          formDataWithoutInDbQuantity
        );
        console.log(response.data);
        if (response.data.insertResult && response.data.updateResult) {
          toast.success("Order Place Success");
          loadFood();
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container mx-auto">
      <Helmet>
        <title> Order | {formData.foodName}</title>
      </Helmet>
      <div className={`text-center mt-2 ${formData.quantity ? "hidden" : ""}`}>
        <h1 className="text-2xl mb-2">You cannot buy this food</h1>
        <h1 className="text-red-600 font-bold text-2xl">
          This item is not available
        </h1>
      </div>
      <form className="max-w-md mx-auto mt-6 p-6 bg-gray-100 rounded-lg shadow-xl grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="foodName"
            className="block text-gray-700 font-bold mb-2"
          >
            Food Name
          </label>
          <input
            type="text"
            id="foodName"
            name="foodName"
            value={formData.foodName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            disabled
          />
        </div>
        <div>
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price * formData.quantity}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            disabled
          />
        </div>
        <div>
          <label
            htmlFor="quantity"
            className="block text-gray-700 font-bold mb-2"
          >
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            min="1"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Buyer Name
          </label>
          <input
            type="text"
            value={formData.buyerName}
            disabled
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Buyer Email
          </label>
          <input
            type="email"
            value={formData.buyerEmail}
            disabled
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            Buying Date
          </label>
          <input
            type="text"
            value={new Date(formData.buyingDate).toLocaleString()}
            disabled
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="col-span-2">
          <button
            onClick={() =>
              handlePurchase(formData.inDbQuantity, formData.creator_email)
            }
            type="button"
            className="bg-blue-500 disabled:bg-gray-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            disabled={formData.quantity ? false : true}
          >
            Purchase
          </button>
        </div>
      </form>
    </div>
  );
};

export default PurchaseForm;
