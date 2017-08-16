var input, button, greeting;

function setup() {
  
createCanvas(windowWidth, WIndowHeight);
  background(200, 200, 200)
  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'what is your name?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  var name = input.value();
  greeting.html('hello '+name+'!');
  input.value('');

  for (var i=0; i<200; i++) {
    push();
    fill(windowHeight, windowWidth);
    translate(random(width), random(height));
    rotate(random(2*PI));
    text(name, 0, 0);
    pop();
  }
}

function draw(){
    rect(620, 100, 160, 160, 20);
    rect(450, 500, 160, 160, 20);
    textSize(28);
    text(" ROCK", 480, 600)
    rect(620, 500, 160, 160, 20);
    textSize(28);
    text(" PAPER", 645, 600)
    rect(790, 500, 160, 160, 20);
    textSize(28);
    text("SCISSORS", 800, 600)
}

$(document).ready(function(){
   var guess;
   $('#submit').on("click", function() {
       guess = $('#guess-value').val();
       $("#value").text(guess);
       alert(guess);
   });
   alert(guess);
});