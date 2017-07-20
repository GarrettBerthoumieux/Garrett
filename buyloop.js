var prompt = require('prompt-sync')();

var n = prompt("How many more times?");

var money = 1000;

var louisVuittonDuffleBag = [];

while(money > 100){

console.log("You can buy yeezy's for 400, gucci flip flops for 200, or ray bans for 100");    

if(answer== "Yeezys "){
    money = money - 400;
   
    louisVuittonDuffleBag.push("Yeezys");
    console.log("You have successfully bought these pair of yeezys");
    }
    else if(answer == "Gucci Flip Flops"){
    money = money - 200;
    louisVuittonDuffleBag.push("Gucci Flip Flops");
    console.log("You have successfully bought this pair of Gucci Flip Flops");
    }
    else if (answer === "Ray Bans"){
    money = money - 100;
    louisVuittonDuffleBag.push("Ray Bans")
    console.log("You have successfully bought this pair of Ray Bans");



    }
    else {
        console.log("We do not have that item in stock");
    


}
    else {
        console.log("Leave, you're deadass broke B");


    }
        




}










