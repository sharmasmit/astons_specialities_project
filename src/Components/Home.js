import React, { useState } from "react";
import Header from "./Header";
import Table from "./Table";
import { Link } from "react-router-dom";
import Slider from "./Slider";

function Home() {
  const [filter, setFilter] = useState("All");

  const filterCategories = (category) => {
    const categories = document.getElementsByClassName("Product-Categories")[0].childNodes;
    categories.forEach((Category) => {
      if (category === "All" || Category.classList.contains(category)) {
        Category.style.display = "block";
      } else {
        Category.style.display = "none";
      }
    });
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    filterCategories(e.target.value);
  };

  return (
    <>
      <div className="Home-Page">
        <Header />
        <Table />
        <div className="Navbar">
          <nav className="filterNav">
            <Link to="#" onClick={() => handleFilterChange({ target: { value: "All" } })} value="All">
              All
            </Link>
            <Link to="#" onClick={() => handleFilterChange({ target: { value: "Promotion" } })} value="Promotion">
              Promotion
            </Link>
            <Link to="#" onClick={() => handleFilterChange({ target: { value: "Starters" } })} value="Starters">
              Starters
            </Link>
            <Link to="#" onClick={() => handleFilterChange({ target: { value: "Entree" } })} value="Entree">
              Entree
            </Link>
            <Link to="#" onClick={() => handleFilterChange({ target: { value: "LegendarySteak" } })} value="Legendary">
              Legendary
            </Link>
          </nav>
        </div>
        <div className="Slider">
          <Slider />
        </div>
        <div className="Product-Categories">
          <Link to="/Category" className="Promotion">
            <div className="card">
              <img src={require("../Images/Promotion.png")} alt="Promotion" />
              <div className="card-head">
                <h3>Promotion</h3>
                <Link to="/Category" className="viewMore">
                  <h4>View More</h4>
                  <img src={require("../Images/RightArrow.png")} style={{ marginLeft: "0.813rem" }} alt="Right Arrow" />
                </Link>
              </div>
            </div>
          </Link>

          <Link to="/Category" className="Starters">
            <div className="card">
              <img src={require("../Images/Startars.png")} alt="Starters" />
              <div className="card-head">
                <h3>Starters</h3>
                <Link to="/Category" className="viewMore">
                  <h4>View More</h4>
                  <img src={require("../Images/RightArrow.png")} style={{ marginLeft: "0.813rem" }} alt="Right Arrow" />
                </Link>
              </div>
            </div>
          </Link>

          <Link to="/Category" className="Entree">
            <div className="card">
              <img src={require("../Images/Entree.png")} alt="Entree" />
              <div className="card-head">
                <h3>Entree</h3>
                <h5>(includes 2 Side Dishes)</h5>
                <Link to="/Category" className="viewMore">
                  <h4>View More</h4>
                  <img src={require("../Images/RightArrow.png")} style={{ marginLeft: "0.813rem" }} alt="Right Arrow" />
                </Link>
              </div>
            </div>
          </Link>

          <Link to="/Category" className="LegendarySteak">
            <div className="card">
              <img src={require("../Images/LegendarySteak.png")} alt="LegendarySteak" />
              <div className="card-head">
                <h3>Legendary Steak</h3>
                <h5>(includes 2 Side Dishes)</h5>
                <Link to="/Category" className="viewMore">
                  <h4>View More</h4>
                  <img src={require("../Images/RightArrow.png")} style={{ marginLeft: "0.813rem" }} alt="Right Arrow" />
                </Link>
              </div>
            </div>
          </Link>

          <Link to="/Category" className="GrillworksChicken">
            <div className="card">
              <img src={require("../Images/LemonLimeChicken.png")} alt="Grillworks Chicken" />
              <div className="card-head">
                <h3>Grillworks Chicken</h3>
                <h5>(includes 2 Side Dishes)</h5>
                <Link to="/Category" className="viewMore">
                  <h4>View More</h4>
                  <img src={require("../Images/RightArrow.png")} style={{ marginLeft: "0.813rem" }} alt="Right Arrow" />
                </Link>
              </div>
            </div>
          </Link>

          <Link to="/Category" className="FisherMan">
            <div className="card">
              <img src={require("../Images/Fisherman.png")} alt="FisherMan" />
              <div className="card-head">
                <h3>Fisherman's Pride</h3>
                <h5>(includes 2 Side Dishes)</h5>
                <Link to="/Category" className="viewMore">
                  <h4>View More</h4>
                  <img src={require("../Images/RightArrow.png")} style={{ marginLeft: "0.813rem" }} alt="Right Arrow" />
                </Link>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
