// const city = document.getElementById("city");

const apiKey = "9911f8d741404a7b958103543241302";
const  searchBox = document.querySelector(".search input");
const  searchBtn = document.querySelector(".search button");


async function checkWeather(location) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
  const response = await fetch(apiUrl);

  if(response.status == 400){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }else{
    var data = await response.json();
    //   console.log(data);
    
      document.querySelector(".city").innerHTML = data.location.name; 
      document.querySelector(".city").innerHTML = data.location.name;
      document.querySelector(".temp").innerHTML =Math.round(data.current.temp_c) + "°c";
      document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
      document.querySelector(".wind").innerHTML = data.current.
      wind_kph + "km/h";
    
      const weatherIconUrl = "https:" + data.current.condition.icon;
      document.querySelector(".weather-icon").src = weatherIconUrl;
    
    
      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";
  }
 
}


searchBtn.addEventListener("click",()=>{
checkWeather(searchBox.value);

})
