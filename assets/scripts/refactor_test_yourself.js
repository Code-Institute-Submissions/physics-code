/* refactored */
// Allow up to two decimal places only in all inputs
let validate = function(e) {
  let t = e.value;
  e.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
}

var mapNumber;

const mybuttons = document.querySelectorAll('.mybuttons button');
mybuttons.forEach(mybutton => {
  mybutton.addEventListener('click', processClick);
});

function processClick() {
  window.mapNumber = this.id; // the id of the clicked button
}
console.log("The button push check", mapNumber);

document.getElementById("One").addEventListener("click", mapVariables);
document.getElementById("Two").addEventListener("click", mapVariables);
document.getElementById("Three").addEventListener("click", mapVariables);
document.getElementById("Four").addEventListener("click", mapVariables);
document.getElementById("Five").addEventListener("click", mapVariables);

function mapVariables() {
  // Onclick this will allow the current attribute to be enabled
  let span_click = document.getElementById(mapNumber + "Current");
  span_click.classList.remove("no-click-span");
  // Objects and constants identical for each map
  const conditions = {
    drygood: Math.random() * (0.9 - 0.8) + 0.8,
    dryaverage: Math.random() * (0.8 - 0.75) + 0.75,
    drybad: Math.random() * (0.75 - 0.7) + 0.7,
    lightraingood: Math.random() * (0.7 - 0.65) + 0.65,
    mediumraingood: Math.random() * (0.65 - 0.62) + 0.62,
    heavyraingood: Math.random() * (0.62 - 0.6) + 0.6,
    lightrainaverage: Math.random() * (0.6 - 0.55) + 0.55,
    mediumrainaverage: Math.random() * (0.55 - 0.52) + 0.52,
    heavyrainaverage: Math.random() * (0.52 - 0.5) + 0.5,
    lightrainbad: Math.random() * (0.5 - 0.45) + 0.45,
    mediumrainbad: Math.random() * (0.45 - 0.42) + 0.42,
    heavyrainbad: Math.random() * (0.42 - 0.4) + 0.4,
    lightsnowgood: Math.random() * (0.5 - 0.46) + 0.46,
    mediumsnowgood: Math.random() * (0.46 - 0.42) + 0.42,
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

  const tires = ["good", "average", "bad"];
  const tireCondition = Math.floor(Math.random() * tires.length);
  const keyCond = tires[tireCondition];
  console.log("Tire conditions", tireCondition, tires[tireCondition]);

  let climate;
  if (mapNumber === "One" || mapNumber === "Three") {
    climate = ["dry", "dry", "dry", "dry", "light rain", "medium rain", "heavy rain", "light snow", "medium snow", "heavy snow", "light ice", "very icy", "severe ice"];
    climateCondition = Math.floor(Math.random() * climate.length);
    keyClim = climate[climateCondition];
  } else if (mapNumber === "Two") {
    climate = ["dry", "dry", "dry", "light rain", "medium rain", "heavy rain"];
    climateCondition = Math.floor(Math.random() * climate.length);
    keyClim = climate[climateCondition];
  } else if (mapNumber === "Four") {
    climate = ["dry", "light rain", "medium rain", "heavy rain", "light snow", "light ice"];
    climateCondition = Math.floor(Math.random() * climate.length);
    keyClim = climate[climateCondition];
  } else if (mapNumber === "Five") {
    climate = ["dry", "light rain", "medium rain", "heavy rain"];
    climateCondition = Math.floor(Math.random() * climate.length);
    keyClim = climate[climateCondition];
  } else climate = false;
  console.log("Climate conditions", climateCondition, climate[climateCondition]);
  console.log("Map number?", mapNumber); 
  let carLength = Math.random() * (5.89 - 3.8) + 3.8;
  let reactionTime = Math.random() * (2.5 - 0.4) + 0.4;

  let velocity, yellowPhase, interPhase;
  if (mapNumber === "One" || mapNumber === "Four" || mapNumber === "Five") {
    velocity = Math.random() * (65 - 35) + 35;
    yellowPhase = Math.random() * (4.4 - 3.8) + 3.7;
    interPhase = Math.random() * (2.4 - 1.8) + 1.8;
  } else velocity = Math.random() * (105 - 65) + 65;
  yellowPhase = Math.random() * (5.0 - 4.0) + 4.0;
  interPhase = Math.random() * (3 - 2) + 2;

  // Onclick get the mapNumber and add it to the variable.
  document.getElementById(mapNumber + "initialVelocity").innerHTML = velocity.toFixed(2) + " kmh<sup>-1</sup>";
  document.getElementById(mapNumber + "Phase").innerHTML = yellowPhase.toFixed(1) + " s";
  document.getElementById(mapNumber + "rlPhase").innerHTML = interPhase.toFixed(1) + " s";
  document.getElementById(mapNumber + "rtRandom").innerHTML = reactionTime.toFixed(3) + " s";
  document.getElementById(mapNumber + "tireCondition").innerHTML = tires[tireCondition];
  document.getElementById(mapNumber + "weatherCondition").innerHTML = climate[climateCondition];
  document.getElementById(mapNumber + "carLength").innerHTML = carLength.toFixed(1);

  let intersection;
  if (mapNumber === "One") {
    intersection = 52;
  } else if (mapNumber === "Two") {
    intersection = 79.75;
  } else if (mapNumber === "Three") {
    intersection = 66.18;
  } else if (mapNumber === "Four") {
    intersection = 43.8;
  } else if (mapNumber === "Five") {
    intersection = 51.5;
  } else false;
  console.log("Intersection size", intersection);
  document.getElementById(mapNumber + "submit").addEventListener("click", calculateScenario);

  function calculateScenario() {
    // Convert km/h into m/s and get climate and tire data to output a coefficient of friction
    let initialVelocity = velocity / 3.6;
    let coefficient = conditions[keyClim.replace(/\s+/g, "") + keyCond];

    // Calculate the going distance during yellow and interpahase subtract car length
    let distancePhase = ((initialVelocity * (yellowPhase + interPhase)) - carLength).toFixed(2);
    console.log("Initial Velocity", initialVelocity, "Yellow phase", yellowPhase, "Interphase", interPhase, "Car length", carLength);
    console.log("Distance during yellow and interphase", distancePhase);
    console.log("Coefficient of Friction to be used", coefficient);

    // Calculate the stopping distance
    let reactionTimeDistance = (reactionTime * initialVelocity);
    console.log("Distance travelled during reaction time", reactionTimeDistance);
    // Square the velocity for the stopping distance equation where 9.81 is due to gravity
    let velocitySquared = Math.pow(initialVelocity, 2);
    let stoppingDist = ((velocitySquared / (2 * coefficient * 9.81)) + reactionTimeDistance);
    console.log("Stopping distance", stoppingDist);

    // Is there a dilemma zone?
    let totalDistance = distancePhase - intersection;
    let zoneCalc = totalDistance - stoppingDist;
    console.log("Dilemma Zone Calc output", zoneCalc);
    // the end of the calculation function
    let zoneOutcome;
    if (zoneCalc > 0) {
      zoneOutcome = "Option Zone";
    } else if (zoneCalc <= 0) {
      zoneOutcome = "Dilemma Zone";
    } else zoneOutcome = false;
    console.log("Type of zone", zoneOutcome);

    let exactAnswer = Math.abs(zoneCalc).toFixed(2);
    console.log("Zone outcome as an absolute and 2dp", exactAnswer);

    // Check the type of zone the user has input
    let zone;
    if (mapNumber === "One") {
      zone = document.querySelector('input[name="MapOneZone"]:checked').value;
    } else if (mapNumber === "Two") {
      zone = document.querySelector('input[name="MapTwoZone"]:checked').value;
    } else if (mapNumber === "Three") {
      zone = document.querySelector('input[name="MapThreeZone"]:checked').value;
    } else if (mapNumber === "Four") {
      zone = document.querySelector('input[name="MapFourZone"]:checked').value;
    } else if (mapNumber === "Five") {
      zone = document.querySelector('input[name="MapFiveZone"]:checked').value;
    } else false;

    let answer;
    if (zone === "ozChecked" + mapNumber) {
      answer = "Option Zone";
    } else if (zone === "dzChecked" + mapNumber) {
      answer = "Dilemma Zone";
    } else answer = false;
    console.log("User answer", answer);

    let results;
    if (answer === zoneOutcome) {
      results = "You said: <b>" + answer + "</b> &#x2713;";
    } else results = "You said: <b>" + answer + "</b> &#x2a2f;";
    console.log("Comparison of results", results);
    let percentage = zoneCalc * 0.2;
    let valueHighChecked = zoneCalc + percentage;
    let valueLowChecked = zoneCalc - percentage;
    console.log("Upper limit for correct answer +20%", valueHighChecked);
    console.log("lower limit for correct answer -20%", valueLowChecked);

    // Convert all numbers to absolute for checking
    // Allow up to 20% difference on student answers - this can be changed in the percentage variable
    let absoluteValue = Math.abs(valueHighChecked);
    let absoluteValue2 = Math.abs(valueLowChecked);

    let userInput;
    if (mapNumber === "One") {
      userInput = document.getElementById("userInputMapOne").value;
    } else if (mapNumber === "Two") {
      userInput = document.getElementById("userInputMapTwo").value;
    } else if (mapNumber === "Three") {
      userInput = document.getElementById("userInputMapThree").value;
    } else if (mapNumber === "Four") {
      userInput = document.getElementById("userInputMapFour").value;
    } else if (mapNumber === "Five") {
      userInput = document.getElementById("userInputMapFive").value;
    } else alert("You need to add the value you got for the calculation before submitting.");

    let userResult;
    if ((userInput > absoluteValue) && (answer === zoneOutcome)) {
      userResult = "But your value of <b>" + userInput + " m</b> is too high.";
    } else if ((userInput < absoluteValue2) && (answer === zoneOutcome)) {
      userResult = "But your value of <b>" + userInput + " m</b> is too low.";
    } else if ((userInput > absoluteValue) && (answer !== zoneOutcome)) {
      userResult = "And your value of <b>" + userInput + " m</b> is too high.";
    } else if ((userInput < absoluteValue2) && (answer !== zoneOutcome)) {
      userResult = "And your value of <b>" + userInput + " m</b> is too low.";
    } else if ((userInput === exactAnswer) && (answer !== zoneOutcome)) {
      userResult = "Although your value of <b>" + userInput + " m</b> is perfect, the type of zone needs correction.";
    } else if ((userInput === exactAnswer) && (answer === zoneOutcome)) {
      userResult = "Your value of <b>" + userInput + " m</b> is perfect.";
    } else if (answer !== zoneOutcome) {
      userResult = "Although your value of <b>" + userInput + " m</b> is close, the type of zone needs correction.";
    } else userResult = "Your value of <b>" + userInput + " m</b> fits well in this scenario.";
    console.log("User result", userResult);
    console.log("Which map number is being looked at?", mapNumber);
    //Outputs generated for the user to check their work
    document.getElementById(mapNumber + "ResultOne").innerHTML = results;
    document.getElementById(mapNumber + "ResultTwo").innerHTML = userResult;
    document.getElementById(mapNumber + "ResultThree").innerHTML = "Our calculations: <b>" + Math.abs(zoneCalc).toFixed(2) + " m</b> " + zoneOutcome + ".";
  }
}
