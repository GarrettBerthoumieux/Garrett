function Superhero(realName, ability, gender, archEnemy, age, weakness){
this.realName = realName;
this.ability = ability;
this.gender = gender;
this.archEnemy = archEnemy;

this.talk = function(){
    console.log("Yo! They call me" + realName);
}


}

    var superMan = new Superhero("Clark Kent", "Dat Money", "Male", "Lex Luger", 30, "Cryptonite")
    var wonderWoman = new Superhero ("Dianna Prince", "Super Strength", "Female", "Donald Trump",20,"Guns");



    superMan.ability = "lazer vision"
    console.log(superMan);
     consoloe.log(wonderWoman);
     wonderWoman.archEnemy = superMan.realName ;
     
     console.log(wonderWoman);



