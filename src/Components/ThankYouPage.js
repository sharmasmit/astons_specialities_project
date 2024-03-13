import React from "react";
import Header from "./Header";
import Table from "./Table";
import OrderDetails from "./OrderDetails";

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
              style={{ fontWeight: "400", paddingTop: "0.625rem" }}
            >
              Thank You!
            </h2>
            <button type="submit" style={{ margin: "2rem 0rem 0rem 0rem" }}>
              Back to Menu
            </button>
          </div>
          <OrderDetails />
        </div>
      </div>
    </>
  );
}
export default ThankYouPage;
