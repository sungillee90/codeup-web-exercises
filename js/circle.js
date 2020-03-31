(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function (rad) {
            // TODO: complete this method
            // hint: area = pi * radius^2
            var area = Math.PI * (Math.pow(circle.radius,2))
            //                            (this.radius, 2)
            return area; // TODO: return the proper value

            // console.log (circle.getArea(3));
        },
        logInfo: function (doRounding) {
            // TODO: complete this method.
            if (doRounding === true) {
                return Math.round(circle.getArea(3));
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + circle.getArea(3));

        }
    };

    // 밖에서 console.log 해야한다
    console.log ('circle.getArea= ' +circle.getArea());

    console.log(circle.logInfo(circle.getArea(3)));
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    var radius = 5;


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
