(function() {
    "use strict";

    angular.module("app")
        .controller("HomeController", HomeController);

    HomeController.$inject = ["dataService"];

    function HomeController(dataService) {
        var vm = this;
        vm.person = {};
        vm.showMore = true;
        activate();

        function activate() {
            return dataService.getPerson().then(function(response) {
                vm.person = response;

                return vm.person;
            });
        }
    }
})();