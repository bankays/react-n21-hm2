import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cart from "../assets/cart.svg";
import heart from "../assets/heart.svg";

const Nav = () => {
  const { add } = useSelector((state) => state.add);
  const { likedpr } = useSelector((state) => state.like);
  return (
    <div>
      <nav>
        <h1>LOGO</h1>
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/product"}>
            <li>
              <img className="image1" src={cart} alt="" />
              <span className="count">{add.length}</span>
            </li>
          </Link>
          {/* <Link to={"/log"}>
            <li>login</li>
          </Link> */}
          <Link to={"/like"}>
            <li>
              <img className="image1" src={heart} alt="" />
              <span className="count">{likedpr.length}</span>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
