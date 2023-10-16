//Here I declred search input and button.
const searchInput = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const image = document.querySelector('.icon');

async function getWeather(city) {
    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d03e2854a891e07b0aa41324f9780644&units=metric`);
    var data = await res.json();
    console.log(data);
    document.querySelector('.celcius').innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidityP').innerHTML = Math.round(data.main.humidity) + " %";
    document.querySelector('.windS').innerHTML = Math.round(data.wind.speed) + "km/h";

    if(data.weather[0].main == "Clouds"){
        image.src = "./WeatherImages/cloudy.png"
    } else if(data.weather[0] == "Dew"){
        image.src = "./WeatherImages/dew.png"
    } else if(data.weather[0] == "Clear"){
        image.src = "./WeatherImages/clear-sky.png"
    } else if(data.weather[0] == "Rain"){
        image.src = "./WeatherImages/rainkid.png"
    } else if(data.weather[0] == "Mist"){
        image.src = "./WeatherImages/mist.png"
    } else if(data.weather[0] == "Wind"){
        image.src = "./WeatherImages/wind.png"
    } else if(data.weather[0] == "Snow"){
        image.src = "./WeatherImages/snowing.png"
    }else if(data.weather[0] == "Mist"){
        image.src = "./WeatherImages/mist.png"
    }
}
//Declaration of the Btn's event listener
searchBtn.addEventListener('click', () => {
    getWeather(searchInput.value);
})