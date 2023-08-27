import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./headercss/header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Header = () => {
  const location = useLocation()
  return (
    <header>
      <div className="container flex items-center justify-between">
        <div>
          <img src="/images/Logo.png" alt="Logo" />
        </div>

        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/g">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <AiOutlineSearch />
          <AiOutlineShoppingCart />
          <div id="login">
            <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
