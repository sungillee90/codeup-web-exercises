
function Stopwatch() {
    // initialize (private variables)
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if (running) {
            throw new Error("Stopwatch has already started.");
        }
        running = true;

        startTime = new Date();
    }
    this.stop = function() {
        if (!running) {
            throw new Error("Stopwatch has not started.");
        }
        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    }
    this.reset = function() {
        startTime = null;
        endTime = null;
        running = null;
        duration = 0;
    }

    // Read only property
    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    });

}

const sw = new Stopwatch();