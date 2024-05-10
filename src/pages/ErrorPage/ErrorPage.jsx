import React from "react";

const ErrorPage = () => {
  return (
    <div className="flex bg-green-200 flex-col justify-center items-center h-screen">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-gray-900 mb-8">
        <span className="text-red-500 text-[200px]"> 404</span> <br /> Page Not
        Found
      </h1>
    </div>
  );
};

export default ErrorPage;
