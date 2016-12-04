(function(angular) {

    var ratingCalculator = angular.module('ratingCalculator', []);

    ratingCalculator
    .controller('CalculatorController', ['$scope', function(scope) {
        scope.checkins = 0;
        scope.reviews = 0;

        scope.calculateRating = function(checkIns, reviews) {
            return( 3.688 + -0.00003891*checkIns + 0.0003306*reviews );
        }

        scope.starLevel = function(num) {
            if(num < 1.25) {
                return "1";
            } else if(num < 1.75) {
                return "1-half";
            } else if(num < 2.25) {
                return "2";
            } else if(num < 2.75) {
                return "2-half";
            } else if(num < 3.25) {
                return "3";
            } else if(num < 3.75) {
                return "3-half";
            } else if(num < 4.25) {
                return "4";
            } else if(num < 4.75) {
                return "4-half";
            } else {
                return "5";
            }
        }
    }])
    .directive('ratingCalculator', function() {
        return {
            replace: true,
            templateUrl: "js/RatingCalculator/template.html"
        }
    })

})(window.angular);
