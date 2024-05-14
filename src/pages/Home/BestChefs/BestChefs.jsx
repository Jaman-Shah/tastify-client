import React from "react";
import BestChefsCard from "../../../components/BestChefsCard";

const BestChefs = () => {
  const image1 =
    "https://www.compass-group.com/content/compass-group/corporate/en/sustainability/culinary-champions/_jcr_content/par/gridtabs/item8/thumbnail.img.png/1674666556528.png";
  const image2 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5t-WBttk2HvNv6R8vwQjLY5vdBkRyTboyG3KReOc_mA&s";
  const image3 =
    "https://img.lovepik.com/free-png/20211109/lovepik-chefs-chef-png-image_400643799_wh1200.png";
  return (
    <div>
      <div className="text-center ">
        <h1 className="text-3xl font-bold">
          Our Best <span className="text-green-400">Chefs</span>
        </h1>
        <p>Here is our best chefs</p>
      </div>
      <div className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 h-full px-4 md:px-32">
          {[
            {
              name: "Alex",
              rating: "5",
              desc: "This is the chefs  form Italy",
              image: image1,
            },
            {
              name: "Graham",
              rating: "5",
              desc: "This is the chefs  form Japan",
              image: image2,
            },
            {
              name: "Peter",
              rating: "5",
              desc: "This is the chefs  form China",
              image: image3,
            },
          ].map((elem, i) => {
            return <BestChefsCard key={i} elem={elem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BestChefs;
