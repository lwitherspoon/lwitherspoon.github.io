var personalSite = angular.module('personalSite', ['ngRoute', 'ui.bootstrap']);

personalSite.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		})
		.when('/about', {
			templateUrl : 'pages/about.html',
			controller  : 'mainController'
		})
		.when('/education', {
			templateUrl : 'pages/education.html',
			controller  : 'mainController'
		})
		.when('/portfolio', {
			templateUrl : 'pages/portfolio.html',
			controller  : 'worksController'
		})
		.when('/portfolio/:id', {
			templateUrl : 'pages/portfolio-expanded.html',
			controller  : 'worksExpandedController'
		})
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller  : 'mainController'
		})
		.otherwise({
      redirectTo: '/home'
    });
});

personalSite.controller('navController', function($scope) {
  $scope.isCollapsed = true;
  
  $('.navbar a').click(function() {
    var navbar_toggle = $('.navbar-toggle');
    if (navbar_toggle.is(':visible')) {
        navbar_toggle.trigger('click');
    }
});

});

personalSite.controller('mainController', function($scope) {
  
});

personalSite.controller('worksExpandedController', ['$scope', '$location', 'Portfolio', '$routeParams', function($scope, $location, Portfolio, $routeParams) {
  var id = $routeParams.id;

  $scope.initialize = function () {
    Portfolio.getPortfolio(id).then(function (data) {
        return data.data[id];
      }).then(function (data) {
          $scope.work = data;
      });
    };

}]);

personalSite.controller('worksController', ['$scope', '$location', 'Portfolio', function($scope, $location, Portfolio) {

  $scope.initialize = function () {
      Portfolio.getPortfolio().then(function (data) {
          return data;
      }).then(function (data) {
          $scope.works = data.data;
      });
  };
  
  $scope.expand = function(id) {
    $location.path('/portfolio/' + id);
  }

  $scope.filter = function(filter) {
    $scope.portfolioFilter = {tag: filter};

    jQuery('.filters a').removeClass('active');

    if(filter) {
      var filterClass = filter.toLowerCase().replace(' ', '-');
      jQuery('.filters a.' + filterClass).addClass('active');
    } else {
      jQuery('.filters a.all').addClass('active');
    }
  }
	
}]);