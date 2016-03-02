(function() {
    "use strict";

    angular.module("app")
        .controller("PhotosController", PhotosController);

    PhotosController.$inject = ["dataService"];

    function PhotosController(dataService) {
        var vm = this;
        vm.slideInterval = 2000;
        vm.slides = [];
        activate();

        function activate() {
            return dataService.getSlides().then(function(response) {
                vm.slides = response.slides;

                return vm.slides;
            });
        }
    }
})();