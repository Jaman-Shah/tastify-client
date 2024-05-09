import React from "react";

const BannerLeft = () => {
  return (
    <div className="h-[400px] flex relative justify-center">
      <div className="w-1/3 h-full bg-gray-700 rounded-b-3xl"></div>
      <div
        className="h-[300px] w-[300px] absolute border-2 border-gray-200
         bg-white top-6 rounded-full
      bg-cover bg-center
      
      "
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFZ5rwpd_b5Ylb-NQ0qFHqkY9_ct2mW9LLKV9CxtM4467ZIRYXSOe2I5KmqFjznuK9sqU&usqp=CAU')",
        }}
      ></div>
    </div>
  );
};

export default BannerLeft;
