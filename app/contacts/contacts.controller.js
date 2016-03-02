(function() {
    "use strict";

    angular.module("app")
        .controller("ContactsController", ContactsController);

    ContactsController.$inject = ["dataService", "$mdDialog"];

    function ContactsController(dataService, $mdDialog) {
        var vm = this;
        vm.info = {};
        vm.sendInfo = {};
        vm.submit = submit;
        activate();

        function activate() {
            return dataService.getContacts().then(function(response) {
                vm.info = response.data;

                return vm.info;
            });
        }

        function submit() {
            var sendConfirm = dataService.setDataForm(vm.sendInfo);
            if (sendConfirm) {
                showAlert("Thanks, " + vm.sendInfo.name + "!", "Your's message saved!");
            }
            else {
                showAlert("Sorry " + vm.sendInfo.name + "!", "Your's message didn't saved!");
            }
        }

        function showAlert(message, confirm) {
            $mdDialog.show(
                $mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title(confirm)
                    .textContent(message)
                    .ok("Ok")
            );
        }
    }
})();