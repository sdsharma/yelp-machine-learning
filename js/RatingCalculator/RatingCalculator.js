(function(angular) {

    var ratingCalculator = angular.module('ratingCalculator', []);

    ratingCalculator
    .controller('CalculatorController', ['$scope', function(scope) {
        scope.checkins = 0;
        scope.reviews = 0;
        scope.formulaType="full"

        scope.calculateRating = function(checkIns, reviews) {
            var result = 0;
            switch(scope.formulaType) {
                case "full":
                    result = 3.688 + -0.00003891*checkIns + 0.0003306*reviews;
                    break;
                case "city":
                    result = 3.668 + -0.00002353*checkIns + 0.0002426*reviews;
                    break;
                case "suburb":
                    result = 3.681 + -0.002632*checkIns + 0.00489*reviews;
                    break;
            }

            if(result < 1) {
                result = 1;
            } else if (result > 5) {
                result = 5;
            }
            
            return result;
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
