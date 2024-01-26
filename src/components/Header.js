import Robot from "../assets/robot.png";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
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
        <span className="2">Cart: 2</span>
      </Link>
    </header>
  );
};
