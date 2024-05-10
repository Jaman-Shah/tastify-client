import React from "react";

const BestChefsCard = () => {
  return (
    <div>
      <div className="h-full flex flex-col justify-center items-center pt-[100px] p-4 bg-green-400 border relative rounded-xl">
        <div className="font-bold flex flex-col gap-4 border-t pt-4 border-black">
          <h1 className="text-2xl border-r-2 border-black pl-4">Name</h1>
          <p className="border-l-2 border-black pl-4">Description</p>
          <p>Rating:</p>
        </div>
        <div
          className="absolute -top-10 right-1/3 h-[100px] w-[100px] bg-cover bg-center rounded-full border-[6px] border-white "
          style={{
            backgroundImage:
              "url('https://www.compass-group.com/content/compass-group/corporate/en/sustainability/culinary-champions/_jcr_content/par/gridtabs/item8/thumbnail.img.png/1674666556528.png')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default BestChefsCard;
