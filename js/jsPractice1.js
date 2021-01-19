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

console.log('hello world from JS practice 1');


// Factory Function
function createCircle(radius) {
   return {
        radius: radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
const circle2 = createCircle(6);

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
const another = new Circle(1);
another.draw();
