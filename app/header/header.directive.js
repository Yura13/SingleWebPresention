(function() {
    "use strict";

    angular.module("app")
        .directive("appHeader", appHeader);

    function appHeader() {
        var directive = {
            templateUrl: "app/header/header.directive.html",
            replace: true,
            controller: HeaderController,
            controllerAs: "menu"
        };

        return directive;
    }

    HeaderController.$inject = ["dataService"];

    function HeaderController(dataService) {
        var vm = this;
        vm.items = [];
        activate();

        function activate() {
            return dataService.getMenuItems().then(function(response) {
                vm.items = response.menu;

                return vm.items;
            });
        }
    }
})();