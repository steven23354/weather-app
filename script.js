function getweather() {
  const apiKey ='62cc9ce50b4884771a6f0d02d27cda1e';
  const city = document.getElementById('city').Value;

  if (!city){
    alert('please enter a city');
    return;
  }

  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;

  fetch(currentWeatherUrl)
  .then(response => response.json())
  .then(data => {displayWeather(data);})
  .catch(error =>{
    console.error('Error fetching current weather data:',error);
    alert('error fetching current weather data. please try again.');

  });
  fetch(ForecastUrlUrl)
  .then(response => response.json())
  .then(data => {displayHourlyforecast(data.list); })
  .catch(error => {
    console.error('Error fetching current hourly forecast data:',error);
    alert('error fetching current hourly forecast data. please try again.');

  });
  
}

function displayWeather(data) {   
const tempDivinfo = document.getElementById('temp-div');
const WeatherInfoDiv = document.getElementById('weather-info');
const WeatherIcon = document.getElementById('weather-icon') ;
const hourlyforecastdiv = document.getElementById('hourly-forecast');

// clear previous content
WeatherInfoDiv.innerHTML = ``;
hourlyforecastdiv.innerHTML = ``;
tempDivinfo.innerHTML =``;

 
  if (data.cod === '404'){
    WeatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
  }
  else{
    const cityName = data.name;
    const temperature = Math.round(data.main.temp - 273.15);
    const iconURL = `http://openweathermap.org/img/wn/${iconcode}@4x.png`;


    const temperatureHTML = `<p>${temperature}°C</p>
    `;


    const weatherHTML = `
    <p>${cityName}</P>
    <p>${discription}</p> `;


    tempDivinfo.innerHTML = temperatureHTML;
    WeatherInfoDiv.innerHTML = weatherHTML;
    WeatherIcon.src = iconURL;
    WeatherIcon.alt = description;






   showImage();

   
  }
}

function displayHourlyforecast(hourlyData){
  const hourlyforecastDiv = document.getElementById('hourly-forecast');
  const next24Hours = hourlyData.slice(0, 8);

  next24Hours.forEach(item =>{
   const dateTime = new Data(item.dt * 1000);
   const hour = dateTime.getHours();
   const temperature = Math.round(item.main.temp - 273.15);
   const iconcode = item.weather[0].icon;
   const iconURL = `https://openweathermap.org/img/wn/${iconcode}.png`;
   
   
   const hourlyItemHtml =`
   <div class="hourly-item">
   <span>${hour}:00</span>
   <img src="${iconURL}" alt="Hourly weather icon">
   <span>${temperature}°C</span>
   </div>         `;
   

   hourlyforecastDiv.innerHTML += hourlyItemHtml;

   
  });
}


function showImage(){
  const WeatherIcon =  document.getElementById('weather-icon');
  WeatherIcon.style.displasy = 'block'; 
}











