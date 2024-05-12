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
import PrivateRoute from "./PrivateRoute";
import UpdateFood from "../pages/UpdateFood/UpdateFood";

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
        element: (
          <PrivateRoute>
            <AddAFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateFood />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5005/food/${params.id}`),
      },
      {
        path: "/myorderedfoods",
        element: (
          <PrivateRoute>
            <MyOrderedFoods />
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            {" "}
            <PurchaseForm />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
