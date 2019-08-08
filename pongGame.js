class Vec {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

class Rect {
    constructor(w, h) {
        this.pos = new Vec();
        this.size = new Vec(w, h);
    }
}

class Ball extends Rect {
    constructor() {
        super(10, 10);
        this.vel = new Vec();
    }
}

const canvas = document.querySelector("#pong");
const context = canvas.getContext("2d");

// Background color
context.fillStyle = "#000";
context.fillRect(0, 0, canvas.clientWidth, canvas.height);

// Ball's color
context.fillStyle = "#fff";
context.fillRect(0, 0, 10, 10);
