import React, { useState } from "react";
import Header from "./Header";
import Table from "./Table";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function FoodDetails() {
  const [count1, setCount1] = useState(0);
  const incrementCount1 =() => {
    setCount1(count1 + 1);
  }
  const decrementCount1 = () => {
    setCount1(count1 - 1);
  }

  const [count2, setCount2] = useState(0);
  const incrementCount2 =() => {
    setCount2(count2 + 1);
  }
  const decrementCount2 = () => {
    setCount2(count2 - 1);
  }

  const [count3, setCount3] = useState(0);
  const incrementCount3 =() => {
    setCount3(count3 + 1);
  }
  const decrementCount3 = () => {
    setCount3(count3 - 1);
  }

  const [count4, setCount4] = useState(0);
  const incrementCount4 =() => {
    setCount4(count4 + 1);
  }
  const decrementCount4 = () => {
    setCount4(count4 - 1);
  }

  const [count5, setCount5] = useState(0);
  const incrementCount5 =() => {
    setCount5(count5 + 1);
  }
  const decrementCount5 = () => {
    setCount5(count5 - 1);
  }

  const [count6, setCount6] = useState(0);
  const incrementCount6 =() => {
    setCount6(count6 + 1);
  }
  const decrementCount6 = () => {
    setCount6(count6 - 1);
  }

  const [count7, setCount7] = useState(0);
  const incrementCount7 =() => {
    setCount7(count7 + 1);
  }
  const decrementCount7 = () => {
    setCount7(count7 - 1);
  }

  const [count8, setCount8] = useState(0);
  const incrementCount8 =() => {
    setCount8(count8 + 1);
  }
  const decrementCount8 = () => {
    setCount8(count8 - 1);
  }

  const [count9, setCount9] = useState(0);
  const incrementCount9 =() => {
    setCount9(count9 + 1);
  }
  const decrementCount9 = () => {
    setCount9(count9 - 1);
  }

  const [count10, setCount10] = useState(0);
  const incrementCount10 =() => {
    setCount10(count10 + 1);
  }
  const decrementCount10 = () => {
    setCount10(count10 - 1);
  }

  const [count11, setCount11] = useState(0);
  const incrementCount11 =() => {
    setCount11(count11 + 1);
  }
  const decrementCount11 = () => {
    setCount11(count11 - 1);
  }

  const [count12, setCount12] = useState(0);
  const incrementCount12 =() => {
    setCount12(count12 + 1);
  }
  const decrementCount12 = () => {
    setCount12(count12 - 1);
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
              <button type="submit" onClick={decrementCount1} className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count1}</h4>
              <button type="submit" onClick={incrementCount1} className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            <div className="Plus-Minus">
              <h4 className="main-h4">Medium Rare</h4>
              <button type="submit" onClick={decrementCount2} className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count2}</h4>
              <button type="submit" onClick={incrementCount2} className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            <div className="Plus-Minus">
              <h4 className="main-h4">Medium</h4>
              <button type="submit" onClick={decrementCount3} className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count3}</h4>
              <button type="submit" onClick={incrementCount3} className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            <div className="Plus-Minus">
              <h4 className="main-h4">Medium Well</h4>
              <button type="submit" onClick={decrementCount4} className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count4}</h4>
              <button type="submit" onClick={incrementCount4} className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            <div className="Plus-Minus">
              <h4 className="main-h4">Well Done</h4>
              <button type="submit" onClick={decrementCount5} className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count5}</h4>
              <button type="submit" onClick={incrementCount5} className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
          <h3 className="food-heading">Select 2 Side Dishes</h3>
          <div className="Food-box" style={{ paddingBottom: "6.25rem" }}>
            <div className="Plus-Minus">
              <h4 className="main-h4">Baked Potato</h4>
              <button type="submit" onClick={decrementCount6} className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count6}</h4>
              <button type="submit" onClick={incrementCount6} className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            <div className="Plus-Minus">
              <h4 className="main-h4">French Fries</h4>
              <button type="submit" onClick={decrementCount7} className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count7}</h4>
              <button type="submit" onClick={incrementCount7} className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            <div className="Plus-Minus">
              <h4 className="main-h4">Tasty Rice</h4>
              <button type="submit" onClick={decrementCount8} className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count8}</h4>
              <button type="submit" onClick={incrementCount8} className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            <div className="Plus-Minus">
              <h4 className="main-h4">Corn Niblets</h4>
              <button type="submit" onClick={decrementCount9} className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count9}</h4>
              <button type="submit" onClick={incrementCount9} className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            <div className="Plus-Minus">
              <h4 className="main-h4">Coleslaw</h4>
              <button type="submit" onClick={decrementCount10} className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count10}</h4>
              <button type="submit" onClick={incrementCount10} className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>

            <div className="Plus-Minus">
              <h4 className="main-h4">Mushrooms Soup</h4>
              <button type="submit" onClick={decrementCount11} className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count11}</h4>
              <button type="submit" onClick={incrementCount11} className="plusBtn">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
          <div className="Add-Cart-Box">
            <div className="Plus-Minus">
              <button type="submit" onClick={decrementCount12} className="minusBtn">
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <h4 className="zero">{count12}</h4>
              <button type="submit" onClick={incrementCount12} className="plusBtn">
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
