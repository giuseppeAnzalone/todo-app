import "./index.css";

import { Link } from "react-router-dom";
import { FaHouse, FaRegUser } from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className="navBar__container">
      <ul className="navBar">
        <li>
          <Link to={"/"}>
            <FaHouse />
          </Link>
        </li>
        <li>
          <Link to={"/about"}>
            <FaRegUser />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
