//prevent the browser from showing default error bubble / hint
document.querySelector("form").addEventListener("invalid", function(event) {
  event.preventDefault();
}, true);

const isFilled = (val) => {
  const num = parseFloat(val);
  if (isNaN(num)) {
    return false;
  } else {
    return true;
  }
};

// pop-over code first found: http://jsfiddle.net/bqo5mdcz/3/
$(document).ready(function() {
  $("#checkValid").click(function() {
    $(".checkValidName").each(function() {
      const val = $(this).val();
      if (isFilled(val) || val === "") {
        $(this).popover({
          placement: "left",
          content: '<textarea class="popover-textarea"></textarea>',
          template: '<div class="popover"><div class="arrow"></div>' +
            '<div class="row"><div class="col-3 my-auto"><i class="fas fa-exclamation-triangle" id="invalid-input-name">' +
            '</i></div><div class="popover-content col-9">Please fill in your name' +
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
  $("#checkValid").click(function() {
    $(".checkValidEmail").each(function() {
      const val = $(this).val();
      const isValidEmail = inputEmailAddress.checkValidity();
      if (isFilled(val) || val === "" || isValidEmail == false) {
        $(this).popover({
          placement: "left",
          content: '<textarea class="popover-textarea"></textarea>',
          template: '<div class="popover"><div class="arrow"></div>' +
            '<div class="row"><div class="col-3 my-auto"><i class="fas fa-exclamation-triangle" id="invalid-input-mail">' +
            '</i></div><div class="popover-content col-9">Please fill in your email address' +
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
  $("#checkValid").click(function() {
    $(".checkValidMessage").each(function() {
      const val = $(this).val();
      if (isFilled(val) || val === "") {
        $(this).popover({
          placement: "left",
          content: '<textarea class="popover-textarea"></textarea>',
          template: '<div class="popover"><div class="arrow"></div>' +
            '<div class="row"><div class="col-3 my-auto"><i class="fas fa-exclamation-triangle" id="invalid-input-message">' +
            '</i></div><div class="popover-content col-9">Please fill in your requests here' +
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

let myform = $("form#user_request");
myform.submit(function(event) {
  event.preventDefault();

  let service_id = "default_service";
  let template_id = "physics_code_message";

  myform.find("button").html('<i class="fas fa-paper-plane"></i> Sending...');
  emailjs.sendForm(service_id, template_id, myform[0])
    .then(function() {
      alert("Sent!");
      myform.find("button").html('<i class="fas fa-paper-plane"></i> Submit');
    }, function(err) {
      alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
      myform.find("button").html('<i class="fas fa-paper-plane"></i> Submit');
    });
  return false;
});
