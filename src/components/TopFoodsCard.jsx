import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const TopFoodsCard = () => {
  return (
    <div>
      <div className="relative bg-gray-300 border rounded-3xl p-6">
        <div className="">
          <h1 className="text-3xl font-extrabold text-orange-500"> $ 250</h1>
          <p>category: dummy</p>
          <p className="text-3xl">Name</p>
          <div className="text-center">
            <button className="p-2 bg-green-400 rounded-lg flex items-center gap-2 mt-4">
              <p>View details</p>
              <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div
          className="bg-cover absolute -top-10 -right-5 bg-center border-2 border-orange-500 h-[100px] w-[100px] rounded-full "
          style={{
            backgroundImage:
              "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWMQwgzW28O8NG9442jbeGIKU3QRWE7-DH8UiSKGcs1w&s')",
          }}
        >
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopFoodsCard;
