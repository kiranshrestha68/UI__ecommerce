import React from "react";
import "./productlistingcard.css";

const ProductListingCard = ({id, title, price, desc, category, image}) => {

  return (
    <div className="productListing__card">
      <div className="productListing__images">
        <img
          src={image}
          alt="bag"
        />
      </div>
      <div className="productListing__title-price">
        <div className="productListing__title">{title}</div>
        <div className="productListing__price">Rs.{price}/-</div>
      </div>

      <div className="productListing__overview">
       {desc}
      </div>
      <button className="productListing__addToCart"> Add to cart </button>
    </div>
  );
};

export default ProductListingCard;
