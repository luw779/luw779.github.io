$(finction()) {
var endpoints = [
"https://kquea402.github.io/api.json",
"https://glics998.github.io/api.json",
"https://colindharrington.github.io/api.json",
"https://hoant626.github.io/api.json",
"https://karla772.github.io/api.json",
"https://leeh779.github.io/api.json",
"https://lis874.github.io/api.json",
"https://phoebechloee.github.io/api.json",
"https://luw779.github.io/api.json",
"https://mullg389.github.io/api.json",
"https://pana005.github.io/api.json",
"https://raos130.github.io/api.json",
"https://samsj948.github.io/api.json",
"https://shaha129.github.io/api.json",
"https://Mwedd9.github.io/api.json",
"https://zhenx804.github.io/api.json"
];

$('.button').click(function() {
	console.log( $(this) );
	var url = $(this).data('url');
	console.log(url);

	$.get(url, function(data) {
	  console.log(data);

	  $('.wordadjective1').html(data.adjective1);
	  $('.wordadjective2').html(data.adjective2);
	  $('.artsupply').html(data.artSupply);
	  $('.computerSoftware').html(data.computerSoftware);
	  $('.laceInNewYork').html(data.placeInNewYork);
	  $('.celebrityName').html(data.celebrityName);
	  $('.pluraNoun1').html(data.pluralNoun1);
	  $('.pluraNoun2').html(data.pluralNoun2);
	  $('.verbEndingInIng').html(data.verbEndingInIng);
	  $('.bodyPart').html(data.bodyPart);
	  $('.pluralNoun3').html(data.pluralNoun3);
	  $('.noun1').html(data.noun1);
	  $('.noun2').html(data.noun2);
	  $('.websiteName').html(data.websiteName);

}).fail(function(error) {
	  console.log('Error in GET request. Handle the error gracefully.');
	  console.warn(error.statusText);
	});
});
		$('.randomizer').click(function() {
		var randomEndpoint = endpoints[ Math.floor(Math.rondom())]
		console.log(randomEndpoint);
		}

		$.get(randomEndpoint, function(data) {
			
		}

$(function() {
	$.get('https://luw779.github.io/api.json', function(data) {
	  console.log(data);
	  var adjective1 = data.adjective1;
	  $('.wordadjective1').html(data.adjective1);
	  $('.wordadjective2').html(data.adjective2);
	  $('.artsupply').html(data.artSupply);
	  $('.computerSoftware').html(data.computerSoftware);
	  $('.laceInNewYork').html(data.placeInNewYork);
	  $('.celebrityName').html(data.celebrityName);
	  $('.pluraNoun1').html(data.pluralNoun1);
	  $('.pluraNoun2').html(data.pluralNoun2);
	  $('.verbEndingInIng').html(data.verbEndingInIng);
	  $('.bodyPart').html(data.bodyPart);
	  $('.pluralNoun3').html(data.pluralNoun3);
	  $('.noun1').html(data.noun1);
	  $('.noun2').html(data.noun2);
	  $('.websiteName').html(data.websiteName);


	}).fail(function() {
	  console.log('Error in GET request. Handle the error gracefully.');
	});

	$('button').click(function() {
		console.log( $(this) );
		var url = $(this).data('url');
		console.log(url);
	});


});
});