import React from "react";
import OtherServicesCard from "../../../components/OtherServicesCard";

const OtherServices = () => {
  const otherServices = [
    {
      title: "Clothing",
      image:
        "https://image.shutterstock.com/image-photo/clothes-on-clothing-hanger-260nw-2338282257.jpg",
    },
    {
      title: "Accessories",
      image:
        "https://img.freepik.com/free-photo/model-career-kit-still-life-top-view_23-2150217973.jpg",
    },
    {
      title: "Medicine",
      image:
        "https://static1.squarespace.com/static/5f64c5c0089e7a2b75f39878/6017b94b45eb9438ae60f0d2/60e595a8be1a8f5a7f8b82a0/1625659202539/shutterstock_1898898127.jpg?format=1500w",
    },
  ];
  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-3xl">
          Our Other <span className="text-green-400">Services</span>
        </h1>
        <p>Explore Our Other Services</p>
      </div>
      <div className="grid my-8 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {otherServices.map((service, i) => {
          return <OtherServicesCard key={i} service={service} />;
        })}
      </div>
    </div>
  );
};

export default OtherServices;
