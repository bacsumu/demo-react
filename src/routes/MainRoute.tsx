import { Route, Routes } from "react-router-dom";
import NoPage from "../pages/error/NoPage";
import Blogs from "../pages/blogs/Blogs";
import ContentsList from "../pages/blogs/ContentsList";
import ContentWrite from "../pages/blogs/ContentWrite";
import Main from "../pages/main/Main";
import MainLayout from "../pages/layouts/Main";
import About from "../pages/about/Home";
import Home from "../pages/home/Home";

export default function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="blogs" element={<Blogs />}>
          <Route index element={<ContentsList />}></Route>
          <Route path="write" element={<ContentWrite />} />
        </Route>
        <Route path="about" element={<About />}></Route>
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}
