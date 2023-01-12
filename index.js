// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    return Math.abs(street - 42);
};
function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264; 
};
console.log(distanceFromHqInBlocks());
console.log(distanceFromHqInFeet());
function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination) * 264);
}
function calculatesFarePrice(start, destination) {
    const travelledInFeet = distanceTravelledInFeet(start, destination)
    if (  travelledInFeet <= 400) {
        return 0;
    } else if (travelledInFeet > 2500) {
        return 'cannot travel that far';
    } else if (travelledInFeet > 400 && travelledInFeet <= 2000) {
        return (travelledInFeet - 400) * 0.02;
    } else if (travelledInFeet <= 2500 && travelledInFeet > 2000) {
        return 25;
    }
};

