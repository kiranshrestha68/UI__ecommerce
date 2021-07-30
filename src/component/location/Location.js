import React from 'react'
import "./location.css"
import LocationOnIcon from "@material-ui/icons/LocationOn";


const Location = () => {
    return (
        <div className="container">
        <div className="location__contact">
          <div className="location">
            <LocationOnIcon className="location__icon" />
            <span className="location__items1"> KStha Shop</span>
            <span className="location__items2"> Ktm, Nepal</span>
          </div>
          <div className="contact__us">Contact Us</div>
        </div>
      </div>
    )
}

export default Location
