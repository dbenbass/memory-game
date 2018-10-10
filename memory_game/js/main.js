
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];


var checkForMatch = function(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
  }
var flipCard = function(cardId)
	{ 
		cardsInPlay.push(cards[cardId]);
		if (cardsInPlay.length === 2) {
		checkForMatch();
	 }
		console.log("User flipped " + cards[cardId]);
 
}
flipCard(0);
flipCard(1);



//flipCard(2);
//var cardOne = cards[0];
//var cardTwo = cards[2];
//cardsInplay.push('cardOne'); 
//cardsInplay.push('cardTwo');
//console.log("User flipped" + cardOne);
//console.log("User flipped" + cardTwo");
