import React from "react";
import { Outlet } from "react-router";
import "./App.css";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen max-w-screen-2xl mx-auto">
        <Outlet />
      </main>
    </>
  );
}

export default App;
