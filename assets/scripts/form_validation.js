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
           content: '<textarea class="popover-textarea"></textarea>',
          template: '<div class="popover"><div class="arrow"></div>'+
              '<div class="row"><div class="col-3 my-auto"><i class="fas fa-exclamation-triangle" id="invalid-input3">'+
              '</i></div><div class="popover-content col-9">Enter the velocity of the car between 10 and 300 ms<sup>-1</sup>, kmh<sup>-1</sup> or mph.'+
              '</div></div>' 
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
           content: '<textarea class="popover-textarea"></textarea>',
          template: '<div class="popover"><div class="arrow"></div>'+
              '<div class="row"><div class="col-3 my-auto"><i class="fas fa-exclamation-triangle" id="invalid-input3">'+
              '</i></div><div class="popover-content col-9">Enter a yellow phase time between 0 and 12 s. Usual time is 5 to 7 s.'+
              '</div></div>' 
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
          content: '<textarea class="popover-textarea"></textarea>',
          template: '<div class="popover"><div class="arrow"></div>'+
              '<div class="row"><div class="col-3 my-auto"><i class="fas fa-exclamation-triangle" id="invalid-input3">'+
              '</i></div><div class="popover-content col-9">Enter an interphase time between 0 and 12 s. Usual time is 1.5 to 3 s.'+
              '</div></div>' 
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
          content: '<textarea class="popover-textarea"></textarea>',
          template: '<div class="popover"><div class="arrow"></div>'+
              '<div class="row"><div class="col-3 my-auto"><i class="fas fa-exclamation-triangle" id="invalid-input4">'+
              '</i></div><div class="popover-content col-9">Enter a reaction time between 0.001 and 6.000 s with up to 3 decimal places.'+
              '</div></div>' 
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
           content: '<textarea class="popover-textarea"></textarea>',
          template: '<div class="popover"><div class="arrow"></div>'+
              '<div class="row"><div class="col-3 my-auto"><i class="fas fa-exclamation-triangle" id="invalid-input5">'+
              '</i></div><div class="popover-content col-9">Enter a value between 0.001 and 1.000 with up to 3 decimal places.'+
              '</div></div>' 
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
          content: '<textarea class="popover-textarea"></textarea>',
          template: '<div class="popover"><div class="arrow"></div>'+
              '<div class="row"><div class="col-3 my-auto"><i class="fas fa-exclamation-triangle" id="invalid-input6">'+
              '</i></div><div class="popover-content col-9">Enter a value between 10 and 350 m or yds with up to 2 decimal places.'+
              '</div></div>' 
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
              '<div class="row"><div class="col-3 my-auto"><i class="fas fa-exclamation-triangle" id="invalid-input7">'+
              '</i></div><div class="popover-content col-9">Enter a value between 2 and 50 m with up to 2 decimal places.'+
              '</div></div>' 
        });
        $(this).popover("show");
        $(this).click( function() {
            $(this).popover("hide");
        });
      }
    })
  })
}) 
