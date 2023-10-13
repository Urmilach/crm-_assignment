import React from "react";
import "./header.css";
import "./App.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <h1 className="header_title">CRM</h1>
      </div>

      <div className="header_navigate">
        <Link to={"/home"}>
          <div className="header_navitem">
            <span className="header_nav1">Home</span>
          </div>
        </Link>
        <Link to={"/sales"}>
          <div className="header_navitem">
            <span className="header_nav1">Sales & Marketing </span>
          </div>
        </Link>

        {/* <div className="header_navitem">
          <span className="header_nav1"></span>
        </div> */}
        <Link to={"/modules"}>
          <div className="header_navitem">
            <span className="header_nav1">Modules</span>
          </div>
        </Link>
        <Link to={"/About"}>
          <div className="header_navitem">
            <span className="header_nav3">About</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Header;
