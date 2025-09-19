import glasstop from "../register/glasstop.webp";
import '../app.css';
import React from "react";

const NavbarGlass: React.FC = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-glasstop"
      style={{
        backgroundImage: `url(${glasstop})`,
        backgroundSize: "cover",
        backgroundPosition: "58.5% 58.5%",
        height: "130px",
      }}
    >
      <div className="container">
        <button
          className="btn btn-brand2 ms-auto"
          onClick={() => window.history.back()}
        >
          Back
        </button>
      </div>
    </nav>
  );
};

export default NavbarGlass;