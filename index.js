
let suits = ['Heart', 'Spade', 'Diamond', 'Clubs'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];


function createDeck() {
    let deck = [];

    for (let suitsIdx = 0; suitsIdx < suits.length; suitsIdx++ ) {
        for(let valuesIdx = 0; valuesIdx < values.length; valuesIdx++) {

            let cards = {
                suit: suits[suitsIdx],
                value: values[valuesIdx]
            };
            deck.push( cards );
        }
    }
    return deck;
}
function getNextCard () {
    return deck.shift();
}

let TextArea = document.getElementById('text-area');
TextArea.innerText = "The blackjack Game";

let Hit = document.getElementById("hit-button");
Hit.style.display = "none";
let Stay = document.getElementById("stay-button");
Stay.style.display = "none";
let NewGame = document.getElementById("new-game");
NewGame.addEventListener('click', function() {
    TextArea.innerText = "Game started....!!";
    NewGame.style.display = "none";
    Hit.style.display = "inline";
    Stay.style.display = "inline";
});

let deck = createDeck();

function getCardsString( cards ) {
    return cards.value + " of " + cards.suit;
}


let playerCards = [
    getNextCard(), getNextCard()
];


console.log("Welcome to BlakJack");

console.log("Your details are:");
console.log("  " + getCardsString( playerCards[0]) );
console.log("  " + getCardsString( playerCards[1]) );
