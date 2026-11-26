
import React from "react";
import {
  Ticket,
  Bell,
  Search,
  UserCircle
} from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Brand Logo */}
      <div className="brand">
        <div className="brand-icon">
          <Ticket size={23} />
        </div>
        <h2>EventEase</h2>
      </div>

      {/* Search Bar */}
      <div className="nav-search">
        <Search size={18} />

        <input
          type="text"
          placeholder="Search events, concerts, shows..."
        />
      </div>

      {/* Profile and Notifications */}
      <div className="nav-actions">

        <button
          className="icon-button"
          aria-label="Notifications"
        >
          <Bell size={21} />
        </button>

        <div className="profile">
          <UserCircle size={27} />
          <span>Admin</span>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;
