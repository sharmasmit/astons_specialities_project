import React from "react";
import Header from "./Header";
import Table from "./Table";
import OrderDetails from "./OrderDetails";

function OrderHistoryDetails() {
  return (
    <>
      <div className="orderHistory-Details">
        <Header />
        <Table />
        <div className="historyDetails-inner">
          <div className="History-details">
            <div className="flex-div">
              <h1>SAL-001202301170001</h1>
              <h5 className="date">20 Mar 2023, 6.00 pm</h5>
            </div>
            <h5 className="order-review">Pending</h5>
          </div>

          <OrderDetails />
        </div>
      </div>
    </>
  );
}
export default OrderHistoryDetails;
