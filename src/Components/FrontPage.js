import React from "react";
import { Link } from "react-router-dom";

function FrontPage() {
  return (
    <>
      <div className="FrontPage">
        <div className="frontPage-inner">
          <img src={require("../Images/AstonsFrontLogo.png")} alt="Logo" />
          <br />
          <button className="loginBtn" style={{ marginTop: "27.5rem" }}>
            Login
          </button>
          <br />
          <button className="guestBtn" style={{ marginBottom: "1.875rem" }}>
            Continue as Guest
          </button>
          <br />
          <Link to={"#"}>Register Now</Link>
        </div>
      </div>
    </>
  );
}
export default FrontPage;
