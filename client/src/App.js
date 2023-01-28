import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/routes";

function App() {
  const Router = routes;
  return (
    <div className="md:flex md:justify-center">
      <div className="max-w-6xl">
        <RouterProvider router={Router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
