import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
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
import AddSlider from "./Components/AddSlider";
import ThankYouPage from "./Components/ThankYouPage";
import OrderDetails from "./Components/OrderDetails";
import OrderHistory from "./Components/OrderHistory";
import OrderHistoryDetails from "./Components/OrderHistoryDetails";
function Router() {
  return (
      <Routes>
        <Route
          path="/zb-frontend"
          element={<App />}
          errorElement={<NotFound />}
        />
        <Route path="/zb-frontend/FrontPage" element={<FrontPage />} />
        <Route path="/zb-frontend/Header" element={<Header />} />
        <Route path="/zb-frontend/Home" element={<Home />} />
        <Route path="/zb-frontend/Table" element={<Table />} />
        <Route path="/zb-frontend/Slider" element={<Slider />} />
        <Route path="/zb-frontend/Navbar" element={<Navbar />} />
        <Route path="/zb-frontend/Category" element={<Category />} />
        <Route path="/zb-frontend/FoodDetails" element={<FoodDetails />} />
        <Route path="/zb-frontend/CheckOut" element={<CheckOut />} />
        <Route path="/zb-frontend/AddSlider" element={<AddSlider />} />
        <Route path="/zb-frontend/ThankYou" element={<ThankYouPage />} />
        <Route path="/zb-frontend/OrderDetails" element={<OrderDetails />} />
        <Route path="/zb-frontend/OrderHistory" element={<OrderHistory />} />
        <Route
          path="/zb-frontend/HistoryDetails"
          element={<OrderHistoryDetails />}
        />
      </Routes>
  );
}
export default Router;
