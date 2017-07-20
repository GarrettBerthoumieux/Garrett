var artists = ["Tupac", "Future", "PnB Rock", "Rihanna", "Drake", 
"Migos", "Travis Scott", "Big Sean", " Lil Uzi Vert", "Kendrick", 
"PlayBoi Carti", "New Edition", "Chance", "21 Savage",
 "Gucci Mane", "Lil Yachty", "J.Cole", "Young Dolph", "Young Thug", 'Tee Grizzley', "Famous Dex",
 "Lil Bibby", "G Herbo", "Dave East", "Rich Tha Kidd", "A Boogie Wit Da Hoodie", "Jayden Smith", 
"Quavo", "Offset", "DJ Khaled", "Fabolous", "Jeremih", "Wale", "Logic", "Joey Badass", "Meek Mill", "Tory Lanez", "Jay Critch",
"Lil Bow Wow", "Kanye West", "Neural Milk Hotel", "Radiohead", "Gorillaz", "Nirvana"];
function randArtist(){
    console.log(artists[Math.round(Math.random() * artists.length - 1 )])
}
// GAME RULES: THE LAST ARTIST IS THE ARTIST WE CHOOSE
// IF THE FIRST FOUR RESULTS DON'T HAVE ANY REPEATS 
for(var i=0; i<artists.length + 1; i++){
    randArtist();
}