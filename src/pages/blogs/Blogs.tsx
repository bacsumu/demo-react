import { Routes, Route, Link, Outlet } from "react-router-dom";

import ContentsList from "./ContentsList"
import ContentWrite from "./ContentWrite"

export default function Blogs() {
  return (
    <>
      <h1>Blogs</h1>
      
      <div>
        <p><Link to="/blogs">blog home</Link></p>
        <p><Link to="/blogs/write">write</Link></p>
      </div>

      <Outlet />
      
    </>
  );
}
