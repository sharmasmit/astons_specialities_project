import React from "react";
import { Link } from "react-router-dom";

function Table() {
  return (
    <>
      <div className="Table">
        <Link to="/zb-frontend/Home">
          <img
            src={require("../Images/Left-Arrow.png")}
            className="left-arrow"
          />
        </Link>
        <Link to="/zb-frontend/Home">
          <img
            src={require("../Images/Left-Arrow-white.png")}
            className="left-arrow-white"
          />
        </Link>
        <h2
          style={{ padding: "0.5rem 0", textAlign: "center", marginTop: "4.375rem" }}
          className="TableTxt"
        >
          Table No. 01
        </h2>

        <h2
          style={{ padding: "0.5rem 0", textAlign: "center", marginTop: "4.375rem" }}
          className="orderTxt"
        >
          Order History
        </h2>
      </div>
    </>
  );
}
export default Table;
