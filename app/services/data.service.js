(function() {
    "use strict";

    angular.module("app")
        .factory("dataService", dataService);

    dataService.$inject = ["$http", "$q"];

    function dataService($http, $q) {
        var service = {
            getMenuItems: getMenuItems,
            getPerson: getPerson,
            getSlides: getSlides,
            getContacts: getContacts,
            setDataForm: setDataForm
        };

        return service;

        function _successCallback(response) {
            return response.data;
        }
        function _errorCallback(response) {
            return response.data;
        }

        function getMenuItems() {
            return $http.get("app/data/menuItems.json").then(_successCallback, _errorCallback);
        }

        function getPerson() {
            return $http.get("app/data/person.json").then(_successCallback, _errorCallback);
        }

        function getSlides() {
            return $http.get("app/data/slides.json").then(_successCallback, _errorCallback);
        }

        function getContacts() {
            var defer = $q.defer();
            $http.get("app/data/contacts.json").then(function(response) {
                defer.resolve(response);
            }, function(response) {
                defer.reject(response);
            });

            return defer.promise;
        }

        function setDataForm(sendInfo) {
            var dataObj = JSON.stringify({
                name: sendInfo.name,
                email: sendInfo.email,
                message: sendInfo.message
            });
            try {
                localStorage.setItem(sendInfo.email, dataObj);
                return true;
            } catch (exception) {
                return false;
            }
        }
    }
})();