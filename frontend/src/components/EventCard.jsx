
import React, { useState } from "react";

import {
  CalendarDays,
  MapPin,
  ArrowUpRight,
  Ticket,
  CheckCircle
} from "lucide-react";

import { useBookings } from "../context/BookingContext";

function EventCard({ event }) {

  const [showBooking, setShowBooking] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const { addBooking } = useBookings();

  const totalPrice = event.price * quantity;

  const handleBooking = () => {

    if (
      quantity < 1 ||
      quantity > event.available
    ) {
      alert("Please select a valid ticket quantity.");
      return;
    }

    addBooking(event, quantity);

    setBookingSuccess(true);
    setShowBooking(false);
    setQuantity(1);
  };

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
        <span>{event.available} tickets left</span>
      </div>

      {bookingSuccess && (
        <div className="booking-success">
          <CheckCircle size={17} />
          Booking added successfully!
        </div>
      )}

      <button
        className="book-button"
        onClick={() => {
          setShowBooking(!showBooking);
          setBookingSuccess(false);
        }}
      >
        <Ticket size={17} />

        {showBooking ? "Close Booking" : "Book Tickets"}
      </button>

      {showBooking && (

        <div className="booking-panel">

          <h4>Book Your Tickets</h4>

          <label>Select Quantity</label>

          <input
            type="number"
            min="1"
            max={event.available}
            value={quantity}
            onChange={(e) => {
              const value = Number(e.target.value);

              if (
                Number.isInteger(value) &&
                value >= 1 &&
                value <= event.available
              ) {
                setQuantity(value);
              }
            }}
          />

          <div className="booking-total">
            <span>Total Amount</span>
            <strong>₹{totalPrice}</strong>
          </div>

          <button
            className="confirm-button"
            onClick={handleBooking}
          >
            Confirm Booking
          </button>

        </div>

      )}

    </div>
  );
}

export default EventCard;