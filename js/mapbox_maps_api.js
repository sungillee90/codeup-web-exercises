console.log("hello");
console.log('token: ' + mapboxToken);

mapboxgl.accessToken = mapboxToken;

// var map = new mapboxgl.Map({
//     // https://docs.mapbox.com/mapbox-gl-js/api/
//     container: 'map',
//     style: 'mapbox://styles/mapbox/outdoors-v11',
//     center: [-96.8057, 32.7787], // Codeup Dallas
//     zoom: 18
// });

// Generate a map that shows the city with your favorite restaurant using geocoding.
// Raising Cane's

// geocode("4100 Belt Line Rd, Addison, TX 75001", mapboxToken).then(function(result) {
//     console.log('lng , lat: ', result);
//     var map = new mapboxgl.Map({
//         // https://docs.mapbox.com/mapbox-gl-js/api/
//         container: 'map',
//         style: 'mapbox://styles/mapbox/outdoors-v11',
//         // center: result,
//         zoom: 16,
//         logoPosition: "bottom-left"
//     });
//     map.setCenter(result);
//     // map.jumpTo({center: result});
//     // map.flyTo({center: result});
// });



// Sushi Sake
// 2150 North Collins Blvd. Richardson, TX 75080
geocode("2150 North Collins Blvd. Richardson, TX 75080", mapboxToken).then(function(result) {
    console.log('lng , lat: ', result);
    var map = new mapboxgl.Map({
        // https://docs.mapbox.com/mapbox-gl-js/api/
        container: 'map',
        style: 'mapbox://styles/mapbox/outdoors-v11',
        // center: result,
        zoom: 16,
        logoPosition: "bottom-left"
    });
    map.setCenter(result);
    // map.jumpTo({center: result});
    // map.flyTo({center: result});
});

//Create a marker on your map of the exact location of your favorite restaurant set the zoom to allow for best viewing distance.
// var markerOptions = {
//     color: "red"
// };
// var marker = new mapboxgl.Marker(markerOptions)
//     .setLngLat([-96.717299, 32.978226])
//     .addTo(map)


