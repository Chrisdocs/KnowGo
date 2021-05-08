
//date cdn setup
let DateTime = luxon.DateTime;

var dateMil = DateTime.now('HH:ss').hour;
console.log(dateMil);

var dtfull = DateTime.fromObject({zone: 'America/Los_Angeles', numberingSystem: 'beng'})

DateTime.fromISO("2017-05-15")          //=> May 15, 2017 at midnight
DateTime.fromISO("2017-05-15T08:30:00") //=> May 15, 2017 at 8:30

var dt = DateTime.now();

var year = dt.year;
console.log("The year is " + year);
var month = dt.month;
console.log("The month is " + month);
// var week = dt.weekday;
// // console.log("The day of the week is " + week);
var day = dt.day;
console.log("The day is " + day);
// var hour = dt.hour;
// console.log("The hour is " + hour);
// var minute = dt.minute;
// console.log("The minut is " + minute);
// var second = dt.second;
// console.log("the second is " + second);

var todaySimple = month + "/" + day  + "/" + year;

console.log(todaySimple);

function getInput(cityinput) {

var city = document.getElementById("citySearch").value;
var apiLinkCurrent = 'https://api.openweathermap.org/data/2.5/weather?q=' +city+ '&units=imperial&appid=53cd6e2725805df5b134360f4870a02f';
var apiLinkForcast = 'https://api.openweathermap.org/data/2.5/forecast?q=' +city+ '&units=imperial&appid=53cd6e2725805df5b134360f4870a02f';
var apiReverseGeo = "https://geocode.search.hereapi.com/v1/geocode?q=" +city+ "&apiKey=--qFmPkZBQvzRTB0q_QAkAomIwUsrQCAEXg6EvFYrPU"

    // get weather data for the current day
    fetch(apiLinkCurrent).then(function(response){
        response.json().then(function(data) {
            //current day weather variables
            var currentDayWeatherDiv = document.getElementById("currentDayWeather");
            var currentWeatherP = document.createElement("p");
            var currentTemp = "Current Tempurature: " + JSON.stringify(data.main.temp);
            var tempHigh = "High Tempurature: " + JSON.stringify(data.main.temp_max);
            var tempLow = "Low Tempurature: " + JSON.stringify(data.main.temp_min);
            var feelsLike = "Feels like: " + JSON.stringify(data.main.feels_like);
            var humidity = "humidity: " + JSON.stringify(data.main.humidity) + "%";
            var clouds = JSON.stringify(data.clouds.all) + "% coverage";
            var weatherCurrent = data.weather[0].description;
            var weatherCurrentIcon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
            var inputDate= "Date:" + JSON.stringify(data.dt);

            //input data into HTML
            var currentHighLi = document.createElement("li");
            var currentLowLi = document.createElement("li");
            var currentWeatherLi = document.createElement("li");
            var currentWeatherIconImg = document.createElement("img");
            var currentHumidityLi = document.createElement("li");
            var currentCloudCoverageLi = document.createElement("li");
            var currentFeelsLikeLi = document.createElement("li");
            var currentTempLi = document.createElement("li");
            var inputDateLi = document.createElement("li");
            //append current weather icon
            var currentImgDiv = document.getElementById("currentIcon");
            currentImgDiv.innerHTML = "<img src=" + weatherCurrentIcon + ">"
            //append current weather data
            var getCurrentUl = document.getElementById("currentUl");
            getCurrentUl.appendChild(currentTempLi);
            currentTempLi.textContent = currentTemp;
            getCurrentUl.appendChild(currentHighLi);
            currentHighLi.textContent = tempHigh;
            getCurrentUl.appendChild(currentLowLi);
            currentLowLi.textContent = tempLow;
            getCurrentUl.appendChild(currentFeelsLikeLi);
            currentFeelsLikeLi.textContent = feelsLike;
            getCurrentUl.appendChild(currentHumidityLi);
            currentHumidityLi.textContent = humidity;
            getCurrentUl.appendChild(currentWeatherLi);
            currentWeatherLi.textContent = weatherCurrent;
            getCurrentUl.appendChild(currentCloudCoverageLi);
            currentCloudCoverageLi.textContent = clouds;
            //append date
            var getinputDateLi = document.getElementById("currentIcon")
            getinputDateLi.appendChild(inputDateLi);
            inputDateLi.textContent = todaySimple;

            //assigns a background style to the current weather element
            var currentBackground = document.getElementById("currentElStyle");
            currentElStyle.className = "currentBox";
        });
    
        //Get weather for the future forcast
        fetch(apiLinkForcast).then(function(response){
            response.json().then(function(data) {
                //get day 1 forcast data
                var dayOneTempHigh = "High: " + data.list[6].main.temp_max;
                var dayOneTempLow = "Low: " + data.list[3].main.temp_min;
                var dayOneWeather = data.list[4].weather[0].description;
                var dayOneWeatherIcon = "http://openweathermap.org/img/wn/" + data.list[4].weather[0].icon + "@2x.png";
                //get day 2 forcast data
                var dayTwoTempHigh = "High: " + data.list[14].main.temp_max;
                var dayTwoTempLow = "Low: " + data.list[11].main.temp_min;
                var dayTwoWeather = data.list[10].weather[0].description;
                var dayTwoWeatherIcon = "http://openweathermap.org/img/wn/" + data.list[10].weather[0].icon + "@2x.png";
                //get day 3 forcast data
                var dayThreeTempHigh = "High: " + data.list[22].main.temp_max;
                var dayThreeTempLow = "Low: " + data.list[19].main.temp_min;
                var dayThreeWeather = data.list[20].weather[0].description;
                var dayThreeWeatherIcon = "http://openweathermap.org/img/wn/" + data.list[20].weather[0].icon + "@2x.png";
                //get day 4 forcast data
                var dayFourTempHigh = "High: " + data.list[30].main.temp_max;
                var dayFourTempLow = "Low: " + data.list[27].main.temp_min;
                var dayFourWeather = data.list[28].weather[0].description;
                var dayFourWeatherIcon = "http://openweathermap.org/img/wn/" + data.list[28].weather[0].icon + "@2x.png";
                //get day 5 forcast data
                var dayFiveTempHigh = "High: " + data.list[38].main.temp_max;
                var dayFiveTempLow = "Low: " + data.list[35].main.temp_min;
                var dayFiveWeather = data.list[35].weather[0].description;
                var dayFiveWeatherIcon = "http://openweathermap.org/img/wn/" + data.list[35].weather[0].icon + "@2x.png";
                //get day 6 forcast data
                var daySixTempHigh = "High: " + data.list[39].main.temp_max;
                var daySixTempLow = "Low: " + data.list[39].main.temp_min;
                var daySixWeather = data.list[39].weather[0].description;
                var daySixWeatherIcon = "http://openweathermap.org/img/wn/" + data.list[39].weather[0].icon + "@2x.png";
    
                //get the elements and input append them accordingly
    
                //day one forcast
                var dayOneLi1 = document.createElement("li");
                var dayOneLi2 = document.createElement("li");
                var dayOneLi3 = document.createElement("li");
                var timeElOne = document.createElement("h6");
                var dayOneIcon = document.createElement("div");
                var dayOneUl = document.getElementById("d1Ul");
                    dayOneUl.className = "forcastStyle";
                    dayOneUl.appendChild(timeElOne);
                    timeElOne.textContent = month + "/" + (day + 1)  + "/" + year;
                    dayOneUl.appendChild(dayOneIcon);
                    dayOneIcon.innerHTML = "<img src=" + dayOneWeatherIcon + ">";
                    dayOneUl.appendChild(dayOneLi1);
                    dayOneLi1.textContent = dayOneTempHigh;
                    dayOneUl.appendChild(dayOneLi2);
                    dayOneLi2.textContent = dayOneTempLow;
                    dayOneUl.appendChild(dayOneLi3);
                    dayOneLi3.textContent = dayOneWeather;
                //day 2 forcast
                var dayTwoLi1 = document.createElement("li");
                var dayTwoLi2 = document.createElement("li");
                var dayTwoLi3 = document.createElement("li");
                var timeElTwo = document.createElement("h6");
                var dayTwoIcon = document.createElement("div");
                var dayTwoUl = document.getElementById("d2Ul");
                    dayTwoUl.className = "forcastStyle";
                    dayTwoUl.appendChild(timeElTwo);
                    timeElTwo.textContent = month + "/" + (day + 2)  + "/" + year;
                    dayTwoUl.appendChild(dayTwoIcon);
                    dayTwoIcon.innerHTML = "<img src=" + dayTwoWeatherIcon + ">";
                    dayTwoUl.appendChild(dayTwoLi1);
                    dayTwoLi1.textContent = dayTwoTempHigh;
                    dayTwoUl.appendChild(dayTwoLi2);
                    dayTwoLi2.textContent = dayTwoTempLow;
                    dayTwoUl.appendChild(dayTwoLi3);
                    dayTwoLi3.textContent = dayTwoWeather;
                //day 3 forcast
                var dayThreeLi1 = document.createElement("li");
                var dayThreeLi2 = document.createElement("li");
                var dayThreeLi3 = document.createElement("li");
                var timeElThree = document.createElement("h6");
                var dayThreeIcon = document.createElement("div");
                var dayThreeUl = document.getElementById("d3Ul");
                    dayThreeUl.className = "forcastStyle";
                    dayThreeUl.appendChild(timeElThree);
                    timeElThree.textContent = month + "/" + (day + 3)  + "/" + year;
                    dayThreeUl.appendChild(dayThreeIcon);
                    dayThreeIcon.innerHTML = "<img src=" + dayThreeWeatherIcon + ">";
                    dayThreeUl.appendChild(dayThreeLi1);
                    dayThreeLi1.textContent = dayThreeTempHigh;
                    dayThreeUl.appendChild(dayThreeLi2);
                    dayThreeLi2.textContent = dayThreeTempLow;
                    dayThreeUl.appendChild(dayThreeLi3);
                    dayThreeLi3.textContent = dayThreeWeather;
                //day 4 forcast
                var dayFourLi1 = document.createElement("li");
                var dayFourLi2 = document.createElement("li");
                var dayFourLi3 = document.createElement("li");
                var timeElFour = document.createElement("h6");
                var dayFourIcon = document.createElement("div");
                var dayFourUl = document.getElementById("d4Ul");
                    dayFourUl.className = "forcastStyle";
                    dayFourUl.appendChild(timeElFour);
                    timeElFour.textContent = month + "/" + (day + 4)  + "/" + year;
                    dayFourUl.appendChild(dayFourIcon);
                    dayFourIcon.innerHTML = "<img src=" + dayFourWeatherIcon + ">";
                    dayFourUl.appendChild(dayFourLi1);
                    dayFourLi1.textContent = dayFourTempHigh;
                    dayFourUl.appendChild(dayFourLi2);
                    dayFourLi2.textContent = dayFourTempLow;
                    dayFourUl.appendChild(dayFourLi3);
                    dayFourLi3.textContent = dayFourWeather;
                //day 5 forcast
                var dayFiveLi1 = document.createElement("li");
                var dayFiveLi2 = document.createElement("li");
                var dayFiveLi3 = document.createElement("li");
                var timeElFive = document.createElement("h6");
                var dayFiveIcon = document.createElement("div");
                var dayFiveUl = document.getElementById("d5Ul");
                    dayFiveUl.className = "forcastStyle";
                    dayFiveUl.appendChild(timeElFive);
                    timeElFive.textContent = month + "/" + (day + 5)  + "/" + year;
                    dayFiveUl.appendChild(dayFiveIcon);
                    dayFiveIcon.innerHTML = "<img src=" + dayFiveWeatherIcon + ">";
                    dayFiveUl.appendChild(dayFiveLi1);
                    dayFiveLi1.textContent = dayFiveTempHigh;
                    dayFiveUl.appendChild(dayFiveLi2);
                    dayFiveLi2.textContent = dayFiveTempLow;
                    dayFiveUl.appendChild(dayFiveLi3);
                    dayFiveLi3.textContent = dayFiveWeather;
                //day 6 forcast
                var daySixLi1 = document.createElement("li");
                var daySixLi2 = document.createElement("li");
                var daySixLi3 = document.createElement("li");
                var timeElSix = document.createElement("h6");
                var daySixIcon = document.createElement("div");
                var daySixUl = document.getElementById("d6Ul");
                    daySixUl.className = "forcastStyle";
                    daySixUl.appendChild(timeElSix);
                    timeElSix.textContent = month + "/" + (day + 6)  + "/" + year;
                    daySixUl.appendChild(daySixIcon);
                    daySixIcon.innerHTML = "<img src=" + daySixWeatherIcon + ">";
                    daySixUl.appendChild(daySixLi1);
                    daySixLi1.textContent = daySixTempHigh;
                    daySixUl.appendChild(daySixLi2);
                    daySixLi2.textContent = daySixTempLow;
                    daySixUl.appendChild(daySixLi3);
                    daySixLi3.textContent = daySixWeather;
            });
        });
        // begining of history
        var input = document.getElementById('citySearch');
        console.log(input.value);
        var inputHistory = document.createElement("li");
        inputHistory.className = "historyStyle";
        historyUl.appendChild(inputHistory);
        inputHistory.textContent = input.value;

        


        
    var url = "https://en.wikipedia.org/w/api.php"; 


    
    function getLocation() {
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
        alert("Geolocation is not supported by this browser.");
        }
    };
    
    fetch(apiReverseGeo).then(function(response){
        response.json().then(function(geoLoc){
            console.log(geoLoc)
            var lat = geoLoc.items[0].position.lat;
            var long = geoLoc.items[0].position.lng;
                
                var params = {
                    "action": "query",
                    "format": "json",
                    "prop": "pageimages|coordinates|categories",
                    "list": "",
                    "generator": "geosearch",
                    "ggscoord": lat + "|" + long,
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
                    console.log(pages);
                    for (var page in pages) {
                        console.log(pages[page].title + ": " + pages[page].thumbnail.source);
                        var wikiEl = document.getElementById("wikiDataElements");
                        var wikiUl = document.createElement("ul");
                        var wikiTitleLi = document.createElement("li");
                        var wikiLinkDiv = document.createElement("div");
                        var wikiIconEl = document.createElement("div"); 
                        wikiLinkDiv.className = "locatationStyle";
                        //append wiki icon
                            wikiEl.appendChild(wikiIconEl);
                            wikiIconEl.innerHTML = "<img src=" + pages[page].thumbnail.source + " />" + "<a href='https://en.wikipedia.org/wiki/" + pages[page].title + "'" + ">" + "Visit the wiki! -> " + pages[page].title + "</a>";
                            //append title and wiki link
                            wikiEl.appendChild(wikiUl);
                            wikiUl.appendChild(wikiTitleLi);
                            wikiUl.appendChild(wikiLinkDiv);
                            wikiTitleLi.textContent = pages[page].title;
                    //         wikiLinkDiv.innerHTML = "<a href='https://en.wikipedia.org/wiki/" + pages[page].title + "'" + ">" + "Visit the wiki! -> " + pages[page].title + "</a>";
                    }
                })
                .catch(function(error){console.log(error);});
        })
        })
    });
};