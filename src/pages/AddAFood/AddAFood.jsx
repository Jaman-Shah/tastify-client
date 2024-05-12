import React, { useState, useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const AddAFood = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    category: "",
    quantity: 0,
    price: 0,
    origin: "",
    description: "",
    creator_name: user.displayName,
    creator_email: user.email,
    order_count: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue =
      name === "quantity" || name === "price" || name === "order_count"
        ? parseInt(value) || ""
        : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleAddItem = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5005/foods",
        formData
      );

      if (response.data.acknowledged) {
        toast.success("Data inserted Success");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl text-center my-2 font-extrabold mb-4">
        Add a Food
        <span className=" text-green-500"> Item</span>
      </h2>
      <form onSubmit={handleAddItem}>
        <div className="grid grid-cols-2 gap-4 bg-green-300 p-10 rounded-xl">
          <div className="">
            <label htmlFor="name">Food Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-black rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className="">
            <label htmlFor="image">Food Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="border border-black rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className="">
            <label htmlFor="category">Food Category</label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="border border-black rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className="">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="border border-black rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className="">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="border border-black rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className="">
            <label htmlFor="origin">Food Origin (Country)</label>
            <input
              type="text"
              id="origin"
              name="origin"
              value={formData.origin}
              onChange={handleChange}
              className="border border-black rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className=" col-span-2">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border border-black rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className="col-span-2 flex gap-4 justify-between border w-full">
            <div className="w-full">
              <label htmlFor="addedBy">Creator Name</label>
              <input
                type="text"
                id="addedBy"
                name="addedBy"
                value={formData.creator_name}
                readOnly
                className="border border-black rounded px-3 py-2 w-full"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="addedBy">Creator Email</label>
              <input
                type="text"
                id="addedBy"
                name="addedBy"
                value={formData.creator_email}
                readOnly
                className="border border-black rounded px-3 py-2 w-full"
                required
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddAFood;
