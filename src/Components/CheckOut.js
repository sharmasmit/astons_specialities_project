import React from "react";
import Header from "./Header";
import Table from "./Table";
import { Link } from "react-router-dom";
import AddSlider from "./AddSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function CheckOut() {
  return (
    <>
      <div className="checkOut-page">
        <Header />
        <Table />
        <div className="checkOut-inner">
          <div className="checkOut-box">
            <h4 className="delete-btn">
              1 x New York Strip{" "}
              <Link to="#">
                <img src={require("../Images/DeleteBtn.png")} />
              </Link>
            </h4>
            <h5>1 x Medium</h5>
            <h5>1 x Baked Potato</h5>
            <h5 className="last-H5">1 x Coleslaw</h5>
            <div className="Plus-Minus">
              <button type="submit" className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">1</h4>
              <button type="submit" className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>

              <Link to="#">Edit</Link>

              <h3>$22.90</h3>
            </div>
          </div>

          <div className="checkOut-box">
            <h4 className="delete-btn">
              1 x Prime Ribeye{" "}
              <Link to="#">
                <img src={require("../Images/DeleteBtn.png")} />
              </Link>
            </h4>
            <h5>1 x Medium Well</h5>
            <h5>1 x Tasty Riice</h5>
            <h5 className="last-H5">1 x French Fries</h5>
            <div className="Plus-Minus">
              <button type="submit" className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">1</h4>
              <button type="submit" className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>

              <Link to="#">Edit</Link>

              <h3>$47.90</h3>
            </div>
          </div>

          <div className="checkOut-box">
            <h4 className="delete-btn">
              1 x Porterhouse{" "}
              <Link to="#">
                <img src={require("../Images/DeleteBtn.png")} />
              </Link>
            </h4>
            <h5>1 x Medium</h5>
            <h5>1 x French Fries</h5>
            <h5 className="last-H5">1 x Corn Niblets</h5>
            <div className="Plus-Minus">
              <button type="submit" className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">1</h4>
              <button type="submit" className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>

              <Link to="#">Edit</Link>

              <h3>$32.90</h3>
            </div>
          </div>

          <div className="checkOut-box">
            <h4 className="delete-btn">
              1 x Prime Ribeye Xtra Cut{" "}
              <Link to="#">
                <img src={require("../Images/DeleteBtn.png")} />
              </Link>
            </h4>
            <h5>1 x Medium</h5>
            <h5>1 x Baked Potato</h5>
            <h5 className="last-H5">1 x Corn Niblets</h5>
            <div className="Plus-Minus">
              <button type="submit" className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">1</h4>
              <button type="submit" className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>

              <Link to="#">Edit</Link>

              <h3>$26.90</h3>
            </div>
          </div>

          <div className="AddSlider">
            <h2 style={{ paddingBottom: "0.625rem", paddingTop: "2.5rem" }}>
              You May Also Like
            </h2>
            <AddSlider />
          </div>

          <div className="cartTotal">
            <h2 style={{ paddingBottom: "0.625rem" }}>Cart Total</h2>
            <div className="cart-total-inner">
              <h4 style={{ paddingTop: "0" }}>
                Subtotal <span className="price-txt">$130.60</span>
              </h4>
              <h4>
                GST 8% <span className="price-txt">$10.45</span>
              </h4>
              <h3 className="last-H5">
                Subtotal <span className="price-txt">$141.05</span>
              </h3>
            </div>
          </div>
        </div>
        <div
          className="buttons"
          style={{ padding: "0.625rem", paddingBottom: "3.125rem" }}
        >
          <Link to="/Home">
          <button type="submit" className="ContinueBtn">
            Continue Order
          </button>
          </Link>
          
          <Link to="/Thankyou">
            <button type="submit" className="checkout">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default CheckOut;
