import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Table from "./Table";

function Category() {
  return (
    <>
      <div className="category-page">
        <Header />
        <Table />
        <img src={require("../Images/CategoriesBG.png")} />
        <div className="categories">
          <div className="top-round">
          <h1>Legendary Steaks</h1>
          </div>
          <div className="category-child">
            
            <Link to="/zb-frontend/FoodDetails"><div className="left-card card">
              <img src={require("../Images/Category-left-img.png")} />
              <div className="card-head">
                <h4>New York Strip</h4>
                <Link to="/zb-frontend/FoodDetails" style={{}} className="viewMore">
                  <h3>$22..90</h3>
                  <img src={require("../Images/Add-Plus.png")} />
                </Link>
              </div>
            </div>
            </Link>

            <Link to="/zb-frontend/FoodDetails"><div className="right-card card">
              <img src={require("../Images/Category-right-img.png")} />
              <div className="card-head">
                <h4>Japanese A3 Wagyu Steak</h4>
                <Link to="/zb-frontend/FoodDetails" style={{}} className="viewMore">
                  <h3>$22..90</h3>
                  <img src={require("../Images/Add-Plus.png")} />
                </Link>
              </div>
            </div>
            </Link>

            <Link to="/zb-frontend/FoodDetails"><div className="left-card card">
              <img src={require("../Images/Category-left-img.png")} />
              <div className="card-head">
                <h4>New York Strip</h4>
                <Link to="/zb-frontend/FoodDetails" style={{}} className="viewMore">
                  <h3>$22..90</h3>
                  <img src={require("../Images/Add-Plus.png")} />
                </Link>
              </div>
            </div>
            </Link>

            <Link to="/zb-frontend/FoodDetails"><div className="right-card card">
              <img src={require("../Images/Category-right-img.png")} />
              <div className="card-head">
                <h4>Japanese A3 Wagyu Steak</h4>
                <Link to="/zb-frontend/FoodDetails" style={{}} className="viewMore">
                  <h3>$22..90</h3>
                  <img src={require("../Images/Add-Plus.png")} />
                </Link>
              </div>
            </div>
            </Link>

            <Link to="/zb-frontend/FoodDetails"><div className="left-card card">
              <img src={require("../Images/Category-left-img.png")} />
              <div className="card-head">
                <h4>New York Strip</h4>
                <Link to="/zb-frontend/FoodDetails" style={{}} className="viewMore">
                  <h3>$22..90</h3>
                  <img src={require("../Images/Add-Plus.png")} />
                </Link>
              </div>
            </div>
            </Link>

            <Link to="/zb-frontend/FoodDetails"><div className="right-card card">
              <img src={require("../Images/Category-right-img.png")} />
              <div className="card-head">
                <h4>Japanese A3 Wagyu Steak</h4>
                <Link to="/zb-frontend/FoodDetails" style={{}} className="viewMore">
                  <h3>$22..90</h3>
                  <img src={require("../Images/Add-Plus.png")} />
                </Link>
              </div>
            </div>
            </Link>

            <Link to="/zb-frontend/FoodDetails"><div className="left-card card">
              <img src={require("../Images/Category-left-img.png")} />
              <div className="card-head">
                <h4>New York Strip</h4>
                <Link to="/zb-frontend/FoodDetails" style={{}} className="viewMore">
                  <h3>$22..90</h3>
                  <img src={require("../Images/Add-Plus.png")} />
                </Link>
              </div>
            </div>
            </Link>

            <Link to="/zb-frontend/FoodDetails"><div className="right-card card">
              <img src={require("../Images/Category-right-img.png")} />
              <div className="card-head">
                <h4>Japanese A3 Wagyu Steak</h4>
                <Link to="/zb-frontend/FoodDetails" style={{}} className="viewMore">
                  <h3>$22..90</h3>
                  <img src={require("../Images/Add-Plus.png")} />
                </Link>
              </div>
            </div>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}
export default Category;
