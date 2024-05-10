import React from "react";

const Search = () => {
  return (
    <div className="h-12  my-4 text-center ">
      <div className="flex justify-center h-full ">
        <input
          type="text"
          placeholder="Search Here..."
          className="h-ful p-2 border border-green-500"
        />
        <button className="bg-green-500 p-2">Search</button>
      </div>
    </div>
  );
};

export default Search;
