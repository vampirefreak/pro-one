// Katrina Kristiansen
// SDI 1 1210
// Assignment 1

// my variables

var vampireGirl = "Kitty";
var hasHumanity   =  false;
var hasPotionStrength =   45;
var potionName=   "\"Elixer of life\" Potion" ;

console.log("This story is about " + vampireGirl);
console.log(" Her name is " + vampireGirl + " she is a vampire seeking humanity, mortality. ");
console.log(" Jayson's potion strength is " + hasPotionStrength + " to try out for the anti-immortality elixer");
console.log(" The potion is called " + potionName + " She drinks it in hopes of becomming human once again!");

   if (hasPotionStrength === true){
      hasPotionStrength = hasPotionStrength + "Vampire is mortal again..";
      console.log(" She gets her wishes.");
      if(hasPotionStrength >100){
         hasPotionStrength = hasPotionStrength + 200
         console.log ("She dies of too strong" + hasPotionStrength + "potion!");
      } else {
         console.log (" She gets her wish.");
         console.log ("She becomes mortal and dies.");
      };
   } else {
      if (vampireGirl === "Kitty"){
         console.log(vampireGirl + " The right vampire.")
      } else {
         vampireGirl = vampireGirl + " She needs to rethink things through."
         console.log(vampireGirl + "She needs to just fall in love and live the life she was given.")
      };
   };

