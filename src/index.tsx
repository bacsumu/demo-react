import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

// layouts
import MainLayout from "./pages/layouts/Main";
import Home from "./pages/home/Home";
import { BrowserRouter } from "react-router-dom";
import MainRoute from "./routes/MainRoute";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    {/* <MainLayout /> */}

    <MainRoute />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
