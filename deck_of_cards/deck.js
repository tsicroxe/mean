function deckConstructor(){
  if (!(this instanceof deckConstructor)){
    return new deckConstructor();
  }

  var deck = [];

  function buildDeck(){
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
    return deck;
    }

  this.deck = buildDeck();

  deckConstructor.prototype.shuffle = function(){
    var shuffled_deck = [];
    var idx;
    for (var i = deck.length; i > 0; i--){
      // console.log(deck.length);
      idx = Math.floor((Math.random())* deck.length)
      shuffled_card = deck[idx];
      shuffled_deck.push(shuffled_card);
      deck.splice(idx, 1)
      // console.log(idx);
    }
    // console.log(shuffled_deck);
    this.deck = shuffled_deck;
    this.discard_pile = [];
    return this;
  }

  deckConstructor.prototype.reset = function(){
    this.deck = buildDeck();
  }

  deckConstructor.prototype.deal = function(player){
    top_card = this.deck[0];
    console.log("Dealing Top card..");
    this.deck.splice(0, 1);
    return top_card;
  }
  console.log(this);
  return this;
  }

function playerConstructor(name){
  if (!(this instanceof playerConstructor)){
    return new playerConstructor(name);
    }

  this.name = name;
  this.hand = [];

  playerConstructor.prototype.takeCard = function(){
    this.hand.push(deck.deal());
    return this;
  }
  playerConstructor.prototype.discard = function(card_index){
    if (this.hand.length > card_index){
      discard_card = this.hand[card_index];
      deck.discard_pile.push(discard_card);
      this.hand.splice(card_index, 1);
      console.log()
    }
    return this;
  }

  console.log(this);
  return this;
}



deck = deckConstructor();

deck.shuffle();


player1 = playerConstructor("Bob");
console.log(player1.name);


player1.hand.push(deck.deal())
player1.hand.push(deck.deal())
player1.takeCard();

console.log('Bobs Hand')
console.log(player1.hand);
player1.discard(0);
console.log(player1.hand);
console.log(deck.discard_pile);
player1.takeCard();
console.log(player1.hand);
console.log(deck);
