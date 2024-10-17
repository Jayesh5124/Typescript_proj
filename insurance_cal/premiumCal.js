"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsuranceCalculator = void 0;
var InsuranceCalculator = /** @class */ (function () {
    function InsuranceCalculator(factors) {
        this.factors = factors;
        this.basePremium = 100; // Base premium amount
    }
    InsuranceCalculator.prototype.calculatePremium = function () {
        var premium = this.basePremium;
        // Adjust premium based on age
        premium += this.calculateAgePremium(this.factors.age, this.factors.coverageAmount);
        // Adjust premium based on health condition
        premium += this.calculateHealthPremium(this.factors.healthCondition, this.factors.coverageAmount);
        // Adjust premium based on coverage amount
        premium += this.calculateCoveragePremium(this.factors.coverageAmount);
        // Adjust premium based on occupation risk
        premium += this.calculateOccupationPremium(this.factors.occupationRisk, this.factors.coverageAmount);
        return premium;
    };
    InsuranceCalculator.prototype.calculateAgePremium = function (age, cs) {
        if (age < 25)
            return 5 * Math.floor(cs / 1000) * 5; // Younger age group
        if (age < 40)
            return 4 * Math.floor(cs / 1000) * 3; // Middle age group
        if (age < 60)
            return 3 * Math.floor(cs / 1000) * 2; // Older age group
        return Math.floor(cs / 1000) * 2; // Senior age group
    };
    InsuranceCalculator.prototype.calculateHealthPremium = function (condition, cs) {
        switch (condition) {
            case 'good':
                return 0;
            case 'fair':
                return 5 * Math.floor(cs / 1000) * 5;
            case 'poor':
                return 10 * Math.floor(cs / 1000) * 5;
            default:
                return 0;
        }
    };
    InsuranceCalculator.prototype.calculateCoveragePremium = function (coverageAmount) {
        return Math.floor(coverageAmount / 1000) * 10; // $10 for every $1000 coverage
    };
    InsuranceCalculator.prototype.calculateOccupationPremium = function (risk, cs) {
        switch (risk) {
            case 'low':
                return Math.floor(cs / 1000) * 2;
            case 'medium':
                return 3 * Math.floor(cs / 1000) * 4;
            case 'high':
                return 7 * Math.floor(cs / 1000) * 5;
            default:
                return 0;
        }
    };
    return InsuranceCalculator;
}());
exports.InsuranceCalculator = InsuranceCalculator;
