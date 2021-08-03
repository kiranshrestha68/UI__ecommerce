import React, { useState } from "react";
import "./topbar.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Topbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  const styleForShoppingCart = {
    fontSize: "25px",
  };
  return (
  <div className="topbar">
      <div className="topbar__row">
        <div className="row-1">
          <div className="title__logo">
            <NavLink to="/" className="link__header">
              KStha_
            </NavLink>
          </div>
          <div className="row-1__items">
            <SearchIcon className="search__icon" />
            <input />
          </div>
        </div>
        
       
        <div className={click ? "row-2 active" : "row-2"}>
          <div className="nav-items">
            <NavLink
              to="/"
              className="link"
              exact
              activeClassName="menu__active"
            >
              Home
            </NavLink>
          </div>
          <div className="nav-items">
            <NavLink
              to="the-shop"
              className="link"
              activeClassName="menu__active"
            >
              The Shop
            </NavLink>
          </div>
          <div className="nav-items">
            <NavLink to="mens-clothing" className="link">
              Men's Clothing
            </NavLink>{" "}
            <ExpandMoreIcon />{" "}
          </div>
          <div className="nav-items">
            <NavLink to="womens" className="link">
              Women's
            </NavLink>{" "}
            <ExpandMoreIcon />{" "}
          </div>
          <div className="nav-items">
            <NavLink to="kids-and-boys" className="link">
              Kids & Boys
            </NavLink>{" "}
            <ExpandMoreIcon />{" "}
          </div>
        </div>

        <div className="row-3">
          <div className="topbar__badge">
            <Badge
              badgeContent={4}
              color="error"
              overlap="circular"
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <ShoppingBasketIcon style={styleForShoppingCart} />
            </Badge>
          </div>

          <div className="profile__image">
            <img
              src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/13966370/13966370-1616741383013-bc5a84e6f7dbf.jpg"
              alt=""
            />
          </div>
          <div className="topbar__MenuIcon">
            <div onClick={handleClick}>
              {click ? <CloseIcon /> : <MenuIcon />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
