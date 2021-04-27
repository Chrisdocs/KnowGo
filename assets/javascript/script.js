// Write a fetch request to the Giphy API
var weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=austin,US-TX&appid=53cd6e2725805df5b134360f4870a02f";
// Then log the response in the console
fetch(weatherAPI).then(function(response){
    response.json().then(function(data) {
        console.log(data);
    });
});

var placesAPI = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBFQoDDuP1ZNUkjxAFn_jDL3fYHL3IsSug&callback=initMap";

fetch(placesAPI).then(function(response){
    response.json().then(function(data){
        console.log(data);
    });
});