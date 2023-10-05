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
  <>
    <div>REACT_APP_PUBLIC_URL={process.env.REACT_APP_PUBLIC_URL}</div>
    <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
      {/* <MainLayout /> */}

      <MainRoute />
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
