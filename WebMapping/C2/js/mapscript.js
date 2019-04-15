
/// sets up my mapbox access token so they can track my usage of their basemap server

mapboxgl.accessToken = 'pk.eyJ1IjoiamlhbndlaWxpMCIsImEiOiJjanVkOThlMncwMHIyM3luemdsMGp0MWs5In0.5EWV1tuq2lWOJmI_x8Hirg';
var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [-73.98, 40.70],
  zoom: 9.5,
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

/// add popup
var popup = new mapboxgl.Popup({offset: 20})
		.setText('The School');
///add marker
var marker = new mapboxgl.Marker()
  .setLngLat([-73.969145,40.669116])
  .setPopup(popup)
  .addTo(map);

studentPizzaShops.forEach(function(studentData) {

  var thisStudentsColor = 'steelblue';
  if (studentData.nyuprogram === 'wagner') thisStudentsColor = 'orange';
  if (studentData.nyuprogram === 'cusp') thisStudentsColor = 'purple';
  if (studentData.nyuprogram === 'adjunct') thisStudentsColor = 'green';
  if (studentData.nyuprogram === 'global liberal studies') thisStudentsColor = 'yellow';
  console.log(studentData.name)
  new mapboxgl.Marker({
    color: thisStudentsColor,
  })
    .setLngLat([studentData.lng, studentData.lat])
    .setPopup(new mapboxgl.Popup({ offset: 40 })
      .setText(`${studentData.name} says their favorite pizza shop is ${studentData.favoritepizzashop}`))
    .addTo(map);
})




