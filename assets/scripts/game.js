// Turn the traffic light green when "start" button clicked and remove the start button
function makeGreen(){
    $(redLightStart).addClass("icon_hide_redLight");
    $(greenLightStop).removeClass("icon_hide_greenLight");
    $(start_button).addClass("btn_hide_start");
}

// Set timer for how long light remains green

function setTimerAmount(){
    let timeInSeconds = Math.random() * (8 - 5) + 5;
    setTimeout(function(){
            $(brake_button).removeClass("btn_hide_brakes");
            $(redLightStart).removeClass("icon_hide_redLight");
            $(greenLightStop).addClass("icon_hide_greenLight");
            }, timeInSeconds * 1000);
            $(function() {
	var timeStart = new Date();

  $("#brake_button").on('click', function() {
    var timeEnd = new Date();
    var timeDiff = ((timeEnd - timeStart) / 1000) - timeInSeconds;
    console.log(timeInSeconds);

    $("#time").html('Your reaction time is ' + timeDiff.toFixed(3) + ' s');
    $("#brake_button").attr("disabled", true);
  });
});

}






