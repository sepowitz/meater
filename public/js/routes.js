app.config(function($routeProvider, $locationProvider) {
	$routeProvider.
	when('/', {
		templateUrl: '../templates/form.html',
		controller: 'MeatController',
		controllerAs: 'meatCtrl'
	}).
	when('/getcookin', {
		templateUrl:'../templates/results.html',
		controller: 'MeatController',
		controllerAs: 'meatCtrl'
	}).
	when('/:username/history', {
		templateUrl: '../templates/history.html',
		controller: 'HistoryController',
		controllerAs: 'historyCtrl'
	}).
	otherwise({	
		redirectTo: '/'
	});

	$locationProvider.html5Mode(true);
});
