
import React from "react";

import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  CalendarDays,
  Ticket,
  Users,
  BarChart3,
  Settings,
  LogOut
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
  return (
    <aside className="sidebar">

      <p className="menu-heading">WORKSPACE</p>

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

      <div
        className="sidebar-bottom"
        onClick={() => alert("Logout functionality coming soon!")}
      >
        <LogOut size={19} />
        <span>Logout</span>
      </div>

    </aside>
  );
}

export default Sidebar;