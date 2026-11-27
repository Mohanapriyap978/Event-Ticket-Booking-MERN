
import React from "react";

import { NavLink, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  CalendarDays,
  Ticket,
  Users,
  BarChart3,
  Settings,
  LogOut,
  UserCircle
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard"
  },
  {
    name: "Explore Events",
    icon: CalendarDays,
    path: "/explore"
  },
  {
    name: "My Bookings",
    icon: Ticket,
    path: "/bookings"
  },
  {
    name: "Organizers",
    icon: Users,
    path: "/organizers"
  },
  {
    name: "Analytics",
    icon: BarChart3,
    path: "/analytics"
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings"
  }
];

function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("eventease_current_user");
    navigate("/signin");
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-profile">
        <UserCircle size={35} />
        <div>
          <h4>Welcome User</h4>
          <p>EventEase Member</p>
        </div>
      </div>

      <p className="menu-heading">WORKSPACE</p>

      <nav className="sidebar-menu">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              to={item.path}
              key={item.name}
              className={({ isActive }) =>
                `sidebar-item ${isActive ? "active" : ""}`
              }
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </NavLink>

          );

        })}

      </nav>

      <div className="sidebar-bottom" onClick={handleLogout}>
        <LogOut size={19} />
        <span>Logout</span>
      </div>

    </aside>
  );
}

export default Sidebar;
