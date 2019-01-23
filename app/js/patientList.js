(function() {

    angular.module('app')
        .controller('patientListController', ['$scope','$state', 'PatientService','$stateParams',
        function($scope, $state, PatientService, $stateParams) {

            PatientService.patientListData().then(function(resp) {
                $scope.patientLists = resp.data;
                var updated_patient = PatientService.getPatientData();

                if(updated_patient.hasOwnProperty('id')) {
                    $scope.patientLists.forEach(function(val,ind) {
                        if(val.id == updated_patient.id) {
                            $scope.patientLists[ind] = updated_patient;
                        }
                    })
                }
                if($stateParams.id) {
                    $scope.patientLists = $scope.patientLists.filter(function (val) {
                        return val.id != $stateParams.id;
                    })
                }
            });


            $scope.goToEdit = function(data) {
                PatientService.setPatientData(data);
                $state.go('edit');
            };
        }
    ]);
})();