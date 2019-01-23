    angular.module('app')
    .service('PatientService', function($http){
        this.patientData = {};
        this.patientDataArray = [];
      this.patientListData = function() {
          return $http.get('./datalist.json')
      }
      this.setPatientData = function(data)
        {
            this.patientData = data;
        }
        this.getPatientData =  function()
        {
           return this.patientData;
        }
        this.deletePatientData = function(id) {

        }

});