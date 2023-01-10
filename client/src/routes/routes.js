import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Activity from "../pages/Activity/Activity";
import Cart from "../pages/Cart/Cart";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Products from "../pages/ProductDetails/Products";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import Shops from "../pages/Shops/Shops";
import Category from "../pages/Category/Category";
import Shop from "../pages/Shops/Shop";

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
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/shops",
        element: <Shops></Shops>,
      },
      {
        path: "/shops/:shopName",
        element: <Shop></Shop>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/shops/${params.shopName}`),
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/testProducts/${params.id}`),
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/category/:categoryName",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.categoryName}`),
      },
      {
        path: "/subCategory/:subCategoryName",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/subCategory/${params.subCategoryName}`),
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
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
