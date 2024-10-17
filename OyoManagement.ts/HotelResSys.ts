

export interface Room {
    id: number;
    pricePerNight: number;
    isAvailable: boolean;
}

export interface Hotel {
    name: string;
    rooms: Room[];
}

export class HotelReservationSystem {
    private hotels: Hotel[] = [];

    addHotel(name: string, rooms: Room[]): void {
        this.hotels.push({ name, rooms });
    }

    findAvailableRooms(hotelName: string): Room[] {
        const hotel = this.hotels.find(h => h.name === hotelName);
        return hotel ? hotel.rooms.filter(room => room.isAvailable) : [];
    }

    calculateTotalCost(hotelName: string, roomId: number, nights: number): number {
        const hotel = this.hotels.find(h => h.name === hotelName);
        if (!hotel) {
            throw new Error("Hotel not found");
        }
        
        const room = hotel.rooms.find(r => r.id === roomId);
        if (!room || !room.isAvailable) {
            throw new Error("Room not available");
        }

        return room.pricePerNight * nights;
    }

    bookRoom(hotelName: string, roomId: number): void {
        const hotel = this.hotels.find(h => h.name === hotelName);
        if (!hotel) {
            throw new Error("Hotel not found");
        }

        const room = hotel.rooms.find(r => r.id === roomId);
        if (!room || !room.isAvailable) {
            throw new Error("Room not available for booking");
        }

        room.isAvailable = false; // Mark room as booked
    }

    getAllHotels(): Hotel[] {
        return this.hotels;
    }
}
