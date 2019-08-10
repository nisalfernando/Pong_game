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

    // getters
    get left() {
        return this.pos.x - this.size.x / 2;
    }

    get right() {
        return this.pos.x + this.size.x / 2;
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

// Create the ball
const ball = new Ball();
ball.pos.x = 100;
ball.pos.y = 50;

ball.vel.x = 100;
ball.vel.y = 100;

let lastTime;
function callback(millis) {
    if (lastTime) {
        update((millis - lastTime) / 1000);
    }
    lastTime = millis;
    requestAnimationFrame(callback);
}

// Animate the ball
function update(dt) {
    ball.pos.x += ball.vel.x * dt;
    ball.pos.y += ball.vel.y * dt;

    // Bouncing the ball(x position)
    if (ball.pos.x < 0 || ball.pos.x > canvas.width) {
        ball.vel.x = -ball.vel.x;
    }

    // Bouncing the ball(y position)
    if (ball.pos.y < 0 || ball.pos.y > canvas.height) {
        ball.vel.y = -ball.vel.y;
    }

    // Background color
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.clientWidth, canvas.height);

    // Ball's color
    context.fillStyle = "#fff";
    context.fillRect(ball.pos.x, ball.pos.y, ball.size.x, ball.size.y);
}

callback();
