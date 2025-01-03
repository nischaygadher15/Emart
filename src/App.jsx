import React from "react";
import { Outlet } from "react-router";
import DeafaultLayout from "./Layouts/DefaultLayout";
import "./App.css";

function App() {
  return (
    <>
      <DeafaultLayout>
        <Outlet />
      </DeafaultLayout>
    </>
  );
}

export default App;
