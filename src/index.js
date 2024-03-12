import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Components/NotFound";
import Header from "./Components/Header";
import FrontPage from "./Components/FrontPage";
import Home from "./Components/Home";
import Table from "./Components/Table";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Category from "./Components/Category";
import FoodDetails from "./Components/FoodDetails";
import CheckOut from "./Components/CheckOut";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/FrontPage",
    element: <FrontPage />,
  },
  {
    path: "/Header",
    element: <Header />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Table",
    element: <Table />,
  },
  {
    path: "/Navbar",
    element: <Navbar/>
  },
  {
    path: "/Slider",
    element: <Slider/>
  },
  {
    path: "/Category",
    element: <Category/>
  },
  {
    path: "/FoodDetails",
    element: <FoodDetails/>
  },
  {
    path: "/CheckOut",
    element: <CheckOut/>
  }
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
