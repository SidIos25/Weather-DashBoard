const apiKey = "c0d34d979a2ad7b9ae82996fc66ea2eb";  
function getWeather() {
  const city = document.getElementById("cityInput").value.trim();

  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const weather = data.weather[0].description;

      document.getElementById("result").innerHTML = `
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Temperature:</strong> ${temperature} °C</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <p><strong>Forecast:</strong> ${weather}</p>
      `;
    })
    .catch(() => {
      document.getElementById("result").innerHTML = "City not found.";
    });
}
