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
       document.getElementById("inputNames").innerText = "Make sure you have filled in your name here...";
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
        document.getElementById("inputEmails").innerText = "Make sure you have filled in your email here...";
      }
    })
  })
})

$(document).ready(function() {
  $("#checkValid").click(function() {
    $(".checkValidMessage").each(function() {
      const val = $(this).val();
      if (isFilled(val) || val === "") {
        document.getElementById("inputUserRequests").innerText = "Fill in your requests here...";
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
