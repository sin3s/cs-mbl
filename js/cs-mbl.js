$(document).ready(function() {
    var cards = $('#card1, #card2, #card3'); // Select all cards by ID
    var randomCards = _.sample(cards, 2); // Use lodash's sample function to pick 2 random cards

    cards.hide(); // Hide all cards
    $(randomCards).show(); // Show the 2 randomly picked cards
});
