import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";

import AllFoods from "../pages/AllFoods/AllFoods";
import Gallery from "../pages/Gallery/Gallery";
import MyProfile from "../pages/MyProfile/MyProfile";
import Home from "../pages/Home/Home";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allfoods",
        element: <AllFoods />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/myprofile",
        element: <MyProfile />,
      },
    ],
  },
]);
