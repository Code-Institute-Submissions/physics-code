function initMap() {
  // The location of Intersection One
  var intersection_one = {lat: 55.777034, lng: 37.583926};
  var intersection_two = {lat: -33.738541, lng: 150.917933};
  var intersection_three = {lat: 39.060609, lng: -77.459229};
  var intersection_four = {lat: 49.453656, lng: 11.015989};
  var intersection_five = {lat: 53.354385, lng: -6.273174};
  var image = 'assets/images/map_icon_marker.ico';
  // The map, centered at Intersection One
   var map = new google.maps.Map(
      document.getElementById('map_one'), {zoom: 18, center: intersection_one, mapTypeId: 'satellite', zoomControl: false, rotateControl: false});
   var map2 = new google.maps.Map(
      document.getElementById('map_two'), {zoom: 19, center: intersection_two, mapTypeId: 'satellite', zoomControl: false, rotateControl: false});
   var map3 = new google.maps.Map(
      document.getElementById('map_three'), {zoom: 19, center: intersection_three, mapTypeId: 'satellite', zoomControl: false, rotateControl: false});
   var map4 = new google.maps.Map(
      document.getElementById('map_four'), {zoom: 19, center: intersection_four, mapTypeId: 'satellite', zoomControl: false, rotateControl: false});
   var map5 = new google.maps.Map(
      document.getElementById('map_five'), {zoom: 19, center: intersection_five, mapTypeId: 'satellite', zoomControl: false, rotateControl: false});            
  // The marker, positioned
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
    
    window.setTimeout(() => {
      map2.panTo(marker2.getPosition());
    }, 3000);
    });
  var marker3 = new google.maps.Marker({position: intersection_three, map: map3,  icon: image});
  map3.addListener("center_changed", () => {
    
    window.setTimeout(() => {
      map3.panTo(marker3.getPosition());
    }, 3000);
    });
  var marker4 = new google.maps.Marker({position: intersection_four, map: map4,  icon: image});
  map4.addListener("center_changed", () => {
    
    window.setTimeout(() => {
      map4.panTo(marker4.getPosition());
    }, 3000);
    });
  var marker5 = new google.maps.Marker({position: intersection_five, map: map5,  icon: image});
  map5.addListener("center_changed", () => {
    
    window.setTimeout(() => {
      map5.panTo(marker5.getPosition());
    }, 3000);
    });  
 // Allow users to click on the map to open in a new window
google.maps.event.addListener(map, "click", function(){
     window.open("https://www.google.com/maps/@55.7769838,37.5835604,81m/data=!3m1!1e3")
});
google.maps.event.addListener(map2, "click", function(){
     window.open("https://www.google.com/maps/@-33.7385745,150.9177533,120m/data=!3m1!1e3")
});
google.maps.event.addListener(map3, "click", function(){
     window.open("https://www.google.com/maps/@39.0605322,-77.4594559,79m/data=!3m1!1e3")
});
google.maps.event.addListener(map4, "click", function(){
     window.open("https://www.google.com/maps/@49.453667,11.0154068,187m/data=!3m1!1e3")
});
google.maps.event.addListener(map5, "click", function(){
     window.open("https://www.google.com/maps/@53.3543215,-6.2734058,122m/data=!3m1!1e3")
});
 // Allow users to click on the marker to open in a new window
google.maps.event.addListener(marker, "click", function(){
     window.open("https://www.google.com/maps/@55.7769838,37.5835604,81m/data=!3m1!1e3")
});
 google.maps.event.addListener(marker2, "click", function(){
     window.open("https://www.google.com/maps/@-33.7385745,150.9177533,120m/data=!3m1!1e3")
});
google.maps.event.addListener(marker3, "click", function(){
     window.open("https://www.google.com/maps/@39.0605322,-77.4594559,79m/data=!3m1!1e3")
});
 google.maps.event.addListener(marker4, "click", function(){
     window.open("https://www.google.com/maps/@49.453667,11.0154068,187m/data=!3m1!1e3")
});
google.maps.event.addListener(marker5, "click", function(){
     window.open("https://www.google.com/maps/@53.3543215,-6.2734058,122m/data=!3m1!1e3")
});
}



