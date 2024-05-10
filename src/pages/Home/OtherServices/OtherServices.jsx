import React from "react";
import OtherServicesCard from "../../../components/OtherServicesCard";

const OtherServices = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-3xl">
          Our Other <span className="text-green-400">Services</span>
        </h1>
        <p>Explore Our Other Services</p>
      </div>
      <div className="grid my-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4].map((elem) => {
          return <OtherServicesCard />;
        })}
      </div>
    </div>
  );
};

export default OtherServices;
