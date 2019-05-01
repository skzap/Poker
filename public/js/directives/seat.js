/**
 * The seat directive. It requires two attributes.
 * seatIndex: The index of the player in the "seats" array
 * cellNumber: The number of the cell in the grid (used for styles)
 */
app.directive( 'seat', [function() {
	return {
		restrict: 'E',
		templateUrl: '/partials/seat.html',
		replace: true,
		scope: {
			player: '=',
			mySeat: '=',
			myCards: '=',
			activeSeat: '=',
			selectedSeat: '=',
			sittingOnTable: '=',
			dealerSeat: '=',
			notifications: '=',
			showBuyInModal: '&'
		},
		link: function(scope, element, attributes) {
			scope.seatIndex = parseInt(attributes.seatIndex);
			scope.cellNumber = parseInt(attributes.cellNumber);

			scope.getCardClass = function( seat, card ) {
				if( scope.mySeat === seat ) {
					return scope.myCards[card];
				}
				else if ( typeof scope.player !== 'undefined' && scope.player && scope.player.cards && scope.player.cards[card] ) {
					return 'card-face-' + scope.player.cards[card];
				}
				else {
					return 'card-back';
				}
			}

			scope.getCardDescription = function( seat, card ) {
				if( scope.mySeat === seat ) {
					return (scope.myCards[card] || '').toUpperCase().replace('CARD-', '').replace('T', '10').replace('C', '♣').replace('H', '♥').replace('S', '♠').replace('D', '♦');
				}
				else if ( typeof scope.player !== 'undefined' && scope.player && scope.player.cards && scope.player.cards[card] ) {
					return (scope.player.cards[card] || '').toUpperCase().replace('CARD-', '').replace('T', '10').replace('C', '♣').replace('H', '♥').replace('S', '♠').replace('D', '♦');
				}
				else {
					return '';
				}
			}

			scope.seatOccupied = function( seat ) {
				return !scope.sittingOnTable || ( typeof scope.player !== 'undefinde' && scope.player && scope.player.name );
			}
		}
	};
}]);