var anestweb = angular.module('AnestWebApp', ['ngRoute']);


// Rotas
anestweb.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {redirectTo: '/pacientes'})
        .when('/pacientes', {
            templateUrl: 'app/views/pacientes/lista.html',
            controller: 'PacientesCtrl'
        })
        .when('/pacientes/novo', {
            templateUrl: 'app/views/pacientes/novo.html',
            controller: 'PacienteNovoCtrl'
        })
        .when('/patologias', {
            templateUrl: 'app/views/patologias/lista.html',
            controller: 'PatologiasCtrl'
        })
        .otherwise({
            templateUrl: 'app/views/404.html',
            controller: function () {}
            // redirectTo: '/pacientes'
        });

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
}]);
