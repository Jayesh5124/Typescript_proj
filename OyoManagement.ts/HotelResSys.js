"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelReservationSystem = void 0;
var HotelReservationSystem = /** @class */ (function () {
    function HotelReservationSystem() {
        this.hotels = [];
    }
    HotelReservationSystem.prototype.addHotel = function (name, rooms) {
        this.hotels.push({ name: name, rooms: rooms });
    };
    HotelReservationSystem.prototype.findAvailableRooms = function (hotelName) {
        var hotel = this.hotels.find(function (h) { return h.name === hotelName; });
        return hotel ? hotel.rooms.filter(function (room) { return room.isAvailable; }) : [];
    };
    HotelReservationSystem.prototype.calculateTotalCost = function (hotelName, roomId, nights) {
        var hotel = this.hotels.find(function (h) { return h.name === hotelName; });
        if (!hotel) {
            throw new Error("Hotel not found");
        }
        var room = hotel.rooms.find(function (r) { return r.id === roomId; });
        if (!room || !room.isAvailable) {
            throw new Error("Room not available");
        }
        return room.pricePerNight * nights;
    };
    HotelReservationSystem.prototype.bookRoom = function (hotelName, roomId) {
        var hotel = this.hotels.find(function (h) { return h.name === hotelName; });
        if (!hotel) {
            throw new Error("Hotel not found");
        }
        var room = hotel.rooms.find(function (r) { return r.id === roomId; });
        if (!room || !room.isAvailable) {
            throw new Error("Room not available for booking");
        }
        room.isAvailable = false; // Mark room as booked
    };
    HotelReservationSystem.prototype.getAllHotels = function () {
        return this.hotels;
    };
    return HotelReservationSystem;
}());
exports.HotelReservationSystem = HotelReservationSystem;
