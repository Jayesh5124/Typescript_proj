
// Define the Seat interface
interface Seat {
    id: number;
    selected: boolean;
}

// Implement the SeatController class
class SeatController {
    private seats: Seat[];

    constructor(totalSeats: number = 20) {
        this.seats = Array.from({ length: totalSeats }, (_, index) => ({
            id: index + 1,
            selected: false,
        }));
    }

    getSeats(): Seat[] {
        return this.seats;
    }

    selectSeats(seatIds: number[]): { success: boolean; message: string } {
        const notAvailable = seatIds.filter(id => this.seats[id - 1]?.selected);
        if (notAvailable.length > 0) {
            return { success: false, message: `Seats ${notAvailable.join(', ')} are already selected.` };
        }

        seatIds.forEach(id => {
            if (this.seats[id - 1]) {
                this.seats[id - 1].selected = true;
            }
        });

        return { success: true, message: 'Seats selected successfully.' };
    }

    cancelSeats(seatIds: number[]): { success: boolean; message: string } {
        seatIds.forEach(id => {
            if (this.seats[id - 1]) {
                this.seats[id - 1].selected = false;
            }
        });

        return { success: true, message: 'Seats cancelled successfully.' };
    }
}

// Test the SeatController class
function testSeatController() {
    const seatController = new SeatController(10); // Create a theater with 10 seats

    // Function to display seats
    function displaySeats() {
        console.log('Current Seats Status:');
        seatController.getSeats().forEach(seat => {
            console.log(`Seat ID: ${seat.id}, Selected: ${seat.selected}`);
        });
    }

    // Display initial seat status
    displaySeats();

    // Select some seats
    const selectResult1 = seatController.selectSeats([1, 2, 3]);
    console.log(selectResult1.message);

    // Display seat status after selection
    displaySeats();

    // Try selecting some already selected seats
    const selectResult2 = seatController.selectSeats([2, 3, 4]);
    console.log(selectResult2.message);

    // Cancel some seats
    const cancelResult = seatController.cancelSeats([1, 2]);
    console.log(cancelResult.message);

    // Display final seat status
    displaySeats();
}

// Run the test function
testSeatController();
