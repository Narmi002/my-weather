const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4438240077msh26af3f73a3f08bfp1a0ed1jsne2c00cd14a20',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};




const getweather=(city)=>{
	cityname.innerHTML=city
	fetch(url + city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		document.getElementById('cloud_pct').innerHTML= response.cloud_pct
		document.getElementById('temp').innerHTML = response.temp
		document.getElementById('feels_like').innerHTML = response.feels_like
		document.getElementById('humidity').innerHTML = response.humidity
		document.getElementById('max_temp').innerHTML = response.max_temp
		document.getElementById('min_temp').innerHTML = response.min_temp
		document.getElementById('sunrise').innerHTML= response.sunrise
		document.getElementById('sunset').innerHTML =response.sunset
		document.getElementById('wind_degrees').innerHTML = response.wind_degrees
		document.getElementById('wind_speed').innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));
}


	submit.addEventListener("click",(e)=>{
		e.preventDefault()
		getweather(city.value)
	})
document.getElementById('temp').style.color="black"
document.getElementById('cloud_pct').style.color="black"
document.getElementById('feels_like').style.color="black"
document.getElementById('humidity').style.color="black"
document.getElementById('max_temp').style.color="black"
document.getElementById('min_temp').style.color="black"
document.getElementById('sunrise').style.color="black"
document.getElementById('sunset').style.color="black"
document.getElementById('wind_degrees').style.color="black"
document.getElementById('wind_speed').style.color="black"


var typed = new Typed('#yourcity', {
	// strings:city,
  strings:['city','weather'],
  typeSpeed: 200,
});

