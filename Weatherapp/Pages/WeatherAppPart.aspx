<%@ Page Language="C#" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<WebPartPages:AllowFraming ID="AllowFraming" runat="server" />
<!DOCTYPE HTML>

<html>
<head>
	<title></title>
	<link href="https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/slate/bootstrap.min.css" rel="stylesheet" integrity="sha384-RpX8okQqCyUNG7PlOYNybyJXYTtGQH+7rIKiVvg1DLg6jahLEk47VvpUyS+E2/uJ" crossorigin="anonymous">
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
	<link href="../Content/App.css" rel="stylesheet" />


</head>

<body class="container weatherApp" ng-app="WeatherApp" ng-controller="weatherController">
	<div class="content">
		<div class="row">
			<div class="col-xs-4 text-center">{{location}}</div>
			<div class="col-xs-4 text-center">{{formatedDate}}</div>
   			<div ng-controller="timeController" class="col-xs-4 text-center time">{{clock}}</div>
            <div ng-controller="tabController">
                 <ul class="nav nav-tabs">
                   <li class="nav-item" ng-class="{ active : isSet(1) }">
                     <a class="nav-link" href ng-click="setTab(1)">Väder just nu</a>
                   </li>
                   <li class="nav-item" ng-class="{ active : isSet(2) }">
                     <a class="nav-link" href ng-click="setTab(2)">Väder inom kommande dagar</a>
                   </li>
                 </ul> 
                <div ng-show="isSet(1)">
                    <canvas id="icon1" width="175" height="175"></canvas>
                    <p class="col-xs-12 text-center">{{weatherSummary}}</p>
                    <div class="col-xs-12 text-center">Temperatur: {{degrees}}</div>                    			         
			        <div class="col-xs-12 text-center" ng-show="showWindSpeed">
                        vind hastighet: {{windSpeed | number: 2}} m/s
			        </div>
			        <div class="col-xs-12 text-center" ng-show="showWindDirection">
                        vinden kommer från
                        <span ng-if="windDirection >= 315 || windDirection <= 45">
                             norr
                         </span>
                         <span ng-if="windDirection <= 225 && windDirection >= 135">
                             söder
                         </span>
                         <span ng-if="windDirection > 45 && windDirection < 135">
                             öst
                         </span>
                         <span ng-if="windDirection > 225 && windDirection < 315">
                             väst
                         </span>
			        </div>
                </div>
                <div ng-show="isSet(2)">
			       <div class="col-xs-12 text-center tabSecnd" ng-show="showWeatherDays">
                       <canvas id="icon2" width="175" height="175"></canvas>
                       <p class="col-xs-12 text-center">{{summary}}</p>        
			       </div>
                   <ul class="nav nav-tabs">
                       <li class="nav-item" ng-repeat="dayInfo in daysInfo" ng-class="{active : selectedTab === dayInfo}">
                           <a class="nav-link" ng-click="setDayTab(dayInfo)">{{dayInfo.day}}</a>
                       </li>
                   </ul>
                   <div>
                        <canvas id="iconDay" width="100" height="100"></canvas>
                        <p class="col-xs-12 text-center">{{daysummary}}</p>
                        <p class="col-xs-12 text-center">{{dayminTemp}}{{daymaxTemp}}</p>
                   </div>
                </div>
        </div>
	</div>
    </div>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.6/angular.js" integrity="sha256-PKcnQwI1O4OGwjDP7YRrEiqX/mCmEf9z6IplfVbMOjs=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.6/i18n/angular-locale_sv.js" integrity="sha256-W/gXlAFoowZO1ssQf+REbml6dFkQ19iJhypo74BoddY=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.6/angular-route.js" integrity="sha256-1Ip72pnlk7Ya+lOyaSXVXta/oiUi+wZwo5Gp6K46gmo=" crossorigin="anonymous"></script>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.0/Chart.js" integrity="sha256-Ps0pf4Ma5dU+zSI0m+Spwq+9QE5EjL5yt0dfWGPEugQ=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-chart.js/1.1.1/angular-chart.js" integrity="sha256-ybd6a1g+flGV6atsxZAtJxFWeE9EM25G0+YiVNTPW8I=" crossorigin="anonymous"></script>

	<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap.js" integrity="sha256-7OT8H6uxStHOJMZE2TeZfI960JyEgNPn9+DEAvamJPg=" crossorigin="anonymous"></script>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.19.0/moment.js" integrity="sha256-V9mx13NxLjkyfuKH7sl+hnGVWrEEktFlb07RimnZ9L0=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.19.0/locale/sv.js" integrity="sha256-YSdluXfvQ4IfDgU3mcs/TSxtVLkuE4tiauwsICjb4Fg=" crossorigin="anonymous"></script>

    <script src="../Scripts/skycons.js"></script>
	<script type="text/javascript" src="../Scripts/App.js"></script>
    <script src="../Scripts/WeatherService.js"></script>
</body>
</html>
