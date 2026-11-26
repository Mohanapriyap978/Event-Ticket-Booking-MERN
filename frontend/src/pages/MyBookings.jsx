
import React from "react";

import {
  Ticket,
  CalendarDays,
  MapPin,
  Download
} from "lucide-react";

import { useBookings } from "../context/BookingContext";

function MyBookings() {

  const { bookings } = useBookings();

  return (
    <main className="dashboard">

      <div className="page-heading">
        <div>
          <h1>My Bookings</h1>
          <p>Manage your event tickets and reservations.</p>
        </div>
      </div>

      <div className="booking-list">

        {bookings.map((booking) => (

          <div className="booking-card" key={booking.id}>

            <div className="booking-card-top">
              <Ticket size={25} />

              <span className="confirmed">
                {booking.status}
              </span>
            </div>

            <h3>{booking.event}</h3>

            <p>Booking ID: {booking.id}</p>

            <div className="booking-info">

              <span>
                <CalendarDays size={16} />
                {booking.date}
              </span>

              <span>
                <MapPin size={16} />
                {booking.location}
              </span>

            </div>

            <div className="booking-summary">
              <span>{booking.tickets} Tickets</span>
              <strong>₹{booking.amount}</strong>
            </div>

            <button
              className="download-button"
              onClick={() => alert(
                `Ticket: ${booking.event}\nBooking ID: ${booking.id}`
              )}
            >
              <Download size={16} />
              Download Ticket
            </button>

          </div>

        ))}

      </div>

      {bookings.length === 0 && (
        <p>No bookings available yet.</p>
      )}

    </main>
  );
}

export default MyBookings;