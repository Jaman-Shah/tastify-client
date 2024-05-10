import React, { useState, useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const AddAFood = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    foodName: "",
    foodImage: "",
    foodCategory: "",
    quantity: "",
    price: "",
    foodOrigin: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    console.log(formData);
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
            <label htmlFor="foodName">Food Name</label>
            <input
              type="text"
              id="foodName"
              name="foodName"
              value={formData.foodName}
              onChange={handleChange}
              className="border border-black rounded px-3 py-2 w-full"
            />
          </div>
          <div className="">
            <label htmlFor="foodImage">Food Image URL</label>
            <input
              type="text"
              id="foodImage"
              name="foodImage"
              value={formData.foodImage}
              onChange={handleChange}
              className="border border-black rounded px-3 py-2 w-full"
            />
          </div>
          <div className="">
            <label htmlFor="foodCategory">Food Category</label>
            <input
              type="text"
              id="foodCategory"
              name="foodCategory"
              value={formData.foodCategory}
              onChange={handleChange}
              className="border border-black rounded px-3 py-2 w-full"
            />
          </div>
          <div className="">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="border border-black rounded px-3 py-2 w-full"
            />
          </div>
          <div className="">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="border border-black rounded px-3 py-2 w-full"
            />
          </div>
          <div className="">
            <label htmlFor="foodOrigin">Food Origin (Country)</label>
            <input
              type="text"
              id="foodOrigin"
              name="foodOrigin"
              value={formData.foodOrigin}
              onChange={handleChange}
              className="border border-black rounded px-3 py-2 w-full"
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
            />
          </div>
          <div className=" col-span-2">
            <label htmlFor="addedBy">Added By</label>
            <input
              type="text"
              id="addedBy"
              name="addedBy"
              value={`${user?.displayName} (${user?.email})`}
              readOnly
              className="border border-black rounded px-3 py-2 w-full"
            />
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
