// Turn the traffic light green when "start" button clicked and remove the start button
function makeGreen() {
  // Choose a random number for the top and left margins to locate the brake button
  let margin_top = Math.floor(Math.random() * 10) + 10;
  let margin_left = Math.floor(Math.random() * 71) + 20;
  // Choose whether that number is either positive or negative for the margins
  margin_top *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
  margin_left *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
  // Add and remove the buttons and add the random location of the brake button
  $(redLightStart).addClass("icon_hide_redLight");
  $(greenLightStop).removeClass("icon_hide_greenLight");
  $(start_button).addClass("btn_hide_start");
  $(ready_to_brake).removeClass("remove_start");
  $(remove_start).addClass("remove_start");
  $(brake_button).css("margin-top", margin_top + "%");
  $(brake_button).css("margin-left", margin_left + "%");
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
            
      // Display the time for reaction time and prevent the brakes button from being pushed a second time
      $("#time").html(timeDiff.toFixed(3) + " s");
      $("#brake_button").attr("disabled", true);
      // Get the previous high score if any, or `NaN` if none
      // `localStorage.score` will be `undefined` if you've never stored a high score
      // at all (or a string otherwise). `parseFloat` will return `NaN` if you pass it
      // `undefined`, so we check that later.
      const lastHighScore = parseFloat(localStorage.score);
      // Get the string version of this score
      const scoreString = timeDiff.toFixed(3);
      let message;
      if (isNaN(lastHighScore) || timeDiff < lastHighScore) {
        // New high score
        message = "Your new best time is " + scoreString + " s";
        // Store the new score
        localStorage.score = scoreString;
      } else {
        // Not a new high score
        message = "Your best time is " + localStorage.score + " s";
      }
      document.getElementById("best_score").textContent = message;
    });
  });
}

// Open modal from the brakes button on click
// Source https://codepen.io/hanapiers/pen/EXNrGP
$("#brake_button").on("click", function(e) {
  $("#reaction_time_output").modal("show");
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
  $("button").on("contextmenu", function() {
    return false;
  });
});

// Sharing the result of the Reaction Time game to Facebook
function share_result() {
  FB.ui({
    app_id: 335490644461179,
    method: 'feed',
    link: 'https://pauld0051.github.io/physics-code/',
    quote: "I got a high score of " + localStorage.getItem('score') + "s in the Reaction Time game at Physics Code."
  }, function(response) {
    if (response && !response.error_message) {
      alert('Posting completed.');
    } else {
      alert('Oopsy daisy. Your score was not posted, did you close before sharing?');
    }
  });
}
