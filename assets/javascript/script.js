var apiKey = "53cd6e2725805df5b134360f4870a02f";
var city = "austin"
var apiLink = 'https://api.openweathermap.org/data/2.5/weather?q=' +city+ '&units=imperial&appid=53cd6e2725805df5b134360f4870a02f'

    // Then log the response in the console
    fetch(apiLink).then(function(response){
        response.json().then(function(data) {
            console.log(data);

            var currentDayWeatherDiv = document.getElementById("currentDayWeather");
            var currentWeatherP = document.createElement("p");
            var currentTemp = JSON.stringify(data.main.temp);
            var tempHigh = JSON.stringify(data.main.temp_max);
            var tempLow = JSON.stringify(data.main.temp_min);
            var feelsLike = JSON.stringify(data.main.feels_like);
            var humidity = JSON.stringify(data.main.humidity);

            currentDayWeatherDiv.appendChild(currentWeatherP);
            currentWeatherP.textContent = "Tempurature:" + currentTemp;
        });
    });

var url = "https://en.wikipedia.org/w/api.php"; 

function getLocation() {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
    alert("Geolocation is not supported by this browser.");
    }
};

function showPosition(position) {
    var userLocationLat = position.coords.latitude;
    var userLocationLong = position.coords.longitude;
    console.log(userLocationLat);
    console.log(userLocationLong);
    
    var params = {
            "action": "query",
            "format": "json",
            "prop": "pageimages|coordinates|categories",
            "list": "",
            "generator": "geosearch",
            "ggscoord": userLocationLat + "|" + userLocationLong,
            "ggsradius": "10000",
            "ggslimit": "10"
    };
    

    url = url + "?origin=*";
    Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
    console.log(url);
    fetch(url)
        .then(function(response){return response.json();})
        .then(function(response) {
            console.log(response);
            var pages = response.query.pages;
            for (var page in pages) {
                console.log(pages[page].title + ": " + pages[page].thumbnail.source);
            }
        })
        .catch(function(error){console.log(error);});
};

