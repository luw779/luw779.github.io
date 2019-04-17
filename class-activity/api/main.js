$(function() {
	console.log('hello');

	var url = 'http://api.openweathermap.org/data/2.5/weather?zip=10003,us&appid=dece46841d49e4c7fe575eafbd8f6335'

	$.get(url, function(data) {
	  // The get request fires a callback function when the API request finishes
	  console.log(data);
	  // The data object contains all the information returned in the API
	  var weather = data.weather[0];
	  // In this case, the most interesting bit of data is in the weather key
	  // Now do something interesting with the data!
	  // $('body').html('The weather is ' + weather.description);

	  var temp = data.main.temp;

	  $('body').css('margin-center', temp);
	  $('body').append(temp);
	  $('body').css('background', 'rgb(' + rgbTemp + '224, 0, 120');

	});
});

