function setup(){
    createCanvas(600, 450);
    rectMode(CORNERS);
}


//break it
var start = false;
var shoot = false;

var xCoord = 300 - 25;

function draw() {

    if (!start) {
        background("black");
        textAlign(CENTER);
        textSize(30);
        stroke("white");
        textStyle(NORMAL);
        noFill();
        text("SPACE INVADER", width/2, height/2 - 30);
        textStyle(ITALIC);
        strokeWeight(0.3);
        textSize(10);
        text("PRESS ENTER TO START", width/2, height/2 - 10);
    }
    else if (start) {
        background("black");
        noStroke();
        fill("green");
        rectMode(CORNERS);
        rect(xCoord, 415, xCoord + 50, 430);

        fill("white");
        rectMode(CORNER);
        rect(25,375.5,75,20);
        rect(175,375.5,75,20);
        rect(325,375.5,75,20);
        rect(475,375.5,75,20);

       if (keyIsDown(LEFT_ARROW)) {
            if (xCoord > 0) {
                xCoord -= 5;
            }
        }

       if (keyIsDown(RIGHT_ARROW)) {
            if (xCoord + 50 < width) {
                xCoord += 5;
            }
        }
    }

   if (shoot) {
        strokeWeight(10);
        stroke("white");
        line(30, 30, 80, 80);  // TEST FOR SHOOTING
    }


}

function keyPressed() {
    if (keyCode == ENTER) {
        start = true;
    }
    else if (keyCode == " ") {
        shipObj.shoot();
    }
}
//end of codevar rect1 = {x: 5, y: 5, width: 50, height: 50}
var rect2 = {x: 20, y: 10, width: 10, height: 10}

if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.height + rect1.y > rect2.y) {
    // collision detected!
}

// filling in the values =>

if (5 < 30 &&
    55 > 20 &&
    5 < 20 &&
    55 > 10) {
    // collision detected!
}


