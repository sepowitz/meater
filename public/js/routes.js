app.config(function($routeProvider, $locationProvider) {
	$routeProvider.
	when('/', {
		templateUrl: '../templates/_form.html',
		controller: 'MeatController',
		controllerAs: 'meatCtrl'
	}).
	when('/getcookin', {
		templateUrl:'../templates/_results.html',
		controller: 'ResultsController',
		controllerAs: 'resultsCtrl'
	}).
	when('/:username/history', {
		templateUrl: '../templates/_history.html',
		controller: 'HistoryController',
		controllerAs: 'historyCtrl'
	}).
	otherwise({	
		redirectTo: '/'
	});

	$locationProvider.html5Mode(true);
});
