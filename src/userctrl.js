(function() {
  var app = angular.module('plunker');
  app.controller('UserCtrl', function($scope, github, $routeParams) {
    /*var person = {
      firstName: 'Allen',
      lastName: 'Scott',
      imgSrc: 'http://odetocode.com/Images/scott_allen_2.jpg'
    };*/

    var onRepos = function(data) {
      $scope.repos = data;
   };
   
    var onUser = function(data) {
      $scope.user = data;
      //alert('http='+$http);
      //alert('user.repos_url='+$scope.user.repos_url);
      github.getRepos($scope.user)
        .then(onRepos, onError);
    };
    
    var onError = function(reason) {
      $scope.error = "Could not fetch data!";
      //alert('$scope.error=' + $scope.error);
    };
    $scope.username = $routeParams.username;
    console.log('User is ' + $scope.username);
    $scope.repoSortOrder = '-stargazers_count';
    github.getUser($scope.username).then(onUser, onError);
  });
}())