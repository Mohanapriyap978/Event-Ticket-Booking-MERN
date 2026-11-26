
import React, { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [bookings, setBookings] = useState([
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
  ]);

  const addBooking = (event, quantity) => {
    const newBooking = {
      id: `EVT${Date.now()}`,
      event: event.title,
      date: event.date,
      location: event.location,
      tickets: quantity,
      amount: event.price * quantity,
      status: "Confirmed"
    };

    setBookings((previous) => [...previous, newBooking]);
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBookings() {
  return useContext(BookingContext);
}