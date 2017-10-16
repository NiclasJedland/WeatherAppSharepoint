let app = angular.module('WeatherApp', ['ngRoute', 'chart.js']);

//controllers
app.controller('weatherController', ['$scope', 'WeatherService'
	, function ($scope, WeatherService) {
		$scope.data = WeatherService;
		$scope.location = getQueryStringParameter('Location');
		$scope.temprature = getQueryStringParameter('Temprature');
		$scope.template = getQueryStringParameter('Template');


		activate();

		function activate() {

		}
	}
]);

//service
app.service("WeatherService", ['$http', '$q', function ($http, $q) {
	let service = {

	}
	return service;

}]);



function getQueryStringParameter(urlParameterKey) {
	let params = document.URL.split('?')[1].split('&');
	let strParams = '';
	for (let i = 0; i < params.length; i = i + 1) {
		let singleParam = params[i].split('=');
		if (singleParam[0] == urlParameterKey)
			return decodeURIComponent(singleParam[1]);
	}
}
jQuery.noConflict();
(function ($) {
	

	let windSpeed = getQueryStringParameter('Windspeed');
	let windDirection = getQueryStringParameter('Winddirection');
	let showWeatherDays = getQueryStringParameter('Weatherdays');

	let date = new Date();
	let formatedDate = moment(date).format("YYYY-MM-DD");
	let formatedTime = moment(date).format("LT");

	$("#date").html(formatedDate);
	$("#time").html(formatedTime);
	$("#location").html(location);



	$(".windSpeed").toggle(!!windSpeed);
	$(".windDirection").toggle(!!windDirection);
	$(".showWeatherDays").toggle(!!showWeatherDays);

})(jQuery);