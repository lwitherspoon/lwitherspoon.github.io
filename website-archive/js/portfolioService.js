// Factory to get portfolio
personalSite.factory('Portfolio',  function ($http, $q) { 
    var service = {},
        _error = 'Oh no! Something went wrong. Please check back later.';

    service.getPortfolio = function(id) {
        return $http.get('data.json');
    };

    return service;
});