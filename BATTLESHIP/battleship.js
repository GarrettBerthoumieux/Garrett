function setup(){
    createCanvas(300,300);
    background(20);
}
var grid = [(0,0,1,(1,1,0),(1,1,0)]

function clickableGrid( rows, cols, callback ){
  var i=0;
  var grid = document.createElement('table');
  grid.className = 'grid';
  for (var r=0;r<rows;++r){
    var tr = grid.appendChild(document.createElement('tr'));
    for (var c=0;c<cols;++c){
      var cell = tr.appendChild(document.createElement('td'));
      cell.innerHTML = ++i;
      cell.addEventListener('click',(function(el,r,c,i){
        return function(){ callback(el,r,c,i); }
       })(cell,r,c,i),false);
    }
  }
  return grid;
}

clickableGrid();

ellipse(20,30,60,60)
var x = 0;
var y = 0;

function keyPressed(){}
if keyPressed==true{
x++
y++
}
if mouseX


