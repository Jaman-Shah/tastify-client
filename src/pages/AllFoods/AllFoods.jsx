import React from "react";
import Banner from "./Banner/Banner";
import Search from "./Search/Search";
import Foods from "./Banner/Foods/Foods";

const AllFoods = () => {
  return (
    <div className="p-4">
      <Banner />
      <Search />
      <Foods />
    </div>
  );
};

export default AllFoods;
