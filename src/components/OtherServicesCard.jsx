import React from "react";

const OtherServicesCard = ({ service }) => {
  const { title, image } = service;

  return (
    <div className="relative hover:bg-green-400 hover:cursor-pointer overflow-hidden border rounded-2xl p-20 ">
      <div className="font-bold">
        <h1 className="text-2xl border-b-2 border-black">{title}</h1>
        {/* <p className="">Description</p> */}
      </div>

      {/* absolute div  */}
      <div
        className="absolute -bottom-14 -right-16 h-full w-1/2 bg-green-200 rounded-t-full  transform -rotate-[15deg] bg-center bg-cover"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
    </div>
  );
};

export default OtherServicesCard;
