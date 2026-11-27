
import React, { useEffect, useState } from "react";

import {
  Ticket,
  Bell,
  Search,
  UserCircle,
  User,
  Settings,
  LogOut,
  CalendarDays,
  CheckCircle,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [user, setUser] = useState({
    name: "Admin",
    email: "",
  });

  useEffect(() => {
    try {
      const savedUser = JSON.parse(
        localStorage.getItem("eventease_current_user") || "null"
      );

      if (savedUser) {
        setUser(savedUser);
      }
    } catch {
      console.error("Unable to load user information.");
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const query = search.trim();

    if (query) {
      navigate(`/explore?search=${encodeURIComponent(query)}`);
      setSearch("");
    } else {
      navigate("/explore");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("eventease_current_user");
    navigate("/signin");
  };

  const openSettings = () => {
    setShowProfile(false);
    navigate("/settings");
  };

  return (
    <nav className="navbar">

      {/* Brand Logo */}
      <Link to="/dashboard" className="brand">
        <div className="brand-icon">
          <Ticket size={23} />
        </div>

        <h2>EventEase</h2>
      </Link>

      {/* Search Bar */}
      <form className="nav-search" onSubmit={handleSearch}>
        <Search size={19} />

        <input
          type="search"
          placeholder="Search events, concerts, shows..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit" className="nav-search-button">
          Search
        </button>
      </form>

      {/* Profile and Notifications */}
      <div className="nav-actions">

        {/* Notifications */}
        <div className="nav-dropdown-wrapper">

          <button
            className="icon-button"
            aria-label="Notifications"
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfile(false);
            }}
          >
            <Bell size={21} />
            <span className="notification-dot"></span>
          </button>

          {showNotifications && (
            <div className="nav-dropdown notification-dropdown">

              <div className="dropdown-heading">
                <h3>Notifications</h3>
                <span>Recent</span>
              </div>

              <div className="notification-item">
                <div className="notification-icon">
                  <CalendarDays size={18} />
                </div>

                <div>
                  <h4>Upcoming Events</h4>
                  <p>Discover exciting events waiting for you.</p>
                </div>
              </div>

              <div className="notification-item">
                <div className="notification-icon">
                  <Ticket size={18} />
                </div>

                <div>
                  <h4>Booking Updates</h4>
                  <p>Your booking activities will appear here.</p>
                </div>
              </div>

              <div className="notification-footer">
                <CheckCircle size={15} />
                You're all caught up!
              </div>

            </div>
          )}

        </div>

        {/* User Profile */}
        <div className="nav-dropdown-wrapper">

          <button
            className="profile"
            onClick={() => {
              setShowProfile(!showProfile);
              setShowNotifications(false);
            }}
          >
            <UserCircle size={27} />
            <span>{user.name || "User"}</span>
          </button>

          {showProfile && (
            <div className="nav-dropdown profile-dropdown">

              <div className="profile-dropdown-header">
                <UserCircle size={35} />

                <div>
                  <h4>{user.name || "User"}</h4>
                  <p>{user.email || "EventEase Member"}</p>
                </div>
              </div>

              <div className="dropdown-divider"></div>

              <button
                className="dropdown-item"
                onClick={() => {
                  setShowProfile(false);
                  navigate("/settings");
                }}
              >
                <User size={17} />
                My Profile
              </button>

              <button
                className="dropdown-item"
                onClick={openSettings}
              >
                <Settings size={17} />
                Settings
              </button>

              <div className="dropdown-divider"></div>

              <button
                className="dropdown-item logout-item"
                onClick={handleLogout}
              >
                <LogOut size={17} />
                Logout
              </button>

            </div>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
