import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header.jsx";
import MainContainer from "./components/mainContainer.jsx";
import "./css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <MainContainer />
  </React.StrictMode>
);
