const apiKey = 'bfae9dcc9c0f548fe381f97a057669b0';

async function fetchWeather(city) {
    const resp = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + apiKey);
    const respData = await resp.json();
    displayWeather(respData);     // get the data of the city searched
}
function displayWeather(data) {
    const{ name } = data;
    const { icon, description} = data.weather[0]; 
    const { temp,  temp_min, temp_max, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector('.city').innerText = name;
    document.querySelector('.icon').src = 'https://www.openweathermap.org/img/wn/' + icon + '@2x.png';
    document.querySelector('.description').innerText = description;
    document.querySelector('.temp').innerText = Math.round(temp);
    document.querySelector('.temp-min').innerText = 'H: ' + Math.round(temp_min) + '°';
    document.querySelector('.temp-max').innerText ='L: ' + Math.round(temp_max) + '°';
    document.querySelector('.humidity-percent').innerText = humidity + '%';
    document.querySelector('.wind-speed').innerText = Math.round(speed)  + ' km/h';
    document.querySelector('.weather').classList.remove('loading');     // removes the hidden visibilty when first city is typed
}

function search() {
    return cityName = document.querySelector('.search-bar').value;     // return the string of the city name to serach()
}

document.querySelector('.search button').addEventListener('click', () => {
    fetchWeather(search());     // when search button is clicked get call fetchWeather with the city name as the string value parameter
});

document.querySelector('.search-bar').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        fetchWeather(search());     // allows Enter key to be used to input search
    } else {
        return;
    }
});
// keyup event is sent to an element when the user releases a key on the keyboard

fetchWeather('Toronto');
