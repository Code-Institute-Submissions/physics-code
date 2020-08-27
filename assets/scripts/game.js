// Turn the traffic light green when "start" button clicked and remove the start button
function makeGreen() {
  $(redLightStart).addClass("icon_hide_redLight");
  $(greenLightStop).removeClass("icon_hide_greenLight");
  $(start_button).addClass("btn_hide_start");
  $(ready_to_brake).removeClass("remove_start");
  $(remove_start).addClass("remove_start");

}

// Set timer for how long light remains green,
// remove the "start" button and then return the light to red
// and add the brake button to be pushed
// Then set up the timer for a random amount of time the light remains green for
// timeInSeconds will be (25 - 5) + 3, but for the purposes of examination, the time has been set much shorter. 


function setTimerAmount() {
    let timeInSeconds = Math.random() * (8 - 3) + 3;
    setTimeout(function() {
    $(brake_button).removeClass("btn_hide_brakes");
    $(redLightStart).removeClass("icon_hide_redLight");
    $(greenLightStop).addClass("icon_hide_greenLight");
  }, timeInSeconds * 1000);
  $(function() {
    let timeStart = new Date();
    // Once the light has turned red and the brakes button is visible
    // the time taken for the user to push the brakes button is calculated
    // firstly return time in milliseconds and convert into seconds (divide by 1000) and then
    // subtract the initial random time (timeInSeconds) that the light was green
    // this gives the reaction time as the remainder
    $("#brake_button").on("click", function() {
      let timeEnd = new Date();
      let timeDiff = ((timeEnd - timeStart) / 1000) - timeInSeconds;
      // Leaving this in here for examiners to see the random effect for the timer
      console.log(timeInSeconds);
      // Display the time for reaction time and prevent the brakes button from being pushed a second time
      $("#time").html(timeDiff.toFixed(3) + " s");
      $("#brake_button").attr("disabled", true);
    });
  });
}

// Open modal from the brakes button on click
// Source https://codepen.io/hanapiers/pen/EXNrGP
$("#brake_button").on("click", function(e) {
  $("#reaction_time_output").modal("show")
  
});

function reset_timer() {
  $(redLightStart).removeClass("icon_hide_redLight");
  $(greenLightStop).addClass("icon_hide_greenLight");
  $(start_button).removeClass("btn_hide_start");
  $(brake_button).addClass("btn_hide_brakes");
  $("#brake_button").attr("disabled", false);
  $("h5#ready_to_brake").addClass("remove_start");
  $("h5#remove_start").removeClass("remove_start");
}

// prevents users from right clicking on a button which could prevent the timer from working
$(document).ready(function() {
    $("button").on("contextmenu",function(){
       return false;
    }); 
}); 

function share_result() {
    let bestTime = document.getElementById("time").value;
FB.ui({
  method: 'feed',
  link: 'https://pauld0051.github.io/physcis-code/',
  quote: 'I scored ' + bestTime
}, function(response){});
}

