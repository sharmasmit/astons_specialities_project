import React from "react";
import { Link } from "react-router-dom";

function Header() {
  let show = true;

  const ShowMenu = () => {
    document.getElementById("SideMenu").style.display = "block";
  };
  const HideMenu = () => {
    document.getElementById("SideMenu").style.display = "none";
  };

  return (
    <>
      <header>
        <div className="TopHeader">
          <button type="submit" onClick={ShowMenu}>
            <img src={require("../Images/HamburgerBar.png")} alt="HamburgerBar" />
          </button>
          <img src={require("../Images/AstonsLogo.png")} alt="Logo" />
          <Link to={"#"}>
            <img src={require("../Images/ShopIcon.png")} alt="Shop" />
            <span>01</span>
          </Link>
        </div>
        <div className="sideMenu" id="SideMenu">
          <button type="submit" style={{ float: "right" }} onClick={HideMenu}>
            <img src={require("../Images/CloseBtn.png")} alt="Close" />
          </button>
          <h3 style={{ marginTop: "6.688rem" }}>Menu</h3>
          <h3>Voucher</h3>
          <h3>Order History</h3>
          <h3>Profile</h3>
        </div>
      </header>
    </>
  );
}
export default Header;
