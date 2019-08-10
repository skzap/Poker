/**
 * The board directive. It requires one attribute
 * cards: The array of common cards
 */
app.directive( 'board', [function() {
	return {
		restrict: 'E',
		templateUrl: '/partials/board.html',
		replace: true,
		scope: {
			cards: '=',
		}
	};
}]);
