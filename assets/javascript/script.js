//Global variables
var apiKey = '53cd6e2725805df5b134360f4870a02f';
var city = "austin";
var apiLinkCurrent = 'https://api.openweathermap.org/data/2.5/weather?q=' +city+ '&units=imperial&appid=53cd6e2725805df5b134360f4870a02f';
var apiLinkForcast = 'https://api.openweathermap.org/data/2.5/forecast?q=' +city+ '&units=imperial&appid=53cd6e2725805df5b134360f4870a02f';

    // get weather data for the current day
    fetch(apiLinkCurrent).then(function(response){
        response.json().then(function(data) {
            console.log(data);

            var currentDayWeatherDiv = document.getElementById("currentDayWeather");
            var currentWeatherP = document.createElement("p");
            var currentTemp = "Current Tempurature: " + JSON.stringify(data.main.temp);
            var tempHigh = "High Tempurature: " + JSON.stringify(data.main.temp_max);
            var tempLow = "Low Tempurature: " + JSON.stringify(data.main.temp_min);
            var feelsLike = "Feels like: " + JSON.stringify(data.main.feels_like);
            var humidity = "humidity: " + JSON.stringify(data.main.humidity);
            var clouds = JSON.stringify(data.clouds.all) + "% coverage";

            console.log(currentTemp);
            console.log(tempHigh);
            console.log(tempLow);
            console.log(feelsLike);
            console.log(humidity);
            console.log(clouds);


            currentDayWeatherDiv.appendChild(currentWeatherP);
            currentWeatherP.textContent = "Tempurature:" + currentTemp;
        });
    });

    //Get weather for the future forcast
    fetch(apiLinkForcast).then(function(response){
        response.json().then(function(data) {
            console.log(data);
            //get day 1 forcast data
            var dayOneTempHigh = "High: " + data.list[6].main.temp_max;
            var dayOneTempLow = "Low: " + data.list[3].main.temp_min;
            var dayOneWeather = "Weather: " + data.list[4].weather[0].description;
            var dayOneWeatherIcon = "http://openweathermap.org/img/wn/" + data.list[4].weather[0].icon + "@2x.png";
            console.log(dayOneTempHigh);
            console.log(dayOneTempLow);
            console.log(dayOneWeather);
            console.log(dayOneWeatherIcon);
            //get day 2 forcast data
            var dayTwoTempHigh = "High: " + data.list[14].main.temp_max;
            var dayTwoTempLow = "Low: " + data.list[11].main.temp_min;
            var dayTwoWeather = "Weather: " + data.list[10].weather[0].description;
            var dayTwoWeatherIcon = "http://openweathermap.org/img/wn/" + data.list[10].weather[0].icon + "@2x.png";
            console.log(dayTwoTempHigh);
            console.log(dayTwoTempLow);
            console.log(dayTwoWeather);
            console.log(dayTwoWeatherIcon);
            //get day 3 forcast data
            var dayThreeTempHigh = "High: " + data.list[22].main.temp_max;
            var dayThreeTempLow = "Low: " + data.list[19].main.temp_min;
            var dayThreeWeather = "Weather: " + data.list[20].weather[0].description;
            var dayThreeWeatherIcon = "http://openweathermap.org/img/wn/" + data.list[20].weather[0].icon + "@2x.png";
            console.log(dayThreeTempHigh);
            console.log(dayThreeTempLow);
            console.log(dayThreeWeather);
            console.log(dayThreeWeatherIcon);
            //get day 4 forcast data
            var dayFourTempHigh = "High: " + data.list[30].main.temp_max;
            var dayFourTempLow = "Low: " + data.list[27].main.temp_min;
            var dayFourWeather = "Weather: " + data.list[28].weather[0].description;
            var dayFourWeatherIcon = "http://openweathermap.org/img/wn/" + data.list[28].weather[0].icon + "@2x.png";
            console.log(dayFourTempHigh);
            console.log(dayFourTempLow);
            console.log(dayFourWeather);
            console.log(dayFourWeatherIcon);
            //get day 5 forcast data
            var dayFiveTempHigh = "High: " + data.list[38].main.temp_max;
            var dayFiveTempLow = "Low: " + data.list[35].main.temp_min;
            var dayFiveWeather = "Weather: " + data.list[35].weather[0].description;
            var dayFiveWeatherIcon = "http://openweathermap.org/img/wn/" + data.list[35].weather[0].icon + "@2x.png";
            console.log(dayFiveTempHigh);
            console.log(dayFiveTempLow);
            console.log(dayFiveWeather);
            console.log(dayFiveWeatherIcon);
            //get day 6 forcast data
            var daySixTempHigh = "High: " + data.list[39].main.temp_max;
            var daySixTempLow = "Low: " + data.list[39].main.temp_min;
            var daySixWeather = "Weather: " + data.list[39].weather[0].description;
            var daySixWeatherIcon = "http://openweathermap.org/img/wn/" + data.list[39].weather[0].icon + "@2x.png";
            console.log(daySixTempHigh);
            console.log(daySixTempLow);
            console.log(daySixWeather);
            console.log(daySixWeatherIcon);

            //get the elements and input append them accordingly
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

