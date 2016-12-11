angular.module('app').controller('signUpCtrl', function($scope, homeSvc, $state) {
  $scope.addUser = function(name, email, password){
    if(name && email && password){


    console.log('hit sign up controller', name, email, password);
    homeSvc.registerUser(name, email, password).then(function(response) {
        homeSvc.user = (response.data[0]);
        console.log(homeSvc.user);
      $state.go('myGreenThumb.home');
    });
  }
  else console.log("You need to check what you wrote please");
  };
});
