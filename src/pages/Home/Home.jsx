import React from "react";
import BannerLeft from "./BannerLeft/BannerLeft";

import RightSlider from "./RightSlider/RightSlider";
import TopFoods from "./TopFoods/TopFoods";
import BestChefs from "./BestChefs/BestChefs";
import OtherServices from "./OtherServices/OtherServices";

const Home = () => {
  return (
    <div>
      <div className="flex mt-2 px-2">
        <div className="w-1/3 h-full">
          <BannerLeft />
        </div>
        <div className="w-2/3">
          <RightSlider />
        </div>
      </div>
      <TopFoods />
      <BestChefs />
      <OtherServices />
    </div>
  );
};

export default Home;
