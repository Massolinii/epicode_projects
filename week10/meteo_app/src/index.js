import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import App from "./App";

import Home from "./components/Home";
import TownPage from "./components/TownPage";
import MyTowns from "./components/MyTowns";

import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:city" element={<TownPage />} />
        <Route path="/your-cities" element={<MyTowns />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
