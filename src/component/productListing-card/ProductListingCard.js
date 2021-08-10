import React from "react";
import "./productlistingcard.css";
import { NavLink } from "react-router-dom";
// import { addToCart } from "../../pages/home/redux/actions";
import  actions from "../../pages/home/redux/actions"
import { useDispatch } from "react-redux";

const ProductListingCard = ({ id, title, price, desc, category, image }) => {

  const dispatch = useDispatch();

  const addToCart = (ids) => {
    dispatch(actions.addToCart(ids));
  };

  return (
    <>
      <div className="productListing__card ">
        <div className="productListing__images">
          <img src={image} alt="bag" />
        </div>
        <div className="productListing__title-price">
          <div className="productListing__title">
            <NavLink
              className="productListing__link"
              to={`product-detail/${id}`}
            >
              {title}
            </NavLink>
          </div>
          <div className="productListing__price">Rs.{price}/-</div>
        </div>

        <div className="productListing__overview">{desc}</div>
        <button
          className="productListing__addToCart"
          onClick={() => addToCart(id)}
        >
          {" "}
          Add to cart{" "}
        </button>
      </div>
    </>
  );
};

export default ProductListingCard;
