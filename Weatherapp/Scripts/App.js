let app = angular.module('WeatherApp', ['chart.js']);

//controllers
app.controller('weatherController', ['$scope', 'WeatherService'
	, function ($scope, WeatherService) {
		let temprature = getQueryStringParameter('Temprature');

		$scope.data = WeatherService;
		$scope.formatedDate = moment().format("YYYY-MM-DD");
		$scope.location = getQueryStringParameter('Location');
		$scope.template = getQueryStringParameter('Template');

		$scope.showWindSpeed = getQueryStringParameter('Windspeed');
		$scope.showWindDirection = getQueryStringParameter('Winddirection');
		$scope.showWeatherDays = getQueryStringParameter('Weatherdays');

		$scope.degrees = (temprature.trim() == "false" ? getTemprature() + "C" : convertToFarenheit(getTemprature()) + "F");

		activate();

		function activate() {




		}



	}
]);

app.controller('timeController', function ($scope, $interval) {
	var tick = function () {
		$scope.clock = moment().format("LTS");
	}
	tick();
	$interval(tick, 1000);
});

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

})(jQuery);

function getTemprature() {
	return 20;
}


function convertToFarenheit(degreeC) {
	return (9 / 5) * degreeC + 32;
}