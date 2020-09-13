// set the global variable for mapNumber
var mapNumber;
const mybuttons = document.querySelectorAll(".mybuttons button");
mybuttons.forEach(mybutton => {
  mybutton.addEventListener("click", processClick);
});
function processClick() {
  window.mapNumber = this.id;
}

// User chosen map with appropriate variables dependent on the map
document.getElementById("mapOne").addEventListener("click", mapVariables);
document.getElementById("mapTwo").addEventListener("click", mapVariables);
document.getElementById("mapThree").addEventListener("click", mapVariables);
document.getElementById("mapFour").addEventListener("click", mapVariables);
document.getElementById("mapFive").addEventListener("click", mapVariables);

function mapVariables() {
    // prevent input of letters or invalid numbers
  document.getElementById(mapNumber + "UserInput").addEventListener("submit", function(event) {
   if (!document.querySelector('input[type="number"]').validity.valid) {
        event.preventDefault();
        alert("Invalid input, you can't submit just yet.");
   }
});

  // Prevents previous data appearing when a new scenario is called  
  let displayResultOne = document.getElementById(mapNumber + "ResultOne");
  let displayResultTwo = document.getElementById(mapNumber + "ResultTwo");
  let displayResultThree = document.getElementById(mapNumber + "ResultThree");
  displayResultOne.classList.add("d-none");
  displayResultTwo.classList.add("d-none");
  displayResultThree.classList.add("d-none");
  // Objects and constants for each map
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

  let climate;
  if (mapNumber === "mapOne" || mapNumber === "mapThree") {
    climate = ["dry", "dry", "dry", "dry", "light rain", "medium rain", "heavy rain", "light snow", "medium snow", "heavy snow", "light ice", "very icy", "severe ice"];
    climateCondition = Math.floor(Math.random() * climate.length);
    keyClim = climate[climateCondition];
  } else if (mapNumber === "mapTwo") {
    climate = ["dry", "dry", "dry", "light rain", "medium rain", "heavy rain"];
    climateCondition = Math.floor(Math.random() * climate.length);
    keyClim = climate[climateCondition];
  } else if (mapNumber === "mapFour") {
    climate = ["dry", "light rain", "medium rain", "heavy rain", "light snow", "light ice"];
    climateCondition = Math.floor(Math.random() * climate.length);
    keyClim = climate[climateCondition];
  } else if (mapNumber === "mapFive") {
    climate = ["dry", "light rain", "medium rain", "heavy rain"];
    climateCondition = Math.floor(Math.random() * climate.length);
    keyClim = climate[climateCondition];
  } else climate = false;
  
  let carLength = Math.random() * (5.89 - 3.8) + 3.8;
  let reactionTime = Math.random() * (2.5 - 0.4) + 0.4;

  let velocity, yellowPhase, interPhase;
  if (mapNumber === "mapOne" || mapNumber === "mapFour" || mapNumber === "mapFive") {
    velocity = Math.random() * (65 - 35) + 35;
    yellowPhase = Math.random() * (4.4 - 3.8) + 3.7;
    interPhase = Math.random() * (2.4 - 1.8) + 1.8;
  } else velocity = Math.random() * (105 - 65) + 65;
  yellowPhase = Math.random() * (5.0 - 4.0) + 4.0;
  interPhase = Math.random() * (3 - 2) + 2;

  // Onclick get the mapNumber and add it to the variable for display
  document.getElementById(mapNumber + "InitialVelocity").innerHTML = velocity.toFixed(2) + " kmh<sup>-1</sup>";
  document.getElementById(mapNumber + "Phase").innerHTML = yellowPhase.toFixed(1) + " s";
  document.getElementById(mapNumber + "RlPhase").innerHTML = interPhase.toFixed(1) + " s";
  document.getElementById(mapNumber + "RtRandom").innerHTML = reactionTime.toFixed(3) + " s";
  document.getElementById(mapNumber + "TireCondition").innerHTML = tires[tireCondition];
  document.getElementById(mapNumber + "WeatherCondition").innerHTML = climate[climateCondition];
  document.getElementById(mapNumber + "CarLength").innerHTML = carLength.toFixed(1);
  // pre-measured intersection sizes 
  let intersection;
  if (mapNumber === "mapOne") {
    intersection = 52;
  } else if (mapNumber === "mapTwo") {
    intersection = 79.75;
  } else if (mapNumber === "mapThree") {
    intersection = 66.18;
  } else if (mapNumber === "mapFour") {
    intersection = 43.8;
  } else if (mapNumber === "mapFive") {
    intersection = 51.5;
  } else false;
  // Calculate the outcome based on the data and match this to user input
  document.getElementById(mapNumber + "Submit").addEventListener("click", calculateScenario);

  function calculateScenario() {
  let showResultOne = document.getElementById(mapNumber + "ResultOne");
  let showResultTwo = document.getElementById(mapNumber + "ResultTwo");
  let showResultThree = document.getElementById(mapNumber + "ResultThree");
  showResultOne.classList.remove("d-none");
  showResultTwo.classList.remove("d-none");
  showResultThree.classList.remove("d-none");  
    // Convert km/h into m/s and get climate and tire data to output a coefficient of friction
    let initialVelocity = velocity / 3.6;
    let coefficient = conditions[keyClim.replace(/\s+/g, "") + keyCond];

    // Calculate the going distance during yellow and interpahase subtract car length
    let distancePhase = ((initialVelocity * (yellowPhase + interPhase)) - carLength).toFixed(2);
    
    // Calculate the stopping distance
    let reactionTimeDistance = (reactionTime * initialVelocity);
    
    // Square the velocity for the stopping distance equation where 9.81 is due to gravity
    let velocitySquared = Math.pow(initialVelocity, 2);
    let stoppingDist = ((velocitySquared / (2 * coefficient * 9.81)) + reactionTimeDistance);
    
    // Is there a dilemma zone?
    let totalDistance = distancePhase - intersection;
    let zoneCalc = totalDistance - stoppingDist;
   
    // the end of the calculation function
    let zoneOutcome;
    if (zoneCalc > 0) {
      zoneOutcome = "Option Zone";
    } else if (zoneCalc <= 0) {
      zoneOutcome = "Dilemma Zone";
    } else zoneOutcome = false;
    
    let exactAnswer = Math.abs(zoneCalc).toFixed(2);
    
    // Check the type of zone the user has input
    let zone;
    if (mapNumber === "mapOne") {
      zone = document.querySelector('input[name="mapOneZone"]:checked').value;
    } else if (mapNumber === "mapTwo") {
      zone = document.querySelector('input[name="mapTwoZone"]:checked').value;
    } else if (mapNumber === "mapThree") {
      zone = document.querySelector('input[name="mapThreeZone"]:checked').value;
    } else if (mapNumber === "mapFour") {
      zone = document.querySelector('input[name="mapFourZone"]:checked').value;
    } else if (mapNumber === "mapFive") {
      zone = document.querySelector('input[name="mapFiveZone"]:checked').value;
    } else false;

    let answer;
    if (zone === mapNumber + "OzChecked") {
      answer = "Option Zone";
    } else if (zone === mapNumber + "DzChecked") {
      answer = "Dilemma Zone";
    } else answer = false;
    
    let results;
    if (answer === zoneOutcome) {
      results = "You said: <b>" + answer + "</b> &#x2713;";
    } else results = "You said: <b>" + answer + "</b> &#x2a2f;";
   
    let percentage = zoneCalc * 0.2;
    let valueHighChecked = zoneCalc + percentage;
    let valueLowChecked = zoneCalc - percentage;
    
    // Convert all numbers to absolute for checking
    // Allow up to 20% difference on student answers - this can be changed in the percentage variable
    let absoluteValue = Math.abs(valueHighChecked);
    let absoluteValue2 = Math.abs(valueLowChecked);

    let userInput;
    if (mapNumber === "mapOne") {
      userInput = document.getElementById("mapOneUserInput").value;
    } else if (mapNumber === "mapTwo") {
      userInput = document.getElementById("mapTwoUserInput").value;
    } else if (mapNumber === "mapThree") {
      userInput = document.getElementById("mapThreeUserInput").value;
    } else if (mapNumber === "mapFour") {
      userInput = document.getElementById("mapFourUserInput").value;
    } else if (mapNumber === "mapFive") {
      userInput = document.getElementById("mapFiveUserInput").value;
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
    
    //Outputs generated for the user to check their work
    document.getElementById(mapNumber + "ResultOne").innerHTML = results;
    document.getElementById(mapNumber + "ResultTwo").innerHTML = userResult;
    document.getElementById(mapNumber + "ResultThree").innerHTML = "Our calculations: <b>" + Math.abs(zoneCalc).toFixed(2) + " m</b> " + zoneOutcome + ".";
  }
  // Prevent invalid keypushes
}