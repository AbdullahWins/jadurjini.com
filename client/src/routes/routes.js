import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      //   {
      //     path: "/services",
      //     element: <Services></Services>,
      //     loader: () => fetch("https://better-aim-server.vercel.app/services"),
      //   },
      //   {
      //     path: "/services/:id",
      //     element: <ServiceDetails></ServiceDetails>,
      //     loader: ({ params }) =>
      //       fetch(`https://better-aim-server.vercel.app/services/${params.id}`),
      //   },
      //   {
      //     path: "/blogs",
      //     element: <Blogs></Blogs>,
      //     loader: () => fetch("https://better-aim-server.vercel.app/blogs"),
      //   },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      //   {
      //     path: "/reviews",
      //     element: <Reviews></Reviews>,
      //     loader: () => fetch("https://better-aim-server.vercel.app/reviews"),
      //   },
      //   {
      //     path: "/addreview",
      //     element: (
      //       <PrivateRoute>
      //         <AddReview></AddReview>
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: "/myreviews",
      //     element: (
      //       <PrivateRoute>
      //         <MyReviews></MyReviews>
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: "/addservice",
      //     element: (
      //       <PrivateRoute>
      //         <AddService></AddService>
      //       </PrivateRoute>
      //     ),
      //   },
      //   {
      //     path: `/myReviews/:id`,
      //     element: (
      //       <PrivateRoute>
      //         <UpdateMyReview></UpdateMyReview>
      //       </PrivateRoute>
      //     ),
      //     loader: ({ params }) =>
      //       fetch(`https://better-aim-server.vercel.app/myReviews/${params.id}`),
      //   },
    ],
  },

  {
    path: "*",
    element: <Error></Error>,
  },
]);
