import Banner from "./Banner/Banner";

import Foods from "./Banner/Foods/Foods";

import { Helmet } from "react-helmet-async";

const AllFoods = () => {
  return (
    <div className="px-4">
      <Banner />
      <Helmet>
        <title>All Foods | Tastify</title>
      </Helmet>
      <Foods />
    </div>
  );
};

export default AllFoods;
