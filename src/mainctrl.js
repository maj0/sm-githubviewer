(function(){
  var app = angular.module('plunker');
    app.controller('MainCtrl', function($scope, $interval, $location) {
    var decrementCountdown = function() {
      console.log('decrement count down');
      $scope.countdown--;
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
        $scope.stopCountdown = false;
      }
    }

    var unsetCountdown = function() {
      if (intervalCountdown) {
        console.log('unset count down');
        $interval.cancel(intervalCountdown);
        $scope.countdown = null;
        intervalCountdown = null;
      }
    }

    var intervalCountdown = null;
    var startCountdown = function() {
      console.log('start count down');
      intervalCountdown = $interval(decrementCountdown, 1000, $scope.countdown);
    }

    // properties
    $scope.search = function(username) {
      unsetCountdown();
      $location.path('/user/'+username);
    };
    $scope.username = 'angular';
    $scope.countdown = 5;
    $scope.unsetCountdown = unsetCountdown;
    startCountdown();
  });
}())