import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";

import AllFoods from "../pages/AllFoods/AllFoods";
import Gallery from "../pages/Gallery/Gallery";
import Home from "../pages/Home/Home";
import MyAddedFoods from "../pages/MyAddedFoods/MyAddedFoods";
import AddAFood from "../pages/AddAFood/AddAFood";
import MyOrderedFoods from "../pages/MyOrderedFoods/MyOrderedFoods";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import PurchaseForm from "../pages/PurchaseForm/PurchaseForm";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/food/:id",
        element: <FoodDetails />,
      },
      {
        path: "/purchase/:id",
        element: <PurchaseForm />,
      },
    ],
  },
]);
