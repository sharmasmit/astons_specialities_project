import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const ShowMenu = () => {
    document.getElementById("SideMenu").classList.add("animation");
  };
  const HideMenu = () => {
    document.getElementById("SideMenu").classList.remove("animation");
  };

  return (
    <>
      <header>
        <div className="TopHeader">
          <button type="submit" onClick={ShowMenu}>
            <img
              src={require("../Images/HamburgerBar.png")}
              alt="HamburgerBar"
              className="MenuBtn"
            />
          </button>
          <img src={require("../Images/AstonsLogo.png")} alt="Logo" />
          <Link to={"#"}>
            <img
              src={require("../Images/ShopIcon.png")}
              alt="Shop"
              className="Shop-Icon"
            />
            <span className="Shop-Icon">0</span>
            <img
              src={require("../Images/CloseBtnDark.png")}
              className="CloseBtnDark"
            />
          </Link>
          <div className="sideMenu" id="SideMenu">
            <button type="submit" style={{ float: "right" }} onClick={HideMenu}>
              <img src={require("../Images/CloseBtn.png")} alt="Close" />
            </button>
            <Link to="/Home" ><h3 style={{ marginTop: "6.688rem" }}>Menu</h3></Link>
            <Link to="/Category"><h3>Category</h3></Link>
            <Link to="/OrderHistory"><h3>Order History</h3></Link>
            {/* <h3>Profile</h3> */}
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
