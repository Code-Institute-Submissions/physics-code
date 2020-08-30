function initMap() {
  // The location of Intersection One
  var intersection_one = {lat: 55.777034, lng: 37.583926};
  var image = 'assets/images/map_icon_marker.ico';
  // The map, centered at Intersection One
  var map = new google.maps.Map(
      document.getElementById('map_one'), {zoom: 18, center: intersection_one, mapTypeId: 'satellite'});
  // The marker, positioned at Intersection One
  var marker = new google.maps.Marker({position: intersection_one, map: map,  icon: image});
  map.addListener("center_changed", () => {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(() => {
      map.panTo(marker.getPosition());
    }, 3000);
  });
  google.maps.event.addListener(map, "click", function(){
     window.open("https://goo.gl/maps/vMGeYw9N58a7vjYm8")
});
 
}


