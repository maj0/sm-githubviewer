(function() {
  var github = function($http) {
    // define properties for our service
    var responseData = function(response) {
      return response.data;
    };

    var getUser = function(username) {
      return $http.get('https://api.github.com/users/' + username)
        .then(responseData);
    };

    var getRepos = function(user) {
      return $http.get(user.repos_url)
        .then(responseData);
    };

    var getRepoDetails = function(username, reponame) {
      var repo;
      var repoUrl = 'https://api.github.com/repos/' + username + '/' + reponame;
      return $http.get(repoUrl)
        .then(function(response) {
          repo = response.data;
          return $http.get(repoUrl + '/contributors')
            .then(function(response) {
              repo.contributors = response.data;
              return repo;
            });
        });
    };
    
    // return our service object
    return {
      getUser: getUser,
      getRepos: getRepos,
      getRepoDetails: getRepoDetails
    };
  };
  var module = angular.module('plunker'); // get common module reference
  module.factory('github', github); // register our service
}());