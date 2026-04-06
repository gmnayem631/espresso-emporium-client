import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Root;
