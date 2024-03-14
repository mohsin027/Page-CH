import React from "react";
import './Nav.css'
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="nav-main">
      <div></div>
      <div className="nav-sub">
      <Link style={{textDecoration:'none'}} to="/">
      <h4>

        Home
        </h4>
      </Link>
        <Link style={{textDecoration:'none'}} to="/about">
        <h4>About us</h4>
        </Link>
        <h4>Contact us</h4>
      </div>
      <div className="nav-sub">
        <button>Donate</button>
        <button>Sign In</button>
      </div>
    </nav>
  );
};
