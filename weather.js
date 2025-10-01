const btn= document.querySelector(".search-btn");
const loc=document.querySelector(".location-btn");
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
        // console.log(cityname);
        weatherDetails(cityname);
    }
    
})

loc.addEventListener("click", async function(params) {
    navigator.geolocation.getCurrentPosition(async (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${apiKey}`;

    const res = await fetch(url);
    const data = await res.json();
    console.log(pos.coords.accuracy);
    if(pos.coords.accuracy>1000){
        alert("GPS may be OFF. Turn on GPS for exact city weather");
    } else{
        if (data.length > 0) {
            // alert("Your City: " + data[0].name);
            let cityname= data[0].name;
            // console.log(cityname);
            weatherDetails(cityname);
        } else {
            alert("City not found");
        }
    }
  }, (err) => {
    alert("Location error: " + err.message);
  });  
})
async function weatherDetails(cityname) {
    const response= await fetch(apiurl+apiKey+`&q=${cityname}`);
        const data= await response.json();
        temp.innerHTML=Math.round(data.main.temp)+"°c";
        city.innerHTML=data.name;
        humidity.textContent=data.main.humidity+"%";
        windspd.innerHTML=data.wind.speed +"km/h";
        let weather=data.weather[0].main;
        showWeather(weather);
}
function showWeather(weather) {
    let animPath = "";
    if (weather === "Rain") {
        animPath = "rain.json"; 
    } else if (weather === "Clouds") {
        animPath = "cloudy.json";
    } else if (weather === "Clear") {
        animPath = "sunny.json";
    } else if (weather === "Thunderstorm") {
        animPath = "thunder.json";
    } else {
        animPath = "default.json";
    }
    document.getElementById("weather-anim").innerHTML = "";
    lottie.loadAnimation({
        container: document.getElementById("weather-anim"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: `Images/${animPath}`
    });
}
