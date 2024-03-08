import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div>
        <h1 style={{ color: "red", fontSize: "5rem" }}>Not Found</h1>
        <Link
          to={"/"}
          style={{
            fontSize: "1.5rem",
            color: "blue",
            textDecoration: "none",
          }}
        >
          Back to Home
        </Link>
      </div>
    </>
  );
}
export default NotFound;
