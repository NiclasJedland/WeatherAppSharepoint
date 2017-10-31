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
            $scope.weatherSummary = weather.data.currently.summary;
            $scope.windDirection = weather.data.currently.windBearing;
            displayWeatherIcon("icon1", weather.data.currently.icon);
            let scndtabinfo = calculateSecondTabInfo(weather.data.daily);
            debugger;
            $scope.daysInfo = scndtabinfo[1];
            displayWeatherIcon("icon2", scndtabinfo[0].icon);
            $scope.summary = scndtabinfo[0].summary;
        }
        $scope.$on('eventFired', function (event, data) {
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
app.controller('tabController', function ($scope) {
    $scope.tab = 1;
    $scope.setTab = function (newTab) {
        $scope.tab = newTab;
    };

    $scope.isSet = function (tabNum) {
        return $scope.tab === tabNum;
    };
    $scope.clickedDayTab = function () {
        debugger;
        $scope.tab3 = true;
    }
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
function displayWeatherIcon(htmlIcon, weatherIcon) {
    var skycons = new Skycons({ "color": "white" });
    skycons.add(htmlIcon, weatherIcon);
    skycons.play();
}
class Weather {
    constructor(day, maxTemp, minTemp, icon, summary) {
        this.day = day;
        this.maxTemp = maxTemp;
        this.minTemp = minTemp;
        this.icon = icon;
        this.summary = summary;
    }
}
function calculateSecondTabInfo(weather) {
    let nextFiveDays = [];
    let summary = { icon: weather.icon, summary: weather.summary };
    for (var i = 1; i <= 5; i++) {
        let tempMax = Math.round(weather.data[i + 1].temperatureMax);
        let tempMin = Math.round(weather.data[i + 1].temperatureMin);
        let icon = weather.data[i + 1].icon;
        let summary = weather.data[i + 1].summary;
        nextFiveDays.push(new Weather(moment().add(i, 'days').format('dddd'), tempMax, tempMin, icon, summary));
    }
    return [summary, nextFiveDays];
}