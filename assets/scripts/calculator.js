// Limit input boxes to only numbers and decimal places
function isNumberKey(evt){
var charCode = (evt.which) ? evt.which : evt.keyCode
if (charCode > 31 && (charCode < 48 || charCode> 57) && charCode != 46)
  return false;
  return true;
  }

  // Limit coefficient of friction to a max of 1 and a minimum of zero

  // Blank inputs not allowed
  function validateForm() {
  var inputVelocity1 = document.getElementById("initialVelocity").value;
  var inputYellowPhase1 = document.getElementById("yellowPhase").value;
  var inputInterPhase1 = document.getElementById("interPhase").value;
  var inputReactionTime1 = document.getElementById("reactionTime").value;
  var inputCoefficient1 = document.getElementById("friction").value;
  var inputIntersection1 = document.getElementById("intersectionDistance").value;
  var inputLength1 = document.getElementById("length").value;

  if(inputVelocity1 === "" ||
  inputYellowPhase1 === "" ||
  inputInterPhase1 === "" ||
  inputReactionTime1 === "" ||
  inputCoefficient1 === "" ||
  inputIntersection1 === "" ||
  inputLength1 === ""
  ){
  alert("Input all fields before attempting to calculate.");
  return false;
  }
  }

  // Convert velocities from km/h or mph to m/s
  let finalVelocity;
  function convert()
  {
  var vi = parseFloat(document.getElementById("initialVelocity").value);
  var unit = document.getElementById("units").value;
  var result;
  if (unit === "ms") {
  result = vi;
  }
  if (unit === "kmh") {
  result = vi / 3.6;
  }
  if (unit === "mph") {
  result = vi * 0.44704;
  }

  // passing the result outside the function, into the global variable for access later on
  finalVelocity = result;
  document.getElementById("conversion").innerHTML = finalVelocity.toFixed(2) + " m/s";
  }

  // Convert yards to metres
  let fullDistance;
  function convertDistance()
  {
  let id = parseFloat(document.getElementById("intersectionDistance").value);
  var lengthid = document.getElementById("length-units").value;
  var result;
  if (lengthid === "m") {
  result = id;
  }
  if (lengthid === "yd") {
  result = id * 0.9144;
  }
  // passing the result outside the function, into the global variable for access later on
  fullDistance = result;
  document.getElementById("conversion-dist").innerHTML = fullDistance.toFixed(2) + " m";
  }

  function dilemmaZone()
  {
  //Max distance vehicle travels without braking
  //use maxDistance (md) to calculate distance from stop line
  let vf = finalVelocity;
  yp = parseFloat(document.getElementById("yellowPhase").value);
  ip = parseFloat(document.getElementById("interPhase").value);
  vehicleLength = parseFloat(document.getElementById("length").value);
  let phase = yp + ip;
  
  //calculate phase distance (pd)
  let pd = (vf * phase) - vehicleLength;
  document.getElementById("phaseDistance").innerHTML = pd.toFixed(2) + " m";
  
  //Stopping distance - constant braking
  rt = parseFloat(document.getElementById("reactionTime").value);
  //unbraked distance travelled with reaction time - reaction distance (rd)
  let rd = rt * vf;
  
  //call reaction distance
  document.getElementById("reactionDistance").innerHTML = rd.toFixed(2) + " m";
  
  //total stopping distance including reaction distance
  mu = parseFloat(document.getElementById("friction").value);
  
  //initial velocity squared for calculation plus the reaction distance (v^2 / 2 mu g)
  let vsqr = Math.pow(vf,2);
  let sd = ((vsqr)/(2 * mu * 9.81) + rd);
  
  //call stopping distance
  document.getElementById("stoppingDistance").innerHTML = sd.toFixed(2) + " m";
  let idt = fullDistance;
  
  //maxDistance (md) is the distance from the stop-line
  //any vehicle can safely travel through the intersection
  //idt is the intersection distance total
  let md = (vf * phase) - vehicleLength - idt;
  document.getElementById("maxDistance").innerHTML = md.toFixed(2) + " m";
  
  //determine if a delimma zone exists (or option zone)
  let total = md - sd;
  document.getElementById("total").innerHTML = total.toFixed(2) + " m";
  if (total > 0) {
  document.getElementById("zone").innerHTML = total.toFixed(2) + " m" + " option zone exists";
  document.getElementById("zone_header").innerHTML = "Option Zone Found";
  document.getElementById("zone_header").style.color = "blue";
  } else {
  document.getElementById("zone").innerHTML = total.toFixed(2) + " m" + " dilemma zone exists";
  document.getElementById("zone_header").innerHTML = "Dilemma Zone Found";
  document.getElementById("zone_header").style.color = "red";
  document.getElementById("dilemmaZoneIcon").el.classList.remove("icon-hide-dilemmazone");

  }

  }

  // Clear form on click of reset button
  $(function(){

  $("#formReset").click(function(){
  alert("Reset button activated");
  
  //Set the input text fields to empty string
  $("input.reset_form").val("");
  });

  });
