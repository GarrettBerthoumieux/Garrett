function setup(){
createCanvas(windowHeight,windowWidth)

}
var x = 0;
function draaw(){
background("White");;



}
var x = 200;
var y = 200;
var xspeed = 4;
var yspeed = 5;





function setup() {
  createCanvas(windowWidth, windowHeight);
  background (20);
}

function(){

	
}




function draw() {

  
    var d = dist(windowWidth/12, windowHeight/12, 1, 1);
    background(225);
      fill ("white");
      ellipse (x, y, d, d);
    
 
      x = x + xspeed;
      
     if (x > windowWidth || x < 0)  {
         xspeed = -xspeed;
      }

   
      y = y + yspeed;

    if (y > windowHeight || y < 0) {
           yspeed = -yspeed;
      }

}