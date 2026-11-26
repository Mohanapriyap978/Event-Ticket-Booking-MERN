
import React from "react";

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
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Explore Events", icon: CalendarDays },
  { name: "My Bookings", icon: Ticket },
  { name: "Organizers", icon: Users },
  { name: "Analytics", icon: BarChart3 },
  { name: "Settings", icon: Settings }
];

function Sidebar() {
  return (
    <aside className="sidebar">

      <p className="menu-heading">WORKSPACE</p>

      {menuItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            className={`sidebar-item ${
              index === 0 ? "active" : ""
            }`}
            key={item.name}
          >
            <Icon size={19} />
            <span>{item.name}</span>
          </div>
        );
      })}

      <div className="sidebar-bottom">
        <LogOut size={19} />
        <span>Logout</span>
      </div>

    </aside>
  );
}

export default Sidebar;
