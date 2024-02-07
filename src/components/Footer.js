import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="">
      <span className="">
        © 2030{" "}
        <Link to="/" className="">
          Shopping Cart
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="links">
        <li>
          <a
            href="https://www.linkedin.com/in/stevemercer9913/"
            target="_blank"
            rel="noreferrer"
            className="mr-4 hover:underline md:mr-6"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/smerk3599"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
};
