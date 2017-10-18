//service
app.service("WeatherService", ['$http', '$q', '$rootScope', function ($http, $q, $rootScope) {
    debugger;
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