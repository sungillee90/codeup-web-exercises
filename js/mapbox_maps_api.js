console.log("Hello");
// Generate a map that shows the city with your favorite restaurant using geocoding.
"use strict";

mapboxgl.accessToken = mapboxToken;


// var markerOptions = {
//   color:"blue"
// };
// var marker = new mapboxgl.Marker(markerOptions)
//     .setLngLat([-96.841539, 32.952803])
//     .addTo(map)

geocode("4150 Belt Line Road, Addison, Texas. 75001",mapboxToken).then(function(result) {
    var map = new mapboxgl.Map({
        // https://docs.mapbox.com/mapbox-gl-js/api/
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: result,
        zoom: 15,
    });
    console.log('lng , lat: ', result);
});

var markerOptions = {
    color:"blue"
};
var marker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-96.841539, 32.952803])
    .addTo(map)

