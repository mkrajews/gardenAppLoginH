angular.module('app').controller('weatherCtrl', function($scope, homeSvc) {

  $scope.test = "working";
  // GET WEATHER INFO FROM API
  $scope.getWeather = function() {
    homeSvc.getWeatherInfo().then(function(response) {
      console.log(response.data);
      $scope.weather = response;
    });
  };

});
