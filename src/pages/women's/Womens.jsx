import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import bag from "./images/bag.png";
import "./womens.css";
import actions from "../home/redux/actions";


import { NavLink } from "react-router-dom";
import Topbar from "../../component/Topbar/Topbar";
import Location from "../../component/location/Location";
import Footer from "../../component/footer/Footer";

const Womens = () => {
  const product = useSelector((state) => state.productlisting.allproducts);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.productlisting.cart);
  const CartId = cart.map((cId) => cId.id);

  const addToCart = (ids) => {
    dispatch(actions.addToCart(ids));
  };

  useEffect((data) => {
    dispatch(actions.loadproduct(data));
  }, []);

  return (
    <div>
      <Topbar />
      <Location />

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {product
          .filter((prod) => prod.category == "women's clothing")
          .map((p) => (
            <div className="mensClothing__card ">
              <div className="mensClothing__images">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="mensClothing__title-price">
                <div className="mensClothing__title">
                  <NavLink
                    className="mensClothing__link"
                    to={`product-detail/${p.id}`}
                  >
                    {p.title}
                  </NavLink>
                </div>
                <div className="mensClothing__price">Rs.{p.price}/-</div>
              </div>

              <div className="mensClothing__overview">{p.description}</div>

              {CartId.includes(p.id) ? (
                <button
                  className="mensClothing__addToCart"
                  // onClick={() => addToCart(id)}
                >
                  <NavLink
                    style={{ color: "inherit", textDecoration: "none" }}
                    to="/shopping-cart"
                  >
                    {" "}
                    View Cart{" "}
                  </NavLink>
                </button>
              ) : (
                <button
                  className="mensClothing__addToCart"
                  onClick={() => addToCart(p.id)}
                >
                  {" "}
                  Add to cart{" "}
                </button>
              )}
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default Womens;
