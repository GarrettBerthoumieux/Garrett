var mypokemonlineup = ["Charizard", "Blastoise","Venasaur","Mew", "Reshiram","Castform"]
var firstoFight = mypokemonlineup[1];
var secondtoFight = mypokemonlineup[3];
mypokemonlineup.pop();
mypokemonlineup.push("Kyerum");
mypokemonlineup.push("Golurk");
var rostersize = mypokemonlineup.length();
var performance = PerformanceMark

var mypokemonlineup = ["Charizard", "Blastoise","Venasaur","Mew", "Reshiram","Castform", "Mewtwo"]

for (var i = 0; i < 5 ; i++) {
    console.log(mypokemonlineup[i]);
}

function pokemon(name, hp, critical_attack, lowest_attack, highest_attack) {
    this.name = name;
    this.hp = hp;
    this.critical_attack = critical_attack;
    this.lowest_attack = lowest_attack;
    this.highest_attack = highest_attack;
      
}

var Charizard = new pokemon("Charizard", 90, 30, 1, 15);

var Mewtwo = new pokemon("Mewtwo", 106,110,90, 154);

var Blastoise = new pokemon("Blastoise", 95, 28, 1, 14);

var Venasaur = new pokemon("Venasaur", 100, 26, 1, 13);

var Mew = new pokemon ("Mew", 200, 150, 30, 40);

var Reshiram = new pokemon ("Reshiram", 130, 50, 70, 90)

var Castform = new pokemon ("Castform", 20, 15, 40, 90);

var poke_choice = new Array ("Charizard", "Blastoise", "Venasaur", "Mew", "Reshiram", "Castform");

function player(type, name, pokemon) {
    this.type = type;
    this.PerformanceMark = PerformanceMark;
    this.name = name;
    this.pokemon = pokemon;
    this.
}
var user = new player("User", "Blastoe", "Charizard");
console.log(window[user.pokemon].hp)

function setup() {
    createCanvas(600, 450);
    rectMode(CORNERS);

}

function pokemonObject(name, health, attack, defense, type, theme) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.type = type;
    this.theme = theme;

   //this.hit() = function(other) {
        //other.health -= (this.attack * (100 - other.defense)/100);
    //}    
}

var charmander = pokemonObject("Charmander", 200, 30, 30, "Fire", "orange");
var squirtle = pokemonObject("Squirtle", 250, 25, 40, "Water", "blue");
var pikachu = pokemonObject("Pikachu", 170, 50, 20, "Electric", "yellow");
var diglett = pokemonObject("Diglett", 300, 20, 40, "Ground", "brown");
var clefairy = pokemonObject("Clefairy", 200, 35, 20, "Fairy", "pink");
var hitmonlee = pokemonObject("Hitmonlee", 150, 70, 20, "Fighting", "red");

var xCoord = 30;
var yCoord = 90;

function draw() {

   noStroke();
    background(0);
    fill("white");
    rect(30, 30, 250, 60);
    textSize(20);
    fill("black");
    text("Choose your Pokemon!", 35, 35, 250, 60);

   fill("white");
    rect(30, 90, 250, height - 30);

   fill("white");
    rect(280, 30, width - 30, height - 30);

   for (var i = 145; i < height - 30; i += 55) {
        strokeWeight(1);
        stroke("black");
        line(30, i, 250, i);
    }
    fill("black");
    text("Charmander", 40, 123);
    text("Squirtle", 40, 180);
    text("Pikachu", 40, 236);
    text("Diglett", 40, 292);
    text("Clefairy", 40, 345);
    text("Hitmonlee", 40, 398);

   strokeWeight(5);
    stroke("gray");
    noFill();
    rect(xCoord, yCoord, xCoord + 220, yCoord + 55);

   if (choose) {
        noStroke();
        fill("green");
        rect(xCoord, yCoord, xCoord + 220, yCoord + 55);
    }    


}  

var choose;

function keyPressed() {
    choose = false;

   if (keyCode == UP_ARROW) {
        if (yCoord >= 145) {
            yCoord -= 55;
        }

   }
    else if (keyCode == DOWN_ARROW){
        if (yCoord <= height - 140) {
            yCoord += 55;
        }
    }
    else if (keyCode == ENTER) {
        choose = true;
    }
}



















for(i = 0; i<= 2; i++) {
  if (poke_choice[i] === user.pokemon) {
    poke_choice.splice(i,1);
  }
}  

var comp_choice = function() {
  return poke_choice[(pokemon.random())]
}

var comp = new player("Computer","Red", comp_choice());

var user_attack = function() {
  var uhigh = window[user.pokemon].highest_attack
  var ulow = window[user.pokemon].lowest_attack
  return Math.round(Math.random().toFixed(1)*uhigh)
}        

var comp_attack = function() {
  var chigh = window[comp.pokemon].highest_attack
  var clow = window[comp.pokemon].lowest_attack
  return Math.round(Math.random().toFixed(1)*chigh)
}     

console.log(window[comp.pokemon].name)
console.log(window[user.pokemon].name)
console.log(user_attack())
console.log(comp_attack())
