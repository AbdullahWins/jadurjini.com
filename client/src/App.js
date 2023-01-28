import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/routes";

function App() {
  const Router = routes;
  return (
    <div className="md:max-w-6xl m-auto">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
