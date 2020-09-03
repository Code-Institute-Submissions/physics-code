// Map One, Russia
document.getElementById("randomScenario").addEventListener("click", mapOneVariables); 
function mapOneVariables () {
    let velocityMapOne = Math.random() * (60 - 35) + 35;
    let yellowPhaseMapOne = Math.random() * (4.4 - 3.8) + 3.7;
    let interPhaseMapOne = Math.random() * (2.4 - 1.8) + 1.8;
    let reactionTimeMapOne = Math.random() * (2.5 - 0.4) + 0.4;

// Friction for Map One
let conditionsOne = {
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

let carLengthMapOne = Math.random() * (6.2 - 3.8) + 3.8;

const tiresMapOne = ["good", "average", "bad"];
const tireConditionMapOne = Math.floor(Math.random() * tiresMapOne.length);
const keyCond = tiresMapOne[tireConditionMapOne];
console.log(tireConditionMapOne, tiresMapOne[tireConditionMapOne]);

const climateMapOne = ["dry", "wet", "icy", "snowy"];
const ClimateConditionMapOne = Math.floor(Math.random() * climateMapOne.length);
const keyClim = climateMapOne[ClimateConditionMapOne];
console.log(ClimateConditionMapOne, climateMapOne[ClimateConditionMapOne]);

document.getElementById("map-1-initialVelocity").innerHTML = velocityMapOne.toFixed(2) + " kmh<sup>-1</sup>";
document.getElementById("map-1-ylPhase").innerHTML = yellowPhaseMapOne.toFixed(1) + " s";
document.getElementById("map-1-rlPhase").innerHTML = interPhaseMapOne.toFixed(1) + " s"; 
document.getElementById("map-1-rtRandom").innerHTML = reactionTimeMapOne.toFixed(3) + " s";
document.getElementById("map-1-tireCondition").innerHTML = tiresMapOne[tireConditionMapOne]; 
document.getElementById("map-1-weatherCondition").innerHTML = climateMapOne[ClimateConditionMapOne];
document.getElementById("map-1-carLength").innerHTML = carLengthMapOne.toFixed(1); 

// The calculation checker:
document.getElementById("map-1-submit").addEventListener("click", calculateScenario);
function calculateScenario() {
mapOneInitialVelocity = velocityMapOne / 3.6;
mapOneYellowPhase = yellowPhaseMapOne;
mapOneInterphase = interPhaseMapOne;
mapOneReactionTime = reactionTimeMapOne;
mapOneIntersection = 52;
mapOneLength = carLengthMapOne;        
mapOneCoefficient = conditionsOne[keyClim + keyCond];

// Calculate the going distance
let distancePhaseMapOne = ((mapOneInitialVelocity * (mapOneYellowPhase + mapOneInterphase)) - mapOneLength).toFixed(2);
console.log(mapOneInitialVelocity, mapOneYellowPhase, mapOneInterphase, carLengthMapOne);
console.log(distancePhaseMapOne);

// Calculate the stopping distance
let reactionTimeDistanceMapOne = (mapOneReactionTime * mapOneInitialVelocity);
console.log(reactionTimeDistanceMapOne);
let velocitySquaredMapOne = Math.pow(mapOneInitialVelocity,2);
let stoppingDistMapOne = ((velocitySquaredMapOne / (2 * mapOneCoefficient * 9.81)) + reactionTimeDistanceMapOne);
console.log(stoppingDistMapOne);

// Is there a dilemma zone? 
let totalDistanceMapOne = distancePhaseMapOne - mapOneIntersection;
let zoneCalcOne = totalDistanceMapOne - stoppingDistMapOne;
console.log(zoneCalcOne);
// the end of the calculation function
var zoneOutcomeMapOne;
if (zoneCalcOne > 0) {
zoneOutcomeMapOne = "Option Zone";}
else if (zoneCalcOne <= 0) {
zoneOutcomeMapOne = "Dilemma Zone";}
else zoneOutcomeMapOne = false;       
console.log(zoneOutcomeMapOne);

} // Calculation Checker
} // Main function randomScenario