import React from "react";
import { NavLink } from "react-router-dom";
import "./pagination.css";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const CustomPagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // const number = pageNumbers.map((no) => no)
  // const CartId = cart.map((cId) => cId.id);
  return (
    <div className="pagination__container">
      <ul>
        {pageNumbers.map((number) => (
          <li>
            <NavLink
              to="/"
              className="pagination__link"
              activeClassName="pagination__menu__active"
              key={number}
              onClick={() => paginate(number)}
            >
             
              {number}
            </NavLink>
          </li>
        ))}

<ChevronRightIcon/>       
      </ul>
    </div>
  );
};

export default CustomPagination;
