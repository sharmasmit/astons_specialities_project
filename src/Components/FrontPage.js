import React from "react";
import { Link } from "react-router-dom";
import FrontLogo from "../Images/AstonsFrontLogo.svg";

function FrontPage() {
  return (
    <>
      <div className="FrontPage">
        <div className="frontPage-inner">
          <img src={FrontLogo} alt="Logo" />
          <br />
          {/* <Link to="/zb-frontend/Home">
            <button className="loginBtn" style={{ marginTop: "27.5rem" }}>
              Login
            </button>
          </Link>
          <br /> */}
          <Link to="/zb-frontend/Home">
            <button
              className="guestBtn"
              style={{ marginBottom: "1rem", marginTop: "33.300rem" }}
            >
              Continue as Guest
            </button>
          </Link>
          <br />
          {/* <Link to="/zb-frontend/Home">Register Now</Link> */}
        </div>
      </div>
    </>
  );
}
export default FrontPage;
