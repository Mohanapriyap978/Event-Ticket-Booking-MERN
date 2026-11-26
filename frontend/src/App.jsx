
import React from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <div className="app-layout">

        <Sidebar />

        <Dashboard />

      </div>

    </div>
  );
}

export default App;
