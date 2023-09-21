import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// redux
import { store } from "./redux/store";
import { Provider } from "react-redux";

// pages
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Auth from "./pages/auth/index";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="auth" element={<Auth />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
