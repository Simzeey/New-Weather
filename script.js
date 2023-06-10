let now = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let hours = now.getHours();
let minutes = now.getMinutes();
let day = days[now.getDay()];
let year = now.getFullYear();
let date = now.getDate();
let month = months[now.getMonth()];

function getWeather(response) {
  document.querySelector("#day").innerHTML = day;
  document.querySelector("#time").innerHTML = `${hours}:${minutes}`;
  document.querySelector("#cityInput").innerHTML = response.data.name;
  document.querySelector("#condition").innerHTML =
    response.data.weather[0].main;
  document.querySelector("#temperature").innerHTML = response.data.main.temp;
  document.querySelector("#humid").innerHTML = response.data.main.humidity;
  document.querySelector("#speed").innerHTML = response.data.wind.speed;
}

function getCity(city) {
  let apiKey = "ccf8e7c9ca1efbbf9e8d03fa2fdf555f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}{country}&appid=${apiKey}`;
  axios.get(apiUrl).then(getWeather);
}

function submit(event) {
  event.preventDefault();
  let city = document.querySelector("#input").value;
  getCity(city);
}

let button = document.querySelector("#form");
button.addEventListener("submit", submit);
