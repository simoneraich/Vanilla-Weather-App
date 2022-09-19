let currentTime = new Date();
let h4 = document.querySelector("h4");
h4.innerHTML = formatedTime(currentTime);

function formatedTime(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return `${days[dayIndex]} ${hours}:${minutes}`;
}

function showTemperature(response) {
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document
    .querySelector("#current-weather-img")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  celciusTemp = response.data.main.temp;
}

function searchingCity(city) {
  let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchingCity(city);
}

function changetoF(event) {
  event.preventDefault();
  let shownTemperature = document.querySelector("#temp");
  let shownTempF = (celciusTemp * 9) / 5 + 32;
  shownTemperature.innerHTML = Math.round(shownTempF);
}

function changetoC(event) {
  event.preventDefault();
  let shownTemperature = document.querySelector("#temp");
  shownTemperature.innerHTML = Math.round(celciusTemp);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let celciusTemp = null;

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", changetoF);

let celciusLink = document.querySelector("#celcius");
celciusLink.addEventListener("click", changetoC);

searchingCity("New York");
