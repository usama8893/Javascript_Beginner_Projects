const inputBox = document.querySelector('.input-box');
const searchBtn = document.querySelector('.searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const  windSPeed = document.querySelector('#wind-speed');


function  checkWeather(city){
    const api_key = "";
    const url = "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={api_key}"
}




searchBtn.addEventListener('click' , ()=>{
       checkWeather (inputBox.value);
});
