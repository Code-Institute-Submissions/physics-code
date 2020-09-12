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
