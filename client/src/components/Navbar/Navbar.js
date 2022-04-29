import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header id="nav-wrapper">
        <nav id="nav" className="my-2" style={{ marginTop: "0" }}>
          <div className="nav left">
            <span className="gradient skew">
              <h1 className="logo un-skew">
                <a href="#home">Logo Here</a>
              </h1>
            </span>
            <button id="menu" className="btn-nav buttonclassnav">
              <span className="fas fa-bars"></span>
            </button>
          </div>
          <div className="nav right">
            <Link to="/" className="nav-link active">
              <span className="nav-link-span">
                <span className="u-nav">Home</span>
              </span>
            </Link>
            <Link Link to="/" className="nav-link">
              <span className="nav-link-span">
                <span className="u-nav"> PANDDIng</span>
              </span>
            </Link>
            <Link to="/" className="nav-link">
              <span className="nav-link-span">
                <span className="u-nav">Work</span>
              </span>
            </Link>
            <Link to="/login" className="nav-link">
              <span className="nav-link-span">
                <span className="u-nav">Login</span>
              </span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
