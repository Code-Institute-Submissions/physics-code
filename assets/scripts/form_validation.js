//prevent the browser from showing default error bubble / hint
 document.querySelector("form").addEventListener("invalid", function(event) {
            event.preventDefault();
        }, true );

// Prevent the calculator from opening modal without appropriate form submission
// Source https://codepen.io/hanapiers/pen/EXNrGP
$("#dzCalculator").on("submit", function(e) {
  $("#dilemma_zone_output").modal("show");
  e.preventDefault();
});

const isOpen = (val) => {
  const num = parseFloat(val);
  if (isNaN(num)) {
    return true;
  } else {
    const decimals = num.toString().split('.')[1] || '';
    if (decimals.length > 2) {
      return true;
    } else {
      return false;
    }
  }
};

const isOpen3dp = (val) => {
  const num3 = parseFloat(val);
  if (isNaN(num3)) {
    return true;
  } else {
    const decimals = num3.toString().split('.')[1] || '';
    if (decimals.length > 3) {
      return true;
    } else {
      return false;
    }
  }
};

// pop-over code first found: http://jsfiddle.net/bqo5mdcz/3/
$(document).ready(function() {
  $("#submitCalculation").click(function() {
    $(".checkVelocity").each(function() {
      const val = $(this).val();
      if (isOpen(val) || val > 300) {
        $(this).popover({
          placement: "left",
          content: '<textarea class="popover-textarea"></textarea>',
          template: '<div class="popover"><div class="arrow"></div>' +
            '<div class="row"><div class="col-3 my-auto"><i class="fas fa-exclamation-triangle" id="invalid-input3">' +
            '</i></div><div class="popover-content col-9">Enter the velocity of the car between 10 and 300 ms<sup>-1</sup>, kmh<sup>-1</sup> or mph.' +
            '</div></div>'
        });
        $(this).popover("show");
        $(this).click(function() {
          $(this).popover("hide");
        });
      }
    })
  })
})

$(document).ready(function() {
  $("#submitCalculation").click(function() {
    $(".checkYellowPhase").each(function() {
      const val = $(this).val();
      if (isOpen(val) || val > 12) {
        $(this).popover({
          placement: "bottom",
          content: '<textarea class="popover-textarea"></textarea>',
          template: '<div class="popover"><div class="arrow"></div>' +
            '<div class="row"><div class="col-3 my-auto"><i class="fas fa-exclamation-triangle" id="invalid-input3">' +
            '</i></div><div class="popover-content col-9">Enter a yellow phase time between 0 and 12 s. Usual time is 5 to 7 s.' +
            '</div></div>'
        });
        $(this).popover("show");
        $(this).click(function() {
          $(this).popover("hide");
        });
      }
    })
  })
})

$(document).ready(function() {
  $("#submitCalculation").click(function() {
    $(".checkInterPhase").each(function() {
      const val = $(this).val();
      if (isOpen(val) || val > 12) {
        $(this).popover({
          placement: "right",
          content: '<textarea class="popover-textarea"></textarea>',
          template: '<div class="popover"><div class="arrow"></div>' +
            '<div class="row"><div class="col-3 my-auto"><i class="fas fa-exclamation-triangle" id="invalid-input3">' +
            '</i></div><div class="popover-content col-9">Enter an interphase time between 0 and 12 s. Usual time is 1.5 to 3 s.' +
            '</div></div>'
        });
        $(this).popover("show");
        $(this).click(function() {
          $(this).popover("hide");
        });
      }
    })
  })
})

$(document).ready(function() {
  $("#submitCalculation").click(function() {
    $(".checkReactionTime").each(function() {
      const val = $(this).val();
      if (isOpen3dp(val) || val > 6) {
        $(this).popover({
          placement: "bottom",
          content: '<textarea class="popover-textarea"></textarea>',
          template: '<div class="popover"><div class="arrow"></div>' +
            '<div class="row"><div class="col-3 my-auto"><i class="fas fa-exclamation-triangle" id="invalid-input4">' +
            '</i></div><div class="popover-content col-9">Enter a reaction time between 0.001 and 6.000 s with up to 3 decimal places.' +
            '</div></div>'
        });
        $(this).popover("show");
        $(this).click(function() {
          $(this).popover("hide");
        });
      }
    })
  })
})

$(document).ready(function() {
  $("#submitCalculation").click(function() {
    $(".checkFriction").each(function() {
      const val = $(this).val();
      if (isOpen3dp(val) || val > 1) {
        $(this).popover({
          placement: "bottom",
          content: '<textarea class="popover-textarea"></textarea>',
          template: '<div class="popover"><div class="arrow"></div>' +
            '<div class="row"><div class="col-3 my-auto"><i class="fas fa-exclamation-triangle" id="invalid-input5">' +
            '</i></div><div class="popover-content col-9">Enter a value between 0.001 and 1.000 with up to 3 decimal places.' +
            '</div></div>'
        });
        $(this).popover("show");
        $(this).click(function() {
          $(this).popover("hide");
        });
      }
    })
  })
})

$(document).ready(function() {
  $("#submitCalculation").click(function() {
    $(".checkIntersection").each(function() {
      const val = $(this).val();
      if (isOpen(val) || val > 350) {
        $(this).popover({
          placement: "right",
          content: '<textarea class="popover-textarea"></textarea>',
          template: '<div class="popover"><div class="arrow"></div>' +
            '<div class="row"><div class="col-3 my-auto"><i class="fas fa-exclamation-triangle" id="invalid-input6">' +
            '</i></div><div class="popover-content col-9">Enter a value between 10 and 350 m or yds with up to 2 decimal places.' +
            '</div></div>'
        });
        $(this).popover("show");
        $(this).click(function() {
          $(this).popover("hide");
        });
      }
    })
  })
})

$(document).ready(function() {
  $("#submitCalculation").click(function() {
    $(".checkLength").each(function() {
      const val = $(this).val();
      if (isOpen(val) || val > 50) {
        $(this).popover({
          html: true,
          placement: "bottom",
          content: '<textarea class="popover-textarea"></textarea>',
          template: '<div class="popover"><div class="arrow"></div>' +
            '<div class="row"><div class="col-3 my-auto"><i class="fas fa-exclamation-triangle" id="invalid-input7">' +
            '</i></div><div class="popover-content col-9">Enter a value between 2 and 50 m with up to 2 decimal places.' +
            '</div></div>'
        });
        $(this).popover("show");
        $(this).click(function() {
          $(this).popover("hide");
        });
      }
    })
  })
})

