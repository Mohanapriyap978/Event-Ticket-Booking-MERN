
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import MyBookings from "./pages/MyBookings";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Navbar />

        <div className="app-layout">

          <Sidebar />

          <Routes>
            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/bookings"
              element={<MyBookings />}
            />

            <Route
              path="/explore"
              element={
                <main className="dashboard">
                  <h1>Explore Events</h1>
                  <p>Discover exciting events around you!</p>
                </main>
              }
            />

            <Route
              path="/organizers"
              element={
                <main className="dashboard">
                  <h1>Organizers</h1>
                  <p>Manage your event organizers.</p>
                </main>
              }
            />

            <Route
              path="/analytics"
              element={
                <main className="dashboard">
                  <h1>Analytics</h1>
                  <p>Track your event performance.</p>
                </main>
              }
            />

            <Route
              path="/settings"
              element={
                <main className="dashboard">
                  <h1>Settings</h1>
                  <p>Manage your account settings.</p>
                </main>
              }
            />

          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;