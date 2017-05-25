(function () {

    "use strict";

    // Creating the module
    angular.module("app-trips", ["simpleControls", "ngRoute"])
        .config(function ($routeProvider, $locationProvider) {

            // Angular 1.6 uses !, so I'm removing it in a way it matches with course example
            $locationProvider.hashPrefix('');

            $routeProvider.when("/", {
                controller: "tripsController",
                controllerAs: "vm",
                templateUrl: "/views/tripsView.html"
            });

            $routeProvider.when("/editor/:tripName", {
                controller: "tripEditorController",
                controllerAs: "vm",
                templateUrl: "/views/tripEditorView.html"
            });

            $routeProvider.otherwise({ redirectTo: "/" });

        });

})();