import { Routes, Route, NavLink } from "react-router-dom";

//css
import "./Gnb.css";

//pages
import Home from "../home/Home";
import Blogs from "../blogs/Blogs";
import NoPage from "../error/NoPage";

export default function Gnb() {
  return (
    <>
      <div className="gnb">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
