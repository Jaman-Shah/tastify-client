import React from "react";
import BannerLeft from "./BannerLeft/BannerLeft";

import RightSlider from "./RightSlider/RightSlider";

const Home = () => {
  return (
    <div className="flex mt-2 px-2">
      <div className="w-1/3 h-full">
        <BannerLeft />
      </div>
      <div className="w-2/3">
        <RightSlider />
      </div>
    </div>
  );
};

export default Home;
