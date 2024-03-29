import React from "react";
import logo from "../asset/Amazon-Logo.png";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/home">
        <img className="header_logo" src={logo} alt="logo" />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          {" "}
          <span className="header_optionLineOne">Hello</span>
          <span className="header_optionLineTwo">Sing in</span>
        </div>

        <div className="header_option">
          {" "}
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">&Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <SearchIcon className="basket"/>
            <span className="header_optionLineTwoheader_basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Header;
