import React from "react";
import Header from "./Header";
import Table from "./Table";
import { Link } from "react-router-dom";

function OrderHistory() {
  return (
    <>
      <div className="orderHistory">
        <Header />
        <Table />
        <div className="orderHistory-inner">
          <div className="orderHistory-box">
            <Link to="/HistoryDetails">
              <h4 className="topH1">
                SAL-001202301170001 <span className="order-prise">$141.05</span>
              </h4>
            </Link>
            <h5 className="dateDetails">20 Mar 2023, 6.00 pm</h5>
            <h5 className="order-review">Pending</h5>
          </div>

          <div className="orderHistory-box">
          <Link to="/HistoryDetails">
            <h4 className="topH1">
              SAL-001202301170001 <span className="order-prise">$19.80</span>
            </h4>
            </Link>
            <h5 className="dateDetails">20 Mar 2023, 5.50 pm</h5>
            <h5 className="order-review">Received</h5>
          </div>

          <div className="orderHistory-box">
          <Link to="/HistoryDetails">
            <h4 className="topH1">
              SAL-001202301170001 <span className="order-prise">$50.20</span>
            </h4>
            </Link>
            <h5 className="dateDetails">20 Mar 2023, 6.00 pm</h5>
            <h5 className="order-review">Completed</h5>
          </div>

          <div className="orderHistory-box">
          <Link to="/HistoryDetails">
            <h4 className="topH1">
              SAL-001202301170001 <span className="order-prise">$25.80</span>
            </h4>
            </Link>
            <h5 className="dateDetails">20 Feb 2023, 4.00 pm</h5>
            <h5 className="order-review">Completed</h5>
          </div>

          <div className="orderHistory-box">
          <Link to="/HistoryDetails">
            <h4 className="topH1">
              SAL-001202301170001 <span className="order-prise">$10.20</span>
            </h4>
            </Link>
            <h5 className="dateDetails">15 Feb 2023, 11.20 am</h5>
            <h5 className="order-review canceled">Canceled</h5>
          </div>

          <div className="orderHistory-box">
          <Link to="/HistoryDetails">
            <h4 className="topH1">
              SAL-001202301170001 <span className="order-prise">$50.20</span>
            </h4>
            </Link>
            <h5 className="dateDetails">15 Feb 2023, 11.00 am</h5>
            <h5 className="order-review">Completed</h5>
          </div>

          <div className="orderHistory-box">
          <Link to="/HistoryDetails">
            <h4 className="topH1">
              SAL-001202301170001 <span className="order-prise">$9.20</span>
            </h4>
            </Link>
            <h5 className="dateDetails">10 Feb 2023, 11.45 am</h5>
            <h5 className="order-review canceled">Canceled</h5>
          </div>

          <div className="orderHistory-box">
          <Link to="/HistoryDetails">
            <h4 className="topH1">
              SAL-001202301170001 <span className="order-prise">$30.20</span>
            </h4>
            </Link>
            <h5 className="dateDetails">01 Feb 2023, 12.00 pm</h5>
            <h5 className="order-review">Completed</h5>
          </div>

          <div className="roundBtns">
            <button type="submit" className="prevBtn disabled">
              <img src={require("../Images/left-arrowButton.png")} />
            </button>
            <button type="submit" className="centerBtn active">
              1
            </button>
            <button type="submit" className="centerBtn">
              2
            </button>
            <p className="centerBtn">...</p>
            <button type="submit" className="centerBtn">
              10
            </button>

            <button className="nextBtn">
              <img src={require("../Images/RightBtnArrow.png")} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default OrderHistory;
