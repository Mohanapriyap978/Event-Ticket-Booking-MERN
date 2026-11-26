
import React from "react";
import {
  Ticket,
  CalendarDays,
  MapPin,
  Download
} from "lucide-react";

function MyBookings() {

  const bookings = [
    {
      id: "EVT001",
      event: "Tech Innovation Summit",
      date: "12 Dec 2026",
      location: "Coimbatore",
      tickets: 2,
      amount: 998,
      status: "Confirmed"
    },
    {
      id: "EVT002",
      event: "Music Fest 2026",
      date: "18 Dec 2026",
      location: "Chennai",
      tickets: 1,
      amount: 799,
      status: "Confirmed"
    }
  ];

  return (
    <div className="dashboard">

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
                <CalendarDays size={16}/>
                {booking.date}
              </span>

              <span>
                <MapPin size={16}/>
                {booking.location}
              </span>
            </div>

            <div className="booking-summary">
              <span>{booking.tickets} Tickets</span>
              <strong>₹{booking.amount}</strong>
            </div>

            <button className="download-button">
              <Download size={16}/>
              Download Ticket
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default MyBookings;