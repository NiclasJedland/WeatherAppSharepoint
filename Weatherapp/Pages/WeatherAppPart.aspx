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

<body class="container" ng-app="WeatherApp" ng-controller="weatherController">
	<div class="content">
		<div class="row">
			<div class="col-xs-6">
				<p id="location"></p>
			</div>
			<div class="col-xs-6">
				<p id="date"></p>
			</div>
			<div class="col-xs-12">
				<p id="time"></p>
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

	<script type="text/javascript" src="../Scripts/App.js"></script>
</body>
</html>
