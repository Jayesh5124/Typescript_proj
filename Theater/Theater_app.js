// Implement the SeatController class
var SeatController = /** @class */ (function () {
    function SeatController(totalSeats) {
        if (totalSeats === void 0) { totalSeats = 20; }
        this.seats = Array.from({ length: totalSeats }, function (_, index) { return ({
            id: index + 1,
            selected: false,
        }); });
    }
    SeatController.prototype.getSeats = function () {
        return this.seats;
    };
    SeatController.prototype.selectSeats = function (seatIds) {
        var _this = this;
        var notAvailable = seatIds.filter(function (id) { var _a; return (_a = _this.seats[id - 1]) === null || _a === void 0 ? void 0 : _a.selected; });
        if (notAvailable.length > 0) {
            return { success: false, message: "Seats ".concat(notAvailable.join(', '), " are already selected.") };
        }
        seatIds.forEach(function (id) {
            if (_this.seats[id - 1]) {
                _this.seats[id - 1].selected = true;
            }
        });
        return { success: true, message: 'Seats selected successfully.' };
    };
    SeatController.prototype.cancelSeats = function (seatIds) {
        var _this = this;
        seatIds.forEach(function (id) {
            if (_this.seats[id - 1]) {
                _this.seats[id - 1].selected = false;
            }
        });
        return { success: true, message: 'Seats cancelled successfully.' };
    };
    return SeatController;
}());
// Test the SeatController class
function testSeatController() {
    var seatController = new SeatController(10); // Create a theater with 10 seats
    // Function to display seats
    function displaySeats() {
        console.log('Current Seats Status:');
        seatController.getSeats().forEach(function (seat) {
            console.log("Seat ID: ".concat(seat.id, ", Selected: ").concat(seat.selected));
        });
    }
    // Display initial seat status
    displaySeats();
    // Select some seats
    var selectResult1 = seatController.selectSeats([1, 2, 3]);
    console.log(selectResult1.message);
    // Display seat status after selection
    displaySeats();
    // Try selecting some already selected seats
    var selectResult2 = seatController.selectSeats([2, 3, 4]);
    console.log(selectResult2.message);
    // Cancel some seats
    var cancelResult = seatController.cancelSeats([1, 2]);
    console.log(cancelResult.message);
    // Display final seat status
    displaySeats();
}
// Run the test function
testSeatController();
