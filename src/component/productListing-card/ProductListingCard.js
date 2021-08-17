import React from "react";
import "./productlistingcard.css";
import { NavLink } from "react-router-dom";
// import { addToCart } from "../../pages/home/redux/actions";
import actions from "../../pages/home/redux/actions";
import { useDispatch, useSelector } from "react-redux";

const ProductListingCard = ({ id, title, price, desc, category, image }) => {
  const dispatch = useDispatch();

  const addToCart = (ids) => {
    dispatch(actions.addToCart(ids));
  };

  const cart = useSelector((state) => state.productlisting.cart);
  const CartId = cart.map((cId) => cId.id);

  return (
    <>
      <div className="productListing__card " key={id}>
        <div className="productListing__images">
          <img src={image} alt={title} />
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

        {CartId.includes(id) ? (
          <button
            className="productListing__addToCart"
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
            className="productListing__addToCart"
            onClick={() => addToCart(id)}
          >
            {" "}
            Add to cart{" "}
          </button>
        )}
      </div>
    </>
  );
};

export default ProductListingCard;
