//prevent the browser from showing default error bubble / hint
document.addEventListener("invalid", (function(){
    return function(e) {
      e.preventDefault();
    };
})(), true);

jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});

$().ready(function() {
$("#dzCalculator").validate({
rules: {  
initialVelocity: { 
required: true,
number: true,
digits: true,
range: [0.01, 1000],
maxlength: 6 },

yellowPhase: {
required: true,
number: true,
digits: true,
range: [0.01, 12],
maxlength: 5 },

interPhase: {
required: true,
number: true,
digits: true,
range: [0.01, 12],
maxlength: 5 },

reactionTime: { 
required: true,
number: true,
digits: true,
range: [0.001, 6],
maxlength: 5 },

friction: { 
required: true,
number: true,
digits: true,
range: [0.001, 6],
maxlength: 5 },

intersectionDistance: { 
required: true,
number: true,
digits: true,
range: [0.001, 6],
maxlength: 5 },

length: { 
required: true,
number: true,
digits: true,
range: [0.001, 6],
maxlength: 5 }
},




messages: {
initialVelocity: "Please provide an initial velocity as a number between 1 and 1000 and select units",
yellowPhase: "Please provide the time the traffic light remains yellow, typically between 4 and 7 seconds",
reactionTime: "Please provide a reaction time that is no more than 3 decimal places. Usually not more than 2 seconds"
}
});
});