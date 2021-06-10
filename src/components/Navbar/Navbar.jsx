import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        E-commerce App
      </Link>
      <div className="info">
        <Link to="/favorites">
          Favorites
          <i className="fa fa-heart" />
        </Link>
        <Link to="/basket">
          Basket
          <i className="fa fa-shopping-cart" />
        </Link>
      </div>
    </div>
  );
}
