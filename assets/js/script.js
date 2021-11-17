var citySearchEl = document.querySelector("#citysearch");
var weatherEl = document.querySelector("#current-weather");
var fiveDayEl = document.querySelector("fiveday-forcast");



// let lat = "data.coord.lat"
// let lon = "data.coord.lat"

// let lat = ""
// let lon = ""
var searchHistory = [];

var apiKey = "cdb53ea06b8d4e2775f8db6d2e437399";

var currentCity = function () {
    // use the input's "ID" from your html along with the API in order to search a specific city
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=` + citySearchEl.value + `&units=imperial&appid=` + apiKey;
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                // console.log displays the data needed to create (temp,wind,humidity ....)
                console.log(data);


                // displays the data when searching a city
                displayWeather(data);
                // gets the 5 day weather forcast for that city
                fiveWeather()
                // saveCity()
                displayCityHistory()
                // getItem()






                let apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&units=imperial&appid=" + apiKey;

                fetch(apiUrl).then(function (response) {
                    if (response.ok) {
                        response.json().then(function (data) {
                            console.log(data);
                            //  displayWeather(data);



                        })
                    }
                })
            })
        }
    })
}






// activates the search button


// displays the current weather for that specific day
var displayWeather = function (data) {
    var cityNameEl = document.querySelector("#city-name");
    cityNameEl.textContent = data.name;
    // var iconEl = document.querySelector("#icon");
    $("#icon").attr("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    var tempEl = document.querySelector("#temp");
    tempEl.textContent = " Temp: " + data.main.temp + " F ";
    var windEl = document.querySelector("#wind");
    windEl.textContent = " Wind: " + data.wind.speed;
    var humidityEl = document.querySelector("#humidity");
    humidityEl.textContent = " Humidity: " + data.main.humidity
    // var uviEl = document.querySelector("#uv-index");
    // uviEl.textContent = " Uv: " + data.current.uvi
}







// new API to search for the % day forecast. exact functions as "currentWeather" to get data for the 5 day forecast
var fiveWeather = function () {
    let apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySearchEl.value + `&units=imperial&appid=` + apiKey;
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                // displays data needed to create 5 day forecast
                console.log(data);
                displayFiveDay(data);
            })
        }
    })
};

//  function to display 5 day forecast
var displayFiveDay = function (data) {
    for (let i = 0; i < 5; i++) {

        var forecastEl = document.querySelector("#forecast-" + (i + 1));

        var dayTime = document.createElement("p");
        dayTime.textContent = data.list[7 + (i * 8)].dt_txt
        forecastEl.append(dayTime);

        var icon = document.createElement("img");
        icon.setAttribute("src", `http://openweathermap.org/img/wn/` + data.list[7 + (i * 8)].weather[0].icon + `@2x.png`)
        forecastEl.append(icon);

        var tempEl = document.createElement("p");
        tempEl.textContent = data.list[7 + (i * 8)].main.temp
        forecastEl.append(tempEl);

        var windEl = document.createElement("p");
        windEl.textContent = data.list[7 + (i * 8)].wind.speed
        forecastEl.append(windEl);

    }
}

// function saveCity() {
    
//         localStorage.setItem("citysearch", JSON.stringify(citySearchEl.value));

// };


function displayCityHistory(){

     localStorage.setItem("citysearch",JSON.stringify(citySearchEl.value));
    // var citySaved = document.getElementById("cityhistory")

    // var boom= document.createElement("input");
    // boom.setAttribute("type", "text")
    // boom.setAttribute("id", "heyy")
    // citySaved.append(boom)
    
   var name2 = document.getElementById("cityhistory")
   name2.value = localStorage.getItem("citysearch")
    
   for (let index = 0; index < array.length; index++) {
       
       
   }



} 

// function getItem(){
//     // for (let i = 0; i < localStorage.length; i++) {
       
        

//     }




document.getElementById("citybtn").addEventListener("click", currentCity);



// function loadHistory() {
//     var history = localStorage.getItem("citySearchEl");
//   history = JSON.parse(history);
//   // for ( i in history ) {

//   // }
//   for ( i = 0 ; i < history.length ; i++ ) {
//     searchHistory.push(history[i]);
//   }
// }