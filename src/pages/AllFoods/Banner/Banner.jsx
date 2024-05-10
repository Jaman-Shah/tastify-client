import React from "react";

const Banner = () => {
  return (
    <div className="rounded-2xl text-center bg-[url('https://www.ucsfhealth.org/-/media/project/ucsf/ucsf-health/education/hero/top-ten-foods-for-health-2x.jpg')] bg-cover bg-center">
      <div className="font-bold rounded-2xl bg-gradient-to-tr  from-gray-900 text-white p-10">
        <h1 className="text-4xl mb-4">
          All Foods <span className="text-green-400">List</span>
        </h1>
        <p className="text-2xl">Tastify | All Foods</p>
      </div>
    </div>
  );
};

export default Banner;
