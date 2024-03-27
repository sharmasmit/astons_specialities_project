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
          <Link to="/Home">
            <button className="loginBtn" style={{ marginTop: "27.5rem" }}>
              Login
            </button>
          </Link>
          <br />
          <Link to="/Home">
            <button className="guestBtn" style={{ marginBottom: "1.875rem" }}>
              Continue as Guest
            </button>
          </Link>
          <br />
          <Link to="/Home">Register Now</Link>
        </div>
      </div>
    </>
  );
}
export default FrontPage;
