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

  const handleFilterChange = (category) => {
    setFilter(category);
    filterCategories(category);
  };

  return (
    <>
      <div className="Home-Page">
        <Header />
        <Table />
        <div className="Navbar">
          <nav className="filterNav">
            <button type="submit" onClick={() => handleFilterChange("All")}>
              All
            </button>
            <button type="submit" onClick={() => handleFilterChange("Promotion")}>
              Promotion
            </button>
            <button type="submit" onClick={() => handleFilterChange("Starters")}>
              Starters
            </button>
            <button type="submit" onClick={() => handleFilterChange("Entree")}>
              Entree
            </button>
            <button type="submit" onClick={() => handleFilterChange("LegendarySteak")}>
              Legendary
            </button>
          </nav>
        </div>
        <div className="Slider">
          <Slider />
        </div>
        <div className="Product-Categories">
          <Link to="/Category" className={`Promotion ${filter !== 'Promotion' && 'hidden'}`}>
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

          <Link to="/Category" className={`Starters ${filter !== 'Starters' && 'hidden'}`}>
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

          <Link to="/Category" className={`Entree ${filter !== 'Entree' && 'hidden'}`}>
            <div className="card">
              <img src={require("../Images/Entree.png")} alt="Entree" />
              <div className="card-head">
                <h3>Entree</h3>
                <Link to="/Category" className="viewMore">
                  <h4>View More</h4>
                  <img src={require("../Images/RightArrow.png")} style={{ marginLeft: "0.813rem" }} alt="Right Arrow" />
                </Link>
              </div>
            </div>
          </Link>

          <Link to="/Category" className={`LegendarySteak ${filter !== 'LegendarySteak' && 'hidden'}`}>
            <div className="card">
              <img src={require("../Images/LegendarySteak.png")} alt="LegendarySteak" />
              <div className="card-head">
                <h3>LegendarySteak</h3>
                <Link to="/Category" className="viewMore">
                  <h4>View More</h4>
                  <img src={require("../Images/RightArrow.png")} style={{ marginLeft: "0.813rem" }} alt="Right Arrow" />
                </Link>
              </div>
            </div>
          </Link>

          <Link to="/Category" className={`GrillworksChicken ${filter !== 'GrillworksChicken' && 'hidden'}`}>
            <div className="card">
              <img src={require("../Images/LemonLimeChicken.png")} alt="LegendarySteak" />
              <div className="card-head">
                <h3>GrillworksChicken</h3>
                <Link to="/Category" className="viewMore">
                  <h4>View More</h4>
                  <img src={require("../Images/RightArrow.png")} style={{ marginLeft: "0.813rem" }} alt="Right Arrow" />
                </Link>
              </div>
            </div>
          </Link>

          <Link to="/Category" className={`FisherMan ${filter !== 'FisherMan' && 'hidden'}`}>
            <div className="card">
              <img src={require("../Images/Fisherman.png")} alt="LegendarySteak" />
              <div className="card-head">
                <h3>FisherMann</h3>
                <Link to="/Category" className="viewMore">
                  <h4>View More</h4>
                  <img src={require("../Images/RightArrow.png")} style={{ marginLeft: "0.813rem" }} alt="Right Arrow" />
                </Link>
              </div>
            </div>
          </Link>

          {/* Add similar code blocks for other categories with appropriate classNames and conditions */}

        </div>
      </div>
    </>
  );
}

export default Home;
