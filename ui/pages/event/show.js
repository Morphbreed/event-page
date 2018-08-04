import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './show.html';


// $.getJSON(url, function(data) { 
//   location.lng = data.results[0].geometry.location.lng;
//   location.lat = data.results[0].geometry.location.lat;
//   console.log(location.lat);
//   console.log(location.lng);
// });

Template.eventShow.onCreated(() => {

});

Template.eventShow.onRendered(() => {  
  // GoogleMaps.load({ v: '3', key: 'AIzaSyBbz3QMwBuNHmWhq9fr-PJ2hElN6Pdp8A8', libraries: 'geometry,places' });
  // let streetFull = Template.currentData().street;
  // let streetNr = streetFull.split(" ")[1];
  // let street = streetNr = streetFull.split(" ")[0];
  // let city = Template.currentData().city;
  // let country = Template.currentData().country;
  // let location = {};
  // let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${streetNr}+${street},+${city},+${country}&key=AIzaSyBbz3QMwBuNHmWhq9fr-PJ2hElN6Pdp8A8`;

  // $.getJSON(url, function(data) {
  //   location.lng = data.results[0].geometry.location.lng;
  //   location.lat = data.results[0].geometry.location.lat;

  //   console.log(data);

  //   GoogleMaps.create({
  //     name: 'googleMap',
  //     element: document.getElementById('googleMap'),
  //     options: {
  //       center: new google.maps.LatLng(location.lat, location.lng),
  //       zoom: 15
  //     }
  //   });

    
  // });
});

Template.eventShow.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('googleMap', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
});
