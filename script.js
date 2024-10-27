const apiKey = "ac5dbed8b1bcc70d3c483fd62b7e7eb0";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=" + apiKey + "&units=metric"; 
        function getWeather() {
            const city = document.getElementById("cityInput").value;
            const url = apiUrl + "&q=" + city; 
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    displayWeather(data);
                })
                .catch(error => {
                    console.error("Error fetching weather:", error);
                    alert("City not found!");
                });
        }
        function displayWeather(data) {
            const weatherInfo = document.getElementById("weather-info");
            weatherInfo.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${Math.round(data.main.temp)}°C</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
        }