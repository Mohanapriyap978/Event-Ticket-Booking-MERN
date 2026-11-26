
import React from "react";

import {
  CalendarDays,
  MapPin,
  ArrowUpRight
} from "lucide-react";

function EventCard({ event }) {
  return (
    <div className="event-card">

      <div className="event-top">
        <span className="event-category">
          {event.category}
        </span>

        <ArrowUpRight size={19} />
      </div>

      <h3>{event.title}</h3>

      <p className="event-description">
        {event.description}
      </p>

      <div className="event-details">

        <span>
          <CalendarDays size={16} />
          {event.date}
        </span>

        <span>
          <MapPin size={16} />
          {event.location}
        </span>

      </div>

      <div className="event-footer">
        <strong>₹{event.price}</strong>

        <span>
          {event.available} tickets left
        </span>
      </div>

    </div>
  );
}

export default EventCard;
