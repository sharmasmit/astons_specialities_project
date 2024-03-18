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

  function myFunction(e) {
		var elems = document.querySelector(".active");
    if(elems !=null) {
      elems.classList.remove("active");
    }
    e.target.className = "active";
	}

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
          <div className="sideMenu" id="SideMenu" onClick={myFunction}>
            <button type="submit" style={{ float: "right" }} onClick={HideMenu}>
              <img src={require("../Images/CloseBtn.png")} alt="Close" />
            </button>
            <button type="submit" style={{ marginTop: "6.688rem" }} className="btn"><Link to="/Home" className="" >Menu</Link></button><br/>
            <button type="submit" className="btn"><Link to="/Category" className="" >Category</Link></button><br/>
            <button type="submit" className="btn"><Link to="/OrderHistory" >Order History</Link></button>
            {/* <h3>Profile</h3> */}
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
