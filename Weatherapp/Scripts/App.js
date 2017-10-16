﻿'use strict';
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
	let temprature = getQueryStringParameter('Temprature');
	let location = getQueryStringParameter('Location');
	let template = getQueryStringParameter('Template');

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