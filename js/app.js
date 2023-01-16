(function() {
    'use strict';

angular.module('LunchCheckerApp', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];

function LunchCheckerController($scope) {
    $scope.noDishes = "";
    $scope.message = "";
    $scope.checked = false;

    $scope.checkLunch = function() {
        if ($scope.noDishes.trim().length === 0) {
            $scope.empty = true;
        } 
        else {
            $scope.checked = true;
            $scope.empty = false;
            var Dishes = $scope.noDishes.split(',');
            var DishesWithoutEmptys = Dishes.filter(function(n) {
                return n.trim() !== '';
        });

        if (DishesWithoutEmptys.length <= 3) {
            $scope.message = 'Enjoy!';
        } else {
            $scope.message = 'Too much dishes entered!';
            }
        }
        };
    }
})();
