// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = ((drivers) => {
    const firstTwo = drivers.slice(0, 2);
    return firstTwo;
});
const returnLastTwoDrivers = ((drivers) => {
    return drivers.slice(-2)
});
const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(number) {
    const fareMultiplier = function fareQuadrupler(fare) {
        return fare * number;
    }
    return fareMultiplier;
}
function fareDoubler(fare) {
    return fare * 2;
}
function fareTripler(fare) {
    return fare * 3;
}
function selectDifferentDrivers(arrayOfDrivers, driversToReturn) {
   return driversToReturn(arrayOfDrivers);
}
