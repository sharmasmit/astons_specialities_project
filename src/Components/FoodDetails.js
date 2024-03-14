import React, { useState } from "react";
import Header from "./Header";
import Table from "./Table";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function FoodDetails() {
  let [count, setCount] = useState(0);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }

  return (
    <>
      <div className="FoodDetails">
        <Header />
        <Table />
        <img src={require("../Images/FoodDetailsBG.png")} />
        <div className="FoodDetails-Box">
          <h1 className="Food-head">New York Strip</h1>
          <h1 className="Food-head" style={{ fontWeight: "400" }}>
            $22.90
          </h1>
          <h4
            className="Food-head"
            style={{
              fontWeight: "400",
              paddingBottom: "0",
              lineHeight: "19px",
            }}
          >
            New York Strip Loin charbroiled to your preferred doneness
          </h4>

          <h3 className="food-heading">Choice of Doneness</h3>
          <div className="Food-box">
            <div className="Plus-Minus">
              <h4 className="main-h4">Rare</h4>
              <button type="submit" onClick={decrementCount} className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count}</h4>
              <button type="submit" onClick={incrementCount} className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            <div className="Plus-Minus">
              <h4 className="main-h4">Medium Rare</h4>
              <button type="submit" onClick={decrementCount} className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count}</h4>
              <button type="submit" onClick={incrementCount} className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            <div className="Plus-Minus">
              <h4 className="main-h4">Medium</h4>
              <button type="submit" onClick={decrementCount} className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count}</h4>
              <button type="submit" onClick={incrementCount} className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            <div className="Plus-Minus">
              <h4 className="main-h4">Medium Well</h4>
              <button type="submit" onClick={decrementCount} className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count}</h4>
              <button type="submit" onClick={incrementCount} className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            <div className="Plus-Minus">
              <h4 className="main-h4">Well Done</h4>
              <button type="submit" onClick={decrementCount} className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count}</h4>
              <button type="submit" onClick={incrementCount} className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
          <h3 className="food-heading">Select 2 Side Dishes</h3>
          <div className="Food-box" style={{ paddingBottom: "6.25rem" }}>
            <div className="Plus-Minus">
              <h4 className="main-h4">Baked Potato</h4>
              <button type="submit" onClick={decrementCount} className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count}</h4>
              <button type="submit" onClick={incrementCount} className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            <div className="Plus-Minus">
              <h4 className="main-h4">French Fries</h4>
              <button type="submit" onClick={decrementCount} className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count}</h4>
              <button type="submit" onClick={incrementCount} className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            <div className="Plus-Minus">
              <h4 className="main-h4">Tasty Rice</h4>
              <button type="submit" onClick={decrementCount} className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count}</h4>
              <button type="submit" onClick={incrementCount} className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            <div className="Plus-Minus">
              <h4 className="main-h4">Corn Niblets</h4>
              <button type="submit" onClick={decrementCount} className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count}</h4>
              <button type="submit" onClick={incrementCount} className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            <div className="Plus-Minus">
              <h4 className="main-h4">Coleslaw</h4>
              <button type="submit" onClick={decrementCount} className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count}</h4>
              <button type="submit" onClick={incrementCount} className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            <div className="Plus-Minus">
              <h4 className="main-h4">Mushrooms Soup</h4>
              <button type="submit" onClick={decrementCount} className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count}</h4>
              <button type="submit" onClick={incrementCount} className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
          <div className="Add-Cart-Box">
            <div className="Plus-Minus">
              <button type="submit" onClick={decrementCount} className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count}</h4>
              <button type="submit" onClick={incrementCount} className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            <Link to="/CheckOut">
              <button type="submit" className="cartBtn">
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default FoodDetails;
