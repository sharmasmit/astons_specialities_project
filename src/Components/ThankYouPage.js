import React from "react";
import Header from "./Header";
import Table from "./Table";
import OrderDetails from "./OrderDetails";
import { Link } from "react-router-dom";

function ThankYouPage() {
  return (
    <>
      <div className="thankYou-page">
        <Header />
        <Table />
        <div className="thankYou-inner">
          <div className="order-received">
            <img src={require("../Images/Successpayment.png")} />
            <h2 style={{ fontWeight: "bold" }}>Order Received!</h2>
            <h2
              className="thankyou"
              style={{ paddingTop: "0.625rem" }}
            >
              Thank You!
            </h2>
            <Link to="/zb-frontend/Home">
              <button
                type="submit"
                className="backMenu"
                style={{ margin: "2rem 0rem 0rem 0rem" }}
              >
                Back to Menu
              </button>
            </Link>
          </div>
          <OrderDetails />
        </div>
      </div>
    </>
  );
}
export default ThankYouPage;
