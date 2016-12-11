angular.module('app')
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
// var loginRequired = function() {
//   if(homeSvc) {
//     location.path
//   }
// }

  $stateProvider
      .state('loginPage', {
        url: '/login-page',
        templateUrl: 'templates/loginPage.html',
        controller: 'loginCtrl'
      })

      .state('signUpPage', {
        url: '/sign-up-page',
        templateUrl: 'templates/signUpPage.html',
        controller: 'signUpCtrl'
      })

      .state('myGreenThumb.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('myGreenThumb.profile', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('myGreenThumb.weather', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/weather.html',
        controller: 'weatherCtrl'
      }
    }
  })

  .state('myGreenThumb', {
    // url: '/',
    templateUrl: 'templates/myGreenThumb.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/login-page');


});
