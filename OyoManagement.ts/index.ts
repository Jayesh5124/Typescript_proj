// index.ts

import { HotelReservationSystem, Room } from './HotelResSys';

// Create an instance of the hotel reservation system
const hotelSystem = new HotelReservationSystem();

// Add a hotel with rooms
hotelSystem.addHotel("Hotel California", [
    { id: 1, pricePerNight: 100, isAvailable: true },
    { id: 2, pricePerNight: 150, isAvailable: true },
    { id: 3, pricePerNight: 200, isAvailable: false },
]);

// Check available rooms
const availableRooms = hotelSystem.findAvailableRooms("Hotel California");
console.log("Available Rooms:", availableRooms);

// Calculate total cost for a stay
const totalCost = hotelSystem.calculateTotalCost("Hotel California", 1, 3); // 3 nights
console.log("Total Cost:", totalCost);

// Book a room
hotelSystem.bookRoom("Hotel California", 1);

// Check available rooms after booking
const availableRoomsAfterBooking = hotelSystem.findAvailableRooms("Hotel California");
console.log("Available Rooms After Booking:", availableRoomsAfterBooking);
