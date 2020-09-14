 //prevent the browser from showing default error bubble / hint
document.addEventListener('invalid', (function(){
    return function(e) {
      e.preventDefault();
    };
})(), true);

// pop-over code first found: http://jsfiddle.net/bqo5mdcz/3/
$(document).ready(function() {
  $("#submitCalculation").click(function() {
    $(".checkCalc").each(function() {
      $val = $(this).val();
      if ($val === "") {      
        $(this).popover({
          content: "Enter the correct value."
        });
        $(this).popover('show');
      }
    })
  })
}) 

$(document).ready(function() {
  $("#submitCalculation").click(function() {
    $(".checkFriction").each(function() {
      $val = $(this).val();
      if ($val === "" || $val > 1 || $val <= 0) {      
        $(this).popover({
          content: "Enter a numerical value between 0.001 and 1.000 and no more than 3 decimal places. Numbers must be non-zero or an infinitely long dilemma zone would exist."
        });
        $(this).popover('show');
      }
    })
  })
}) 

$(document).ready(function() {
  $("#submitCalculation").click(function() {
    $(".checkLetter").each(function() {
      $val = $(this).val();
      if ($.isNumeric(val) == false) {      
        $(this).popover({
          content: "You can not use letters in these inputs."
        });
        $(this).popover('show');
      }
    })
  })
}) 