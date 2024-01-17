import React from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./styles.scss";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="header-container d-flex justify-content-between">
          <div className="links d-flex">
            <div className="logo d-flex align-items-center">
              <img src={Logo} alt="" />
              <h3>COURSE</h3>
            </div>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/add"}>Add new</Link>
              </li>
              <li>
                <Link to={"/wishlist"}>Wishlist</Link>
              </li>
            </ul>
          </div>
          <div className="call d-flex align-items-center">
            <i class="fa-thin fa-phone-volume"></i>{" "}
            <span>+43 4566 7788 2457</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
