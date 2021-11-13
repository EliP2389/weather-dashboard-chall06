var citySearchEl = document.querySelector("#citysearch");
var weatherEl = document.querySelector("#current-weather");
var fiveDayEl = document.querySelector("fiveday-forcast");

function day() {
    $("#currentDay").text(moment().format("MMMM Do, YYYY - hh:mm:ss a"))

    setInterval(function () {
        $("#currentDay").each(function () {
            day($(this));
        });
    }, 1000);
}; day();

