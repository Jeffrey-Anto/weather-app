const btn= document.querySelector(".search-btn");
const input= document.querySelector("input");
const show= document.querySelector(".display");
let temp= document.querySelector(".temp");
let city = document.querySelector(".city");
let humidity= document.querySelector(".humi");
let windspd = document.querySelector(".speed");
const apiurl= "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=";
const apiKey= "40a54fd2dddd5d540da018c9372ce9b4";

btn.addEventListener("click", async function(params) {
    if(input.value.length==0){
        alert("Please Enter the city name");
    } else{
        show.style.display = 'block';
        let cityname=input.value;
        const response= await fetch(apiurl+apiKey+`&q=${cityname}`);
        const data= await response.json();
        temp.innerHTML=Math.round(data.main.temp)+"°c";
        city.innerHTML=data.name;
        humidity.textContent=data.main.humidity+"%";
        windspd.innerHTML=data.win.speed +"km/h";
        let weather=data.weather[0].main;
    }
    
})