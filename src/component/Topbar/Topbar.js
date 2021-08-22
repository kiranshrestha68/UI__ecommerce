import React, { useEffect, useState } from "react";
import "./topbar.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector } from "react-redux";
import { Popup } from "semantic-ui-react";

const Topbar = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [cartCount, setCartCount] = useState(0);
  const cart = useSelector((state) => state.productlisting.cart);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [cart, cartCount]);

  // const closeMobileMenu = () => setClick(false);
  const styleForShoppingCart = {
    fontSize: "25px",
  };
  return (
    <div className="topbar">
      <div className="topbar__row">
        <div className="row-1">
          <div className="title__logo" onClick={props.onClick}>
            <NavLink to="/" className="link__header">
              KStha_
            </NavLink>
          </div>
          <div className="row-1__items">
            <SearchIcon className="search__icon" />
            <input onChange={props.onChange} />
          </div>
        </div>

        <div className={click ? "row-2 active" : "row-2"}>
          <Popup
            content="Home"
            trigger={
              <div className="nav-items" onClick={props.onClick}>
                <NavLink
                  to="/"
                  className="link"
                  exact
                  activeClassName="menu__active"
                >
                  Home
                </NavLink>
              </div>
            }
            position="top center"
            basic
            fontSize="small"
          />

          <div className="nav-items">
            <NavLink
              to="/shopping-cart"
              className="link"
              activeClassName="menu__active"
            >
              The Shop{" "}
              {cartCount ? (
                <span style={{ color: "red" }}> ({cartCount})</span>
              ) : (
                <span>{undefined} </span>
              )}
            </NavLink>
          </div>
          <div className="nav-items">
            <NavLink
              to="mens-clothing"
              className="link"
              activeClassName="menu__active"
            >
              Men's Clothing
            </NavLink>{" "}
            {/* <ExpandMoreIcon />{" "} */}
          </div>
          <div className="nav-items">
            <NavLink
              to="womens"
              className="link"
              activeClassName="menu__active"
            >
              Women's
            </NavLink>{" "}
            {/* <ExpandMoreIcon />{" "} */}
          </div>
          <div className="nav-items">
            <NavLink
              to="kids-and-boys"
              className="link"
              activeClassName="menu__active"
            >
              Electronics
            </NavLink>{" "}
          </div>
        </div>

        <div className="row-3">
          <div className="topbar__badge">
            <NavLink to="/shopping-cart" className="topbar__shoppingCart">


              <Badge
                badgeContent={cartCount}
                color="error"
                overlap="circular"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <ShoppingBasketIcon style={styleForShoppingCart} />
              </Badge>
            </NavLink>
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
