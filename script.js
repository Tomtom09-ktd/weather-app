async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "b1dc0ab31748e439c2722e53e744b558";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.cod === 200) {
    document.getElementById("result").innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡️ Temperature: ${data.main.temp}°C</p>
      <p>☁️ Condition: ${data.weather[0].description}</p>
      <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } else {
    document.getElementById("result").innerHTML = `<p>City not found ❌</p>`;
  }
}

