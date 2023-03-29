import React from "react";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import Blog from "./components/blog/Blog";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";


import './css/App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/blog",
    element: <Blog />,
    children: [
      {
        path: ":blogId",
        element: <Blog />,
      },
    ]
  }
])

const App = () => {
  console.table({
    email: "joretsas@gmail.com"
  });
  return (
    <div style={{height: "100%"}}>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;