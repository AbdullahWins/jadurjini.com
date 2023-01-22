import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Activity from "../pages/Activity/Activity";
import Cart from "../pages/Cart/Cart";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import Shops from "../pages/Shops/Shops";
import Category from "../pages/Category/Category";
import Shop from "../pages/Shops/Shop";
import PrivateRoute from "./PrivateRoute";
import Shipping from "../pages/Shipping/Shipping";
import Orders from "../pages/Orders/Orders";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/shipping",
        element: <Shipping></Shipping>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/shops/:shopName",
        element: <Shop></Shop>,
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_baseURL}/shops/${params.shopName}`),
      },
      {
        path: "/order/:email",
        element: <Orders></Orders>,
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_baseURL}/order/${params.email}`),
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_baseURL}/testProducts/${params.id}`),
      },
      {
        path: "/category/:categoryName",
        element: <Shops></Shops>,
        loader: ({ params }) =>
          fetch(
            `${process.env.REACT_APP_baseURL}/category/${params.categoryName}`
          ),
      },
      {
        path: "/subCategory/:subCategoryName",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `${process.env.REACT_APP_baseURL}/subCategory/${params.subCategoryName}`
          ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/activity",
        element: <Activity></Activity>,
      },
    ],
  },

  {
    path: "*",
    element: <Error></Error>,
  },
]);
