(function() {
   angular.module('app')
   .controller('editPatientFormController', ['$scope','$state','PatientService',
    function($scope, $state, PatientService) {
    $scope.selectedPatientData =  angular.copy(PatientService.getPatientData());
        $scope.selectedPatientData.dateofbirth =
            new Date($scope.selectedPatientData.dateofbirth);

        $scope.save = function(){
            PatientService.setPatientData($scope.selectedPatientData);
            $state.go('home');
        }
        $scope.cancel = function(){
            PatientService.setPatientData(PatientService.getPatientData());
            $state.go('home');
        }

        $scope.delete = function (id) {
            $state.go('home',{id:id});
            PatientService.deletePatientData(id);
        }
    }


]);
})();