(function() {
  var app = angular.module('plunker', ["ngRoute"]);
  app.config(function($routeProvider) {
    console.log('$routeProvider is ' + $routeProvider);
    $routeProvider
      .when('/main', {
        templateUrl: 'main.html',
        controller: 'MainCtrl'
      })
      .when('/user/:username', {
        templateUrl: 'user.html',
        controller: 'UserCtrl'
      })
      .when('/repo/:username/:reponame', {
        templateUrl: 'repo.html',
        controller: 'RepoCtrl'
      })
        .otherwise({
        redirectTo: '/main'
      });
  });
}());