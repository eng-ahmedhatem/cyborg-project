import React from "react";
import "./header.css";
import logo from "../../Assets/imags/logo.png";
import profileImg from "../../Assets/imags/profile-header.jpg";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
let Header = () => {
  let handel_toggleLink = e => {
    e.currentTarget.classList.toggle("active");
    let nav_links = document.querySelector(".nav-links");
    console.log(nav_links)
    nav_links.classList.toggle("show");

  };
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="toggleLink" onClick={e => handel_toggleLink(e)}>
          <span />
          <span />
          <span />
        </div>
        <nav>
          <div className="search">
            <label htmlFor="search">
              <BsSearch color="" />
            </label>
            <input type="text" id="search" placeholder="type Something" />
          </div>
          <ul className="nav-links">
            <li className="active">
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="browse">browse</Link>
            </li>
            <li>
              <Link to="details">details</Link>
            </li>
            <li>
              <Link to="streams">streams</Link>
            </li>
            <li>
              <Link to="profile">
                <span>profile</span>
                <img src={profileImg} alt="" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
