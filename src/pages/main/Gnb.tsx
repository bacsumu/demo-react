import { Routes, Route, Link } from "react-router-dom";

//css
import "./Gnb.css";

//pages
import Home from "../home/Home";
import Blogs from "../blogs/Blogs";
import NoPage from "../../components/common/NoPage";

export default function Gnb() {
  return (
    <>
      <div className="gnb">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}
