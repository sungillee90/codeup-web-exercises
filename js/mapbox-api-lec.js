/**********************************************
 * 			SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected

console.log('token: ' + mapboxToken);


/**********************************************
 * 			CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map

// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]

// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).

//TODO TOGETHER: Set map to Dallas area using the coordinates [-96.8057, 32.7787]

// mapboxgl.accessToken = 'pg.adijasldijaldnunifnwle';
mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    // https://docs.mapbox.com/mapbox-gl-js/api/
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [-96.8057, 32.7787],
    zoom: 10,
    logoPosition: "top-right"
});




//TODO: Experiment with different map styles, zoom levels, and centers. You will need to reference the mapbox docs. (~15 minutes)


/**********************************************
 * 					MARKERS
 *********************************************/
// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map


// TODO TOGETHER: Add a marker to the map using the following coordinates [-96.8084, 32.7799]. This marker will mark the Sixth Floor Muesume on our map.
// TODO TOGETHER: Change the color of the marker
var markerOptions = {
    color: "teal",
    draggable: true
};
var markerOptionsToM = {
    color: "blue",
    draggable: true
};
var marker = new mapboxgl.Marker(markerOptions)
    //Use the .setLngLat() and .addTo() methods to add marker to the map
    .setLngLat([-96.8057, 32.7787])
    .addTo(map)


var markerToMuseum = new mapboxgl.Marker(markerOptionsToM)
    //Use the .setLngLat() and .addTo() methods to add marker to the map
    .setLngLat([-96.8084, 32.7799])
    .addTo(map)

// TODO: Experiment with the color, and setting the LngLat
// TODO: Update the marker object to make the marker draggable. *Hint: reference the docs!


/**********************************************
 * 					POPUPS
 *********************************************/
// Popups are the info boxes that appear on a map and may describe a given location.
// Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup


// TODO TOGETHER: Add a popup to the map over codeup. Set the html as a paragraph that says "Codeup Rocks!"
//          to pass an object put {}
// var popup = new mapboxgl.Popup({});

// var popup = new mapboxgl.Popup()
//     .setHTML("<h1>Codeup Rocks!</h1>")
//     .addTo(map);
//
// marker.setPopup(popup);
// // TODO TOGETHER: Comment out the popup we just added. Add a popup to the Sixth Floor Musume marker.
// var popupMuseum = new mapboxgl.Popup()
//     .setHTML("<h1>Sixth Floor Museum!</h1>")
//     .addTo(map);
//
// markerToMuseum.setPopup(popupMuseum);



// TODO: Review the popup docs. What are some additional options we can pass to the popup?
// TODO: Try setting the text by using ".setText()" instead of ".setHTML()"



/**********************************************
 * 					Geocoder
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding


// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup. Comment out previous map code.

// geocode("701 Commerce St. Dallas, Tx. 75202", mapboxToken).then(function(result) {
//    console.log('lng , lat: ', result);
//     var map = new mapboxgl.Map({
//     // https://docs.mapbox.com/mapbox-gl-js/api/
//     container: 'map',
//     style: 'mapbox://styles/mapbox/satellite-v9',
//     // center: result,
//     zoom: 16,
//     logoPosition: "top-right"
//     });
//
//     // Right here add the code from the ToDos below.
//     // map.setCenter(result);
//     // map.jumpTo({center: result});
//     map.flyTo({center: result});
// });
//TODO: Using the geocode method above, add a marker at Codeup to the map
//TODO: Instead of setCenter try using map.jumpTo()
//TODO: Instead of setCenter try using map.flyTo()

// geocode("seoul south Korea", mapboxToken).then(function(result) {
//  console.log('lng , lat: ', result);
//  var map = new mapboxgl.Map({
//   // https://docs.mapbox.com/mapbox-gl-js/api/
//   container: 'map',
//   style: 'mapbox://styles/mapbox/satellite-v9',
//   // center: result,
//   zoom: 16,
//   logoPosition: "top-right"
//  });

 // Right here add the code from the ToDos below.
 // map.setCenter(result);
 // map.jumpTo({center: result});
 // map.flyTo({center: result});
// });

// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -96.8084, lat: 32.7799} to get a physical address for the Sixth Floor Museum

// reverseGeocode({lng: -96.8084, lat: 32.7799}, mapboxToken).then(function(result){
//  console.log('reverse: ', result);
// });



// TODO: Reverse geocode coordinates of your choice using the reverse geocode method


