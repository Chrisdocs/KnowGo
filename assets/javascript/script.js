// Write a fetch request to the Giphy API
var weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=austin,US-TX&appid=53cd6e2725805df5b134360f4870a02f";
// Then log the response in the console
fetch(weatherAPI).then(function(response){
    response.json().then(function(data) {
        console.log(data);
    });
});

var userLocation = "30.27877864722929, -97.7495812011866"


var placesAPI = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBFQoDDuP1ZNUkjxAFn_jDL3fYHL3IsSug&location=" + userLocation + "&radius=1000";

fetch(placesAPI, {
    mode: 'cors',
    credentials: 'include'
}).then(function(response){
    response.json().then(function(data){
        console.log(data);
    });
});