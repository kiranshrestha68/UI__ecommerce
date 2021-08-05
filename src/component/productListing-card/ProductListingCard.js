import React from "react";
import "./productlistingcard.css";

const ProductListingCard = () => {
  return (
    <div className="productListing__card">
      <div className="productListing__images">
        <img
          src="https://media.istockphoto.com/photos/yellow-open-backpack-picture-id1141208525?k=6&m=1141208525&s=612x612&w=0&h=0m_Y7W8eI6WfM_tayvsODyvpCHK-MXelFjOL-x-AmaA="
          alt="bag"
        />
      </div>
      <div className="productListing__title-price">
      <div className="productListing__title">Khatra Bag</div>
      <div className="productListing__price">Rs.5000/-</div>
      </div>
    
      <div className="productListing__overview">
        Esse voluptate officia sint do proident ut do laborum aliquip in nisi
        voluptate. Aliquip quis eu culpa labore deserunt ea. Nisi qui sit anim
        ad nulla magna aute adipisicing. Id reprehenderit et amet excepteur
        tempor voluptate adipisicing consectetur qui voluptate enim enim qui
        commodo.
      </div>
      <button className="productListing__addToCart"> Add to cart </button>
    </div>
  );
};

export default ProductListingCard;
