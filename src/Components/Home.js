import React from "react";
import Header from "./Header";
import Table from "./Table";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Slider from "./Slider";

function Home() {
  return (
    <>
      <div className="Home-Page">
        <Header />
        <Table />
        <Navbar />
        <div className="Slider">
          <Slider />
        </div>
        <div className="Product-Categories">
          <div className="card-1 card">
            <img src={require("../Images/Promotion.png")} alt="Promotion" />
            <div className="card-head">
              <h3>Promotion</h3>
              <Link style={{}} className="viewMore">
                <h4>View More</h4>
                <img
                  src={require("../Images/RightArrow.png")}
                  style={{ marginLeft: "0.813rem" }}
                />
              </Link>
            </div>
          </div>

          <div className="card-2 card">
            <img src={require("../Images/Startars.png")} alt="Promotion" />
            <div className="card-head">
              <h3>Starters</h3>
              <Link>
                <h4>View More</h4>
                <img
                  src={require("../Images/RightArrow.png")}
                  style={{ marginLeft: "0.813rem" }}
                />
              </Link>
            </div>
          </div>

          <div className="card-3 card">
            <img src={require("../Images/Entree.png")} alt="Entree" />
            <div className="card-head">
              <h3>Entree</h3>
              <h5>(includes 2 Side Dishes)</h5>
              <Link>
                <h4>View More</h4>
                <img
                  src={require("../Images/RightArrow.png")}
                  style={{ marginLeft: "0.813rem" }}
                />
              </Link>
            </div>
          </div>

          <div className="card-4 card">
            <img
              src={require("../Images/LegendarySteak.png")}
              alt="LegendarySteak"
            />
            <div className="card-head">
              <h3>Legendary Steak</h3>
              <h5>(includes 2 Side Dishes)</h5>
              <Link>
                <h4>View More</h4>
                <img
                  src={require("../Images/RightArrow.png")}
                  style={{ marginLeft: "0.813rem" }}
                />
              </Link>
            </div>
          </div>

          <div className="card-5 card">
            <img
              src={require("../Images/LemonLimeChicken.png")}
              alt="LegendarySteak"
            />
            <div className="card-head">
              <h3>Grillworks Chicken</h3>
              <h5>(includes 2 Side Dishes)</h5>
              <Link>
                <h4>View More</h4>
                <img
                  src={require("../Images/RightArrow.png")}
                  style={{ marginLeft: "0.813rem" }}
                />
              </Link>
            </div>
          </div>

          <div className="card-6 card">
            <img src={require("../Images/Fisherman.png")} alt="FisherMan" />
            <div className="card-head">
              <h3>Fisherman's Pride</h3>
              <h5>(includes 2 Side Dishes)</h5>
              <Link>
                <h4>View More</h4>
                <img
                  src={require("../Images/RightArrow.png")}
                  style={{ marginLeft: "0.813rem" }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
