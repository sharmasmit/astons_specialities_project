import React from "react";
import { Link } from "react-router-dom";
import Shop from "../Images/ShopIcon.svg";
import DarkLogo from "../Images/AstonsMenuLogo.svg";
import HamburgerBar from "../Images/hamburgerbar.svg";



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
        <div className="TopHeader" id="TopHeader">
          <button type="submit" onClick={ShowMenu}>
            <img
              src={HamburgerBar}
              alt="HamburgerBar"
              className="MenuBtn"
            />
          </button>
          <Link to="/Home">
          <img src={DarkLogo} alt="Logo" />
          </Link>
          <Link to={"#"}>
            <img
              src={Shop}
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
            <Link to="/Home" className="" ><button type="submit" style={{ marginTop: "6.688rem" }} className="btn">Menu</button></Link><br/>
            <Link to="/Category" className="" ><button type="submit" className="btn">Category</button></Link><br/>
            <Link to="/OrderHistory" ><button type="submit" className="btn">Order History</button></Link>
            {/* <h3>Profile</h3> */}
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
