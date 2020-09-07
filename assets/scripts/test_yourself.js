// Limit input boxes to only numbers and 2 decimal places
function isNumberKey(evt) {
    let charCode = (evt.which) ? evt.which : evt.keyCode; 
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46) {
      evt.preventDefault();
      return false;
    }
    return true;
 }

 function truncateDecimals(obj, decimals) {
    if (obj.value % Math.round(obj.value)) {
      
        let divisor = Math.pow(10, decimals);
        obj.value = Math.floor(obj.value * divisor)/divisor;
    }

    console.log(obj.value);
    return true;
 }

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
    drygood: Math.random() * (0.9 - 0.8) + 0.8,
    dryaverage: Math.random() * (0.8 - 0.75) + 0.75,
    drybad: Math.random() * (0.75 - 0.7) + 0.7,
    lightraingood: Math.random() * (0.7 - 0.65) + 0.65,
    mediumraingood:Math.random() * (0.65 - 0.62) + 0.62,
    heavyraingood: Math.random() * (0.62 - 0.6) + 0.6,
    lightrainaverage: Math.random() * (0.6 - 0.55) + 0.55,
    mediumrainaverage: Math.random() * (0.55 - 0.52) + 0.52,
    heavyrainaverage: Math.random() * (0.52 - 0.5) + 0.5,
    lightrainbad: Math.random() * (0.5 - 0.45) + 0.45,
    mediumrainbad: Math.random() * (0.45 - 0.42) + 0.42,
    heavyrainbad: Math.random() * (0.42 - 0.4) + 0.4,
    lightsnowgood: Math.random() * (0.5 - 0.46) + 0.46,
    mediumsnowgood:Math.random() * (0.46 - 0.42) + 0.42,
    heavysnowgood: Math.random() * (0.42 - 0.4) + 0.4,
    lightsnowaverage: Math.random() * (0.4 - 0.36) + 0.36,
    mediumsnowaverage: Math.random() * (0.36 - 0.32) + 0.32,
    heavysnowaverage: Math.random() * (0.32 - 0.3) + 0.3,
    lightsnowbad: Math.random() * (0.3 - 0.26) + 0.26,
    mediumsnowbad: Math.random() * (0.26 - 0.22) + 0.22,
    heavysnowbad: Math.random() * (0.22 - 0.2) + 0.2,
    lighticegood: Math.random() * (0.3 - 0.26) + 0.26,
    veryicygood: Math.random() * (0.26 - 0.18) + 0.22,
    severeicegood: Math.random() * (0.18 - 0.12) + 0.12,
    lighticeaverage: Math.random() * (0.2 - 0.16) + 0.16,
    veryicyaverage: Math.random() * (0.16 - 0.12) + 0.12,
    severeiceaverage: Math.random() * (0.12 - 0.1) + 0.1,
    lighticebad: Math.random() * (0.12 - 0.11) + 0.11,
    veryicybad: Math.random() * (0.11 - 0.105) + 0.105,
    severeicebad: Math.random() * (0.105 - 0.1) + 0.1,    
  };
    
    
   

  let carLengthMapOne = Math.random() * (5.89 - 3.8) + 3.8;

  const tiresMapOne = ["good", "average", "bad"];
  const tireConditionMapOne = Math.floor(Math.random() * tiresMapOne.length);
  const keyCond = tiresMapOne[tireConditionMapOne];
  console.log("Tire conditions", tireConditionMapOne, tiresMapOne[tireConditionMapOne]);

  const climateMapOne = ["dry", "light rain", "medium rain", "heavy rain", "light snow", "medium snow", "heavy snow", "light ice", "very icy", "severe ice"];
  const ClimateConditionMapOne = Math.floor(Math.random() * climateMapOne.length);
  const keyClim = climateMapOne[ClimateConditionMapOne];
  console.log("Climate Conditions", ClimateConditionMapOne, climateMapOne[ClimateConditionMapOne]);

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
    mapOneCoefficient = conditionsMapOne[keyClim.replace(/\s+/g, "") + keyCond];
    console.log("Lenght of intersection = ", mapOneIntersection);
    // Calculate the going distance
    let distancePhaseMapOne = ((mapOneInitialVelocity * (mapOneYellowPhase + mapOneInterphase)) - mapOneLength).toFixed(2);
    console.log("Initial Velocity", mapOneInitialVelocity, "Yellow phase", mapOneYellowPhase, "Interphase", mapOneInterphase, "Car length", carLengthMapOne);
    console.log("Distance during yellow and interphase", distancePhaseMapOne);
    console.log("Map one coefficient", mapOneCoefficient);

    // Calculate the stopping distance
    let reactionTimeDistanceMapOne = (mapOneReactionTime * mapOneInitialVelocity);
    console.log("Distance travelled during reaction time", reactionTimeDistanceMapOne);
    let velocitySquaredMapOne = Math.pow(mapOneInitialVelocity, 2);
    let stoppingDistMapOne = ((velocitySquaredMapOne / (2 * mapOneCoefficient * 9.81)) + reactionTimeDistanceMapOne);
    console.log("Stopping distance", stoppingDistMapOne);

    // Is there a dilemma zone?
    let totalDistanceMapOne = distancePhaseMapOne - mapOneIntersection;
    let zoneCalcMapOne = totalDistanceMapOne - stoppingDistMapOne;
    console.log("Dilemma Zone Calc output", zoneCalcMapOne);
    // the end of the calculation function
    let zoneOutcomeMapOne;
    if (zoneCalcMapOne > 0) {
      zoneOutcomeMapOne = "Option Zone";
    } else if (zoneCalcMapOne <= 0) {
      zoneOutcomeMapOne = "Dilemma Zone";
    } else zoneOutcomeMapOne = false;
    console.log("Type of zone", zoneOutcomeMapOne);

    let perfMapOne = Math.abs(zoneCalcMapOne).toFixed(2);
    console.log("Zone outcome absolute and 2dp", perfMapOne);
    // Check the type of zone the user has input
    let mapOneZone = document.querySelector('input[name="MapOneZone"]:checked').value;
    let answerMapOne;
    if (mapOneZone === "ozCheckedMapOne") {
      answerMapOne = "Option Zone";
    } else if (mapOneZone === "dzCheckedMapOne") {
      answerMapOne = "Dilemma Zone";
    } else answerMapOne = false;
    console.log("User answer", answerMapOne);

    let resultsMapOne;
    if (answerMapOne === zoneOutcomeMapOne) {
      resultsMapOne = "You said: <b>" + answerMapOne + "</b> &#x2713;";
    } else resultsMapOne = "You said: <b>" + answerMapOne + "</b> &#x2a2f;";
    console.log("Comparison of results", resultsMapOne);
    let percentageMapOne = zoneCalcMapOne * 0.2;
    let valueHighCheckedMapOne = zoneCalcMapOne + percentageMapOne;
    let valueLowCheckedMapOne = zoneCalcMapOne - percentageMapOne;
    console.log("+20%", valueHighCheckedMapOne);
    console.log("-20%", valueLowCheckedMapOne);

    // Convert all numbers to absolute for checking
    // Allow up to 20% difference on student answers - this can be changed in the percentageMapOne variable
    let absoluteValueMapOne = Math.abs(valueHighCheckedMapOne);
    let absoluteValueMapOne2 = Math.abs(valueLowCheckedMapOne);
    let userInputMapOne = document.getElementById("userInputMapOne").value;
    if (userInputMapOne === "") {
      alert("You need to add the value you got for the calculation before submitting.");
      return false;
    }
    let userResultMapOne;
    if ((userInputMapOne > absoluteValueMapOne) && (answerMapOne === zoneOutcomeMapOne)) {
      userResultMapOne = "But your value of <b>" + userInputMapOne + " m</b> is too high.";
    } else if ((userInputMapOne < absoluteValueMapOne2) && (answerMapOne === zoneOutcomeMapOne)) {
      userResultMapOne = "But your value of <b>" + userInputMapOne + " m</b> is too low.";
    } else if ((userInputMapOne > absoluteValueMapOne) && (answerMapOne !== zoneOutcomeMapOne)) {
      userResultMapOne = "And your value of <b>" + userInputMapOne + " m</b> is too high.";
    } else if ((userInputMapOne < absoluteValueMapOne2) && (answerMapOne !== zoneOutcomeMapOne)) {
      userResultMapOne = "And your value of <b>" + userInputMapOne + " m</b> is too low.";
    } else if ((userInputMapOne === perfMapOne) && (answerMapOne !== zoneOutcomeMapOne)) {
      userResultMapOne ="Although your value of <b>" + userInputMapOne + " m</b> is perfect, \nthe type of zone needs correction.";
    } else if ((userInputMapOne === perfMapOne) && (answerMapOne === zoneOutcomeMapOne)) {
      userResultMapOne ="Your value of <b>" + userInputMapOne + " m</b> is perfect.";
    } else if (answerMapOne !== zoneOutcomeMapOne) {
      userResultMapOne ="Although your value of <b>" + userInputMapOne + " m</b> is close, \nthe type of zone needs correction.";  
    } else userResultMapOne = "Your value of <b>" + userInputMapOne + " m</b> fits well in this \nscenario.";
    console.log("User result", userResultMapOne);

    //Outputs generated for the user to check their work
    document.getElementById("MapOneResultOne").innerHTML = resultsMapOne;
    document.getElementById("MapOneResultTwo").innerHTML = userResultMapOne;
    document.getElementById("MapOneResultThree").innerHTML = "Our calculations: <b>" + Math.abs(zoneCalcMapOne).toFixed(2) + " m</b> " + zoneOutcomeMapOne  + ".";

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
   drygood: Math.random() * (0.9 - 0.8) + 0.8,
    dryaverage: Math.random() * (0.8 - 0.75) + 0.75,
    drybad: Math.random() * (0.75 - 0.7) + 0.7,
    lightraingood: Math.random() * (0.7 - 0.65) + 0.65,
    mediumraingood:Math.random() * (0.65 - 0.62) + 0.62,
    heavyraingood: Math.random() * (0.62 - 0.6) + 0.6,
    lightrainaverage: Math.random() * (0.6 - 0.55) + 0.55,
    mediumrainaverage: Math.random() * (0.55 - 0.52) + 0.52,
    heavyrainaverage: Math.random() * (0.52 - 0.5) + 0.5,
    lightrainbad: Math.random() * (0.5 - 0.45) + 0.45,
    mediumrainbad: Math.random() * (0.45 - 0.42) + 0.42,
    heavyrainbad: Math.random() * (0.42 - 0.4) + 0.4,
  };

  let carLengthMapTwo = Math.random() * (5.89 - 3.8) + 3.8;

  const tiresMapTwo = ["good", "average", "bad"];
  const tireConditionMapTwo = Math.floor(Math.random() * tiresMapTwo.length);
  const keyCondMapTwo = tiresMapTwo[tireConditionMapTwo];
  console.log("Tire conditions", tireConditionMapTwo, tiresMapTwo[tireConditionMapTwo]);

  const climateMapTwo = ["dry", "light rain", "medium rain", "heavy rain"];
  const ClimateConditionMapTwo = Math.floor(Math.random() * climateMapTwo.length);
  const keyClimMapTwo = climateMapTwo[ClimateConditionMapTwo];
  console.log("Climate Conditions", ClimateConditionMapTwo, climateMapTwo[ClimateConditionMapTwo]);

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
    mapTwoCoefficient = conditionsMapTwo[keyClimMapTwo.replace(/\s+/g, "") + keyCondMapTwo];
    console.log("Lenght of intersection = ", mapTwoIntersection);
    // Calculate the going distance
    let distancePhaseMapTwo = ((mapTwoInitialVelocity * (mapTwoYellowPhase + mapTwoInterphase)) - mapTwoLength).toFixed(2);
    console.log("Initial Velocity", mapTwoInitialVelocity, "Yellow phase", mapTwoYellowPhase, "Interphase", mapTwoInterphase, "Car length", carLengthMapTwo);
    console.log("Distance during yellow and interphase", distancePhaseMapTwo);


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

    let perfMapTwo = Math.abs(zoneCalcMapTwo).toFixed(2);
    console.log("Zone outcome absolute and 2dp", perfMapTwo);

    // Check the type of zone the user has input
    let MapTwoZone = document.querySelector('input[name="MapTwoZone"]:checked').value;
    let answerMapTwo;
    if (MapTwoZone === "ozCheckedMapTwo") {
      answerMapTwo = "Option Zone";
    } else if (MapTwoZone === "dzCheckedMapTwo") {
      answerMapTwo = "Dilemma Zone";
    } else answerMapTwo = false;
    console.log(MapTwoZone);
    console.log(answerMapTwo);

    let resultsMapTwo;
    if (answerMapTwo === zoneOutcomeMapTwo) {
      resultsMapTwo = "You said: <b>" + answerMapTwo + "</b> &#x2713;";
    } else resultsMapTwo = "You said: <b>" + answerMapTwo + "</b> &#x2a2f;";
    console.log("Comparison of results", resultsMapTwo);
    let percentageMapTwo = zoneCalcMapTwo * 0.2;
    let valueHighCheckedMapTwo = zoneCalcMapTwo + percentageMapTwo;
    let valueLowCheckedMapTwo = zoneCalcMapTwo - percentageMapTwo;
    console.log("Absolute value high", valueHighCheckedMapTwo);
    console.log("Absolute value low", valueLowCheckedMapTwo);

    // Convert all numbers to absolute for checking
    // Allow up to 20% difference on student answers - this can be changed in the percentageMapTwo variable
    let absoluteValueMapTwo = Math.abs(valueHighCheckedMapTwo);
    let absoluteValueMapTwo2 = Math.abs(valueLowCheckedMapTwo);
    let userInputMapTwo = document.getElementById("userInputMapTwo").value;
    if (userInputMapTwo === "") {
      alert("You need to add the value you got for the calculation before submitting.");
      return false;
    }
    let userResultMapTwo;
    if ((userInputMapTwo > absoluteValueMapTwo) && (answerMapTwo === zoneOutcomeMapTwo)) {
      userResultMapTwo = "But your value of <b>" + userInputMapTwo + " m</b> is too high.";
    } else if ((userInputMapTwo < absoluteValueMapTwo2) && (answerMapTwo === zoneOutcomeMapTwo)) {
      userResultMapTwo = "But your value of <b>" + userInputMapTwo + " m</b> is too low.";
    } else if ((userInputMapTwo > absoluteValueMapTwo) && (answerMapTwo !== zoneOutcomeMapTwo)) {
      userResultMapTwo = "And your value of <b>" + userInputMapTwo + " m</b> is too high.";
    } else if ((userInputMapTwo < absoluteValueMapTwo2) && (answerMapTwo !== zoneOutcomeMapTwo)) {
      userResultMapTwo = "And your value of <b>" + userInputMapTwo + " m</b> is too low.";
    } else if ((userInputMapTwo === perfMapTwo) && (answerMapTwo !== zoneOutcomeMapTwo)) {
      userResultMapTwo ="Although your value of <b>" + userInputMapTwo + " m</b> is perfect, \nthe type of zone needs correction.";
    } else if ((userInputMapTwo === perfMapTwo) && (answerMapTwo === zoneOutcomeMapTwo)) {
      userResultMapTwo ="Your value of <b>" + userInputMapTwo + " m</b> is perfect.";
    } else if (answerMapTwo !== zoneOutcomeMapTwo) {
      userResultMapTwo ="Although your value of <b>" + userInputMapTwo + " m</b> is close, \nthe type of zone needs correction.";            
    } else userResultMapTwo = "Your value of <b>" + userInputMapTwo + " m</b> fits well in this \nscenario.";
    console.log("User result", userResultMapTwo);

    //Outputs generated for the user to check their work
    document.getElementById("MapTwoResultOne").innerHTML = resultsMapTwo;
    document.getElementById("MapTwoResultTwo").innerHTML = userResultMapTwo;
    document.getElementById("MapTwoResultThree").innerHTML = "Our calculations: <b>" + Math.abs(zoneCalcMapTwo).toFixed(2) + " m</b> " + zoneOutcomeMapTwo  + ".";

  } // Calculation Checker MapTwo
} // Main function randomScenario MapTwo

// Map Three, USA
document.getElementById("randomScenarioMapThree").addEventListener("click", MapThreeVariables);

function MapThreeVariables() {
  // Remove the "disabled" attribute on the Current Scenario button
  let currentScenario3 = document.getElementById("current-map-3");
  currentScenario3.removeAttribute("disabled");
  let velocityMapThree = Math.random() * (85 - 55) + 55;
  let yellowPhaseMapThree = Math.random() * (5.5 - 4.6) + 4.6;
  let interPhaseMapThree = Math.random() * (2.4 - 1.8) + 1.8;
  let reactionTimeMapThree = Math.random() * (2.5 - 0.4) + 0.4;

  // Friction for Map Three
  let conditionsMapThree = {
    drygood: Math.random() * (0.9 - 0.8) + 0.8,
    dryaverage: Math.random() * (0.8 - 0.75) + 0.75,
    drybad: Math.random() * (0.75 - 0.7) + 0.7,
    lightraingood: Math.random() * (0.7 - 0.65) + 0.65,
    mediumraingood:Math.random() * (0.65 - 0.62) + 0.62,
    heavyraingood: Math.random() * (0.62 - 0.6) + 0.6,
    lightrainaverage: Math.random() * (0.6 - 0.55) + 0.55,
    mediumrainaverage: Math.random() * (0.55 - 0.52) + 0.52,
    heavyrainaverage: Math.random() * (0.52 - 0.5) + 0.5,
    lightrainbad: Math.random() * (0.5 - 0.45) + 0.45,
    mediumrainbad: Math.random() * (0.45 - 0.42) + 0.42,
    heavyrainbad: Math.random() * (0.42 - 0.4) + 0.4,
    lightsnowgood: Math.random() * (0.5 - 0.46) + 0.46,
    mediumsnowgood:Math.random() * (0.46 - 0.42) + 0.42,
    heavysnowgood: Math.random() * (0.42 - 0.4) + 0.4,
    lightsnowaverage: Math.random() * (0.4 - 0.36) + 0.36,
    mediumsnowaverage: Math.random() * (0.36 - 0.32) + 0.32,
    heavysnowaverage: Math.random() * (0.32 - 0.3) + 0.3,
    lightsnowbad: Math.random() * (0.3 - 0.26) + 0.26,
    mediumsnowbad: Math.random() * (0.26 - 0.22) + 0.22,
    heavysnowbad: Math.random() * (0.22 - 0.2) + 0.2,
    lighticegood: Math.random() * (0.3 - 0.26) + 0.26,
    veryicygood: Math.random() * (0.26 - 0.18) + 0.22,
    severeicegood: Math.random() * (0.18 - 0.12) + 0.12,
    lighticeaverage: Math.random() * (0.2 - 0.16) + 0.16,
    veryicyaverage: Math.random() * (0.16 - 0.12) + 0.12,
    severeiceaverage: Math.random() * (0.12 - 0.1) + 0.1,
    lighticebad: Math.random() * (0.12 - 0.11) + 0.11,
    veryicybad: Math.random() * (0.11 - 0.105) + 0.105,
    severeicebad: Math.random() * (0.105 - 0.1) + 0.1, 
  };

  let carLengthMapThree = Math.random() * (5.89 - 3.8) + 3.8;

  const tiresMapThree = ["good", "average", "bad"];
  const tireConditionMapThree = Math.floor(Math.random() * tiresMapThree.length);
  const keyCondMapThree = tiresMapThree[tireConditionMapThree];
  console.log("Tire conditions", tireConditionMapThree, tiresMapThree[tireConditionMapThree]);

  const climateMapThree = ["dry", "light rain", "medium rain", "heavy rain", "light snow", "medium snow", "heavy snow", "light ice", "very icy", "severe ice"];
  const ClimateConditionMapThree = Math.floor(Math.random() * climateMapThree.length);
  const keyClimMapThree = climateMapThree[ClimateConditionMapThree];
  console.log("Climate Conditions", ClimateConditionMapThree, climateMapThree[ClimateConditionMapThree]);

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
    MapThreeCoefficient = conditionsMapThree[keyClimMapThree.replace(/\s+/g, "") + keyCondMapThree];
    console.log("Lenght of intersection = ", MapThreeIntersection);
    // Calculate the going distance
    let distancePhaseMapThree = ((MapThreeInitialVelocity * (MapThreeYellowPhase + MapThreeInterphase)) - MapThreeLength).toFixed(2);
    console.log("Initial Velocity", MapThreeInitialVelocity, "Yellow phase", MapThreeYellowPhase, "Interphase", MapThreeInterphase, "Car length", carLengthMapThree);
    console.log("Distance during yellow and interphase", distancePhaseMapThree);

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

    let perfMapThree = Math.abs(zoneCalcMapThree).toFixed(2);
    console.log("Zone outcome absolute and 2dp", perfMapThree);
    // Check the type of zone the user has input
    let MapThreeZone = document.querySelector('input[name="MapThreeZone"]:checked').value;
    let answerMapThree;
    if (MapThreeZone === "ozCheckedMapThree") {
      answerMapThree = "Option Zone";
    } else if (MapThreeZone === "dzCheckedMapThree") {
      answerMapThree = "Dilemma Zone";
    } else answerMapThree = false;
    console.log(MapThreeZone);
    console.log(answerMapThree);

    let resultsMapThree;
    if (answerMapThree === zoneOutcomeMapThree) {
      resultsMapThree = "You said: <b>" + answerMapThree + "</b> &#x2713;";
    } else resultsMapThree = "You said: <b>" + answerMapThree + "</b> &#x2a2f;";
 console.log("Comparison of results", resultsMapThree);
    let percentageMapThree = zoneCalcMapThree * 0.2;
    let valueHighCheckedMapThree = zoneCalcMapThree + percentageMapThree;
    let valueLowCheckedMapThree = zoneCalcMapThree - percentageMapThree;
    console.log(valueHighCheckedMapThree);
    console.log(valueLowCheckedMapThree);

    // Convert all numbers to absolute for checking
    // Allow up to 20% difference on student answers - this can be changed in the percentageMapThree variable
    let absoluteValueMapThree = Math.abs(valueHighCheckedMapThree);
    let absoluteValueMapThree2 = Math.abs(valueLowCheckedMapThree);
    let userInputMapThree = document.getElementById("userInputMapThree").value;
    if (userInputMapThree === "") {
      alert("You need to add the value you got for the calculation before submitting.");
      return false;
    }
   let userResultMapThree;
    if ((userInputMapThree > absoluteValueMapThree) && (answerMapThree === zoneOutcomeMapThree)) {
      userResultMapThree = "But your value of <b>" + userInputMapThree + " m</b> is too high.";
    } else if ((userInputMapThree < absoluteValueMapThree2) && (answerMapThree === zoneOutcomeMapThree)) {
      userResultMapThree = "But your value of <b>" + userInputMapThree + " m</b> is too low.";
    } else if ((userInputMapThree > absoluteValueMapThree) && (answerMapThree !== zoneOutcomeMapThree)) {
      userResultMapThree = "And your value of <b>" + userInputMapThree + " m</b> is too high.";
    } else if ((userInputMapThree < absoluteValueMapThree2) && (answerMapThree !== zoneOutcomeMapThree)) {
      userResultMapThree = "And your value of <b>" + userInputMapThree + " m</b> is too low.";
    } else if ((userInputMapThree === perfMapThree) && (answerMapThree !== zoneOutcomeMapThree)) {
      userResultMapThree ="Although your value of <b>" + userInputMapThree + " m</b> is perfect, \nthe type of zone needs correction.";
    } else if ((userInputMapThree === perfMapThree) && (answerMapThree === zoneOutcomeMapThree)) {
      userResultMapThree ="Your value of <b>" + userInputMapThree + " m</b> is perfect.";
    } else if (answerMapThree !== zoneOutcomeMapThree) {
      userResultMapThree ="Although your value of <b>" + userInputMapThree + " m</b> is close, \nthe type of zone needs correction.";  
    } else userResultMapThree = "Your value of <b>" + userInputMapThree + " m</b> fits well in this \nscenario.";
    console.log(userResultMapThree);

    //Outputs generated for the user to check their work
    document.getElementById("MapThreeResultOne").innerHTML = resultsMapThree;
    document.getElementById("MapThreeResultTwo").innerHTML = userResultMapThree;
    document.getElementById("MapThreeResultThree").innerHTML = "Our calculations: <b>" + Math.abs(zoneCalcMapThree).toFixed(2) + " m</b> " + zoneOutcomeMapThree  + ".";

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
    drygood: Math.random() * (0.9 - 0.8) + 0.8,
    dryaverage: Math.random() * (0.8 - 0.75) + 0.75,
    drybad: Math.random() * (0.75 - 0.7) + 0.7,
    lightraingood: Math.random() * (0.7 - 0.65) + 0.65,
    mediumraingood:Math.random() * (0.65 - 0.62) + 0.62,
    heavyraingood: Math.random() * (0.62 - 0.6) + 0.6,
    lightrainaverage: Math.random() * (0.6 - 0.55) + 0.55,
    mediumrainaverage: Math.random() * (0.55 - 0.52) + 0.52,
    heavyrainaverage: Math.random() * (0.52 - 0.5) + 0.5,
    lightrainbad: Math.random() * (0.5 - 0.45) + 0.45,
    mediumrainbad: Math.random() * (0.45 - 0.42) + 0.42,
    heavyrainbad: Math.random() * (0.42 - 0.4) + 0.4,
    lightsnowgood: Math.random() * (0.5 - 0.46) + 0.46,
    mediumsnowgood:Math.random() * (0.46 - 0.42) + 0.42,
    heavysnowgood: Math.random() * (0.42 - 0.4) + 0.4,
    lightsnowaverage: Math.random() * (0.4 - 0.36) + 0.36,
    mediumsnowaverage: Math.random() * (0.36 - 0.32) + 0.32,
    heavysnowaverage: Math.random() * (0.32 - 0.3) + 0.3,
    lightsnowbad: Math.random() * (0.3 - 0.26) + 0.26,
    mediumsnowbad: Math.random() * (0.26 - 0.22) + 0.22,
    heavysnowbad: Math.random() * (0.22 - 0.2) + 0.2,
    lighticegood: Math.random() * (0.3 - 0.26) + 0.26,
    veryicygood: Math.random() * (0.26 - 0.18) + 0.22,
    severeicegood: Math.random() * (0.18 - 0.12) + 0.12,
    lighticeaverage: Math.random() * (0.2 - 0.16) + 0.16,
    veryicyaverage: Math.random() * (0.16 - 0.12) + 0.12,
    severeiceaverage: Math.random() * (0.12 - 0.1) + 0.1,
    lighticebad: Math.random() * (0.12 - 0.11) + 0.11,
    veryicybad: Math.random() * (0.11 - 0.105) + 0.105,
    severeicebad: Math.random() * (0.105 - 0.1) + 0.1, 
  };

  let carLengthMapFour = Math.random() * (5.89 - 3.8) + 3.8;

  const tiresMapFour = ["good", "average", "bad"];
  const tireConditionMapFour = Math.floor(Math.random() * tiresMapFour.length);
  const keyCondMapFour = tiresMapFour[tireConditionMapFour];
  console.log("Tire conditions", tireConditionMapFour, tiresMapFour[tireConditionMapFour]);

  const climateMapFour = ["dry", "light rain", "medium rain", "heavy rain", "light snow", "light ice"];
  const ClimateConditionMapFour = Math.floor(Math.random() * climateMapFour.length);
  const keyClimMapFour = climateMapFour[ClimateConditionMapFour];
  console.log("Climate Conditions", ClimateConditionMapFour, climateMapFour[ClimateConditionMapFour]);

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
    MapFourCoefficient = conditionsMapFour[keyClimMapFour.replace(/\s+/g, "") + keyCondMapFour];
    console.log("Lenght of intersection = ", MapFourIntersection);
    // Calculate the going distance
    let distancePhaseMapFour = ((MapFourInitialVelocity * (MapFourYellowPhase + MapFourInterphase)) - MapFourLength).toFixed(2);
    console.log("Initial Velocity", MapFourInitialVelocity, "Yellow phase", MapFourYellowPhase, "Interphase", MapFourInterphase, "Car length", carLengthMapFour);
    console.log("Distance during yellow and interphase", distancePhaseMapFour);


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

    let perfMapFour = Math.abs(zoneCalcMapFour).toFixed(2);
    console.log("Zone outcome absolute and 2dp", perfMapFour);

    // Check the type of zone the user has input
    let MapFourZone = document.querySelector('input[name="MapFourZone"]:checked').value;
    let answerMapFour;
    if (MapFourZone === "ozCheckedMapFour") {
      answerMapFour = "Option Zone";
    } else if (MapFourZone === "dzCheckedMapFour") {
      answerMapFour = "Dilemma Zone";
    } else answerMapFour = false;
    console.log(MapFourZone);
    console.log(answerMapFour);

    let resultsMapFour;
    if (answerMapFour === zoneOutcomeMapFour) {
      resultsMapFour = "You said: <b>" + answerMapFour + "</b> &#x2713;";
    } else resultsMapFour = "You said: <b>" + answerMapFour + "</b> &#x2a2f;";
    console.log("Comparison of results", resultsMapFour);
    let percentageMapFour = zoneCalcMapFour * 0.2;
    let valueHighCheckedMapFour = zoneCalcMapFour + percentageMapFour;
    let valueLowCheckedMapFour = zoneCalcMapFour - percentageMapFour;
    console.log(valueHighCheckedMapFour);
    console.log(valueLowCheckedMapFour);

    // Convert all numbers to absolute for checking
    // Allow up to 20% difference on student answers - this can be changed in the percentageMapFour variable
    let absoluteValueMapFour = Math.abs(valueHighCheckedMapFour);
    let absoluteValueMapFour2 = Math.abs(valueLowCheckedMapFour);
    let userInputMapFour = document.getElementById("userInputMapFour").value;
    if (userInputMapFour === "") {
      alert("You need to add the value you got for the calculation before submitting.");
      return false;
    }
    let userResultMapFour;
    if ((userInputMapFour > absoluteValueMapFour) && (answerMapFour === zoneOutcomeMapFour)) {
      userResultMapFour = "But your value of <b>" + userInputMapFour + " m</b> is too high.";
    } else if ((userInputMapFour < absoluteValueMapFour2) && (answerMapFour === zoneOutcomeMapFour)) {
      userResultMapFour = "But your value of <b>" + userInputMapFour + " m</b> is too low.";
    } else if ((userInputMapFour > absoluteValueMapFour) && (answerMapFour !== zoneOutcomeMapFour)) {
      userResultMapFour = "And your value of <b>" + userInputMapFour + " m</b> is too high.";
    } else if ((userInputMapFour < absoluteValueMapFour2) && (answerMapFour !== zoneOutcomeMapFour)) {
      userResultMapFour = "And your value of <b>" + userInputMapFour + " m</b> is too low.";
    } else if ((userInputMapFour === perfMapFour) && (answerMapFour !== zoneOutcomeMapFour)) {
      userResultMapFour ="Although your value of <b>" + userInputMapFour + " m</b> is perfect, \nthe type of zone needs correction.";
    } else if ((userInputMapFour === perfMapFour) && (answerMapFour === zoneOutcomeMapFour)) {
      userResultMapFour ="Your value of <b>" + userInputMapFour + " m</b> is perfect.";
    } else if (answerMapFour !== zoneOutcomeMapFour) {
      userResultMapFour ="Although your value of <b>" + userInputMapFour + " m</b> is close, \nthe type of zone needs correction.";  
    } else userResultMapFour = "Your value of <b>" + userInputMapFour + " m</b> fits well in this \nscenario.";
    console.log(userResultMapFour);

    //Outputs generated for the user to check their work
    document.getElementById("MapFourResultOne").innerHTML = resultsMapFour;
    document.getElementById("MapFourResultTwo").innerHTML = userResultMapFour;
    document.getElementById("MapFourResultThree").innerHTML = "Our calculations: <b>" + Math.abs(zoneCalcMapFour).toFixed(2) + " m</b> " + zoneOutcomeMapFour + ".";

  } // Calculation Checker MapFour ends
} // Main function randomScenario MapFour ends

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
    drygood: Math.random() * (0.9 - 0.8) + 0.8,
    dryaverage: Math.random() * (0.8 - 0.75) + 0.75,
    drybad: Math.random() * (0.75 - 0.7) + 0.7,
    lightraingood: Math.random() * (0.7 - 0.65) + 0.65,
    mediumraingood:Math.random() * (0.65 - 0.62) + 0.62,
    heavyraingood: Math.random() * (0.62 - 0.6) + 0.6,
    lightrainaverage: Math.random() * (0.6 - 0.55) + 0.55,
    mediumrainaverage: Math.random() * (0.55 - 0.52) + 0.52,
    heavyrainaverage: Math.random() * (0.52 - 0.5) + 0.5,
    lightrainbad: Math.random() * (0.5 - 0.45) + 0.45,
    mediumrainbad: Math.random() * (0.45 - 0.42) + 0.42,
    heavyrainbad: Math.random() * (0.42 - 0.4) + 0.4,
  };

  let carLengthMapFive = Math.random() * (5.89 - 3.8) + 3.8;

  const tiresMapFive = ["good", "average", "bad"];
  const tireConditionMapFive = Math.floor(Math.random() * tiresMapFive.length);
  const keyCondMapFive = tiresMapFive[tireConditionMapFive];
  console.log("Tire conditions", tireConditionMapFive, tiresMapFive[tireConditionMapFive]);

  const climateMapFive = ["dry", "light rain", "medium rain", "heavy rain"];
  const ClimateConditionMapFive = Math.floor(Math.random() * climateMapFive.length);
  const keyClimMapFive = climateMapFive[ClimateConditionMapFive];
  console.log("Climate Conditions", ClimateConditionMapFive, climateMapFive[ClimateConditionMapFive]);

  document.getElementById("map-5-initialVelocity").innerHTML = velocityMapFive.toFixed(2) + " kmh<sup>-1</sup>";
  document.getElementById("map-5-ylPhase").innerHTML = yellowPhaseMapFive.toFixed(1) + " s";
  document.getElementById("map-5-rlPhase").innerHTML = interPhaseMapFive.toFixed(1) + " s";
  document.getElementById("map-5-rtRandom").innerHTML = reactionTimeMapFive.toFixed(3) + " s";
  document.getElementById("map-5-tireCondition").innerHTML = tiresMapFive[tireConditionMapFive];
  document.getElementById("map-5-weatherCondition").innerHTML = climateMapFive[ClimateConditionMapFive];
  document.getElementById("map-5-carLength").innerHTML = carLengthMapFive.toFixed(1);

  // The calculation checker:
  document.getElementById("map-5-submit").addEventListener("click", calculateScenarioMapFive);

  function calculateScenarioMapFive() {
    MapFiveInitialVelocity = velocityMapFive / 3.6;
    MapFiveYellowPhase = yellowPhaseMapFive;
    MapFiveInterphase = interPhaseMapFive;
    MapFiveReactionTime = reactionTimeMapFive;
    MapFiveIntersection = 51.50;
    MapFiveLength = carLengthMapFive;
    MapFiveCoefficient = conditionsMapFive[keyClimMapFive.replace(/\s+/g, "") + keyCondMapFive];
    console.log("Lenght of intersection = ", MapFiveIntersection);
    // Calculate the going distance
    let distancePhaseMapFive = ((MapFiveInitialVelocity * (MapFiveYellowPhase + MapFiveInterphase)) - MapFiveLength).toFixed(2);
    console.log("Initial Velocity", MapFiveInitialVelocity, "Yellow phase", MapFiveYellowPhase, "Interphase", MapFiveInterphase, "Car length", carLengthMapFive);
    console.log("Distance during yellow and interphase", distancePhaseMapFive);

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

    let perfMapFive = Math.abs(zoneCalcMapFive).toFixed(2);
    console.log("Zone outcome absolute and 2dp", perfMapFive);

    // Check the type of zone the user has input
    let MapFiveZone = document.querySelector('input[name="MapFiveZone"]:checked').value;
    let answerMapFive;
    if (MapFiveZone === "ozCheckedMapFive") {
      answerMapFive = "Option Zone";
    } else if (MapFiveZone === "dzCheckedMapFive") {
      answerMapFive = "Dilemma Zone";
    } else answerMapFive = false;
    console.log(MapFiveZone);
    console.log(answerMapFive);

    let resultsMapFive;
    if (answerMapFive === zoneOutcomeMapFive) {
      resultsMapFive = "You said: <b>" + answerMapFive + "</b> &#x2713;";
    } else resultsMapFive = "You said: <b>" + answerMapFive + "</b> &#x2a2f;";
    console.log(resultsMapFive);
    let percentageMapFive = zoneCalcMapFive * 0.2;
    let valueHighCheckedMapFive = zoneCalcMapFive + percentageMapFive;
    let valueLowCheckedMapFive = zoneCalcMapFive - percentageMapFive;
    console.log(valueHighCheckedMapFive);
    console.log(valueLowCheckedMapFive);

    // Convert all numbers to absolute for checking
    // Allow up to 20% difference on student answers - this can be changed in the percentageMapFive variable
    let absoluteValueMapFive = Math.abs(valueHighCheckedMapFive);
    let absoluteValueMapFive2 = Math.abs(valueLowCheckedMapFive);
    let userInputMapFive = document.getElementById("userInputMapFive").value;
    if (userInputMapFive === "") {
      alert("You need to add the value you got for the calculation before submitting.");
      return false;
    }
    let userResultMapFive;
    if ((userInputMapFive > absoluteValueMapFive) && (answerMapFive === zoneOutcomeMapFive)) {
      userResultMapFive = "But your value of <b>" + userInputMapFive + " m</b> is too high.";
    } else if ((userInputMapFive < absoluteValueMapFive2) && (answerMapFive === zoneOutcomeMapFive)) {
      userResultMapFive = "But your value of <b>" + userInputMapFive + " m</b> is too low.";
    } else if ((userInputMapFive > absoluteValueMapFive) && (answerMapFive !== zoneOutcomeMapFive)) {
      userResultMapFive = "And your value of <b>" + userInputMapFive + " m</b> is too high.";
    } else if ((userInputMapFive < absoluteValueMapFive2) && (answerMapFive !== zoneOutcomeMapFive)) {
      userResultMapFive = "And your value of <b>" + userInputMapFive + " m</b> is too low.";
    } else if ((userInputMapFive === perfMapFive) && (answerMapFive !== zoneOutcomeMapFive)) {
      userResultMapFive ="Although your value of <b>" + userInputMapFive + " m</b> is perfect, \nthe type of zone needs correction.";
    } else if ((userInputMapFive === perfMapFive) && (answerMapFive === zoneOutcomeMapFive)) {
      userResultMapFive ="Your value of <b>" + userInputMapFive + " m</b> is perfect.";
    } else if (answerMapFive !== zoneOutcomeMapFive) {
      userResultMapFive ="Although your value of <b>" + userInputMapFive + " m</b> is close, \nthe type of zone needs correction.";  
    } else userResultMapFive = "Your value of <b>" + userInputMapFive + " m</b> fits well in this \nscenario.";
    console.log(userResultMapFive);

    //Outputs generated for the user to check their work
    document.getElementById("MapFiveResultOne").innerHTML = resultsMapFive;
    document.getElementById("MapFiveResultTwo").innerHTML = userResultMapFive;
    document.getElementById("MapFiveResultThree").innerHTML = "Our calculations: <b>" + Math.abs(zoneCalcMapFive).toFixed(2) + " m</b> " + zoneOutcomeMapFive  + ".";

  } // End of calculations

 }

