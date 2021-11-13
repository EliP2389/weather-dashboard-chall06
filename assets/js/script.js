var citySearchEl = document.querySelector("#citysearch");
var weatherEl = document.querySelector("#current-weather");
var fiveDayEl = document.querySelector("fiveday-forcast");


var apiKey = "cdb53ea06b8d4e2775f8db6d2e437399";

var currentWeather = function () {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=` + citySearchEl.value + `&appid=` + apiKey;
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
                displayWeather(data);
                fiveWeather()
            })
        }
    })
};
document.getElementById("citybtn").addEventListener("click", currentWeather);

var displayWeather = function (data) {
    var cityNameEl = document.querySelector("#city-name");
    cityNameEl.textContent = data.name;
    var tempEl = document.querySelector("#temp")
    tempEl.textContent = " temp " + data.main.temp;
    var windEl = document.querySelector("#wind");
    windEl.textContent = " wind " + data.wind.speed;
    var humidityEl = document.querySelector("#humidity")
    humidityEl.textContent = " humidity " + data.main.humidity
}

var fiveWeather = function () {
    let apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearchEl.value + `&appid=` + apiKey;
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
                displayFiveDay(data);
            })
        }
    })
};

var displayFiveDay = function (data) {
    for (let index = 0; index < 5; index++) {

        var forecastEl = document.querySelector("#forecast-" + (index+1))
        var tempEl = document.createElement("p")
        tempEl.textContent = data.list[7+(index*8)].main.temp
        forecastEl.append(tempEl)
        var windEl = document.createElement("p")
        windEl.textContent = data.list[7+(index*8)].wind.speed
        forecastEl.append(windEl)
        var dayTime = document.createElement("p")
        dayTime.textContent = data.list[7+(index*8)].dt_txt
        forecastEl.append(dayTime)
    }
}