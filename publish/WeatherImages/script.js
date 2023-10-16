//Here I declred search input and button.
const searchInput = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button')

async function getWeather(city) {
    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d03e2854a891e07b0aa41324f9780644&units=metric`);
    var data = await res.json();
    console.log(data);
    document.querySelector('.celcius').innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidityP').innerHTML = Math.round(data.main.humidity) + " %";
    document.querySelector('.windS').innerHTML = Math.round(data.wind.speed) + "km/h";
}
//Declaration of the Btn's event listener
searchBtn.addEventListener('click', () => {
    getWeather(searchInput.value);
})