// function Circle(radius) {
//
//     this.radius = radius;
//     // same as private key word in java
//     let defaultLocation = { x: 0, y: 0 };
//
//     this.getDefaultLocation = function () {
//       return defaultLocation;
//     }
//
//     this.draw = function() {
//         console.log('draw');
//     }
//
//     // getter and setter
//     Object.defineProperty(this, 'defaultLocation', {
//         get: function() {
//            return defaultLocation;
//         },
//         set: function(val) {
//             if (!val.x || !val.y) {
//                 throw new Error('Invalid Location!');
//             }
//                defaultLocation = val;
//         }
//     });
// }
//
// const circle = new Circle(10);
// circle.draw();

let twoSum = function (nums, target) {
    const map = {};
    const leng = nums.length;

    for (let i = 0; i < leng; i++) {
        const comp = target - nums[i];
        if (comp in map) {
            return [map[comp], i];
        }
        map[nums[i]] = i;
    }
};
