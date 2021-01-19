// let baseSalary = 50000;
// let overTime = 10;
// let rate = 20;
//
// function getWage(baseSalary, overTime, rate) {
//     return baseSalary + (overTime * rate);
// }
//
// let employee = {
//     baseSalary: 30000,
//     overTime: 10,
//     rate: 20,
//     getWage: function () {
//         return this.baseSalary + (this.overTime * this.rate);
//     }
// }
//
// employee.getWage();


// Before OOP

// console.log('hello world from JS practice 1');
//
//
// // Factory Function
// function createCircle(radius) {
//    return {
//         radius: radius,
//         draw: function() {
//             console.log('draw from factory func');
//         }
//     };
// }
//
// const circle1 = createCircle(1);
// circle1.draw();
//
// // Constructor Function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw from constructor func');
//     }
// }
// const another = new Circle(1);
// another.draw();

function Circle(radius) {

    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    let computeOptimumLocation = function(factor) {

    }

    this.draw = function() {
        computeOptimumLocation(0.1);

        console.log('draw');
    }
}

const circle = new Circle(10);
circle.draw();

