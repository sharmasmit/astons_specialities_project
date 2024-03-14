import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <>
      <div className="Navbar">
        <nav className="filterNav" onClick={FilterMenu}>
          <Link to={"#"} value= "All">All</Link>
          <Link to={"#"} value= "Promotion">Promotion</Link>
          <Link to={"#"} value= "Starters">Starters</Link>
          <Link to={"#"} value= "Entree">Entree</Link>
          <Link to={"#"} value= "Legendary">Legendary</Link>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
