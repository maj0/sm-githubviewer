(function() {
  var app = angular.module('plunker');
  app.controller('RepoCtrl', function($scope, github, $routeParams) {
    /*var person = {
      firstName: 'Allen',
      lastName: 'Scott',
      imgSrc: 'http://odetocode.com/Images/scott_allen_2.jpg'
    };*/

    var onRepo = function(data) {
      $scope.repo = data;
    };
    
    var onError = function(reason) {
      $scope.error = "Could not fetch data!";
      //alert('$scope.error=' + $scope.error);
      console.log($scope.error);
    };

    var username = $routeParams.username;
    var reponame = $routeParams.reponame;
    console.log('username ' + username + ',reponame ' + reponame);
    github.getRepoDetails(username, reponame).then(onRepo, onError);
  });
}())