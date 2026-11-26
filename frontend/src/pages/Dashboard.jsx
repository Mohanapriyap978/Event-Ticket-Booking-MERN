
import React, { useState } from "react";

import {
  CalendarDays,
  Ticket,
  Users,
  IndianRupee,
  Search
} from "lucide-react";

import SystemBanner from "../components/SystemBanner";
import EventCard from "../components/EventCard";

const events = [
  {
    title: "Tech Innovation Summit",
    category: "Technology",
    description: "Explore the future of AI and innovation.",
    date: "12 Dec 2026",
    location: "Coimbatore",
    price: 499,
    available: 120
  },
  {
    title: "Music Fest 2026",
    category: "Music",
    description: "Experience an unforgettable musical night.",
    date: "18 Dec 2026",
    location: "Chennai",
    price: 799,
    available: 85
  },
  {
    title: "Startup Connect",
    category: "Business",
    description: "Connect with entrepreneurs and innovators.",
    date: "22 Dec 2026",
    location: "Bangalore",
    price: 299,
    available: 65
  }
];

const stats = [
  { label: "Total Events", value: "128", icon: CalendarDays },
  { label: "Tickets Booked", value: "2,450", icon: Ticket },
  { label: "Registered Users", value: "1,820", icon: Users },
  { label: "Total Revenue", value: "₹85K", icon: IndianRupee }
];

function Dashboard() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || event.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="dashboard">

      <SystemBanner />

      <div className="page-heading">
        <div>
          <h1>Dashboard Overview</h1>
          <p>Manage your events and discover experiences.</p>
        </div>

        <button className="create-button">
          + Create Event
        </button>
      </div>

      <div className="stats-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div className="stat-card" key={stat.label}>
              <div className="stat-icon">
                <Icon size={22} />
              </div>
              <p>{stat.label}</p>
              <h2>{stat.value}</h2>
            </div>
          );
        })}
      </div>

      <div className="section-heading">
        <div>
          <h2>Upcoming Events</h2>
          <p>Explore what's happening next.</p>
        </div>
      </div>

      <div className="event-filters">

        <div className="event-search">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search your favourite events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Music">Music</option>
          <option value="Business">Business</option>
        </select>

      </div>

      <div className="events-grid">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.title} event={event} />
          ))
        ) : (
          <p className="no-events">
            No events found. Try another search!
          </p>
        )}
      </div>

    </main>
  );
}

export default Dashboard;