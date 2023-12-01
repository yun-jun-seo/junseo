const API_KEY = "022c44fda65f777ac64bc741ad25b005";

// https://openweathermap.org/current

async function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  // const data = await fetch(url).then((response) => response.json());
  const weather = document.querySelector("#weather div:first-child");
  const city = document.querySelector("#weather div:last-child");
  console.log(data);
  // console.log(data.weather[0].main);
  city.innerText = `${data.name}`;
  weather.innerText = data.weather[0].main;
}
function onGeoError() {
  alert();
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);