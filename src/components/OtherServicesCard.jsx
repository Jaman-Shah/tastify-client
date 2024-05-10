import React from "react";

const OtherServicesCard = () => {
  return (
    <div className="relative overflow-hidden border rounded-2xl p-20 ">
      <div className="font-bold">
        <h1 className="text-2xl">Title</h1>
        <p className="border-b-2 border-black">Description</p>
      </div>

      {/* absolute div  */}
      <div
        className="absolute -bottom-14 -right-16 h-full w-1/2 bg-green-200 rounded-t-full  transform -rotate-[15deg] bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxWio9O0TpoJilMhTyY0835dcdRKSHZnHAbzZBEtE93A&s')",
        }}
      ></div>
    </div>
  );
};

export default OtherServicesCard;
