import React from "react";
import "./productDetailCard.css";
// import jersey1 from "../../assests/images/jersey1.jpg";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const ProductDetailCard = (props) => {
  return (
    <div className="productDetails__card">
      <div className="productDetailsCard__row">
        <div className="productDetailsCard__row1">
          {" "}
          <img
            className="productDetailCard__images"
            src={props.images}
            alt=""
          />{" "}
        </div>
        <div className="productDetailsCard__row2">
          {" "}
          <div className="productDetailsCardRow2__title">
            <span> {props.title} </span> <FavoriteBorderIcon />{" "}
          </div>{" "}
          <div className="productDetailsCardRow2__price">{props.price}</div>
          <div className="productDetailsCardRow2__types">
            <span className="productDetailsCardRow2__brand"> {props.type1}</span>
            <span className="productDetailsCardRow2__brand"> {props.type2} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
