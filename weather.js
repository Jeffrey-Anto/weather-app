const btn= document.querySelector(".search-btn");
const input= document.querySelector("input");
const show= document.querySelector(".display");
let temp= document.querySelector(".temp");
let city = document.querySelector(".city");
let humidity= document.querySelector(".humi");
let windspd = document.querySelector(".speed");
const apiurl= "https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=";
const apiKey= "40a54fd2dddd5d540da018c9372ce9b4";

