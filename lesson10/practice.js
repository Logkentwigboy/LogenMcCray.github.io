
const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=Preston,Idaho&appid=575e22d506a257862a45babb05c77c80&units=imperial";
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
  document.getElementById('CityName').textContent = jsObject.name;

  document.getElementById('CurrentCondition').textContent = jsObject.weather.main;

  document.getElementById('current-temp').textContent = jsObject.main.temp;

  document.getElementById('humidity').textContent = jsObject.main.humidity;
  
  document.getElementById('WindSpeed').textContent = jsObject.wind.speed.value;
});
