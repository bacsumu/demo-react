import { Outlet } from "react-router-dom";

// redux
import { store } from "../../redux/store";
import { Provider } from "react-redux";

// layouts
import Header from "../main/Header";
import Gnb from "../main/Gnb";
import Footer from "../main/Footer";

// compoments

export default function MainLayout() {
  return (
    <>
      <Header />

      <Gnb />

      {/* <main>{props.children}</main> */}

      <Outlet />

      <Footer />
    </>
  );
}
