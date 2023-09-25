import { Routes, Route, NavLink, Link } from "react-router-dom";

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
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/blogs"
                  >
                    Blogs
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
