
var cards = ["queen", "queen", "king", "king"];
var cardsInplay = ["queen", "king"];
var cardOne = cards[0];
var cardTwo = cards[2];
cards.push('cardOne'); 
cards.push('cardTwo');
console.log("User flipped queen");
console.log("User flipped king");
 
if(cardsInplay.length === 2){console.log("two cards lol");}
if(cardsInplay [0] === cardsInplay[1]){alert("You found a match");}
else {alert("Sorry, try again.")}