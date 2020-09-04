// Map One, Russia
document.getElementById("randomScenarioMapOne").addEventListener("click", mapOneVariables);

function mapOneVariables() {
  // Remove the "disabled" attribute on the Current Scenario button
  let currentScenario = document.getElementById("current-map-1");
  currentScenario.removeAttribute("disabled");

  let velocityMapOne = Math.random() * (60 - 35) + 35;
  let yellowPhaseMapOne = Math.random() * (4.4 - 3.8) + 3.7;
  let interPhaseMapOne = Math.random() * (2.4 - 1.8) + 1.8;
  let reactionTimeMapOne = Math.random() * (2.5 - 0.4) + 0.4;

  // Friction for Map One
  let conditionsMapOne = {
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
    mapOneCoefficient = conditionsMapOne[keyClim + keyCond];

    // Calculate the going distance
    let distancePhaseMapOne = ((mapOneInitialVelocity * (mapOneYellowPhase + mapOneInterphase)) - mapOneLength).toFixed(2);
    console.log(mapOneInitialVelocity, mapOneYellowPhase, mapOneInterphase, carLengthMapOne);
    console.log(distancePhaseMapOne);

    // Calculate the stopping distance
    let reactionTimeDistanceMapOne = (mapOneReactionTime * mapOneInitialVelocity);
    console.log(reactionTimeDistanceMapOne);
    let velocitySquaredMapOne = Math.pow(mapOneInitialVelocity, 2);
    let stoppingDistMapOne = ((velocitySquaredMapOne / (2 * mapOneCoefficient * 9.81)) + reactionTimeDistanceMapOne);
    console.log(stoppingDistMapOne);

    // Is there a dilemma zone?
    let totalDistanceMapOne = distancePhaseMapOne - mapOneIntersection;
    let zoneCalcMapOne = totalDistanceMapOne - stoppingDistMapOne;
    console.log(zoneCalcMapOne);
    // the end of the calculation function
    let zoneOutcomeMapOne;
    if (zoneCalcMapOne > 0) {
      zoneOutcomeMapOne = "Option Zone";
    } else if (zoneCalcMapOne <= 0) {
      zoneOutcomeMapOne = "Dilemma Zone";
    } else zoneOutcomeMapOne = false;
    console.log(zoneOutcomeMapOne);

  } // Calculation Checker
} // Main function randomScenario

// Map Two, Australia
document.getElementById("randomScenarioMapTwo").addEventListener("click", mapTwoVariables);

function mapTwoVariables() {
  let currentScenario2 = document.getElementById("current-map-2");
  currentScenario2.removeAttribute("disabled");  
  let velocityMapTwo = Math.random() * (110 - 75) + 75;
  let yellowPhaseMapTwo = Math.random() * (5.0 - 4.0) + 4.0;
  let interPhaseMapTwo = Math.random() * (3.0 - 2.0) + 2.0;
  let reactionTimeMapTwo = Math.random() * (2.5 - 0.4) + 0.4;

  // Friction for Map Two
  let conditionsMapTwo = {
    drygood: 0.9,
    dryaverage: 0.8,
    drybad: 0.7,
    wetgood: 0.7,
    wetaverage: 0.6,
    wetbad: 0.5,
  };

  let carLengthMapTwo = Math.random() * (6.2 - 3.8) + 3.8;

  const tiresMapTwo = ["good", "average", "bad"];
  const tireConditionMapTwo = Math.floor(Math.random() * tiresMapTwo.length);
  const keyCondMapTwo = tiresMapTwo[tireConditionMapTwo];
  console.log(tireConditionMapTwo, tiresMapTwo[tireConditionMapTwo]);

  const climateMapTwo = ["dry", "wet"];
  const ClimateConditionMapTwo = Math.floor(Math.random() * climateMapTwo.length);
  const keyClimMapTwo = climateMapTwo[ClimateConditionMapTwo];
  console.log(ClimateConditionMapTwo, climateMapTwo[ClimateConditionMapTwo]);

  document.getElementById("map-2-initialVelocity").innerHTML = velocityMapTwo.toFixed(2) + " kmh<sup>-1</sup>";
  document.getElementById("map-2-ylPhase").innerHTML = yellowPhaseMapTwo.toFixed(1) + " s";
  document.getElementById("map-2-rlPhase").innerHTML = interPhaseMapTwo.toFixed(1) + " s";
  document.getElementById("map-2-rtRandom").innerHTML = reactionTimeMapTwo.toFixed(3) + " s";
  document.getElementById("map-2-tireCondition").innerHTML = tiresMapTwo[tireConditionMapTwo];
  document.getElementById("map-2-weatherCondition").innerHTML = climateMapTwo[ClimateConditionMapTwo];
  document.getElementById("map-2-carLength").innerHTML = carLengthMapTwo.toFixed(1);

  // The calculation checker:
  document.getElementById("map-2-submit").addEventListener("click", calculateScenarioMapTwo);

  function calculateScenarioMapTwo() {
    mapTwoInitialVelocity = velocityMapTwo / 3.6;
    mapTwoYellowPhase = yellowPhaseMapTwo;
    mapTwoInterphase = interPhaseMapTwo;
    mapTwoReactionTime = reactionTimeMapTwo;
    mapTwoIntersection = 79.75;
    mapTwoLength = carLengthMapTwo;
    mapTwoCoefficient = conditionsMapTwo[keyClimMapTwo + keyCondMapTwo];

    // Calculate the going distance
    let distancePhaseMapTwo = ((mapTwoInitialVelocity * (mapTwoYellowPhase + mapTwoInterphase)) - mapTwoLength).toFixed(2);
    console.log(mapTwoInitialVelocity, mapTwoYellowPhase, mapTwoInterphase, carLengthMapTwo);
    console.log(distancePhaseMapTwo);

    // Calculate the stopping distance
    let reactionTimeDistanceMapTwo = (mapTwoReactionTime * mapTwoInitialVelocity);
    console.log(reactionTimeDistanceMapTwo);
    let velocitySquaredMapTwo = Math.pow(mapTwoInitialVelocity, 2);
    let stoppingDistMapTwo = ((velocitySquaredMapTwo / (2 * mapTwoCoefficient * 9.81)) + reactionTimeDistanceMapTwo);
    console.log(stoppingDistMapTwo);

    // Is there a dilemma zone? 
    let totalDistanceMapTwo = distancePhaseMapTwo - mapTwoIntersection;
    let zoneCalcMapTwo = totalDistanceMapTwo - stoppingDistMapTwo;
    console.log(zoneCalcMapTwo);
    // the end of the calculation function
    let zoneOutcomeMapTwo;
    if (zoneCalcMapTwo > 0) {
      zoneOutcomeMapTwo = "Option Zone";
    } else if (zoneCalcMapTwo <= 0) {
      zoneOutcomeMapTwo = "Dilemma Zone";
    } else zoneOutcomeMapTwo = false;
    console.log(zoneOutcomeMapTwo);

  } // Calculation Checker MapTwo
} // Main function randomScenario MapTwo

// Map Three, USA
document.getElementById("randomScenarioMapThree").addEventListener("click", MapThreeVariables);

function MapThreeVariables() {
  // Remove the "disabled" attribute on the Current Scenario button
  let currentScenario3 = document.getElementById("current-map-3");
  currentScenario3.removeAttribute("disabled");  
  let velocityMapThree = Math.random() * (75 - 55) + 55;
  let yellowPhaseMapThree = Math.random() * (4.6 - 3.8) + 3.7;
  let interPhaseMapThree = Math.random() * (2.4 - 1.8) + 1.8;
  let reactionTimeMapThree = Math.random() * (2.5 - 0.4) + 0.4;

  // Friction for Map Three
  let conditionsMapThree = {
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

  let carLengthMapThree = Math.random() * (6.2 - 3.8) + 3.8;

  const tiresMapThree = ["good", "average", "bad"];
  const tireConditionMapThree = Math.floor(Math.random() * tiresMapThree.length);
  const keyCondMapThree = tiresMapThree[tireConditionMapThree];
  console.log(tireConditionMapThree, tiresMapThree[tireConditionMapThree]);

  const climateMapThree = ["dry", "wet", "icy", "snowy"];
  const ClimateConditionMapThree = Math.floor(Math.random() * climateMapThree.length);
  const keyClimMapThree = climateMapThree[ClimateConditionMapThree];
  console.log(ClimateConditionMapThree, climateMapThree[ClimateConditionMapThree]);

  document.getElementById("map-3-initialVelocity").innerHTML = velocityMapThree.toFixed(2) + " kmh<sup>-1</sup>";
  document.getElementById("map-3-ylPhase").innerHTML = yellowPhaseMapThree.toFixed(1) + " s";
  document.getElementById("map-3-rlPhase").innerHTML = interPhaseMapThree.toFixed(1) + " s";
  document.getElementById("map-3-rtRandom").innerHTML = reactionTimeMapThree.toFixed(3) + " s";
  document.getElementById("map-3-tireCondition").innerHTML = tiresMapThree[tireConditionMapThree];
  document.getElementById("map-3-weatherCondition").innerHTML = climateMapThree[ClimateConditionMapThree];
  document.getElementById("map-3-carLength").innerHTML = carLengthMapThree.toFixed(1);

  // The calculation checker:
  document.getElementById("map-3-submit").addEventListener("click", calculateScenarioMapThree);

  function calculateScenarioMapThree() {
    MapThreeInitialVelocity = velocityMapThree / 3.6;
    MapThreeYellowPhase = yellowPhaseMapThree;
    MapThreeInterphase = interPhaseMapThree;
    MapThreeReactionTime = reactionTimeMapThree;
    MapThreeIntersection = 66.18;
    MapThreeLength = carLengthMapThree;
    MapThreeCoefficient = conditionsMapThree[keyClimMapThree + keyCondMapThree];

    // Calculate the going distance
    let distancePhaseMapThree = ((MapThreeInitialVelocity * (MapThreeYellowPhase + MapThreeInterphase)) - MapThreeLength).toFixed(2);
    console.log(MapThreeInitialVelocity, MapThreeYellowPhase, MapThreeInterphase, carLengthMapThree);
    console.log(distancePhaseMapThree);

    // Calculate the stopping distance
    let reactionTimeDistanceMapThree = (MapThreeReactionTime * MapThreeInitialVelocity);
    console.log(reactionTimeDistanceMapThree);
    let velocitySquaredMapThree = Math.pow(MapThreeInitialVelocity, 2);
    let stoppingDistMapThree = ((velocitySquaredMapThree / (2 * MapThreeCoefficient * 9.81)) + reactionTimeDistanceMapThree);
    console.log(stoppingDistMapThree);

    // Is there a dilemma zone? 
    let totalDistanceMapThree = distancePhaseMapThree - MapThreeIntersection;
    let zoneCalcMapThree = totalDistanceMapThree - stoppingDistMapThree;
    console.log(zoneCalcMapThree);
    // the end of the calculation function
    let zoneOutcomeMapThree;
    if (zoneCalcMapThree > 0) {
      zoneOutcomeMapThree = "Option Zone";
    } else if (zoneCalcMapThree <= 0) {
      zoneOutcomeMapThree = "Dilemma Zone";
    } else zoneOutcomeMapThree = false;
    console.log(zoneOutcomeMapThree);

  } // Calculation Checker MapThree
} // Main function randomScenario MapThree

//Map Four, Germany
document.getElementById("randomScenarioMapFour").addEventListener("click", MapFourVariables);

function MapFourVariables() {
  // Remove the "disabled" attribute on the Current Scenario button
  let currentScenario4 = document.getElementById("current-map-4");
  currentScenario4.removeAttribute("disabled");  
  let velocityMapFour = Math.random() * (60 - 35) + 35;
  let yellowPhaseMapFour = Math.random() * (4.4 - 3.8) + 3.7;
  let interPhaseMapFour = Math.random() * (2.4 - 1.8) + 1.8;
  let reactionTimeMapFour = Math.random() * (2.5 - 0.4) + 0.4;

  // Friction for Map Four
  let conditionsMapFour = {
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

  let carLengthMapFour = Math.random() * (6.2 - 3.8) + 3.8;

  const tiresMapFour = ["good", "average", "bad"];
  const tireConditionMapFour = Math.floor(Math.random() * tiresMapFour.length);
  const keyCondMapFour = tiresMapFour[tireConditionMapFour];
  console.log(tireConditionMapFour, tiresMapFour[tireConditionMapFour]);

  const climateMapFour = ["dry", "wet", "icy", "snowy"];
  const ClimateConditionMapFour = Math.floor(Math.random() * climateMapFour.length);
  const keyClimMapFour = climateMapFour[ClimateConditionMapFour];
  console.log(ClimateConditionMapFour, climateMapFour[ClimateConditionMapFour]);

  document.getElementById("map-4-initialVelocity").innerHTML = velocityMapFour.toFixed(2) + " kmh<sup>-1</sup>";
  document.getElementById("map-4-ylPhase").innerHTML = yellowPhaseMapFour.toFixed(1) + " s";
  document.getElementById("map-4-rlPhase").innerHTML = interPhaseMapFour.toFixed(1) + " s";
  document.getElementById("map-4-rtRandom").innerHTML = reactionTimeMapFour.toFixed(3) + " s";
  document.getElementById("map-4-tireCondition").innerHTML = tiresMapFour[tireConditionMapFour];
  document.getElementById("map-4-weatherCondition").innerHTML = climateMapFour[ClimateConditionMapFour];
  document.getElementById("map-4-carLength").innerHTML = carLengthMapFour.toFixed(1);

  // The calculation checker:
  document.getElementById("map-4-submit").addEventListener("click", calculateScenarioMapFour);

  function calculateScenarioMapFour() {
    MapFourInitialVelocity = velocityMapFour / 3.6;
    MapFourYellowPhase = yellowPhaseMapFour;
    MapFourInterphase = interPhaseMapFour;
    MapFourReactionTime = reactionTimeMapFour;
    MapFourIntersection = 43.80;
    MapFourLength = carLengthMapFour;
    MapFourCoefficient = conditionsMapFour[keyClimMapFour + keyCondMapFour];

    // Calculate the going distance
    let distancePhaseMapFour = ((MapFourInitialVelocity * (MapFourYellowPhase + MapFourInterphase)) - MapFourLength).toFixed(2);
    console.log(MapFourInitialVelocity, MapFourYellowPhase, MapFourInterphase, carLengthMapFour);
    console.log(distancePhaseMapFour);

    // Calculate the stopping distance
    let reactionTimeDistanceMapFour = (MapFourReactionTime * MapFourInitialVelocity);
    console.log(reactionTimeDistanceMapFour);
    let velocitySquaredMapFour = Math.pow(MapFourInitialVelocity, 2);
    let stoppingDistMapFour = ((velocitySquaredMapFour / (2 * MapFourCoefficient * 9.81)) + reactionTimeDistanceMapFour);
    console.log(stoppingDistMapFour);

    // Is there a dilemma zone? 
    let totalDistanceMapFour = distancePhaseMapFour - MapFourIntersection;
    let zoneCalcMapFour = totalDistanceMapFour - stoppingDistMapFour;
    console.log(zoneCalcMapFour);
    // the end of the calculation function
    let zoneOutcomeMapFour;
    if (zoneCalcMapFour > 0) {
      zoneOutcomeMapFour = "Option Zone";
    } else if (zoneCalcMapFour <= 0) {
      zoneOutcomeMapFour = "Dilemma Zone";
    } else zoneOutcomeMapFour = false;
    console.log(zoneOutcomeMapFour);

  } // Calculation Checker MapFour
} // Main function randomScenario MapFour

//Map Five, Ireland
document.getElementById("randomScenarioMapFive").addEventListener("click", MapFiveVariables);

function MapFiveVariables() {
   // Remove the "disabled" attribute on the Current Scenario button
  let currentScenario5 = document.getElementById("current-map-5");
  currentScenario5.removeAttribute("disabled");  
  let velocityMapFive = Math.random() * (55 - 35) + 35;
  let yellowPhaseMapFive = Math.random() * (4.4 - 3.8) + 3.7;
  let interPhaseMapFive = Math.random() * (2.4 - 1.8) + 1.8;
  let reactionTimeMapFive = Math.random() * (2.5 - 0.4) + 0.4;

  // Friction for Map Five
  let conditionsMapFive = {
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

  let carLengthMapFive = Math.random() * (6.2 - 3.8) + 3.8;

  const tiresMapFive = ["good", "average", "bad"];
  const tireConditionMapFive = Math.floor(Math.random() * tiresMapFive.length);
  const keyCondMapFive = tiresMapFive[tireConditionMapFive];
  console.log(tireConditionMapFive, tiresMapFive[tireConditionMapFive]);

  const climateMapFive = ["dry", "wet"];
  const ClimateConditionMapFive = Math.floor(Math.random() * climateMapFive.length);
  const keyClimMapFive = climateMapFive[ClimateConditionMapFive];
  console.log(ClimateConditionMapFive, climateMapFive[ClimateConditionMapFive]);

  document.getElementById("map-5-initialVelocity").innerHTML = velocityMapFive.toFixed(2) + " kmh<sup>-1</sup>";
  document.getElementById("map-5-ylPhase").innerHTML = yellowPhaseMapFive.toFixed(1) + " s";
  document.getElementById("map-5-rlPhase").innerHTML = interPhaseMapFive.toFixed(1) + " s";
  document.getElementById("map-5-rtRandom").innerHTML = reactionTimeMapFive.toFixed(3) + " s";
  document.getElementById("map-5-tireCondition").innerHTML = tiresMapFive[tireConditionMapFive];
  document.getElementById("map-5-weatherCondition").innerHTML = climateMapFive[ClimateConditionMapFive];
  document.getElementById("map-5-carLength").innerHTML = carLengthMapFive.toFixed(1);

  // The calculation checker:
  document.getElementById("map-4-submit").addEventListener("click", calculateScenarioMapFive);

  function calculateScenarioMapFive() {
    MapFiveInitialVelocity = velocityMapFive / 3.6;
    MapFiveYellowPhase = yellowPhaseMapFive;
    MapFiveInterphase = interPhaseMapFive;
    MapFiveReactionTime = reactionTimeMapFive;
    MapFiveIntersection = 51.50;
    MapFiveLength = carLengthMapFive;
    MapFiveCoefficient = conditionsMapFive[keyClimMapFive + keyCondMapFive];

    // Calculate the going distance
    let distancePhaseMapFive = ((MapFiveInitialVelocity * (MapFiveYellowPhase + MapFiveInterphase)) - MapFiveLength).toFixed(2);
    console.log(MapFiveInitialVelocity, MapFiveYellowPhase, MapFiveInterphase, carLengthMapFive);
    console.log(distancePhaseMapFive);

    // Calculate the stopping distance
    let reactionTimeDistanceMapFive = (MapFiveReactionTime * MapFiveInitialVelocity);
    console.log(reactionTimeDistanceMapFive);
    let velocitySquaredMapFive = Math.pow(MapFiveInitialVelocity, 2);
    let stoppingDistMapFive = ((velocitySquaredMapFive / (2 * MapFiveCoefficient * 9.81)) + reactionTimeDistanceMapFive);
    console.log(stoppingDistMapFive);

    // Is there a dilemma zone? 
    let totalDistanceMapFive = distancePhaseMapFive - MapFiveIntersection;
    let zoneCalcMapFive = totalDistanceMapFive - stoppingDistMapFive;
    console.log(zoneCalcMapFive);
    // the end of the calculation function
    let zoneOutcomeMapFive;
    if (zoneCalcMapFive > 0) {
      zoneOutcomeMapFive = "Option Zone";
    } else if (zoneCalcMapFive <= 0) {
      zoneOutcomeMapFive = "Dilemma Zone";
    } else zoneOutcomeMapFive = false;
    console.log(zoneOutcomeMapFive);

  } 
} 

// Prevent the modal from opening 
// if user clicks "current scenario"
// before a current scenario is loaded
document.getElementById("current-map-1").addEventListener("click", openModalMapOne);
function openModalMapOne() {
let openMapOneData = parseFloat(document.getElementById("map-1-initialVelocity").value); 
    if (openMapOneData < 1) {
        getElementById("current-map-1").element.setAttribute(disabled, true);
        alert("You need to click on the button to select a random scenario first");
    }
}


