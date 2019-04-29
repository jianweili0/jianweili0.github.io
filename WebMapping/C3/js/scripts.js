
/// sets up my mapbox access token so they can track my usage of their basemap server

mapboxgl.accessToken = 'pk.eyJ1IjoiamlhbndlaWxpMCIsImEiOiJjanVkOThlMncwMHIyM3luemdsMGp0MWs5In0.5EWV1tuq2lWOJmI_x8Hirg';

// initiate the map
var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-73.994458,40.722787],
  zoom: 14,
});


map.addControl(new mapboxgl.NavigationControl())

