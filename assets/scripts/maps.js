function initMap() {
  // The location of Intersection One
  var intersection_one = {lat: 55.777034, lng: 37.583926};
  var intersection_two = {lat: -33.738541, lng: 150.917933};
  var image = 'assets/images/map_icon_marker.ico';
  // The map, centered at Intersection One
  var map = new google.maps.Map(
      document.getElementById('map_one'), {zoom: 18, center: intersection_one, mapTypeId: 'satellite'});
   var map2 = new google.maps.Map(
      document.getElementById('map_two'), {zoom: 19, center: intersection_two, mapTypeId: 'satellite'});    
  // The marker, positioned at Intersection One
  var marker = new google.maps.Marker({position: intersection_one, map: map,  icon: image});
  map.addListener("center_changed", () => {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(() => {
      map.panTo(marker.getPosition());
    }, 3000);
    });
    var marker2 = new google.maps.Marker({position: intersection_two, map: map2,  icon: image});
  map2.addListener("center_changed", () => {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(() => {
      map2.panTo(marker2.getPosition());
    }, 3000);
    });

   // Allow users to click on the map to open in a new window
  google.maps.event.addListener(map, "click", function(){
     window.open("https://www.google.com/maps/@55.7769838,37.5835604,81m/data=!3m1!1e3")
});
google.maps.event.addListener(map2, "click", function(){
     window.open("https://www.google.com/maps/@-33.7385745,150.9177533,120m/data=!3m1!1e3")
});
// Allow users to click on the marker to open in a new window
  google.maps.event.addListener(marker, "click", function(){
     window.open("https://www.google.com/maps/@55.7769838,37.5835604,81m/data=!3m1!1e3")
});
 google.maps.event.addListener(marker2, "click", function(){
     window.open("https://www.google.com/maps/@-33.7385745,150.9177533,120m/data=!3m1!1e3")
});
}



