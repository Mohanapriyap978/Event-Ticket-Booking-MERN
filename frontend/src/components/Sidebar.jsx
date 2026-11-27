
import React, { useState, useEffect } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  CalendarDays,
  Ticket,
  Users,
  BarChart3,
  Settings,
  LogOut,
  UserCircle,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Explore Events",
    icon: CalendarDays,
    path: "/explore",
  },
  {
    name: "My Bookings",
    icon: Ticket,
    path: "/bookings",
  },
  {
    name: "Organizers",
    icon: Users,
    path: "/organizers",
  },
  {
    name: "Analytics",
    icon: BarChart3,
    path: "/analytics",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

function Sidebar() {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  const [user, setUser] = useState({
    name: "Guest User",
    email: "EventEase Member",
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

  const handleLogout = () => {
    localStorage.removeItem("eventease_current_user");
    navigate("/signin", { replace: true });
  };

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>

      {/* Sidebar Header */}
      <div className="sidebar-top">
        {!collapsed && (
          <span className="sidebar-section-title">MENU</span>
        )}

        <button
          className="sidebar-toggle"
          onClick={() => setCollapsed(!collapsed)}
          title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          aria-label={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {collapsed ? (
            <PanelLeftOpen size={20} />
          ) : (
            <PanelLeftClose size={20} />
          )}
        </button>
      </div>

      {/* User Profile */}
      <div className="sidebar-profile">
        <UserCircle size={35} />

        {!collapsed && (
          <div className="sidebar-user-details">
            <h4>{user.name || "Guest User"}</h4>
            <p>{user.email || "EventEase Member"}</p>
          </div>
        )}
      </div>

      {!collapsed && (
        <p className="menu-heading">WORKSPACE</p>
      )}

      {/* Navigation Links */}
      <nav className="sidebar-menu">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              to={item.path}
              key={item.name}
              end={item.path === "/dashboard"}
              title={collapsed ? item.name : ""}
              className={({ isActive }) =>
                `sidebar-item ${isActive ? "active" : ""}`
              }
            >
              <Icon size={20} />

              {!collapsed && <span>{item.name}</span>}
            </NavLink>
          );
        })}

      </nav>

      {/* Logout */}
      <button
        className="sidebar-bottom"
        onClick={handleLogout}
        title={collapsed ? "Logout" : ""}
      >
        <LogOut size={20} />

        {!collapsed && <span>Logout</span>}
      </button>

    </aside>
  );
}

export default Sidebar;
