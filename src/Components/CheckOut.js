import { useState, React } from "react";
import Header from "./Header";
import Table from "./Table";
import { Link } from "react-router-dom";
import AddSlider from "./AddSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function CheckOut() {

 const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(1);
  const [count4, setCount4] = useState(1);

  const [editMode1, setEditMode1] = useState(false);
  const toggleEditMode1 = () => {
    setEditMode1(!editMode1);
  }

  const [editMode2, setEditMode2] = useState(false);
  const toggleEditMode2 = () => {
    setEditMode2(!editMode2);
  }

  const [editMode3, setEditMode3] = useState(false);
  const toggleEditMode3 = () => {
    setEditMode3(!editMode3);
  }

  const [editMode4, setEditMode4] = useState(false);
  const toggleEditMode4 = () => {
    setEditMode4(!editMode4);
  }
  
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
              <button type="submit" onClick={() => setCount1(count1 - 1)} className={`minusBtn ${editMode1 ? "disabled" : ""}`} disabled={editMode1}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count1}</h4>
              <button type="submit" onClick={() => setCount1(count1 + 1)} className={`plusBtn ${editMode1 ? "disabled" : ""}`} disabled={editMode1}>
                <FontAwesomeIcon icon={faPlus} />
              </button>

              <Link to="#" onClick={toggleEditMode1}>
                {editMode1 ? "Done" : "Edit"}
              </Link>

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
              <button type="submit" onClick={() => setCount2(count2 - 1)} className={`minusBtn ${editMode2 ? "disabled" : ""}`} disabled={editMode2}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count2}</h4>
              <button type="submit" onClick={() => setCount2(count2 + 1)} className={`plusBtn ${editMode2 ? "disabled" : ""}`} disabled={editMode2}>
                <FontAwesomeIcon icon={faPlus} />
              </button>

              <Link to="#" onClick={toggleEditMode2}>
                {editMode2 ? "Done" : "Edit"}
              </Link>

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
              <button type="submit" onClick={() => setCount3(count3 - 1)} className={`minusBtn ${editMode3 ? "disabled" : ""}`} disabled={editMode3}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count3}</h4>
              <button type="submit" onClick={() => setCount3(count3 + 1)} className={`plusBtn ${editMode3 ? "disabled" : ""}`} disabled={editMode3}>
                <FontAwesomeIcon icon={faPlus} />
              </button>

              <Link to="#" onClick={toggleEditMode3}>
                {editMode3 ? "Done" : "Edit"}
              </Link>

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
              <button type="submit" onClick={() => setCount4(count4 - 1)} className={`minusBtn ${editMode4 ? "disabled" : ""}`} disabled={editMode4}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count4}</h4>
              <button type="submit" onClick={() => setCount4(count4 + 1)} className={`plusBtn ${editMode4 ? "disabled" : ""}`} disabled={editMode4}>
                <FontAwesomeIcon icon={faPlus} />
              </button>

              <Link to="#" onClick={toggleEditMode4}>
                {editMode4 ? "Done" : "Edit"}
              </Link>

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
                Total <span className="price-txt">$141.05</span>
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