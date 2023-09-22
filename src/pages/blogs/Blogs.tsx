import { Routes, Route, Link } from "react-router-dom";

import ContentsList from "../../components/blogs/ContentsList"
import ContentWrite from "../../components/blogs/ContentWrite"

export default function Blogs() {
  return (
    <>
      <h1>Blogs</h1>
      
      <div>
        <Link to="/blogs/write">write</Link>
      </div>

      <Routes>
          <Route index element={<ContentsList />} />
          <Route path="/write" element={<ContentWrite />} />
      </Routes>
    </>
  );
}
