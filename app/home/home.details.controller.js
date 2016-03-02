(function() {
    "use strict";

    angular.module("app")
        .controller("HomeDetailsController", HomeDetailsController);

    HomeDetailsController.$inject = ["dataService"];

    function HomeDetailsController(dataService) {
        var vm = this;
        vm.person = {};
        activate();

        function activate() {
            return dataService.getPerson().then(function(response) {
                vm.person = response;

                return vm.person;
            });
        }
    }
})();