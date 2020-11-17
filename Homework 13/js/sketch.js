// x and y for my character
var characterX = 100;
var characterY = 100;
// define the key codes for each letter
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// x and y for a my
var myX = 30;
var myY = 50;

var myXs = [];
var myYs = [];
var diameters = [];

var myXSpeeds = [];
var myYSpeeds = [];

// create a my when the mouse is clicked
var mousemyX;
var mousemyY;

function setup() {
    createCanvas(500, 600);
    // get a random speed when the it first starts
    for (var i = 0; i < 10; i++) {
        myXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        myYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        myXs[i] = getRandomNumber(500);
        myYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    }

    createCharacter(200, 350);
}

function draw() {
    background(120, 45, 78);
    stroke(0);
    fill(0);

    // call createBorders function
    createBorders(10);

    // exit message
    textSize(16);
    text("EXIT", width - 50, height - 50)

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();


    // potential enemy
    fill(13, 145, 14);
    // draw the my
    for (var i = 0; i < myXs.length; i++) {
        circle(myXs[i], myYs[i], diameters[i]);
        myXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        myYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        // move the my
        myXs[i] += myXSpeeds[i];
        myYs[i] += myYSpeeds[i];
        // check to see if the my has gone out of bounds
        if (myXs[i] > width) {
            myXs[i] = 0;
        }
        if (myXs[i] < 0) {
            myXs[i] = width;
        }
        if (myYs[i] > height) {
            myYs[i] = 0;
        }
        if (myYs[i] < 0) {
            myYs[i] = height;
        }
    }
    // check to see if the character has left the exit
    if (characterX > width && characterY > width - 50) {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Win!", width / 2 - 50, height / 2 - 50);
    }

    // create the my based on the mouse click
    fill(120, 130, 140);
    circle(mousemyX, mousemyY, 25);
}

function characterMovement() {
    // handle the keys
    if (keyIsDown(w)) {
        characterY -= 10;
    }
    if (keyIsDown(s)) {
        characterY += 10;
    }
    if (keyIsDown(a)) {
        characterX -= 10;
        console.log("movement: " + characterX);
    }
    if (keyIsDown(d)) {
        characterX += 10;
    }
}

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}

function drawCharacter() {
    fill(23, 40, 123);
    circle(characterX, characterY, 25);
}

function createBorders(thickness) {
    // top border
    rect(0, 0, width, thickness);
    // left border
    rect(0, 0, thickness, height);
    // bottom border
    rect(0, height - thickness, width, thickness);
    // right upper border
    rect(width - thickness, 0, thickness, height - 50);
}

function mouseClicked() {
    mousemyX = mouseX;
    mousemyY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}