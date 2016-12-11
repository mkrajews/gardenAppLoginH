angular.module('app').controller('homeCtrl', function($scope, homeSvc, $ionicModal) {

$scope.test = "working";

$scope.addToGarden = function() {
  homeSvc.addToGarden().then(function(response){

  });
}

    // GETS PLANT INFO FROM API
    $scope.getPlant = function() {
      homeSvc.getPlantInfo().then(function(response) {
        // console.log(plant.records);
        $scope.plants = response;
      });
    };







    // INFO MODAL, WHEN PLANT IMG CLICKED
    $ionicModal.fromTemplateUrl('my-modal.html', {
   scope: $scope,
   animation: 'slide-in-up'
 }).then(function(modal) {
   $scope.modal = modal;
 });
 $scope.openModal = function(plant) {
   $scope.singlePlant = plant;
   console.log(plant);
    $scope.modal.show();
  };
  $scope.closeModal = function() {
 $scope.modal.hide();
};

});
