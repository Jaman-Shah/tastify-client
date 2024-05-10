import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";

import AllFoods from "../pages/AllFoods/AllFoods";
import Gallery from "../pages/Gallery/Gallery";
import Home from "../pages/Home/Home";
import MyAddedFoods from "../pages/MyAddedFoods/MyAddedFoods";
import AddAFood from "../pages/AddAFood/AddAFood";
import MyOrderedFoods from "../pages/MyOrderedFoods/MyOrderedFoods";

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
        path: "/myaddedfoods",
        element: <MyAddedFoods />,
      },
      {
        path: "/addafood",
        element: <AddAFood />,
      },
      {
        path: "/myorderedfoods",
        element: <MyOrderedFoods />,
      },
    ],
  },
]);
