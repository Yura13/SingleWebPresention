(function () {
    "use strict";

    angular.module("app").config(configApp);

    configApp.$inject = ["$stateProvider", "$urlRouterProvider", "$mdThemingProvider"];

    function configApp($stateProvider, $urlRouterProvider, $mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('teal');

        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "app/home/home.html",
                controller: "HomeController as info"
            })
            .state("home.details", {
                views: {
                    "details": {
                        templateUrl: "app/home/home.details.html",
                        controller: "HomeDetailsController as detail"
                    }
                }
            })
            .state("photos", {
                url: "/photos",
                templateUrl: "app/photos/photos.html",
                controller: "PhotosController as photos"
            })
            .state("contacts", {
                url: "/contacts",
                templateUrl: "app/contacts/contacts.html",
                controller: "ContactsController as contacts"
            })
    }

})();
