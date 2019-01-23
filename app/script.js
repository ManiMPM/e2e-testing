angular.module('app', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home')
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "views/patientList.html",
            controller: 'patientListController',
            params: {
                id: ''
            }
        })
        .state('edit', {
            url: "/edit",
            templateUrl: "views/editPatientForm.html",
            controller: 'editPatientFormController'
        })

}])
    .controller('MainCtrl', function() {
});