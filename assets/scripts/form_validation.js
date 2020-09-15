//prevent the browser from showing default error bubble / hint
document.addEventListener("invalid", (function(){
    return function(e) {
      e.preventDefault();
    };
})(), true);

// Prevent the calculator from opening modal without appropriate form submission
// Source https://codepen.io/hanapiers/pen/EXNrGP
$("#dzCalculator").on("submit", function(e) {
  $("#dilemma_zone_output").modal("show");
  e.preventDefault();
});

// pop-over code first found: http://jsfiddle.net/bqo5mdcz/3/
$(document).ready(function() {
  $("#submitCalculation").click(function() {
    $(".checkVelocity").each(function() {
      $val = $(this).val();
      if ($val === "") {       
        $(this).popover({
          placement: "left",
          content: "Enter a non-zero number that represents velocity in either metres per second, kilometres per hour or miles per hour. The number should not exceed 200 but you can use two decimal places."
        });
        $(this).popover('show');
      }
    })
  })
})

$(document).ready(function() {
  $("#submitCalculation").click(function() {
    $(".checkYellowPhase").each(function() {
      $val = $(this).val();
      if ($val === "") {       
        $(this).popover({
          placement: "bottom",  
          content: "Enter the time the traffic light remains yellow. Typically 4 to 8 seconds. You can use up to 2 decimal places."
        });
        $(this).popover('show');
      }
    })
  })
}) 

$(document).ready(function() {
  $("#submitCalculation").click(function() {
    $(".checkInterPhase").each(function() {
      $val = $(this).val();
      if ($val === "") {       
        $(this).popover({
          placement: "right",  
          content: "Enter the time the traffic lights are all red after a yellow phase has finished. Typically 1 to 3 seconds. You can use up to 2 decimal places."
        });
        $(this).popover('show');
      }
    })
  })
})

$(document).ready(function() {
  $("#submitCalculation").click(function() {
    $(".checkReactionTime").each(function() {
      $val = $(this).val();
      if ($val === "") {       
        $(this).popover({
          placement: "bottom",  
          content: "Enter the reaction time of the driver with up to 3 decimal places. Typically 0.800 to 1.200 is likely."
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
      if ($val === "") {      
        $(this).popover({
          placement: "bottom",  
          content: "Enter a numerical value between 0.001 and 1.000 and no more than 3 decimal places. Numbers must be non-zero or an infinitely long dilemma zone would exist."
        });
        $(this).popover('show');
      }
    })
  })
}) 

$(document).ready(function() {
  $("#submitCalculation").click(function() {
    $(".checkIntersection").each(function() {
      $val = $(this).val();
      if ($val === "") {       
        $(this).popover({
          placement: "right",  
          content: "Enter the size of the intersection and select units. Intersections start from 10 m or yd and can contain 2 decimal places. Intersections should not exceed 350 m or yards."
        });
        $(this).popover('show');
      }
    })
  })
}) 

$(document).ready(function() {
  $("#submitCalculation").click(function() {
    $(".checkLength").each(function() {
      $val = $(this).val();
      if ($val === "") {       
        $(this).popover({
          html: true,  
          placement: "bottom",  
          content: '<textarea class="popover-textarea"></textarea>',
          template: '<div class="popover"><div class="arrow"></div>'+
              '<h3 class="popover-title"><i class="fas fa-exclamation-triangle"></i> Heading Goes Here</h3><div class="popover-content">All the content goes here'+
              '</div><div class="popover-footer"><button type="button" class="btn btn-primary popover-submit">'+
              '<i class="fas fa-check-circle"></i>This is a button</button>&nbsp;'+
              '<button type="button" class="btn btn-default popover-cancel">'+
              '<i class="fas fa-times-circle"></i>This is also a button</button></div></div>' 
        });
        $(this).popover("show");
      }
    })
  })
}) 



