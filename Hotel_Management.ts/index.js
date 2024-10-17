"use strict";
// index.ts
Object.defineProperty(exports, "__esModule", { value: true });
var HotelResSys_1 = require("./HotelResSys");
// Create an instance of the hotel reservation system
var hotelSystem = new HotelResSys_1.HotelReservationSystem();
// Add a hotel with rooms
hotelSystem.addHotel("Hotel California", [
    { id: 1, pricePerNight: 100, isAvailable: true },
    { id: 2, pricePerNight: 150, isAvailable: true },
    { id: 3, pricePerNight: 200, isAvailable: false },
]);
// Check available rooms
var availableRooms = hotelSystem.findAvailableRooms("Hotel California");
console.log("Available Rooms:", availableRooms);
// Calculate total cost for a stay
var totalCost = hotelSystem.calculateTotalCost("Hotel California", 1, 3); // 3 nights
console.log("Total Cost:", totalCost);
// Book a room
hotelSystem.bookRoom("Hotel California", 1);
// Check available rooms after booking
var availableRoomsAfterBooking = hotelSystem.findAvailableRooms("Hotel California");
console.log("Available Rooms After Booking:", availableRoomsAfterBooking);
