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

        WeatherService.getWeather();
        function activate() {
            
        }
        $scope.$on('eventFired', function (event, data) {
            debugger;
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

//service
app.service("WeatherService", ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
	let service = {
        getWeather: getWeather
	}
    return service;

    function getWeather() {
        var locationn = getQueryStringParameter('Location').trim();
        jQuery.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${locationn}%2C&key=AIzaSyBNtNprY2cSDn7zGZkUCATaRYy7ZR01PEM`, function (response) {
            let latitude = response.results["0"].geometry.location.lat;
            let longitude = response.results["0"].geometry.location.lng;
            jQuery.get(`https://api.darksky.net/forecast/ee97f32f4ecd9a57a8697f39383616b6/${latitude},${longitude}?callback=?&units=si`, function (response) {
                $rootScope.$broadcast('eventFired', {
                    data: response
                });
            }, 'jsonp')
        });
    }
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