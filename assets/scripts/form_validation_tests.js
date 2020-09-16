//prevent the browser from showing default error bubble / hint
document.querySelector("form").addEventListener("invalid", function(event) {
            event.preventDefault();
        }, true );

let blockButton = document.getElementById("mapOneSubmit");        
const isInput = (val) => {
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

// pop-over code first found: http://jsfiddle.net/bqo5mdcz/3/
$(document).ready(function() {
  $(".mapSubmit").click(function() {
    $(".checkValid").each(function() {
      const val = $(this).val();
      if (isInput(val) || val > 9999) {
        $(this).popover({
          placement: "left",
          content: '<textarea class="popover-textarea"></textarea>',
          template: '<div class="popover"><div class="arrow"></div>' +
            '<div class="row"><div class="col-3 my-auto"><i class="fas fa-exclamation-triangle" id="invalid-input3">' +
            '</i></div><div class="popover-content col-9">Enter your value of either option or dilemma zone here' +
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