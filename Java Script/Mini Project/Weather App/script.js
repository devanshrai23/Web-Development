let input, city, degree, feels, humid, pressure;

document.addEventListener("DOMContentLoaded", function() {
	city = document.getElementById("city");
	degree = document.getElementById("degree");
	input = document.getElementById("inp");
	feels = document.getElementById("feels_like");
	humid = document.getElementById("humidity");
	pressure = document.getElementById("pressure");
});

//Function to fetch data through API 
function fetchData() {
	let apiKey = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=bfcbb9dfe9da54fef494e614dd3643ad&units=metric`;
	fetch(apiKey)
		.then(response => response.json())
		.then(weather => getData(weather))
		.catch(err => alert(`Error Occured: ${err}`));
}

//Function to get data from the JSON response
function getData(weather) {
	city.textContent = weather.name;
	degree.textContent = weather.main.temp + '°C';
	feels.textContent = weather.main.feels_like + '°C';
	humid.textContent = weather.main.humidity + '%';
	pressure.textContent = weather.main.pressure + ' hPa';
}