const apiKey = "818124ffa4475468a184b9c40ed8934d";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// console.log(searchBox);
// console.log(searchBtn.value);

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
  } else {
    let data = await response.json();
    //   console.log(data);
    //   console.log(data.name);
    //   console.log(data.main.humidity);
    const humidity = await data.main.humidity;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Kmph";

    //used to change the images of different weather conditions
    weatherIcon.src =
      "images/" + `${data.weather[0].main}`.toLowerCase() + ".png";
    //   console.log("images/" + `${data.weather[0].main}`.toLowerCase() + ".png");

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
// checkWeather("Jammu");
