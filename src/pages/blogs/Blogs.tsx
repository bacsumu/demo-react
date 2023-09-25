import { Routes, Route, Link, Outlet } from "react-router-dom";

import ContentsList from "./ContentsList";
import ContentWrite from "./ContentWrite";

export default function Blogs() {
  return (
    <>
      <h1>Blogs</h1>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/blogs">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/blogs/write">
            Write
          </Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
}
