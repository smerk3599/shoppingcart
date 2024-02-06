import Robot from "../assets/robot.png";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

import "./Header.css";

export const Header = () => {
  const { cartList } = useCart();

  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={Robot} alt="Shopping Cart Logo" />
        <span>Shopping Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span className="2">Cart: {cartList.length}</span>
      </Link>
    </header>
  );
};
