import { InsuranceCalculator } from './premiumCal';

function main() {
    // Example factors
    const factors = {
        age: 35,
        healthCondition: 'fair',
        coverageAmount: 50000,
        occupationRisk: 'medium',
    };

    const insuranceCalculator = new InsuranceCalculator(factors);
    const premium = insuranceCalculator.calculatePremium();

    console.log(`The calculated insurance premium is: $${premium}`);
}

// Run the main function
main();
