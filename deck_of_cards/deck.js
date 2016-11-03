function deckConstructor(){
  if (!(this instanceof deckConstructor)){
    return new deckConstructor();
  }

  var deck = [];
  var cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  for (var i = 0; i < 4; i++){
    for (var idx = 0; idx < 13; idx++){
      if(i === 0){
        var card = cards[idx] + ' of hearts';
        deck.push(card);
        // console.log(deck);
      }
      if(i === 1){
        var card = cards[idx] + ' of spades';
        deck.push(card);
        // console.log(deck);
      }
      if(i === 2){
        var card = cards[idx] + ' of diamonds';
        deck.push(card);
        // console.log(deck);
      }
      if(i === 3){
        var card = cards[idx] + ' of clubs';
        deck.push(card);
        // console.log(deck);
      }
    }
  }

  this.deck = deck;



  deckConstructor.prototype.shuffle = function(){
    var shuffled_deck = [];
    var count = 51;
    var idx;
    for (var i = deck.length; i > 00; i--){
      idx = deck[Math.floor((Math.random()+1) * count)]
      shuffled_deck.push(idx)
      // console.log(idx);
      count -= 1;

    }
    console.log(shuffled_deck);
    return this;
  }
  // console.log(this);
  return this;
}

deck1 = deckConstructor();
deck1.shuffle();
// console.log(deck1.deck);
