// set up the random variables that can go into the calculator
// Velocities - use low or medium for residential and high for speeding and hwy for highway driving
var lowVelocity = Math.random() * (45 - 30) + 30;
var medVelocity = Math.random() * (60 - 45) + 45;
var highVelocity = Math.random() * (80 - 60) + 45;
var hwyVelcoity = Math.random() * (100 - 80) + 80;

// Yellow Phase - limited choices
var ypLow = Math.random() * (3.9 - 3.7) + 3.7;
// Use Norm or High for Highways
var ypNorm = Math.random() * (4.1 - 3.9) + 3.9;
var ypHigh = Math.random() * (4.8 - 4.1) + 4.1;

// Interhase - Limited choices
var ipLow = Math.random() * (1.2 - 0.9) + 0.9;
// Use Norm or High for Highways
var ipNorm = Math.random() * (1.5 - 1.2) + 1.2;
var ipHigh = Math.random() * (2.4 - 1.5) + 1.5; 

// Reaction time
var rtRandom = Math.random() * (2.5 - 0.4) + 0.4;

// Friction
var conditions = {
  drygood: 0.9,
  dryaverage: 0.8,
  drybad: 0.7,
  wetgood: 0.7,
  wetaverage: 0.6,
  wetbad: 0.5,
  snowygood: 0.3,
  snowyaverage: 0.3,
  snowybad: 0.3,
  icygood: 0.1,
  icyaverage: 0.1,
  icybad: 0.1
};

// Car length
var carLength = Math.random() * (6.2 - 3.8) + 3.8;

// Randomly choose a variable from the list for urban velocities
const velocities = ["lowVelocity", "medVelocity"];
const randomUrban = Math.floor(Math.random() * velocities.length);
console.log(randomUrban, velocities[randomUrban]);

// Randomly Choose a variable from the list for highway velocities
const velocitiesHwy = ["highVelocity", "hwyVelocity"];
const randomHwy = Math.floor(Math.random() * velocitiesHwy.length);
console.log(randomHwy, velocitiesHwy[randomHwy]);

// Randomly Choose a variable from the list for yellow phase
const ypUrban = ["ypLow", "ypNorm", "ypHigh"];
const randomYpUrban = Math.floor(Math.random() * ypUrban.length);
console.log(randomYpUrban, ypUrban[randomYpUrban]);

const ypHwy = ["ypNorm", "ypHigh"];
const randomYpHwy = Math.floor(Math.random() * ypHwy.length);
console.log(randomYpHwy, ypHwy[randomYpHwy]);

// Randomly Choose a variable from the list for interphase
const ipUrban = ["ipLow", "ipNorm", "ipHigh"];
const randomIpUrban = Math.floor(Math.random() * ipUrban.length);
console.log(randomIpUrban, ipUrban[randomIpUrban]);

const ipHwy = ["ipNorm", "ipHigh"];
const randomIpHwy = Math.floor(Math.random() * ipHwy.length);
console.log(randomIpHwy, ipHwy[randomIpHwy]);

// Randomly choose friction for cold or hot climates
const tires = ["good", "average", "bad"];
const tireCondition = Math.floor(Math.random() * tires.length);
const keyCond = tires[tireCondition];
console.log(tireCondition, tires[tireCondition]);

const hotClimates = ["dry", "wet"];
const randomTireHot = Math.floor(Math.random() * hotClimates.length);
console.log(randomTireHot, hotClimates[randomTireHot]);

const coldClimates = ["dry", "wet", "icy", "snowy"];
const randomTireCold = Math.floor(Math.random() * coldClimates.length);
const keyClim = coldClimates[randomTireCold];
console.log(randomTireCold, coldClimates[randomTireCold]);

document.getElementById("randomScenario").addEventListener("click", fullscenario); 
function fullscenario() {
    document.getElementById("map-1-initialVelocity").innerHTML = window[velocities[randomUrban]].toFixed(2) + " kmh<sup>-1</sup>";
    document.getElementById("map-1-ylPhase").innerHTML = window[ypUrban[randomYpUrban]].toFixed(1) + " s";
    document.getElementById("map-1-rlPhase").innerHTML = window[ipUrban[randomIpUrban]].toFixed(1) + " s"; 
    document.getElementById("map-1-rtRandom").innerHTML = rtRandom.toFixed(3) + " s";
    document.getElementById("map-1-tireCondition").innerHTML = tires[tireCondition]; 
    document.getElementById("map-1-weatherCondition").innerHTML = coldClimates[randomTireCold];
    document.getElementById("map-1-carLength").innerHTML = carLength.toFixed(1);  
}

document.getElementById("map-1-submit").addEventListener("click", calculateScenario);
function calculateScenario() {
    mapOneInitialVelocity = window[velocities[randomUrban]] / 3.6;
    mapOneYellowPhase = window[ypUrban[randomYpUrban]];
    mapOneInterphase = window[ipUrban[randomIpUrban]];
    mapOneReactionTime = rtRandom;
    mapOneIntersection = 52;
    mapOneLength = carLength;

    // Calculate the going distance
    let distancePhase = ((+mapOneInitialVelocity * (+mapOneYellowPhase + +mapOneInterphase)) - carLength).toFixed(2);
console.log(mapOneInitialVelocity, mapOneYellowPhase, mapOneInterphase, carLength);
console.log(distancePhase);

    // Calculate the stopping distance
     let reactionTimeDistance = (rtRandom * +mapOneInitialVelocity);
console.log(reactionTimeDistance);
    let velocitySquared = Math.pow(+mapOneInitialVelocity,2);
    let stoppingDistMapOne = ((+velocitySquared / (2 * (conditions[keyClim + keyCond]) * 9.81)) + +reactionTimeDistance);
console.log(stoppingDistMapOne);

// Is there a dilemma zone? 
    let totalDistanceMapOne = +distancePhase - 52;
    let zoneCalc = totalDistanceMapOne - stoppingDistMapOne;
console.log(zoneCalc);
// the end of the calculation function
    var zoneOutcomeMapOne;
    if (zoneCalc > 0) {
        zoneOutcomeMapOne = "Option Zone";}
    else if (zoneCalc <= 0) {
        zoneOutcomeMapOne = "Dilemma Zone";}
    else zoneOutcomeMapOne = false;       
console.log(zoneOutcomeMapOne);
}







