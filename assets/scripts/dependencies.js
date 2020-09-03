// Popovers (Bootstrap)
$(function() {
  $('[data-toggle="tooltip"]').tooltip()
})
// Allow popover entries to accept HTML mark-up.
$(function() {
  $('[data-toggle="popover"]').popover({
    html: true
  })
  $('[title="popover"]').popover({
    html: true
  })
})

// disable mousewheel on an input number field when in focus
// (Prevents an accidental change in input values when scrolling on the page)
$('form').on('focus', 'input[type=number]', function(e) {
  $(this).on('wheel.disableScroll', function(e) {
    e.preventDefault()
  })
})
$('form').on('blur', 'input[type=number]', function(e) {
  $(this).off('wheel.disableScroll')
})

// Facebook
(function(d, s, id) {
  let js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
