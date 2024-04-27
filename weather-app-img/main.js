const API_KEY = "ea31b323da906dac64cbee23f04e5fd0";
const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const SearchBox = document.querySelector(".search input");
const Searchbtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".weather-icon");

const WeatherCheck = async (city) => {
  const data = await fetch(API_URL + city.toLowerCase() + `&appid=${API_KEY}`);
  if (!data.ok) {
    throw new Error(`HTTP error! status: ${data.status}`);
  }
  var weatherData = await data.json();
  console.log(weatherData);

  document.querySelector(".city").innerHTML = weatherData.name;
  document.querySelector(".wind").innerHTML =
    weatherData.wind.speed.toFixed(1) + "mph";
  document.querySelector(".temp").innerHTML =
    Math.round(weatherData.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML =
    weatherData.main.humidity + "%";

  document.querySelector(".weather").style.display = "block";

  if (weatherData.weather[0].main == "Clouds") {
    WeatherIcon.src = "images/clouds.png";
  } else if (weatherData.weather[0].main == "Clear") {
    WeatherIcon.src = "images/clear.png";
  } else if (weatherData.weather[0].main == "Drizzle") {
    WeatherIcon.src = "images/drizzle.png";
  } else if (weatherData.weather[0].main == "Mist") {
    WeatherIcon.src = "images/mist.png";
  } else if (weatherData.weather[0].main == "Rain") {
    WeatherIcon.src = "images/rain.png";
  } else if (weatherData.weather[0].main == "Snow") {
    WeatherIcon.src = "images/snow.png";
  }
};

Searchbtn.addEventListener("click", () => {
  WeatherCheck(SearchBox.value).catch((error) =>
    console.error("Error:", error)
  ); // add error handling
});
