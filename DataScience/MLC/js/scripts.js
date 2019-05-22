// sets up my mapbox access token so they can track my usage of their basemap services
mapboxgl.accessToken = 'pk.eyJ1IjoiY3dob25nIiwiYSI6IjAyYzIwYTJjYTVhMzUxZTVkMzdmYTQ2YzBmMTM0ZDAyIn0.owNd_Qa7Sw2neNJbK6zc1A';

// instantiate the map
var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-74.0089433,40.7205474],
  zoom: 13,
  interactive: true
});





//location midtown 40.7505474,-74.0189433
// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

