import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import myRouter from "./Router/Router.jsx";
import { Provider } from "react-redux";
import Store from "./Redux/Store.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={myRouter} />
    </Provider>
  </React.StrictMode>
);
