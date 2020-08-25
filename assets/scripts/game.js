// Turn the traffic light green when "start" button clicked and remove the start button
function makeGreen(){
    $(redLightStart).addClass("icon_hide_redLight");
    $(greenLightStop).removeClass("icon_hide_greenLight");
    $(start_button).addClass("btn_hide_start");
}

// Set timer for how long light remains green

function setTimerAmount(){
    let timeInSeconds = Math.random() * (15 - 5) + 5;
    setTimeout(function(){
            $(brake_button).removeClass("btn_hide_brakes");
            $(redLightStart).removeClass("icon_hide_redLight");
            $(greenLightStop).addClass("icon_hide_greenLight");
            //....and whatever else you need to do
    }, timeInSeconds * 1000);
}






