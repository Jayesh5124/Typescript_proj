"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var premiumCal_1 = require("./premiumCal");
function main() {
    // Example factors
    var factors = {
        age: 35,
        healthCondition: 'fair',
        coverageAmount: 50000,
        occupationRisk: 'medium',
    };
    var insuranceCalculator = new premiumCal_1.InsuranceCalculator(factors);
    var premium = insuranceCalculator.calculatePremium();
    console.log("The calculated insurance premium is: $".concat(premium));
}
// Run the main function
main();
