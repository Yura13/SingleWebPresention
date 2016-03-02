(function() {
    "use strict";

    angular.module("app")
        .directive("appFooter", appFooter);

    function appFooter() {
        var footerDirective = {
            templateUrl: "app/footer/footer.directive.html",
            replace: true
        };

        return footerDirective;
    }
})();