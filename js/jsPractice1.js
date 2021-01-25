function Circle(radius) {

    this.radius = radius;
    // same as private key word in java
    let defaultLocation = { x: 0, y: 0 };

    this.getDefaultLocation = function () {
      return defaultLocation;
    }

    this.draw = function() {
        console.log('draw');
    }

    // getter and setter
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
           return defaultLocation;
        },
        set: function(val) {
            if (!val.x || !val.y) {
                throw new Error('Invalid Location!');
            }
               defaultLocation = val;
        }
    });
}

const circle = new Circle(10);
circle.draw();


