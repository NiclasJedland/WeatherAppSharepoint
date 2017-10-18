let app = angular.module('WeatherApp', ['chart.js']);

//controllers
app.controller('weatherController', ['$scope', 'WeatherService'
    , function ($scope, WeatherService) {
		let fahrenheit = getQueryStringParameter('Temprature');

		$scope.data = WeatherService;
		$scope.formatedDate = moment().format("YYYY-MM-DD");
		$scope.location = getQueryStringParameter('Location');
		$scope.template = getQueryStringParameter('Template');

		$scope.showWindSpeed = getQueryStringParameter('Windspeed');
		$scope.showWindDirection = getQueryStringParameter('Winddirection');
		$scope.showWeatherDays = getQueryStringParameter('Weatherdays');

        WeatherService.getWeather();
        function activate(weather) {
            $scope.windSpeed = weather.data.currently.windSpeed;
            let evenTemp = Math.round(weather.data.currently.temperature);
            if (fahrenheit.trim() == "false")
                $scope.degrees = evenTemp + "ºC";
            else
                $scope.degrees = convertToFarenheit(weather.data.currently.temperature) + "ºF";
            $scope.windDirection = weather.data.currently.windBearing;
        }
        $scope.$on('eventFired', function (event, data) {
            debugger;
            activate(data);
        })



	}
]);

app.controller('timeController', function ($scope, $interval) {
	var tick = function () {
		$scope.clock = moment().format("LTS");
	}
	tick();
	$interval(tick, 1000);
});

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

function convertToFarenheit(degreeC) {
    let evenTemp = Math.round((9 / 5) * degreeC + 32);
    return evenTemp;
}