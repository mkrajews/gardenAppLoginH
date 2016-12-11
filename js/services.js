angular.module('app').service("homeSvc", function($http) {

  this.user = null;
  this.auth = false;
  var baseUrl = "http://localhost:3000";


// API CALLS:
  this.getPlantInfo = function() {
    return $http({
      method: "GET",
      url: "http://harvesthelper.herokuapp.com/api/v1/plants?api_key=4c364086384a245956cb8482ac64efc3"
    }).then(function(response) {
      console.log(response.data);
      return response.data;
    });
  };

  this.getWeatherInfo = function() {
    return $http({
      method: "GET",
      url: "http://api.openweathermap.org/data/2.5/forecast/daily?cnt=5&units=imperial&lat=40.22622305&lon=-111.6608091&APPID=6fdfe255da69300c42b7c1549ed95996"
    }).then(function(response) {
      console.log(response.data);
      return response;
    });
  };


// ACTION FUNCTIONS, LINKING TO DB:
  this.addToGarden = function() {
    return $http.post(baseUrl + "/api/add-to-garden")
      .then(function(response) {
        console.log(response.data);
      });
  };

  this.deleteFromGarden = function() {
    return $http.post(baseUrl + "/api/delete-from-garden").then(function(response) {
      console.log(response.data);
    });
  };

  this.addNote = function() {
    return $http.post(baseUrl + "/api/add-note").then(function(response) {
      console.log(response.data);
    });
  };

  this.deleteNote = function() {
    return $http.post(baseUrl + "/api/delete-note").then(function(response) {
      console.log(response.data);
    });
  };

  // this.moreInfo = function




// LOGIN INFO
  this.login = function(info) {
    console.log("this.login fired", info);
    // return $http.post("/api/login", info);
    return $http({
        method : "POST",
        url : "http://localhost:3000/api/login",
        data: info
    })
  };

  this.registerUser = function(name, email, password) {
    console.log("hit homesvc", name, email, password);
    return $http({
      method: 'POST',
      url: "/api/register",
      data: {
        name: name,
        email: email,
        password: password,
        is_logged_in: false
      }
    });
  };

  this.logout = function() {
    return $http(baseUrl + "/api/logout").then(function(response) {
      console.log(response.data);
    });
  };

});







// .service('homeSvc', ['$q', '$http', function($q, $http){
//
//     // var apiUrl = "http://harvesthelper.herokuapp.com/api/v1/plants?api_key=4c364086384a245956cb8482ac64efc3";
//
//     // var ret = {
//     //     all: function() {
//     //         var deferred = $q.defer();
//
//     //         $http.get(apiUrl).then(function(resp){
//     //             deferred.resolve(resp.data);
//     //         })
//
//     //         return deferred.promise;
//     //     }
//     // }
//
//     // return ret;
//
// }]);
