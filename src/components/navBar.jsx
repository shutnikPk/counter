import React from "react";

const NavBar = ({ amountGoods }) => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a
          className="nav-link disabled"
          href="/"
          tabIndex="-1"
          aria-disabled="true"
        >
          {amountGoods}
        </a>
      </li>
    </ul>
  );
};

export default NavBar;
