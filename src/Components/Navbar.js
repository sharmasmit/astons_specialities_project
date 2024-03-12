import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="Navbar">
        <nav>
          <Link to={"#"}>All</Link>
          <Link to={"#"}>Promotion</Link>
          <Link to={"#"}>Starters</Link>
          <Link to={"#"}>Entree</Link>
          <Link to={"#"}>Legendary</Link>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
