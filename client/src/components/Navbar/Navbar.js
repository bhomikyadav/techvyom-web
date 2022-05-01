import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Userdatacontext from "../../context/Userdatacontext";

const Navbar = () => {
  const userdata = useContext(Userdatacontext);
  const handlelogout = () => {
    localStorage.clear();
    userdata.setusername("");
    userdata.setuserrollnumber("");
    userdata.setuseremail("");
    userdata.setusernumber("");
    userdata.setuserPid("");
  };
  return (
    <>
      <header id="nav-wrapper" style={{ marginTop: "0px" }}>
        <nav id="nav" style={{ marginTop: "0px" }}>
          <div className="nav left">
            <span className="gradient skew">
              <h1 className="logo un-skew" style={{ marginTop: "15px" }}>
                <Link to="/" style={{ color: "black", marginTop: "1%" }}>
                  Techvyom
                </Link>
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
            {userdata.username !== "" ? (
              <Link
                to="/register"
                onClick={(e) => {
                  handlelogout(e);
                }}
                className="nav-link"
              >
                <span className=" nav-link-span">
                  <span className="u-nav"> Logout</span>
                </span>
              </Link>
            ) : (
              <>
                <Link to="/register" className="nav-link">
                  <span className="nav-link-span">
                    <span className="u-nav"> Register</span>
                  </span>
                </Link>

                <Link to="/login" className="nav-link">
                  <span className="nav-link-span">
                    <span className="u-nav">Login</span>
                  </span>
                </Link>
              </>
            )}
            <Link to="/aboutme" className="nav-link">
              <span className="nav-link-span">
                <span className="u-nav">about me</span>
              </span>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
