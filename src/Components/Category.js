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
          <div className="top-round"></div>
          <h1 style={{ textAlign: "center" }}>Legendary Steaks</h1>

          <div className="category-child">
            
            <div className="left-card card">
              <img src={require("../Images/Category-left-img.png")} />
              <div className="card-head">
                <h4>New York Strip</h4>
                <Link to="/FoodDetails" style={{}} className="viewMore">
                  <h3>$22..90</h3>
                  <img src={require("../Images/Add-Plus.png")} />
                </Link>
              </div>
            </div>

            <div className="right-card card">
              <img src={require("../Images/Category-right-img.png")} />
              <div className="card-head">
                <h4>Japanese A3 Wagyu Steak</h4>
                <Link to="/FoodDetails" style={{}} className="viewMore">
                  <h3>$22..90</h3>
                  <img src={require("../Images/Add-Plus.png")} />
                </Link>
              </div>
            </div>

            <div className="left-card card">
              <img src={require("../Images/Category-left-img.png")} />
              <div className="card-head">
                <h4>New York Strip</h4>
                <Link to="/FoodDetails" style={{}} className="viewMore">
                  <h3>$22..90</h3>
                  <img src={require("../Images/Add-Plus.png")} />
                </Link>
              </div>
            </div>

            <div className="right-card card">
              <img src={require("../Images/Category-right-img.png")} />
              <div className="card-head">
                <h4>Japanese A3 Wagyu Steak</h4>
                <Link to="/FoodDetails" style={{}} className="viewMore">
                  <h3>$22..90</h3>
                  <img src={require("../Images/Add-Plus.png")} />
                </Link>
              </div>
            </div>

            <div className="left-card card">
              <img src={require("../Images/Category-left-img.png")} />
              <div className="card-head">
                <h4>New York Strip</h4>
                <Link to="/FoodDetails" style={{}} className="viewMore">
                  <h3>$22..90</h3>
                  <img src={require("../Images/Add-Plus.png")} />
                </Link>
              </div>
            </div>

            <div className="right-card card">
              <img src={require("../Images/Category-right-img.png")} />
              <div className="card-head">
                <h4>Japanese A3 Wagyu Steak</h4>
                <Link to="/FoodDetails" style={{}} className="viewMore">
                  <h3>$22..90</h3>
                  <img src={require("../Images/Add-Plus.png")} />
                </Link>
              </div>
            </div>

            <div className="left-card card">
              <img src={require("../Images/Category-left-img.png")} />
              <div className="card-head">
                <h4>New York Strip</h4>
                <Link to="/FoodDetails" style={{}} className="viewMore">
                  <h3>$22..90</h3>
                  <img src={require("../Images/Add-Plus.png")} />
                </Link>
              </div>
            </div>

            <div className="right-card card">
              <img src={require("../Images/Category-right-img.png")} />
              <div className="card-head">
                <h4>Japanese A3 Wagyu Steak</h4>
                <Link to="/FoodDetails" style={{}} className="viewMore">
                  <h3>$22..90</h3>
                  <img src={require("../Images/Add-Plus.png")} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
export default Category;
